import Link from "next/link";

import { JoinPioneerForm } from "@/components/forms/join-pioneer-form";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/navlogo.png" alt="WIKA" className="h-8 w-auto sm:h-10" />
          </Link>
          <p className="hidden text-sm font-bold text-on-background/60 sm:block">Preserving Philippine languages, together.</p>
        </header>

        <JoinPioneerForm />
      </div>
    </main>
  );
}
