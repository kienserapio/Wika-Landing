import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-900/20 blur-3xl" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Wika Pioneer Movement
            </p>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
                Master the rhythm of the Philippines.
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-700">
                Wika is building a living language platform where culture, context, and community shape how people
                learn Philippine languages together.
              </p>
            </div>
            <a href="#join" aria-label="Jump to the onboarding form">
              <Button className="group text-base" variant="secondary">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-900">Why now?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Many Philippine dialects remain underrepresented in modern digital products. Wika starts with people who
              speak, preserve, and care for these languages every day.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-900">
                Contributor-first onboarding for native speakers and language educators
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-900">
                Community validation pipeline to keep translations culturally grounded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
