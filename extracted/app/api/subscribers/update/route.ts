import { NextResponse } from "next/server";
import { authenticateSubscriber, updateSubscriber } from "@/lib/subscribers";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password, plan, newPassword } = data;
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const authenticated = await authenticateSubscriber(email, password);
    if (!authenticated) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const updates: { plan?: string; password?: string } = {};
    if (plan) updates.plan = plan;
    if (newPassword) updates.password = newPassword;

    const updated = await updateSubscriber(email, updates);
    if (!updated) {
      return NextResponse.json({ error: "Subscriber not found" }, { status: 404 });
    }

    const safeSubscriber = {
      email: updated.email,
      plan: updated.plan,
      createdAt: updated.createdAt,
      loginCount: updated.loginCount,
      lastLogin: updated.lastLogin,
    };

    return NextResponse.json({ success: true, subscriber: safeSubscriber });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
