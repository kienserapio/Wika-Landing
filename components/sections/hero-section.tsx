"use client";

import { EmailTesterForm } from "@/components/forms/email-tester-form";

export function HeroSection() {
  return (
    <header
      id="hero"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[900px]"
      style={{ backgroundImage: "url('/website-bg.png')" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="cloud-sky w-[200%]">
          <div className="cloud-float flex w-full">
            <img src="/sky%20clouds.png" alt="" className="w-1/2" />
            <img src="/sky%20clouds.png" alt="" className="w-1/2" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div className="cloud-volcano w-[200%]">
          <div className="cloud-float flex w-full">
            <img src="/volcano%20clouds.png" alt="" className="w-1/2" />
            <img src="/volcano%20clouds.png" alt="" className="w-1/2" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <img src="/mascot-bg.png" alt="" aria-hidden className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full flex-col items-center justify-start pt-32 gap-[30px]">
        <div className="flex w-full flex-col items-center gap-[30px] text-center">
          <h1
            className="slide-up-delay-4 self-stretch text-center font-headline text-[72px] leading-[72px] font-extrabold uppercase tracking-[-0.03em] text-[#624185] md:text-[90px] md:leading-[90px] lg:text-[96px] lg:leading-[90px]"
          >
            <span className="block">WITH WIKA,</span>
            <span className="block text-[#FFA345]">WI-KAN!</span>
          </h1>

          <p className="slide-up-delay-3 w-full max-w-[440px] text-center text-[18px] font-semibold leading-[24px] text-[#5B5B5B]">
            Speak like a local as you learn, connect, and embody the vibrant heart of Philippine languages.
          </p>

          <EmailTesterForm className="slide-up-delay-2" />
        </div>

        <div className="slide-up-phone pb-4 md:pb-8 hover:scale-[1.02] transition-transform duration-300"><PhoneMockup /></div>
      </div>
    </header>
  );
}

function PhoneMockup() {
  return (
    <div className="relative shrink-0" style={{ width: "447.423px", height: "930.233px" }}>
      {/* Screen area with app screenshot */}
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
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Phone frame overlay — evenodd fill creates transparent screen window */}
      <img
        src="/phone/phone-frame.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Dynamic island */}
      <img
        src="/phone/dynamic-island.svg"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: "156.89px", top: "26.35px", width: "133.642px", height: "39.558px" }}
      />

      {/* Left bubble */}
      <div className="bubble-float-left absolute" style={{ left: "-48.29px", top: "103px" }}>
        <div style={{ transform: "rotate(-20deg)" }}>
          <div
            className="flex items-center justify-center border-[4.856px] border-solid border-white bg-white shadow-[0px_9.711px_32.371px_0px_rgba(0,0,0,0.2)]"
            style={{
              width: "92.258px",
              height: "92.258px",
              borderRadius: "56.649px",
            }}
          >
            <span className="text-4xl leading-none">🔥</span>
          </div>
        </div>
      </div>

      {/* Right bubble */}
      <div className="bubble-float-right absolute" style={{ left: "385.61px", top: "180.94px" }}>
        <div style={{ transform: "rotate(18.6deg)" }}>
          <div
            className="flex items-center justify-center border-[3.646px] border-solid border-white bg-white shadow-[0px_7.291px_24.304px_0px_rgba(0,0,0,0.2)]"
            style={{
              width: "69.266px",
              height: "69.266px",
              borderRadius: "56.649px",
            }}
          >
            <span className="text-2xl leading-none">🇵🇭</span>
          </div>
        </div>
      </div>
    </div>
  );
}
