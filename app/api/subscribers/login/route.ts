import { NextResponse } from "next/server";
import { authenticateSubscriber, incrementLogin } from "@/lib/subscribers";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const updated = password
      ? await authenticateSubscriber(email, password)
      : await incrementLogin(email);

    if (!updated) {
      return NextResponse.json({ error: "Subscriber not found or invalid password" }, { status: 404 });
    }

    return NextResponse.json({ success: true, subscriber: updated });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
