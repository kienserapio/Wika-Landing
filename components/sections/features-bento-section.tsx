import { Gamepad2, Languages, ScrollText, ShieldCheck } from "lucide-react";

import type { FeatureCard } from "@/types/onboarding";

const featureCards: FeatureCard[] = [
  {
    title: "Gamified Paths",
    description: "Progress through structured language journeys with interactive checkpoints and contextual challenges.",
    icon: "gamepad",
  },
  {
    title: "Cultural Context",
    description: "Learn language through values, etiquette, and local expression rather than direct translation alone.",
    icon: "scroll",
  },
  {
    title: "Baybayin Integration",
    description: "Explore script literacy modules that reconnect learners with historical writing traditions.",
    icon: "languages",
  },
  {
    title: "Community-Powered Validation",
    description: "Native speakers and domain experts review content to maintain authenticity and regional integrity.",
    icon: "shield",
  },
];

function getIcon(icon: FeatureCard["icon"]) {
  switch (icon) {
    case "gamepad":
      return <Gamepad2 className="h-6 w-6" />;
    case "scroll":
      return <ScrollText className="h-6 w-6" />;
    case "languages":
      return <Languages className="h-6 w-6" />;
    case "shield":
      return <ShieldCheck className="h-6 w-6" />;
    default:
      return null;
  }
}

export function FeaturesBentoSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Platform Pillars</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Built for language, culture, and stewardship.</h2>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2">
          {featureCards.map((card, index) => (
            <article
              key={card.title}
              className={[
                "rounded-3xl border p-6 transition-transform duration-300 hover:-translate-y-0.5",
                index % 2 === 0
                  ? "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white"
                  : "border-amber-200 bg-gradient-to-br from-amber-50 to-white",
              ].join(" ")}
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-emerald-800 shadow-sm">{getIcon(card.icon)}</div>
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
