"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function SectionHeader({ title, subtitle }: { title: string; subtitle: import("react").ReactNode }) {
  return (
    <div className="flex flex-col gap-3 items-center p-[20px] w-full text-center">
      <h2 className="font-extrabold text-[#624185] text-[48px] md:text-[64px] leading-[1.15] w-full lg:whitespace-nowrap">
        {title}
      </h2>
      <p className="font-medium text-[#A5A5A5] text-[20px] md:text-[20px] leading-[1.5] w-full">
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

const LANGUAGES = [
  { name: "Tagalog",     icon: "/features/lang-icon-tagalog.png" },
  { name: "Cebuano",     icon: "/features/lang-icon-cebuano.png" },
  { name: "Ilocano",     icon: "/features/lang-icon-ilocano.png" },
  { name: "Hiligaynon", icon: "/features/lang-icon-hiligaynon.png" },
  { name: "Asi",         icon: "/features/lang-icon-asi.png" },
];

const LANG_SCREENS = [
  "/features/lang-tagalog.png",
  "/features/lang-cebuano.png",
  "/features/lang-ilocano.png",
  "/features/lang-hiligaynon.png",
  "/features/lang-asi.png",
];

function LanguageSelectorShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenMaskStyle: React.CSSProperties = {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % LANGUAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[542px] items-center lg:max-h-[542px] overflow-clip relative rounded-[28px] w-full bg-white">
      {/* Left: Language Selector Card */}
      <div className="w-full lg:w-auto h-[480px] md:h-[520px] lg:h-full lg:flex-1 overflow-clip relative shrink-0">
        <div
          className="absolute overflow-clip left-1/2 -translate-x-1/2 lg:left-[-57px] lg:translate-x-0"
          style={{ top: "43px", width: "728px", height: "728px" }}
        >
          <div
            className="absolute flex flex-col gap-[10px] items-center justify-center bg-white border border-[#e5e5e5] overflow-clip rounded-[10.829px] shadow-[0px_4px_0px_0px_#e5e5e5,0px_0.935px_20px_0px_rgba(0,0,0,0.06)]"
            style={{ left: "50%", transform: "translateX(-50%)", top: "55px", width: "364px", height: "420px" }}
          >
            {LANGUAGES.map((lang, i) => {
              const isSelected = i === activeIndex;
              return (
                <div
                  key={lang.name}
                  className={`flex gap-5 items-center px-5 relative rounded-[15px] border-[5px] shrink-0 w-[322px] h-[61px] ${
                    isSelected
                      ? "border-[#1CB0F6] bg-[#ddf4ff] drop-shadow-[0px_5px_0px_#1899d6] animate-pop"
                      : "border-[#e5e5e5] shadow-[0px_5px_0px_0px_#d0cfce]"
                  }`}
                >
                  <div className="relative h-[41px] w-[35px] shrink-0">
                    <img
                      src={lang.icon}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  <span className={`font-bold text-[18px] tracking-[0.54px] ${isSelected ? "text-[#1CB0F6]" : "text-[#4b4b4b]"}`}>
                    {lang.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Phone with sliding screen */}
      <div className="w-full lg:w-auto h-[480px] md:h-[520px] lg:h-full lg:flex-1 overflow-clip relative shrink-0">
        <div
          className="absolute overflow-clip left-1/2 -translate-x-1/2 lg:left-[-57px] lg:translate-x-0"
          style={{ top: "43px", width: "728px", height: "728px" }}
        >
          <img
            src="/features/phone-body.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div
            className="absolute overflow-hidden"
            style={{ left: "212px", top: "40px", width: "300px", height: "471px", ...screenMaskStyle }}
          >
            <img
              key={activeIndex}
              src={LANG_SCREENS[activeIndex]}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full lang-screen-slide-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const typingPhrases = [
  "Mabuhay ang Pilipinas",
  "Magandang umaga",
  "Kumain na ba kayo?",
  "Salamat sa tulong",
  "Paano pumunta dito?",
];

function TypingAnimation() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const phrase = typingPhrases[phraseIdx];
    if (phase === "typing") {
      if (charIdx < phrase.length) {
        const t = setTimeout(() => { setText(phrase.slice(0, charIdx + 1)); setCharIdx(charIdx + 1); }, 55);
        return () => clearTimeout(t);
      }
      setPhase("hold");
    } else if (phase === "hold") {
      const t = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(t);
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setText(phrase.slice(0, charIdx - 1)); setCharIdx(charIdx - 1); }, 25);
        return () => clearTimeout(t);
      }
      setPhraseIdx((p) => (p + 1) % typingPhrases.length);
      setPhase("typing");
    }
  }, [phase, phraseIdx, charIdx]);

  return (
    <span>
      <span className="text-secondary">&quot;text&quot;</span>: &quot;{text}<span className="animate-pulse font-bold text-white">|</span>&quot;
    </span>
  );
}

