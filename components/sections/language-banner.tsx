"use client";

import { useRef, useState } from "react";

export function LanguageBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const languages = [
    { name: "ENGLISH", flag: "/flags/English Icon.png" },
    { name: "FILIPINO", flag: "/flags/Filipino Icon.png" },
    { name: "CEBUANO", flag: "/flags/Cebuano Icon.png" },
    { name: "ILOCANO", flag: "/flags/Ilocano Icon.png" },
    { name: "HILIGAYNON", flag: "/flags/Hiligaynon Icon.png" },
    { name: "ASI", flag: "/flags/Asi.png" },
  ];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 200;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  return (
    <div className="w-full border-t-2 border-slate-200 bg-white h-20 relative flex items-center">
      {/* Left arrow - mobile only */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="md:hidden absolute left-1 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-gray-700 hover:text-[#624185] transition-colors"
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center justify-start md:justify-evenly gap-6 md:gap-0 overflow-x-auto md:overflow-hidden scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full h-full px-4 md:px-6 snap-x md:snap-none"
      >
        {languages.map(({ name, flag }) => (
          <button
            key={name}
            className="snap-start shrink-0 flex items-center gap-3 px-4 py-2 rounded-lg font-bold text-[15px] text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 transition-colors whitespace-nowrap tracking-[0.8px]"
          >
            <img src={flag} alt={`${name} flag icon`} title={`${name} language flag`} className="w-9 h-8 object-cover rounded-md" />
            {name}
          </button>
        ))}
      </div>

      {/* Right arrow - mobile only */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="md:hidden absolute right-1 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-gray-700 hover:text-[#624185] transition-colors"
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
