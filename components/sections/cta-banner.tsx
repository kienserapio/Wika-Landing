import Link from "next/link";

function CTAPhone() {
  return (
    <div
      className="absolute"
      style={{
        left: "930px",
        top: "348.5px",
        width: "447.423px",
        height: "930.233px",
        filter: "drop-shadow(-10px 4px 12.5px rgba(0,0,0,0.25))",
      }}
    >
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
          src="/phone/app-screenshot-cta.png"
          alt="WIKA App Screenshot"
          title="Join WIKA — Learn Philippine Languages"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <img
        src="/phone/phone-frame-cta.svg"
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
    </div>
  );
}

export function CtaBanner() {
  return (
    <>
      {/* Desktop layout */}
      <section
        className="hidden lg:flex items-center justify-center overflow-hidden w-full"
        style={{ aspectRatio: "1448 / 542", background: "#FFFFFF" }}
      >
        <div className="h-[1080px] relative shrink-0 w-full max-w-[1448px]">
          <h2
            className="absolute font-extrabold uppercase"
            style={{
              left: "77px",
              top: "477.5px",
              width: "814px",
              fontSize: "100px",
              lineHeight: "93px",
              color: "rgba(98, 65, 133, 0.93)",
              transform: "translateY(-50%)",
            }}
          >
            Ready to Find Your Voice?
          </h2>

          <p
            className="absolute font-semibold text-[24px] tracking-[0.72px]"
            style={{
              left: "87px",
              top: "588px",
              width: "659px",
              lineHeight: "34px",
              height: "166px",
              color: "#5b5b5b",
            }}
          >
            Secure your spot on the pioneer waitlist today and be the first to experience the Philippines with Wika!
          </p>

          <div className="absolute flex items-center gap-3" style={{ left: "87px", top: "684px" }}>
            <Link href="/join">
              <div className="bg-[#624185] drop-shadow-[0px_4px_0px_#52366f] rounded-[12px]">
                <div className="bg-[#624185] border border-[#624185] flex items-center justify-center px-[18px] py-[10px] rounded-[15px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <span className="font-bold text-white text-[16px] tracking-[0.8px] leading-6 whitespace-nowrap uppercase">
                    Be a Wika Pioneer
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <CTAPhone />
        </div>
      </section>

      {/* Mobile/tablet layout */}
      <section className="lg:hidden w-full flex flex-col items-center px-6 py-16 gap-6" style={{ background: "#ffffff" }}>
        <h2 className="font-extrabold uppercase text-[48px] leading-[48px] text-center max-w-full" style={{ color: "rgba(98, 65, 133, 0.93)" }}>
          Ready to Find Your Voice?
        </h2>
        <p className="font-semibold text-[18px] text-center max-w-[400px]" style={{ color: "#5b5b5b" }}>
          Secure your spot on the pioneer waitlist today and be the first to experience the Philippines with Wika!
        </p>
        <Link href="/join">
          <div className="bg-[#624185] drop-shadow-[0px_4px_0px_#52366f] rounded-[12px]">
            <div className="bg-[#624185] border border-[#624185] flex items-center justify-center px-[18px] py-[10px] rounded-[15px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <span className="font-bold text-white text-[16px] tracking-[0.8px] leading-6 whitespace-nowrap uppercase">
                Be a Wika Pioneer
              </span>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