function LearningLoopAnimation() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { num: "01", label: "Stage 1: Common Greetings & Salutations" },
    { num: "02", label: "Stage 2: Family & The Art of Pagmamano" },
    { num: "03", label: "Stage 3: Street Food & Markets" },
  ];

  const patterns: Array<Array<"selected" | "default" | "disabled">> = [
    ["selected", "default", "disabled"],
    ["default", "selected", "default"],
    ["disabled", "default", "selected"],
  ];

  return (
    <div className="flex flex-col gap-4 pt-4 w-full max-w-full">
      {stages.map((stage, idx) => {
        const status = patterns[activeStage][idx];
        const isSelected = status === "selected";
        const isDisabled = status === "disabled";
        return (
          <div
            key={idx}
            className={`flex gap-4 items-center justify-center lg:justify-start w-full transition-opacity duration-300 ${
              isDisabled ? "opacity-50" : "opacity-100"
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full shrink-0 size-10 md:size-12 transition-all duration-300 ${
                isSelected
                  ? "bg-[#624185] drop-shadow-[0px_3px_0px_#52366f] animate-pop"
                  : "bg-white border border-[#e2e8f0] drop-shadow-[0px_3px_0px_#e2e8f0]"
              }`}
            >
              <span
                className={`font-bold text-[17px] md:text-base text-center leading-6 transition-colors duration-300 ${
                  isSelected ? "text-white" : "text-[#624185]"
                }`}
              >
                {stage.num}
              </span>
            </div>
            <span
              className={`font-bold text-[17px] md:text-base leading-6 whitespace-nowrap transition-colors duration-300 ${
                isSelected ? "text-[#624185]" : "text-[#2e3133]"
              }`}
            >
              {stage.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ChatAnimation() {
  const messages = [
    { role: "customer" as const, text: "Tagpila ang pagkaon diri?" },
    { role: "dialecto" as const, cebuano: "Tagpila ang pagkaon diri?", english: "How much is the food here?" },
  ];

  const [showCustomer, setShowCustomer] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showDialecto, setShowDialecto] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const cycle = () => {
      if (!mounted) return;
      setShowCustomer(false);
      setShowLoading(false);
      setShowDialecto(false);
      setExiting(false);

      setTimeout(() => { if (mounted) setShowCustomer(true); }, 400);
      setTimeout(() => { if (mounted) setShowLoading(true); }, 1800);
      setTimeout(() => { if (mounted) { setShowLoading(false); setShowDialecto(true); } }, 3800);
      setTimeout(() => { if (mounted) setExiting(true); }, 7000);
      setTimeout(() => { if (mounted) cycle(); }, 7600);
    };
    cycle();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col gap-3 min-h-[140px]">
      <div
        className={`self-start max-w-[85%] rounded-2xl rounded-bl-md bg-[#F5F0FA] px-4 py-3 transition-all duration-500 ${
          showCustomer ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        } ${exiting ? "opacity-0 translate-y-8" : ""}`}
      >
        <p className="text-sm font-bold text-primary">Customer says:</p>
        <p className="text-sm text-[#2e3133] mt-1">
          &ldquo;{messages[0].text}&rdquo; <span className="text-[#A5A5A5]">(Cebuano)</span>
        </p>
      </div>

      <div
        className={`self-end max-w-[85%] rounded-2xl rounded-br-md px-4 py-3 transition-all duration-500 ${
          showLoading || showDialecto ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        } ${exiting ? "opacity-0 translate-y-8" : ""} ${showLoading ? "bg-primary/70" : "bg-primary"}`}
      >
          {showLoading && (
            <div className="flex items-center gap-1.5 py-1">
              <p className="text-sm font-bold text-white/80">Dialecto</p>
              <span className="loading-dot w-1.5 h-1.5 bg-white/60 rounded-full" style={{ animationDelay: "0ms" }} />
              <span className="loading-dot w-1.5 h-1.5 bg-white/60 rounded-full" style={{ animationDelay: "150ms" }} />
              <span className="loading-dot w-1.5 h-1.5 bg-white/60 rounded-full" style={{ animationDelay: "300ms" }} />
            </div>
          )}
        {showDialecto && (
          <>
            <p className="text-sm font-bold text-white">Dialecto translates:</p>
            <p className="text-sm text-white/90 mt-1">
              &ldquo;{messages[1].english}&rdquo; <span className="text-white/60">(English)</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-white flex flex-col gap-12 md:gap-16 items-center py-16 md:py-24 w-full overflow-x-hidden">
      <div className="flex flex-col gap-6 items-center w-full max-w-[1196px] px-4 md:px-6">

        <SectionHeader
          title="Connect with the Philippine Languages"
          subtitle={<>Learn with high-quality, structured courses for <strong className="font-bold text-[#ffa345]">Tagalog, Cebuano, Ilocano, Hiligaynon, and Asi</strong>. Our platform provides culturally accurate lessons that capture the precise tone, history, and life of each community.</>}
        />

        <LanguageSelectorShowcase />

        <div className="flex flex-col gap-12 items-center w-full text-center mt-16 md:mt-24 mb-10 md:mb-16">
          <SectionHeader
            title="Learn Language as an Experience"
            subtitle={<>Designed for <strong className="font-bold text-[#ffa345]">Individual Learners, Tourists, and Cultural Enthusiasts.</strong></>}
          />
        </div>

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
                  Talk to Dialecto, Your Conversational Companion
                </h3>
                <p className="text-lg font-medium text-[#A5A5A5]">
                  Meet{" "}
                  <strong className="font-bold text-[#ffa345]">Dialecto</strong>{" "}
                  , your ultimate judgment-free practice buddy that helps you speak through everyday real-world situations and master local expressions.
                </p>
              </div>
              <CTALink label="Sign up to be a tester" />
            </div>
          </div>

          {/* Sub Section 2 – Learning Loop */}
          <div className="flex flex-col lg:flex-row-reverse h-auto lg:h-[542px] items-center lg:max-h-[542px] relative rounded-[28px] w-full bg-white">
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
                <p className="text-lg font-medium text-[#A5A5A5]">
                  Say goodbye to generic lessons.{" "}
                  <strong className="font-bold text-[#ffa345]">Wika</strong>{" "}
                  builds a path tailored completely to you, matching your personal goals whether you are traveling to the provinces or talking to family.
                </p>
              </div>
              <LearningLoopAnimation />
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
                <p className="text-lg font-medium text-[#A5A5A5]">
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
            subtitle={<>Designed for <strong className="font-bold text-[#ffa345]">Corporate Teams, Institutions, and Global Workforces.</strong></>}
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
              <p className="text-lg font-medium text-[#A5A5A5]">
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
              <div className="wika-shadow-white relative overflow-hidden rounded-3xl bg-on-background p-6">
                <div className="space-y-2 font-mono text-sm text-white/80">
                  <p className="font-bold text-primary-accent">curl --request POST \</p>
                  <p>&nbsp;&nbsp;--url https://api.wika.ai/v1/translate \</p>
                  <p>&nbsp;&nbsp;--header 'Authorization: Bearer YOUR_API_KEY' \</p>
                  <p>&nbsp;&nbsp;--data '{'{'}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<TypingAnimation />,
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;context&quot;</span>: &quot;formal_greeting&quot;
                  </p>
                  <p>&nbsp;&nbsp;{'}'}'</p>
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
              <p className="text-lg font-medium text-[#A5A5A5]">
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
              <div className="wika-shadow-white relative overflow-hidden rounded-3xl bg-on-background">
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

          {/* Workplace Translation */}
          <div className="group wika-shadow-white flex flex-col items-center gap-12 rounded-[40px] border border-surface-border bg-white p-8 md:p-16 lg:flex-row">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <span className="inline-block rounded-full bg-primary px-4 py-1 font-label text-xs font-black tracking-widest text-white uppercase self-start">
                Workplace Solution
              </span>
              <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
                Dialecto Translation Platform
              </h3>
              <p className="text-lg font-medium text-[#A5A5A5]">
                Instantly translate regional languages back to your team&apos;s preferred language. Dialecto breaks down communication barriers in healthcare and tourism so your guests and patients always feel completely understood.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">translate</span>
                  <span className="text-sm font-bold text-primary">Real-time Translation</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary-accent/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">groups</span>
                  <span className="text-sm font-bold text-primary">Team Ready</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="wika-shadow-white relative overflow-hidden rounded-3xl bg-white p-6 flex flex-col gap-4">
                <ChatAnimation />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
