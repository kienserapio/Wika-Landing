"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(25px)",
        transition: `opacity 700ms cubic-bezier(.22,.9,.26,1) ${delay}ms, transform 700ms cubic-bezier(.22,.9,.26,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
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

export function LanguageExperienceCards() {
  return (
    <section className="bg-white flex flex-col gap-12 md:gap-16 items-center pb-16 md:pb-24 w-full overflow-x-hidden">
      <div className="flex flex-col gap-6 items-center w-full max-w-[1196px] px-4 md:px-6">
        <div className="flex flex-col gap-8 md:gap-36 items-start w-full">
          <ScrollReveal delay={60}>
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
          </ScrollReveal>

          <ScrollReveal delay={90}>
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
          </ScrollReveal>

          <ScrollReveal delay={120}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
