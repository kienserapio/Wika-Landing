import { Mic, NotebookPen, Shield } from "lucide-react";

export function ContributorSection() {
  const callouts = [
    {
      title: "Native Speakers",
      description: "Share real everyday usage, idioms, and pronunciation patterns from your region.",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      title: "Language Educators",
      description: "Help structure learning sequences that are engaging and pedagogically sound.",
      icon: <NotebookPen className="h-5 w-5" />,
    },
    {
      title: "Validators",
      description: "Review and confirm entries so each lesson reflects authentic cultural context.",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 p-8 text-slate-100 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Contributor Call</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Help shape the first wave of Wika experiences.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
          We are actively onboarding pioneers from different dialect communities across the Philippines and diaspora.
          Your perspective will directly influence lessons, checks, and community quality standards.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {callouts.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-slate-700 p-2 text-amber-300">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
