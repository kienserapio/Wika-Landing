import { NavigationBar } from "@/components/navigation-bar";
import { FooterSection } from "@/components/sections/footer-section";

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow flex items-center justify-center bg-white">
        <p className="text-[#624185] text-2xl font-bold">Coming soon</p>
      </main>
      <FooterSection />
    </div>
  );
}
