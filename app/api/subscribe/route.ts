import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addSubscriber } from "@/lib/subscribers";

export async function POST(request: Request) {
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
  } catch (err: any) {
    console.error("Subscribe API error", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
