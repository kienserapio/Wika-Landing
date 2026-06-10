import { notFound } from "next/navigation";
import { NavigationBar } from "@/components/navigation-bar";
import { FooterSection } from "@/components/sections/footer-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { LanguageBanner } from "@/components/sections/language-banner";
import { getCourseData } from "@/lib/courses";
import { HeroSection } from "./hero-section";
import { SpotlightSection } from "./spotlight-section";
import { BlocksSection } from "./blocks-section";
import { CulturalValueSection } from "./cultural-value-section";
import { LanguageExperienceCards } from "./language-experience-cards";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseData(slug);
  if (!course) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">
        <HeroSection course={course} />
        <LanguageBanner />
        <CulturalValueSection course={course} />

        <section className="bg-white flex flex-col items-center py-16 md:py-24 w-full px-4 md:px-6">
          <div className="flex flex-col gap-3 items-center p-[20px] w-full text-center">
          </div>
        </section>

        <SpotlightSection course={course} />
        <BlocksSection course={course} />

        <section className="bg-white flex flex-col items-center pt-16 md:pt-24 w-full px-4 md:px-6">
          <div className="flex flex-col gap-12 items-center w-full text-center mt-16 md:mt-24 mb-10 md:mb-16">
            <div className="flex flex-col gap-3 items-center p-[20px] w-full text-center">
              <h2 className="font-extrabold text-[#624185] text-[48px] md:text-[64px] leading-[1.15] w-full lg:whitespace-nowrap">
                Learn Language as an Experience
              </h2>
              <p className="font-medium text-[#A5A5A5] text-[20px] md:text-[20px] leading-[1.5] w-full">
                Designed for <strong className="font-bold text-[#ffa345]">Individual Learners, Tourists, and Cultural Enthusiasts.</strong>
              </p>
            </div>
          </div>
        </section>
        <LanguageExperienceCards />
        <CtaBanner />
      </main>
      <FooterSection />
    </div>
  );
}
