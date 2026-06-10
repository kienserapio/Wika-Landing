import type { CourseData } from "@/lib/courses";

export function CulturalValueSection({ course }: { course: CourseData }) {
  return (
    <section className="bg-[#FFFFFF] flex flex-col items-center py-20 md:py-28 w-full px-4 md:px-6">
      <div className="flex flex-col gap-4 items-center w-full max-w-[900px] text-center mb-16 md:mb-20">
        <span
          className="inline-block w-12 h-1 rounded-full"
          style={{ background: course.color }}
        />
        <h2 className="font-headline font-extrabold text-[#624185] text-[40px] md:text-[56px] leading-[1.15]">
          Connect with {course.displayName}
        </h2>
            <p className="font-medium text-[#A5A5A5] text-[20px] md:text-[20px] leading-[1.5] w-full">
              Discover the rich language and culture that makes <strong className="font-bold text-[#ffa345]">{course.displayName}</strong> truly special.
            </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full max-w-[1200px]">
        <div className="flex-1 flex flex-col rounded-[28px] bg-white border border-[#E2E8F0] overflow-hidden">
          <div className="h-48 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-40">
              <rect x="30" y="40" width="140" height="100" rx="4" fill="#D1D5DB" />
              <line x1="50" y1="70" x2="150" y2="70" stroke="#9CA3AF" strokeWidth="2" />
              <line x1="50" y1="85" x2="130" y2="85" stroke="#9CA3AF" strokeWidth="2" />
              <line x1="50" y1="100" x2="140" y2="100" stroke="#9CA3AF" strokeWidth="2" />
              <line x1="50" y1="115" x2="110" y2="115" stroke="#9CA3AF" strokeWidth="2" />
            </svg>
            <span className="absolute bottom-4 right-4 text-4xl">😢</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-400">✕</span>
              <h3 className="font-headline font-extrabold text-[#624185] text-2xl md:text-3xl">
                Missing the Flavor
              </h3>
            </div>
            <p className="font-medium text-[#A5A5A5] text-[15px] md:text-[17px] leading-[1.7]">
              Standard dictionaries completely miss the dynamic humor, local slang, and real rhythm of how native speakers actually talk every day. Wika changes that.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col rounded-[28px] bg-white border border-[#FFA345]/20 overflow-hidden">
          <div
            className="h-48 md:h-56 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${course.color}15, #FFF7ED)`,
            }}
          >
            <svg viewBox="0 0 200 200" className="w-36 h-36">
              <path d="M40 140 Q70 60 100 100 Q130 40 160 120" stroke={course.color} strokeWidth="3" fill="none" opacity="0.6">
                <animate attributeName="d" values="M40 140 Q70 60 100 100 Q130 40 160 120;M40 140 Q70 100 100 60 Q130 80 160 140;M40 140 Q70 60 100 100 Q130 40 160 120" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M50 150 Q80 80 100 110 Q120 60 150 130" stroke={course.color} strokeWidth="2" fill="none" opacity="0.4">
                <animate attributeName="d" values="M50 150 Q80 80 100 110 Q120 60 150 130;M50 150 Q80 110 100 80 Q120 100 150 150;M50 150 Q80 80 100 110 Q120 60 150 130" dur="2.5s" repeatCount="indefinite" />
              </path>
              <text x="40" y="50" fontSize="24" fill={course.color} opacity="0.5">♪</text>
              <text x="130" y="40" fontSize="18" fill={course.color} opacity="0.4">♫</text>
              <text x="80" y="30" fontSize="16" fill={course.color} opacity="0.3">♪</text>
              <text x="150" y="70" fontSize="20" fill={course.color} opacity="0.4">♫</text>
            </svg>
            <div className="absolute bottom-4 right-4 text-3xl animate-bounce">{course.emoji}</div>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: course.color }}>♥</span>
              <h3 className="font-headline font-extrabold text-[#624185] text-2xl md:text-3xl">
                Speaking with Heart
              </h3>
            </div>
            <p className="font-medium text-[#A5A5A5] text-[15px] md:text-[17px] leading-[1.7]">
              Learn the real, expressive phrases that bring people closer together. Speak with the true warmth and personality that makes this language so special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
