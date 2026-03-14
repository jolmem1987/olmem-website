"use client";

import { ReactNode } from "react";
import { getClientLoginUrl } from "@/config/client-sites";

export default function ClientLoginLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const email = typeof window !== "undefined" ? window.localStorage.getItem("olmemSubscriberEmail") : null;
    if (email) {
      try {
        await fetch("/api/subscribers/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        // ignore failures; this is just telemetry
      }
    }

    window.open(getClientLoginUrl(), "_blank");
  };

  return (
    <a
      href={getClientLoginUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
