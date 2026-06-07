import Link from "next/link";

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-3 items-center p-[20px] w-full text-center">
      <h2 className="font-extrabold text-[#624185] text-[48px] md:text-[64px] leading-[1.15] w-full">
        {title}
      </h2>
      <p className="font-semibold text-[#ffa345] text-[20px] md:text-[20px] leading-[1.5] w-full">
        {subtitle}
      </p>
    </div>
  );
}

function CTALink({ label }: { label: string }) {
  return (
    <Link
      href="/join"
      className="flex gap-2 items-center overflow-hidden rounded-lg px-7 py-3 transition-all duration-200 hover:bg-neutral-100"
    >
      <span className="font-bold text-[#624185] text-[16px] md:text-[18px] tracking-[0.8px] leading-6 whitespace-nowrap uppercase">
        {label}
      </span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="md:w-5 md:h-5">
        <path d="M4.5 9L7.5 6L4.5 3" stroke="#624185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}

function PhonePanel({
  screenSrc,
  screenAlt,
  cardContent,
  mascot,
  centeredOnDesktop,
}: {
  screenSrc: string;
  screenAlt?: string;
  cardContent: React.ReactNode;
  mascot?: React.ReactNode;
  centeredOnDesktop?: boolean;
}) {
  const maskStyle: React.CSSProperties = {
    maskImage: "url('/features/screen-mask.png')",
    WebkitMaskImage: "url('/features/screen-mask.png')",
    maskPosition: "-212px -40px",
    WebkitMaskPosition: "-212px -40px",
    maskSize: "728px 728px",
    WebkitMaskSize: "728px 728px",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskMode: "alpha" as const,
  };

  const desktopClasses = centeredOnDesktop
    ? "left-1/2 -translate-x-1/2"
    : "left-1/2 -translate-x-1/2 lg:left-[-57px] lg:translate-x-0";

  return (
    <div className="flex-1 h-full min-w-0 relative flex items-center justify-center lg:block">
      <div className={"group-hover:scale-[1.02] transition-transform duration-300 absolute overflow-clip " + desktopClasses} style={{ top: "43px", width: "728px", height: "728px" }}>
        <img
          src="/features/phone-body.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div
          className="absolute"
          style={{ left: "212px", top: "40px", width: "300px", height: "471px", ...maskStyle }}
        >
          <img src={screenSrc} alt={screenAlt ?? ""} title={screenAlt ?? ""} className="absolute inset-0 w-full h-full" />
        </div>
        {cardContent}
        {mascot}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-white flex flex-col gap-12 md:gap-16 items-center py-16 md:py-24 w-full overflow-x-hidden">
      <div className="flex flex-col gap-6 items-center w-full max-w-[1196px] px-4 md:px-6">

        <SectionHeader
          title="Learn Language as an Experience"
          subtitle="Designed for Individual Learners, Tourists, and Cultural Enthusiasts."
        />

        <div className="flex flex-col gap-8 md:gap-36 items-start w-full">

          {/* Sub Section 1 – Dialecto */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[542px] items-center lg:max-h-[542px] overflow-clip relative rounded-[28px] w-full bg-white lg:gap-10">
            <div className="w-full lg:w-auto h-[450px] md:h-[500px] lg:h-full lg:flex-1 overflow-clip lg:overflow-visible relative shrink-0 group">
              <PhonePanel
                centeredOnDesktop
                screenSrc="/features/screen-feed.png"
                screenAlt="Wika app feed screen showing language learning feed"
                cardContent={
                  <div
                    className="absolute bg-white border border-[#e5e5e5] flex flex-col items-center justify-center overflow-clip rounded-[10.829px] shadow-[0px_4px_0px_0px_#e5e5e5,0px_0.935px_20px_0px_rgba(0,0,0,0.06)] -translate-x-1/2"
                    style={{ left: "calc(50% - 0.5px)", top: "220px", width: "353px", height: "274px", padding: "2.641px" }}
                  >
                    <div className="relative" style={{ width: "333px", height: "261px" }}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src="/features/screenshot-feed.png"
                          alt="App feed screenshot"
                          title="WIKA language learning feed"
                          className="absolute w-full max-w-none left-0"
                          style={{ height: "277.38%", top: "-145.73%" }}
                        />
                      </div>
                    </div>
                  </div>
                }
                mascot={
                  <div className="absolute" style={{ left: "434px", width: "229px", height: "229px", top: "291px" }}>
                    <img src="/features/mascot.svg" alt="Dialecto conversational AI mascot" title="Dialecto — WIKA AI language companion" className="absolute inset-0 w-full h-full" />
                  </div>
                }
              />
            </div>

            <div className="flex flex-col gap-8 h-full items-center lg:items-start justify-center px-6 md:px-[51px] py-10 lg:py-[119px] shrink-0 w-full lg:w-[630px] text-center lg:text-left">
              <div className="flex flex-col gap-8 items-center lg:items-start w-full">
                <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                  Talk to Dialecto, Your Conversational AI Companion
                </h3>
                <p className="text-lg font-medium text-on-background/70">
                  Practice real-world conversations without the fear of making mistakes.{" "}
                  <strong className="font-bold text-[#ffa345]">Dialecto</strong>{" "}
                  doesn&apos;t just translate, he teaches you real-world cultural nuances, local honorifics, and everyday expressions.
                </p>
              </div>
              <CTALink label="Sign up to be a tester" />
            </div>
          </div>

          {/* Sub Section 2 – Learning Loop */}
          <div className="flex flex-col lg:flex-row-reverse h-auto lg:h-[542px] items-center lg:max-h-[542px] overflow-clip relative rounded-[28px] w-full bg-white">
            <div className="w-full lg:w-auto h-[450px] md:h-[500px] lg:h-full lg:flex-1 overflow-clip relative shrink-0 group">
              <PhonePanel
                screenSrc="/features/screen-circles.png"
                screenAlt="Wika app language learning loop screen"
                cardContent={
                  <div
                    className="absolute bg-white border border-[#e5e5e5] flex flex-col items-center justify-center overflow-clip rounded-[10.829px] shadow-[0px_4px_0px_0px_#e5e5e5,0px_0.935px_20px_0px_rgba(0,0,0,0.06)] -translate-x-1/2"
                    style={{ left: "50%", top: "288px", width: "364px", height: "203px", padding: "2.641px" }}
                  >
                    <div className="relative" style={{ width: "326px", height: "180.058px" }}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src="/features/screenshot-language.png"
                          alt="Language selection screenshot"
                          title="WIKA personalized learning loop language picker"
                          className="absolute max-w-none"
                          style={{ width: "100%", height: "392.42%", left: "-0.01%", top: "-151.26%" }}
                        />
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            <div className="flex flex-col gap-8 h-full items-center lg:items-start justify-center px-6 md:px-[51px] py-10 lg:py-[119px] shrink-0 w-full lg:w-[630px] text-center lg:text-left">
              <div className="flex flex-col gap-8 items-center lg:items-start w-full">
                <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                  Personalized Dynamic Learning Loop
                </h3>
                <p className="text-lg font-medium text-on-background/70">
                  Say goodbye to generic lessons. Wika{" "}
                  <strong className="font-bold text-[#ffa345]">dynamically crafts your courses,</strong>{" "}
                  playful themes for kids, academic tracks for students, real-world navigation for tourists, or accessible pacing for seniors. Every path validated by linguistic experts.
                </p>
              </div>
              <div className="flex flex-col gap-4 pt-4 w-full max-w-full">
                <div className="flex gap-4 items-center justify-center lg:justify-start w-full">
                  <div className="bg-white border border-[#e2e8f0] drop-shadow-[0px_3px_0px_#e2e8f0] flex items-center justify-center rounded-full shrink-0 size-10 md:size-12">
                    <span className="font-bold text-[#624185] text-[17px] md:text-base text-center leading-6">01</span>
                  </div>
                  <span className="font-bold text-[#2e3133] text-[17px] md:text-base leading-6 whitespace-nowrap">
                    Stage 1: Common Greetings &amp; Salutations
                  </span>
                </div>
                <div className="flex gap-4 items-center justify-center lg:justify-start w-full">
                  <div className="bg-[#624185] drop-shadow-[0px_3px_0px_#52366f] flex items-center justify-center rounded-full shrink-0 size-10 md:size-12">
                    <span className="font-bold text-white text-[17px] md:text-base text-center leading-6">02</span>
                  </div>
                  <span className="font-bold text-[#624185] text-[17px] md:text-base leading-6 whitespace-nowrap">
                    Stage 2: Family &amp; The Art of Pagmamano
                  </span>
                </div>
                <div className="flex gap-4 items-center justify-center lg:justify-start w-full opacity-50">
                  <div className="bg-white border border-[#e2e8f0] flex items-center justify-center rounded-full shrink-0 size-10 md:size-12">
                    <span className="font-bold text-[#2e3133] text-[17px] md:text-base text-center leading-6">03</span>
                  </div>
                  <span className="font-bold text-[#2e3133] text-[17px] md:text-base leading-6 whitespace-nowrap">
                    Stage 3: Street Food &amp; Markets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Section 3 – Gamified */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[542px] items-center lg:max-h-[542px] overflow-clip relative rounded-[28px] w-full bg-white lg:gap-10">
            <div className="w-full lg:w-auto h-[450px] md:h-[500px] lg:h-full lg:flex-1 overflow-clip relative shrink-0 group">
              <PhonePanel
                centeredOnDesktop
                screenSrc="/features/screen-map.png"
                screenAlt="Wika app community map screen showing gamified progression"
                cardContent={
                  <div
                    className="absolute bg-white border border-[#e1e1e1] drop-shadow-[0px_0.935px_10px_rgba(0,0,0,0.06)] flex items-center justify-center overflow-clip rounded-[10.829px] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: "calc(50% + 0.37px)", top: "calc(50% + 0.45px)", width: "340.738px", height: "466.902px", padding: "2.641px" }}
                  >
                    <div className="relative shrink-0" style={{ width: "333px", height: "435px" }}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src="/features/screenshot-community.png"
                          alt="Community screenshot"
                          title="WIKA gamified community progression screen"
                          className="absolute max-w-none"
                          style={{ height: "165.81%", left: "-0.26%", top: "-35.28%", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            <div className="flex flex-col gap-8 h-full items-center lg:items-start justify-center px-6 md:px-[51px] py-10 lg:py-[119px] shrink-0 w-full lg:w-[630px] text-center lg:text-left">
              <div className="flex flex-col gap-8 items-center lg:items-start w-full">
                <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                  Gamified Level Progression
                </h3>
                <p className="text-lg font-medium text-on-background/70">
                  Climb ranks dynamically from a{" "}
                  <strong className="font-bold text-[#ffa345]">Visitor</strong>{" "}
                  to a fluent{" "}
                  <em className="font-bold italic text-[#ffa345]">Lokal</em>
                  . Earn XP, unlock digital achievements, and rise to the top of competitive weekly leagues.
                </p>
              </div>
              <CTALink label="Claim your pioneer rank now" />
            </div>
          </div>
        </div>

        {/* ── Section 2 Header ── */}
        <div className="flex flex-col gap-12 items-center w-full text-center mt-16 md:mt-24 mb-10 md:mb-16">
          <SectionHeader
            title="Wika for Business &amp; Education"
            subtitle="Designed for Corporate Teams, Institutions, and Global Workforces."
          />
        </div>

        {/* ── Business Section ── */}
        <div className="flex flex-col gap-10 w-full">

          {/* API Translation */}
          <div className="group wika-shadow-white flex flex-col items-center gap-12 rounded-[40px] border border-surface-border bg-white p-8 md:p-16 lg:flex-row">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <span className="inline-block rounded-full bg-primary px-4 py-1 font-label text-xs font-black tracking-widest text-white uppercase self-start">
                Enterprise Solution
              </span>
              <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                API Translation Service
              </h3>
              <p className="text-lg font-medium text-on-background/70">
                Integrate our advanced conversational AI and language models directly into your platform via our robust API. Perfect for schools, travel agencies, and digital archives.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">api</span>
                  <span className="text-sm font-bold text-primary">Robust API</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">translate</span>
                  <span className="text-sm font-bold text-primary">Real-time Translation</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="wika-shadow relative overflow-hidden rounded-3xl bg-on-background p-6">
                <div className="space-y-2 font-mono text-sm text-white/80">
                  <p className="font-bold text-primary-accent">curl --request POST \</p>
                  <p>&nbsp;&nbsp;--url https://api.wika.ai/v1/translate \</p>
                  <p>&nbsp;&nbsp;--header &apos;Authorization: Bearer YOUR_API_KEY&apos; \</p>
                  <p>&nbsp;&nbsp;--data &apos;{'{'}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;text&quot;</span>: &quot;Mabuhay ang Pilipinas&quot;,
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

          {/* Classroom Learning */}
          <div className="group wika-shadow-white flex flex-col items-center gap-12 rounded-[40px] border border-surface-border bg-white p-8 md:p-16 lg:flex-row-reverse">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <span className="inline-block rounded-full bg-primary px-4 py-1 font-label text-xs font-black tracking-widest text-white uppercase self-start">
                Education Solution
              </span>
              <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                Classroom Learning System
              </h3>
              <p className="text-lg font-medium text-on-background/70">
                A dedicated LMS for regional Philippine languages. Easily manage classrooms, track student progress, and connect to heritage through interactive, school-safe learning tracks.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">school</span>
                  <span className="text-sm font-bold text-primary">LMS Platform</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">auto_stories</span>
                  <span className="text-sm font-bold text-primary">Heritage Connected</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="relative overflow-hidden rounded-3xl bg-on-background">
                <img
                  src="/features/classroom-bg.png"
                  alt="Classroom learning system"
                  title="WIKA classroom for education and enterprise"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "300px" }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
