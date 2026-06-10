import type { CourseData } from "@/lib/courses";

export function SpotlightSection({ course }: { course: CourseData }) {
  return (
    <section className="bg-white flex flex-col items-center py-20 md:py-28 w-full px-4 md:px-6">
      <div className="flex flex-col gap-4 items-center w-full max-w-[900px] text-center">
        <span
          className="inline-block w-12 h-1 rounded-full"
          style={{ background: course.color }}
        />
        <h2 className="font-headline font-extrabold text-[#624185] text-[40px] md:text-[56px] leading-[1.15]">
          {course.spotlightTitle}
        </h2>
        <p className="font-medium text-[#A5A5A5] text-[18px] md:text-[20px] leading-[1.6] max-w-[700px]">
          {course.spotlightSubtitle}
        </p>
      </div>
    </section>
  );
}
