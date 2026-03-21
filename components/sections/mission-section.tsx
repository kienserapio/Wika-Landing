export function MissionSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.5)] backdrop-blur sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Our Mission</p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Preserve living language, not just words.</h2>
        <div className="mt-6 grid gap-6 text-slate-700 md:grid-cols-2">
          <p className="leading-relaxed">
            Philippine languages carry stories, rituals, and identity. Yet most digital tools still flatten expression into
            one-size-fits-all translations and miss regional nuance.
          </p>
          <p className="leading-relaxed">
            The Wika Pioneer Movement recruits early testers, contributors, and validators to co-create lessons,
            examples, and context that honor each dialect in its own voice.
          </p>
        </div>
      </div>
    </section>
  );
}
