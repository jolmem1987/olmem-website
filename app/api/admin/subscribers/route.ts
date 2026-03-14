import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { readSubscribers } from "@/lib/subscribers";

function unauthorized() {
  return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
}

function getBasicAuthCredentials(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return null;
  const creds = Buffer.from(auth.replace(/^Basic\s+/i, ""), "base64").toString("utf-8");
  const colonIndex = creds.indexOf(":");
  if (colonIndex === -1) return null;
  const user = creds.slice(0, colonIndex);
  const pass = creds.slice(colonIndex + 1);
  return { user, pass };
}

function validateAdminCredentials(user?: string, pass?: string) {
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  if (!adminUser || !adminPass || !user || !pass) return false;
  try {
    const userMatch = timingSafeEqual(Buffer.from(user), Buffer.from(adminUser));
    const passMatch = timingSafeEqual(Buffer.from(pass), Buffer.from(adminPass));
    return userMatch && passMatch;
  } catch {
    // timingSafeEqual throws if buffers have different lengths; treat as mismatch
    return false;
  }
}

export async function GET(request: Request) {
  const creds = getBasicAuthCredentials(request);
  if (!creds || !validateAdminCredentials(creds.user, creds.pass)) {
    return unauthorized();
  }

  const subscribers = await readSubscribers();
  const safeList = subscribers.map((subscriber) => ({
    email: subscriber.email,
    plan: subscriber.plan,
    createdAt: subscriber.createdAt,
    loginCount: subscriber.loginCount,
    lastLogin: subscriber.lastLogin,
    businessName: subscriber.businessName,
    contactName: subscriber.contactName,
    phone: subscriber.phone,
    website: subscriber.website,
    businessDetails: subscriber.businessDetails,
    logoName: subscriber.logoName,
  }));
  return NextResponse.json({ subscribers: safeList });
}
