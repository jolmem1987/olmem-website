import { randomBytes, createCipheriv, createDecipheriv, scryptSync } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export interface Subscriber {
  email: string;
  plan: string;
  createdAt: string; // ISO
  loginCount: number;
  lastLogin?: string; // ISO

  // Business intake details
  businessName?: string;
  contactName?: string;
  phone?: string;
  website?: string;
  businessDetails?: string;
  logoName?: string;
  logoBase64?: string;

  // Optional (hashed) password for login tracking / future login feature
  passwordHash?: string;
  passwordSalt?: string;
}

const STORE_FILENAME = "subscribers.enc";
const STORE_DIR = path.join(process.cwd(), "data");
const STORE_PATH = path.join(STORE_DIR, STORE_FILENAME);

function getEncryptionKey(): Buffer {
  const key = process.env.SUBSCRIBER_STORE_KEY;
  if (!key) {
    throw new Error(
      "Missing SUBSCRIBER_STORE_KEY environment variable. This key is required to encrypt subscriber data."
    );
  }

  const encoded = key.startsWith("base64:") ? key.replace(/^base64:\s*/i, "") : key;

  // Accept either raw 32-byte key or base64-encoded key.
  if (encoded.length === 32) {
    return Buffer.from(encoded, "utf-8");
  }

  return Buffer.from(encoded, "base64");
}

function encrypt(plaintext: string): string {
  const key = getEncryptionKey();
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  // store as base64(iv|tag|ciphertext)
  return Buffer.concat([iv, tag, encrypted]).toString("base64");
}

function decrypt(ciphertextBase64: string): string {
  const key = getEncryptionKey();
  const data = Buffer.from(ciphertextBase64, "base64");
  const iv = data.subarray(0, 16);
  const tag = data.subarray(16, 32);
  const ciphertext = data.subarray(32);
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return decrypted.toString("utf8");
}

async function ensureStoreDir() {
  await fs.mkdir(STORE_DIR, { recursive: true });
}

export async function readSubscribers(): Promise<Subscriber[]> {
  try {
    await ensureStoreDir();
    const contents = await fs.readFile(STORE_PATH, "utf8");
    if (!contents.trim()) return [];
    const json = decrypt(contents);
    const data = JSON.parse(json);
    if (!Array.isArray(data)) return [];
    return data;
  } catch (err: any) {
    if (err.code === "ENOENT") return [];
    // if the file is corrupted or key mismatch, throw so callers can handle
    throw err;
  }
}

export async function writeSubscribers(subscribers: Subscriber[]) {
  await ensureStoreDir();
  const json = JSON.stringify(subscribers, null, 2);
  const encrypted = encrypt(json);
  await fs.writeFile(STORE_PATH, encrypted, "utf8");
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = scryptSync(password, salt, 64);
  return { salt, hash: derivedKey.toString("hex") };
}

export function verifyPassword(password: string, salt: string, hash: string) {
  const derivedKey = scryptSync(password, salt, 64);
  return derivedKey.toString("hex") === hash;
}

export async function addSubscriber(input: {
  email: string;
  plan: string;
  password?: string;
  businessName?: string;
  contactName?: string;
  phone?: string;
  website?: string;
  businessDetails?: string;
  logoName?: string;
  logoBase64?: string;
}): Promise<Subscriber> {
  const subscribers = await readSubscribers();

  const existing = subscribers.find((s) => s.email.toLowerCase() === input.email.toLowerCase());
  if (existing) {
    // update plan if changed, but don't overwrite createdAt
    existing.plan = input.plan;
    existing.businessName = input.businessName ?? existing.businessName;
    existing.contactName = input.contactName ?? existing.contactName;
    existing.phone = input.phone ?? existing.phone;
    existing.website = input.website ?? existing.website;
    existing.businessDetails = input.businessDetails ?? existing.businessDetails;
    existing.logoName = input.logoName ?? existing.logoName;
    existing.logoBase64 = input.logoBase64 ?? existing.logoBase64;

    if (input.password) {
      const { salt, hash } = hashPassword(input.password);
      existing.passwordSalt = salt;
      existing.passwordHash = hash;
    }
    return existing;
  }

  const subscriber: Subscriber = {
    email: input.email,
    plan: input.plan,
    createdAt: new Date().toISOString(),
    loginCount: 0,
    businessName: input.businessName,
    contactName: input.contactName,
    phone: input.phone,
    website: input.website,
    businessDetails: input.businessDetails,
    logoName: input.logoName,
    logoBase64: input.logoBase64,
  };

  if (input.password) {
    const { salt, hash } = hashPassword(input.password);
    subscriber.passwordSalt = salt;
    subscriber.passwordHash = hash;
  }

  subscribers.push(subscriber);
  await writeSubscribers(subscribers);
  return subscriber;
}

export async function incrementLogin(email: string): Promise<Subscriber | null> {
  const subscribers = await readSubscribers();
  const subscriber = subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (!subscriber) return null;

  subscriber.loginCount = (subscriber.loginCount ?? 0) + 1;
  subscriber.lastLogin = new Date().toISOString();
  await writeSubscribers(subscribers);
  return subscriber;
}

export async function getSubscriberByEmail(email: string): Promise<Subscriber | null> {
  const subscribers = await readSubscribers();
  return subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase()) || null;
}

export async function authenticateSubscriber(email: string, password: string): Promise<Subscriber | null> {
  const subscriber = await getSubscriberByEmail(email);
  if (!subscriber || !subscriber.passwordHash || !subscriber.passwordSalt) return null;

  if (!verifyPassword(password, subscriber.passwordSalt, subscriber.passwordHash)) {
    return null;
  }

  return await incrementLogin(email);
}

export async function updateSubscriber(
  email: string,
  updates: {
    plan?: string;
    password?: string;
    businessName?: string;
    contactName?: string;
    phone?: string;
    website?: string;
    businessDetails?: string;
    logoName?: string;
    logoBase64?: string;
  }
): Promise<Subscriber | null> {
  const subscribers = await readSubscribers();
  const subscriber = subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (!subscriber) return null;

  if (updates.plan) {
    subscriber.plan = updates.plan;
  }

  subscriber.businessName = updates.businessName ?? subscriber.businessName;
  subscriber.contactName = updates.contactName ?? subscriber.contactName;
  subscriber.phone = updates.phone ?? subscriber.phone;
  subscriber.website = updates.website ?? subscriber.website;
  subscriber.businessDetails = updates.businessDetails ?? subscriber.businessDetails;
  subscriber.logoName = updates.logoName ?? subscriber.logoName;
  subscriber.logoBase64 = updates.logoBase64 ?? subscriber.logoBase64;

  if (updates.password) {
    const { salt, hash } = hashPassword(updates.password);
    subscriber.passwordSalt = salt;
    subscriber.passwordHash = hash;
  }

  await writeSubscribers(subscribers);
  return subscriber;
}
