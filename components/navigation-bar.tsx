"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 mx-auto flex w-full items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" scroll={false} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/navlogo.png" alt="WIKA logo" title="WIKA — Learn Philippine Languages" className="h-8 md:h-10" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button
          asChild
          className="wika-active rounded-xl bg-primary px-6 py-2.5 font-headline font-bold text-white transition-all shadow-sm"
          style={{ textShadow: "0px 1px 2px rgba(16,24,40,0.05)" }}
          variant="primary"
        >
          <Link href="/join">BE A WIKA PIONEER</Link>
        </Button>
      </div>
    </nav>
  );
}