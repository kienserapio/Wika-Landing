import type { Metadata } from "next";
import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Application Received | Wika PH",
  description:
    "You have officially joined the Wika community. Salamat for helping keep Philippine languages alive.",
  robots: { index: false, follow: false },
};

type SuccessPageProps = {
  searchParams: Promise<{ firstName?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const rawFirstName = params.firstName?.trim() || "";
  const firstName = rawFirstName || "Kaibigan";

  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-surface-border bg-white p-8 text-center shadow-[0_20px_60px_-35px_rgba(15,23,42,0.4)] sm:p-10">
        <img src="/Mascot.png" alt="Wika Mascot" className="mx-auto h-24 w-auto sm:h-28" />

        <h1 className="mt-4 font-headline text-3xl font-black text-primary sm:text-5xl">You&apos;re In, {firstName}!</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-on-background/75 sm:text-base">
          Salamat for helping Wika keep our languages alive. You&apos;ve officially joined a community of Filipinos
          committed to preserving what makes us who we are.
        </p>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-primary-accent/10 p-5 text-left sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">What Happens Next</p>
          <div className="mt-4 space-y-4">
            <div className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">1</span>
              <p className="text-sm text-on-background/80">
                Check your inbox - a confirmation email is on its way with your Founding Member details.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">2</span>
              <p className="text-sm text-on-background/80">
                Contributor onboarding (if selected) - we&apos;ll reach out soon with your briefing
                and first tasks.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">3</span>
              <p className="text-sm text-on-background/80">
                Beta access - you&apos;ll receive an early-access link ahead of the public launch. Stay tuned.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold text-on-background/70">Help more Filipinos find Wika - share the movement:</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="w-full border-b-4 border-[#0866ff] bg-[#1877F2] text-white hover:bg-[#1877F2]/90 sm:w-auto"
              size="lg"
            >
              <a href="https://facebook.com/WikaPhilippines" target="_blank" rel="noreferrer">
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </Button>
            <Button
              asChild
              className="w-full border-b-4 border-[#004182] bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 sm:w-auto"
              size="lg"
            >
              <a href="https://linkedin.com/company/wikaph" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
      <div className="mx-auto mt-6 flex max-w-3xl justify-start">
        <Button asChild variant="ghost" size="lg">
          <Link href="/">← Back to Wika</Link>
        </Button>
      </div>
    </main>
  );
}
