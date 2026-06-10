import { NavigationBar } from "@/components/navigation-bar";
import { FooterSection } from "@/components/sections/footer-section";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow flex items-center justify-center bg-white">
        <p className="text-[#624185] text-2xl font-bold">Coming soon: {name} course</p>
      </main>
      <FooterSection />
    </div>
  );
}
