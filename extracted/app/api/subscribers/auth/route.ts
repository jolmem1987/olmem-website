import { NextResponse } from "next/server";
import { authenticateSubscriber } from "@/lib/subscribers";

export async function POST(request: Request) {
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
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
