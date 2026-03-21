import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="page-fade">
      <nav className="fixed top-0 z-50 mx-auto flex w-full items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md md:px-12">
        <div className="flex items-center">
          <img src="/navlogo.png" alt="WIKA" className="h-8 md:h-10" />
        </div>
        <Button asChild className="wika-active rounded-button bg-primary px-6 py-2.5 font-headline font-bold text-white transition-all" variant="primary">
          <Link href="/join">Join Waitlist</Link>
        </Button>
      </nav>

      <header id="hero" className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-20 pt-32 lg:flex-row">
        <div className="space-y-8 lg:w-1/2">
          <img src="/LOGO_V1%202.png" alt="Wika logo" className="h-10 w-auto opacity-95" />
          <h1 className="font-headline font-extrabold leading-tight tracking-tight text-primary">
            <span className="block text-5xl md:text-7xl">With Wika,</span>
            <span className="block text-7xl md:text-9xl text-secondary">Wi-Kan!</span>
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-on-background/80 md:text-xl">
            Learn, Connect, and Embody the Filipino Languages through our interactive, gamified platform.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button asChild className="wika-active flex items-center justify-center gap-2 rounded-button bg-primary px-8 py-4 text-md font-headline font-bold text-white tracking-wide" variant="primary" size="lg">
              <Link href="/join">BECOME A WIKA PIONEER</Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:w-1/2">
          {/* Phone mockup */}
          <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[334px] lg:max-w-[334px] mx-auto mb-12 z-10 group" style={{ perspective: 1200 }}>
            <div className="relative aspect-[9/19] bg-black rounded-[2rem] sm:rounded-[3rem] shadow-sm md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border-4 sm:border-8 border-gray-800 overflow-hidden transform-gpu transition-transform duration-500 will-change-transform group-hover:-rotate-6 group-hover:-translate-y-2 group-hover:scale-105">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-7 bg-black rounded-b-3xl z-10" />

              {/* Phone screen content placeholder - replace src with your mockup */}
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img
                  src="/wika.gif"
                  alt="WIKA App Mockup GIF"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
          
          <div className="absolute z-20 -rotate-6" style={{ top: '-9px', right: '-29px' }}>
            <div className="wika-shadow-secondary rounded-[15px] bg-secondary p-4 font-label font-bold text-white wika-float">
              🔥 15-Day Learning Streak!
            </div>
          </div>

          <div className="absolute bottom-12 -left-12 z-20 rotate-12">
            <div className="wika-shadow-white flex items-center gap-3 rounded-[15px] border border-surface-border bg-white p-4 font-label font-bold wika-float">
              <span className="text-2xl">🇵🇭</span>
              <span>Learn Filipino Languages!</span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-headline text-4xl font-black text-primary md:text-5xl">Language as an Experience</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-secondary"></div>
          </div>

          <div className="mb-32 flex flex-col items-center gap-16 md:flex-row">
            <div className="order-2 md:w-1/2 md:order-1">
              <div className="wika-shadow-white relative rounded-[30px] border border-surface-border bg-white p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-primary-accent/20">
                    <img src="/dialecto_icon.png" alt="Dialecto" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="wika-shadow-white rounded-2xl rounded-tl-none border border-surface-border bg-white p-4 font-medium text-on-background pop-slide">
                    Kumusta! I&apos;m Dialecto. Want to practice ordering coffee in Cebuano today?
                  </div>
                </div>
                <div className="mb-6 flex items-end justify-end gap-4">
                  <div className="wika-shadow rounded-2xl rounded-br-none bg-primary p-4 font-medium text-white text-on-primary pop-slide-iphone">
                    Oo! Gusto ko ug init nga kape.
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border-2 border-dashed border-secondary bg-secondary/10 p-4">
                  <span className="material-symbols-outlined text-secondary-dark">tips_and_updates</span>
                  <p className="text-sm font-bold italic text-secondary-deep">
                    Cultural Tip: Using &quot;Opo&quot; shows respects to elders.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 space-y-6 md:w-1/2 md:order-2">
              <span className="inline-block rounded-full bg-primary-accent/20 px-4 py-1 font-label text-xs font-black tracking-widest text-primary uppercase">
                AI Conversational Model
              </span>
              <h3 className="font-headline text-3xl font-extrabold text-on-background md:text-4xl">Talk to Dialecto, our AI Companion</h3>
              <p className="text-lg leading-relaxed text-on-background/70">
                Practice real-world conversations without the fear of making mistakes. Dialecto doesn&apos;t just
                translate-it teaches you the cultural nuances, honorifics, and local slang.
              </p>
              <Button asChild className="group inline-flex items-center gap-2 font-headline font-extrabold text-primary" variant="ghost">
                <Link href="#hero">
                  Be a Validator
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mb-32 flex flex-col items-center gap-16 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <span className="inline-block rounded-full bg-secondary/20 px-4 py-1 font-label text-xs font-black tracking-widest text-secondary-dark uppercase">
                OUR GAMIFIED APPLICATION
              </span>
              <h3 className="font-headline text-3xl font-extrabold text-on-background md:text-4xl">Your Journey, Visualized</h3>
              <p className="text-lg leading-relaxed text-on-background/70">
                Climb the ranks from a &quot;Dayuhan&quot; (Visitor) to a &quot;Lokal&quot; (Native). Earn XP, unlock digital
                collectibles, and compete in weekly Balagtasan leagues.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="wika-shadow-white flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-white font-bold text-primary">
                    01
                  </div>
                  <p className="font-bold">Unit 1: Common Greetings &amp; Salutations</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="wika-shadow flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                    02
                  </div>
                  <p className="font-bold text-primary">Unit 2: Family &amp; The Art of Pagmamano</p>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-white font-bold">
                    03
                  </div>
                  <p className="font-bold">Unit 3: Street Food &amp; Markets</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:w-1/2">
              <div className="wika-shadow-white hover:rotate-0 cursor-pointer transform rounded-[24px] border border-surface-border bg-white p-6 -rotate-3 transition-all">
                <div className="mb-4 text-4xl">⭐</div>
                <h4 className="mb-1 text-xl font-black text-primary">500 XP</h4>
                <p className="text-xs font-bold text-on-background/60 uppercase">Level 4 Reached</p>
              </div>
              <div className="wika-shadow-white hover:rotate-0 cursor-pointer transform rounded-[24px] border border-surface-border bg-white p-6 rotate-6 transition-all">
                <div className="mb-4 text-4xl">🏆</div>
                <h4 className="mb-1 text-xl font-black text-primary">DIAMOND LEAGUE</h4>
                <p className="text-xs font-bold text-on-background/60 uppercase">Top 5% Student</p>
              </div>
              <div className="col-span-2 cursor-pointer transform -rotate-6 transition-all hover:scale-105">
                <div className="wika-shadow-secondary rounded-[24px] bg-secondary p-6 wika-float">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="mb-1 text-2xl font-headline font-black">SPECIAL ACHIEVEMENT</h4>
                      <p className="text-sm font-bold opacity-80 uppercase">The &quot;Po&quot; &amp; &quot;Opo&quot; Master</p>
                    </div>
                    <span className="text-5xl">🎖️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wika-shadow-white flex flex-col items-center gap-12 rounded-[40px] border border-surface-border bg-white p-8 md:p-16 lg:flex-row">
            <div className="space-y-8 lg:w-1/2">
              <span className="inline-block rounded-full bg-primary px-4 py-1 font-label text-xs font-black tracking-widest text-white uppercase">
                Enterprise Solution
              </span>
              <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                Wika for Business &amp; Institutions
              </h3>
              <p className="text-lg font-medium text-on-background/70">
                Integrate our advanced conversational AI and language models directly into your platform via our robust
                API. Perfect for schools, travel agencies, and digital archives.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">api</span>
                  <span className="text-sm font-bold text-primary">Robust API</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">school</span>
                  <span className="text-sm font-bold text-primary">Education Focused</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">auto_stories</span>
                  <span className="text-sm font-bold text-primary">Digital Archives</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="wika-shadow relative overflow-hidden rounded-3xl bg-on-background p-6">
                <div className="space-y-2 font-mono text-sm text-white/80">
                  <p className="font-bold text-primary-accent">curl --request POST \\</p>
                  <p>&nbsp;&nbsp;--url https://api.wika.ai/v1/translate \\</p>
                  <p>&nbsp;&nbsp;--header &apos;Authorization: Bearer YOUR_API_KEY&apos; \\</p>
                  <p>&nbsp;&nbsp;--data &apos;{'{'}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;text&quot;</span>: &quot;Mabuhay ang
                    Pilipinas&quot;,
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;context&quot;</span>: &quot;formal_greeting&quot;
                  </p>
                  <p>&nbsp;&nbsp;{'}'}&apos;</p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-symbols-outlined text-[150px]">settings_ethernet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="wika-shadow-lg relative mx-auto max-w-4xl overflow-hidden rounded-[40px] bg-primary p-12 text-center text-white">
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-3xl leading-tight font-black md:text-5xl">
              Ready to speak our Filipino <br />
              languages with confidence?
            </h2>
            <p className="text-xl font-medium opacity-90">Be among the first to experience the future of cultural learning.</p>
            <div className="flex flex-col justify-center gap-6 pt-4 sm:flex-row">
              <Button asChild className="wika-active rounded-button bg-secondary px-10 py-5 font-headline text-white" variant="secondary" size="lg">
                <Link href="/join">Become a Wika Pioneer</Link>
              </Button>
            </div>
            <p className="font-label text-sm font-bold opacity-75">No credit card required. Launching soon.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 rotate-12 transform opacity-20">
            <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              language
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-surface-border bg-white px-6 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img src="/LOGO_V1%202.png" alt="Wika logo" className="h-8 w-auto" />
            <p className="text-center font-body text-sm text-on-background/60 md:text-left">
              © 2026 WIKA Philippines. Made for Filipino Languages.
            </p>
          </div>
          <p className="text-center font-body text-sm font-bold text-on-background/70 md:text-left">Contact us at marketing@wikaph.com</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/WikaPhilippines"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wika Facebook"
              className="wika-shadow-white wika-active-white flex h-10 cursor-pointer items-center justify-center rounded-full border border-surface-border bg-white px-4 text-sm font-black text-primary"
            >
              f
            </a>
            <a
              href="https://linkedin.com/company/wikaph"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wika LinkedIn"
              className="wika-shadow-white wika-active-white flex h-10 cursor-pointer items-center justify-center rounded-full border border-surface-border bg-white px-4 text-xs font-black text-primary"
            >
              in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
