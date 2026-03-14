import { NextResponse } from "next/server";
import { authenticateSubscriber } from "@/lib/subscribers";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`auth:${ip}`, 10, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const data = await request.json();
    const { email, password } = data;
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const subscriber = await authenticateSubscriber(email, password);
    if (!subscriber) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const safeSubscriber = {
      email: subscriber.email,
      plan: subscriber.plan,
      createdAt: subscriber.createdAt,
      loginCount: subscriber.loginCount,
      lastLogin: subscriber.lastLogin,
    };

    return NextResponse.json({ success: true, subscriber: safeSubscriber });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
