import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

// In-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = (body as { email?: unknown }).email;
  if (typeof raw !== "string") {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const email = raw.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return NextResponse.json({ error: "Email address is too long." }, { status: 400 });
  }

  // Check for existing record before inserting
  const { data: existing, error: selectError } = await supabase
    .from("testers")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (selectError) {
    console.error("[join-tester] select error:", selectError);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }

  if (existing) {
    // Already in the table — return OK without inserting
    return NextResponse.json({ message: "Already registered." }, { status: 200 });
  }

  const { error: insertError } = await supabase.from("testers").insert({ email });

  if (insertError) {
    // Unique constraint violation from a race condition — treat as already registered
    if (insertError.code === "23505") {
      return NextResponse.json({ message: "Already registered." }, { status: 200 });
    }
    console.error("[join-tester] insert error:", insertError);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ message: "Success." }, { status: 201 });
}
