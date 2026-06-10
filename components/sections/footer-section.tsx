export function FooterSection() {
  return (
    <footer className="bg-white border border-[#a4a4a4] flex flex-col items-center justify-center py-10 w-full">
      <div className="flex flex-col gap-10 md:gap-[65px] items-start w-full max-w-[1194px] px-8 md:px-6">

        {/* ── Link columns ── */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-10 md:gap-[139px] items-start justify-center w-full">

          <div className="flex flex-col gap-5 items-start overflow-hidden">
            <p className="font-bold text-[#624185] text-[20px] md:text-[17px] tracking-[-0.2318px] leading-normal">
              About Wika
            </p>
            <a href="/about" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">
              Overview
            </a>
            <a href="/about/team" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal whitespace-nowrap cursor-pointer hover:text-[#624185] transition-colors">
              Team
            </a>
            <a href="/about/mission" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal whitespace-nowrap cursor-pointer hover:text-[#624185] transition-colors">
              Mission
            </a>
            <a href="/contact" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal whitespace-nowrap cursor-pointer hover:text-[#624185] transition-colors">
              Contact Us
            </a>
          </div>

          <div className="flex flex-col gap-5 items-start overflow-hidden">
            <p className="font-bold text-[#624185] text-[20px] md:text-[17px] tracking-[-0.2318px] leading-normal">
              Our Courses
            </p>
            <a href="/courses/filipino" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Learn Filipino</a>
            <a href="/courses/cebuano" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Learn Cebuano</a>
            <a href="/courses/ilocano" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Learn Ilocano</a>
            <a href="/courses/hiligaynon" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Learn Hiligaynon</a>
            <a href="/courses/asi" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Learn Asi</a>
          </div>

          <div className="flex flex-col gap-5 items-start overflow-hidden">
            <p className="font-bold text-[#624185] text-[20px] md:text-[17px] tracking-[-0.2318px] leading-normal">
              Our Products
            </p>
            <a href="/products/mobile" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Wika App</a>
            <a href="/products/translator" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Wika Translator</a>
            <a href="/business" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Wika for Business</a>
            <a href="/education" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Wika for Education</a>
          </div>

          <div className="flex flex-col gap-5 items-start overflow-hidden">
            <p className="font-bold text-[#624185] text-[20px] md:text-[17px] tracking-[-0.2318px] leading-normal">
              Our Company
            </p>
            <a href="/updates" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Updates</a>
            <a href="/faqs" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">FAQs</a>
            <a href="/partnerships" className="font-bold text-[#a5a5a5] text-[15px] tracking-[-0.2045px] leading-normal cursor-pointer hover:text-[#624185] transition-colors">Partnerships</a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
          <div className="flex items-center justify-center md:justify-end shrink-0">
            <div className="relative" style={{ width: "87px", height: "25.588px" }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src="/footer/logo.png"
                  alt="Wika logo"
                  title="WIKA — Preserving Philippine Languages"
                  className="absolute max-w-none"
                  style={{ height: "555%", left: "-43.5%", top: "-198.33%", width: "290.2%" }}
                />
              </div>
            </div>
          </div>

        <p className="font-normal text-[#a5a5a5] text-[14px] text-center tracking-[-0.2045px] leading-normal">
          &copy; 2026 WIKA PH Inc. All rights reserved. Contact us at{" "}
          <a href="mailto:marketing@wikaph.com" className="font-bold text-[#a5a5a5] hover:underline">
            marketing@wikaph.com.
          </a>
        </p>

          <div className="flex gap-4 md:gap-6 items-center justify-center shrink-0">
            <a href="https://facebook.com/WikaPhilippines" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 md:w-5 md:h-6">
                <img src="/footer/facebook.svg" alt="Facebook" className="w-full h-full" />
              </div>
            </a>
            <a href="https://linkedin.com/company/wikaph" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <img src="/footer/linkedin.svg" alt="LinkedIn" className="w-full h-full" />
              </div>
            </a>
            <a href="https://instagram.com/wikaphapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <img src="/footer/instagram.svg" alt="Instagram" className="w-full h-full" />
              </div>
            </a>
            <a href="https://tiktok.com/wikaphpapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <img src="/footer/tiktok.svg" alt="TikTok" className="w-full h-full" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
