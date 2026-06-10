"use client";

import Link from "next/link";
import type { CourseData } from "@/lib/courses";

function PhoneMockup({ course }: { course: CourseData }) {
  return (
    <div className="relative shrink-0" style={{ width: "447.423px", height: "930.233px" }}>
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          top: "12.74px",
          left: "15.04px",
          width: "417.348px",
          height: "904.757px",
          borderRadius: "54.976px",
        }}
      >
        <img
          src="/phone/app-screenshot.png"
          alt="WIKA App Screenshot"
          title="WIKA App Preview — Learn Philippine Languages"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <img
        src="/phone/phone-frame.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <img
        src="/phone/dynamic-island.svg"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: "156.89px", top: "26.35px", width: "133.642px", height: "39.558px" }}
      />

      <div
        className="absolute"
        style={{
          left: "-8px",
          top: "-8px",
          right: "-8px",
          bottom: "-8px",
          borderRadius: "68px",
          background: "rgba(98, 65, 133, 0.08)",
          filter: "blur(24px)",
          zIndex: -1,
        }}
      />

      <div className="floating-bubble-left-1 absolute" style={{ left: "-58px", top: "80px" }}>
        <div style={{ transform: "rotate(-12deg)" }}>
          <div
            className="flex items-center justify-center border-[4.856px] border-solid border-white bg-white shadow-[0px_9.711px_32.371px_0px_rgba(0,0,0,0.2)]"
            style={{
              width: "92.258px",
              height: "92.258px",
              borderRadius: "56.649px",
            }}
          >
            <span className="text-4xl leading-none">{course.emoji}</span>
          </div>
        </div>
      </div>

      <div className="floating-bubble-right-1 absolute" style={{ left: "375px", top: "160px" }}>
        <div style={{ transform: "rotate(22deg)" }}>
          <div
            className="flex items-center justify-center border-[3.646px] border-solid border-white bg-white shadow-[0px_7.291px_24.304px_0px_rgba(0,0,0,0.2)]"
            style={{
              width: "69.266px",
              height: "69.266px",
              borderRadius: "56.649px",
            }}
          >
            <span className="text-2xl leading-none">{course.emoji}</span>
          </div>
        </div>
      </div>

      <div className="floating-bubble-left-2 absolute" style={{ left: "-72px", top: "540px" }}>
        <div style={{ transform: "rotate(-32deg)" }}>
          <div
            className="flex items-center justify-center border-[3.2px] border-solid border-white bg-[#FFA345] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.15)]"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
            }}
          >
            <span className="text-xl leading-none">✨</span>
          </div>
        </div>
      </div>

      <div className="floating-bubble-right-2 absolute" style={{ left: "410px", top: "420px" }}>
        <div style={{ transform: "rotate(45deg)" }}>
          <div
            className="flex items-center justify-center border-[3.8px] border-solid border-white bg-[#624185] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.15)]"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
            }}
          >
            <span className="text-lg leading-none">💜</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-bubble-l1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          15% { transform: translate3d(10px, -18px, 0) rotate(4deg); }
          35% { transform: translate3d(-6px, -8px, 0) rotate(-3deg); }
          55% { transform: translate3d(12px, -22px, 0) rotate(5deg); }
          75% { transform: translate3d(-5px, -12px, 0) rotate(-4deg); }
          90% { transform: translate3d(8px, -6px, 0) rotate(2deg); }
        }
        @keyframes float-bubble-r1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          20% { transform: translate3d(-10px, -14px, 0) rotate(-5deg); }
          45% { transform: translate3d(5px, -20px, 0) rotate(3deg); }
          65% { transform: translate3d(-12px, -10px, 0) rotate(-4deg); }
          85% { transform: translate3d(8px, -16px, 0) rotate(2deg); }
        }
        @keyframes float-bubble-l2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(-14px, -10px, 0) rotate(-6deg); }
          50% { transform: translate3d(8px, -24px, 0) rotate(4deg); }
          70% { transform: translate3d(-10px, -14px, 0) rotate(-5deg); }
          90% { transform: translate3d(6px, -8px, 0) rotate(3deg); }
        }
        @keyframes float-bubble-r2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          18% { transform: translate3d(-8px, -20px, 0) rotate(-4deg); }
          40% { transform: translate3d(12px, -12px, 0) rotate(5deg); }
          62% { transform: translate3d(-6px, -24px, 0) rotate(-3deg); }
          80% { transform: translate3d(10px, -8px, 0) rotate(4deg); }
        }
        .floating-bubble-left-1 {
          animation: float-bubble-l1 4.8s cubic-bezier(.3,.1,.35,1) infinite;
          will-change: transform;
        }
        .floating-bubble-right-1 {
          animation: float-bubble-r1 5.4s cubic-bezier(.25,.05,.3,1) infinite;
          will-change: transform;
        }
        .floating-bubble-left-2 {
          animation: float-bubble-l2 6.2s cubic-bezier(.4,.05,.25,1) infinite;
          will-change: transform;
        }
        .floating-bubble-right-2 {
          animation: float-bubble-r2 4.2s cubic-bezier(.35,.1,.4,1) infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export function HeroSection({ course }: { course: CourseData }) {
  return (
    <header
      id="hero"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[900px]"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative z-10 mx-auto flex h-full w-full flex-col items-center justify-start pt-32 gap-[30px] px-6">
        <div className="flex w-full flex-col items-center gap-[30px] text-center">
          <h1
            className="slide-up-delay-4 self-stretch text-center font-headline text-[72px] leading-[72px] font-extrabold tracking-[-0.02em] text-[#624185] md:text-[90px] md:leading-[90px] lg:text-[96px] lg:leading-[90px]"
          >
            <span className="block">Learn {course.displayName}</span>
            <span className="block text-[#FFA345]">With Wika</span>
          </h1>

          <p className="slide-up-delay-3 w-full max-w-[440px] text-center text-[18px] font-semibold leading-[24px] text-[#5B5B5B]">
            {course.heroSubheader}
          </p>

          <div className="slide-up-delay-2">
            <Link href="/join">
              <div className="bg-[#624185] drop-shadow-[0px_4px_0px_#52366f] rounded-[12px] inline-block transition-all hover:brightness-110 active:translate-y-[4px] active:shadow-none">
                <div className="bg-[#624185] border border-[#624185] flex items-center justify-center px-[24px] py-[12px] rounded-[15px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <span className="font-bold text-white text-[16px] tracking-[0.8px] leading-6 whitespace-nowrap uppercase">
                    Start Learning for Free
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="slide-up-phone pb-4 md:pb-8 hover:scale-[1.02] transition-transform duration-300"><PhoneMockup course={course} /></div>
      </div>
    </header>
  );
}
