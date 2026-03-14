import { NextResponse } from "next/server";
import { addSubscriber } from "@/lib/subscribers";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 5 MB expressed as a base64-encoded string length (base64 inflates by ~4/3)
const MAX_LOGO_BASE64_LENGTH = Math.ceil(5 * 1024 * 1024 * (4 / 3));
const ALLOWED_IMAGE_PREFIXES = [
  "data:image/png;base64,",
  "data:image/jpeg;base64,",
  "data:image/jpg;base64,",
  "data:image/gif;base64,",
  "data:image/webp;base64,",
  "data:image/svg+xml;base64,",
];

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`subscribe:${ip}`, 5, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const data = await request.json();
    const {
      email,
      plan,
      password,
      businessName,
      contactName,
      phone,
      website,
      businessDetails,
      logoName,
      logoBase64,
    } = data;

    if (!email || !plan) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (logoBase64) {
      const hasAllowedPrefix = ALLOWED_IMAGE_PREFIXES.some((prefix) =>
        (logoBase64 as string).startsWith(prefix)
      );
      if (!hasAllowedPrefix) {
        return NextResponse.json({ error: "Logo must be a valid image file (PNG, JPG, GIF, WebP, or SVG)" }, { status: 400 });
      }
      if ((logoBase64 as string).length > MAX_LOGO_BASE64_LENGTH) {
        return NextResponse.json({ error: "Logo file is too large. Maximum size is 5 MB." }, { status: 400 });
      }
    }

    await addSubscriber({
      email,
      plan,
      password,
      businessName,
      contactName,
      phone,
      website,
      businessDetails,
      logoName,
      logoBase64,
    });

    // send notification to jeff@olmemtech.com (adjust SMTP settings in env)
    try {
      // lazy require nodemailer to avoid bundling when not needed
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "localhost",
        port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 1025,
        secure: false,
      });

      const details = [
        `Email: ${email}`,
        `Plan: ${plan}`,
        businessName && `Business: ${businessName}`,
        contactName && `Contact: ${contactName}`,
        phone && `Phone: ${phone}`,
        website && `Website: ${website}`,
        businessDetails && `Notes: ${businessDetails}`,
        logoName && `Logo: ${logoName}`,
      ]
        .filter(Boolean)
        .join("\n");

      await transporter.sendMail({
        from: "no-reply@olmemtech.com",
        to: "jeff@olmemtech.com",
        subject: "New subscription request",
        text: details,
      });
    } catch (mailErr) {
      console.error("Failed to send notification email", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Subscribe API error", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
