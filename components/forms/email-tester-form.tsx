"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormStatus = "idle" | "loading" | "done" | "error";

interface EmailTesterFormProps {
  className?: string;
}

export function EmailTesterForm({ className }: EmailTesterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isValid = EMAIL_RE.test(email);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || status === "loading") return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/join-tester", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 429) {
        setErrorMsg("Too many requests. Please try again later.");
        setStatus("error");
        return;
      }

      if (res.ok) {
        setStatus("done");
        return;
      }

      const data = await res.json().catch(() => ({}));
      setErrorMsg((data as { error?: string }).error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Connection error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <a
        href="https://test.wikaph.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`tester-btn-emerge wika-active inline-flex items-center justify-center rounded-[12px] bg-primary px-[18px] py-[10px] shadow-[0px_4px_0px_#52366f] transition-[filter] hover:brightness-110 ${className ?? ""}`}
      >
        <span className="font-semibold text-[16px] uppercase tracking-[0.8px] text-white whitespace-nowrap">
          TRY THE EXCLUSIVE TEST OF WIKA!
        </span>
      </a>
    );
  }

  return (
    <div className={`w-full max-w-82.5 ${className ?? ""}`}>
      <form
        onSubmit={handleSubmit}
        className={`relative w-full transition-all duration-300 ${
          status === "loading" ? "opacity-60 scale-[0.98]" : "opacity-100 scale-100"
        }`}
        noValidate
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setErrorMsg(null);
            }
          }}
          placeholder="Enter your email to be a tester!"
          className="h-14 w-full rounded-full border-2 border-[#a5a5a5] bg-white pl-5 pr-14 text-[15px] font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-primary"
          required
          disabled={status === "loading"}
          autoComplete="email"
          inputMode="email"
        />
        <button
          type="submit"
          disabled={!isValid || status === "loading"}
          aria-label="Join as tester"
          className="absolute right-1 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <svg
              className="animate-spin"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="9"
                cy="9"
                r="7"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="32"
                strokeDashoffset="8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 9H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4L15 9L10 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </form>

      {errorMsg && (
        <p className="mt-2 text-center text-xs font-semibold text-red-600" role="alert">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
