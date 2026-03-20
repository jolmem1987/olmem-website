"use client";

import { useState } from "react";

interface Subscriber {
  email: string;
  plan: string;
  createdAt: string;
  loginCount: number;
  lastLogin?: string;
}

export default function AdminSubscribersPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSubscribers = async () => {
    setError(null);
    setLoading(true);
    setSubscribers(null);

    try {
      const token = btoa(`${user}:${pass}`);
      const res = await fetch("/api/admin/subscribers", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Unauthorized");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setSubscribers(data.subscribers);
    } catch (err) {
      setError("Unable to fetch subscribers. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Subscriber Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Enter the admin credentials (set via <code>ADMIN_USER</code> and <code>ADMIN_PASS</code> environment variables) to
          view encrypted subscriber data.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={fetchSubscribers}
                className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
              >
                {loading ? "Loading…" : "Load Subscribers"}
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}

          {subscribers && (
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 font-medium text-gray-700">Email</th>
                    <th className="px-4 py-3 font-medium text-gray-700">Plan</th>
                    <th className="px-4 py-3 font-medium text-gray-700">Created</th>
                    <th className="px-4 py-3 font-medium text-gray-700">Logins</th>
                    <th className="px-4 py-3 font-medium text-gray-700">Last Login</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {subscribers.map((sub) => (
                    <tr key={sub.email}>
                      <td className="px-4 py-3 text-gray-700">{sub.email}</td>
                      <td className="px-4 py-3 text-gray-700">{sub.plan}</td>
                      <td className="px-4 py-3 text-gray-700">{new Date(sub.createdAt).toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-700">{sub.loginCount}</td>
                      <td className="px-4 py-3 text-gray-700">{sub.lastLogin ? new Date(sub.lastLogin).toLocaleString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
