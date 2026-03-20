"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SubscriberInfo {
  email: string;
  plan: string;
  createdAt: string;
  loginCount: number;
  lastLogin?: string;
}

export default function SubscriberDashboardPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [plan, setPlan] = useState("setup-hosting");
  const [subscriber, setSubscriber] = useState<SubscriberInfo | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail =
      typeof window !== "undefined"
        ? window.localStorage.getItem("olmemSubscriberEmail")
        : null;
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const login = async () => {
    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/subscribers/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Login failed.");
        return;
      }

      setSubscriber(data.subscriber);
      setPlan(data.subscriber.plan || "setup-hosting");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("olmemSubscriberEmail", email);
      }
      setMessage("Logged in successfully.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    if (!subscriber) return;
    if (!password) {
      setMessage("Enter your current password to save changes.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/subscribers/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: subscriber.email,
          password,
          plan,
          newPassword: newPassword || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Update failed.");
        return;
      }

      setSubscriber(data.subscriber);
      setMessage("Profile updated.");
      setPassword("");
      setNewPassword("");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setSubscriber(null);
    setPassword("");
    setNewPassword("");
    setMessage(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("olmemSubscriberEmail");
    }
  };

  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <Image
            src="/olmem-tech-logo.png"
            alt="Olmem Tech"
            width={44}
            height={44}
            priority
            className="rounded-xl"
          />
          <div>
            <div className="text-sm text-gray-500">Olmem Tech</div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Subscriber Dashboard
            </h1>
          </div>
        </div>

        <p className="mt-4 text-gray-600">
          Log in to view your plan details, track logins, and update your subscription settings.
        </p>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          {subscriber ? (
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">Email</div>
                <div className="text-lg font-semibold text-gray-900">{subscriber.email}</div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Current plan</label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="setup-hosting">Setup + Hosting ($999 one-time + $35/mo)</option>
                    <option value="setup-hosting-maintenance">Setup + Hosting + Maintenance ($999 one-time + $35/mo + $100/mo)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Logins</label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900">
                    {subscriber.loginCount} login{subscriber.loginCount === 1 ? "" : "s"}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last login</label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900">
                    {subscriber.lastLogin ? new Date(subscriber.lastLogin).toLocaleString() : "—"}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">New password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Leave blank to keep current"
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Current password (required)</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Current password"
                  className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={updateProfile}
                  disabled={loading}
                  className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save changes"}
                </button>
                <button
                  onClick={logout}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={login}
                  disabled={loading}
                  className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
                <Link
                  href="/subscription"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 text-center"
                >
                  Subscribe
                </Link>
              </div>

              <p className="text-sm text-gray-500">
                If you signed up but didn't set a password, use the one you chose during subscription.
              </p>
            </div>
          )}

          {message && (
            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
              {message}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}