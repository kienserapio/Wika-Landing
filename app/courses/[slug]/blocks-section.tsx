"use client";

import type { CourseData } from "@/lib/courses";

function MapPinScreen({ course }: { course: CourseData }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-[#E8F4FD] to-white p-4 relative rounded-[24px]">
      <svg viewBox="0 0 200 280" className="w-full h-full max-w-[180px]">
        <path d="M100 20 C60 20 20 60 20 110 C20 170 100 250 100 250 C100 250 180 170 180 110 C180 60 140 20 100 20Z" fill="#E2E8F0" stroke="#C4B5D4" strokeWidth="2" />
        <path d="M80 80 C70 80 60 100 60 110 C60 120 70 130 80 130 C90 130 100 120 100 110 C100 100 90 80 80 80Z" fill="#C4B5D4" />
        <path d="M120 90 C110 90 100 110 100 120 C100 130 110 140 120 140 C130 140 140 130 140 120 C140 110 130 90 120 90Z" fill="#C4B5D4" />
        <circle cx="100" cy="110" r="8" fill={course.color} stroke="white" strokeWidth="3">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <polygon points="100,118 94,130 106,130" fill={course.color} />
      </svg>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-[#E2E8F0] flex items-center gap-2">
        <span className="text-lg">{course.emoji}</span>
        <span className="font-bold text-[#624185] text-xs">{course.displayName} Region</span>
      </div>
    </div>
  );
}

function DialectoChatScreen({ course }: { course: CourseData }) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#FFF7ED] to-white p-3 rounded-[24px]">
      <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
        <div className="w-6 h-6 rounded-full bg-[#FFA345] flex items-center justify-center text-xs">D</div>
        <span className="font-bold text-[#624185] text-xs">Dialecto</span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2 py-3">
        <div className="bg-[#624185] text-white text-xs rounded-2xl rounded-bl-sm p-2.5 max-w-[80%] self-start">
          {course.emoji} {course.displayName} phrases are full of warmth!
        </div>
        <div className="bg-gray-100 text-gray-700 text-xs rounded-2xl rounded-br-sm p-2.5 max-w-[80%] self-end">
          Really? Teach me one! 😊
        </div>
        <div className="bg-[#624185] text-white text-xs rounded-2xl rounded-bl-sm p-2.5 max-w-[85%] self-start">
          When you meet someone, say &ldquo;{course.uniqueWord}&rdquo; with a smile!
        </div>
        <div className="bg-gray-100 text-gray-700 text-xs rounded-2xl rounded-br-sm p-2.5 max-w-[75%] self-end">
          {course.uniqueWord}! How was that?
        </div>
        <div className="bg-[#FFA345] text-white text-xs rounded-2xl rounded-bl-sm p-2 self-start">
          Perfect! 🎉
        </div>
      </div>
    </div>
  );
}

function FlashcardExplosionScreen({ course }: { course: CourseData }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-[#FDF2F8] to-white p-4 relative overflow-hidden rounded-[24px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute text-lg"
          style={{
            animation: `float-up-${i} 2.5s ease-out infinite`,
            animationDelay: `${i * 0.3}s`,
            top: `${10 + i * 12}%`,
            left: `${i % 2 === 0 ? 5 : 80}%`,
          }}
        >
          {["✨", "🎉", "💫", "🌟", "🔥"][i - 1]}
        </div>
      ))}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-[#FFA345] p-4 z-10 text-center max-w-[180px]">
        <div className="text-xs font-bold text-[#A5A5A5] uppercase tracking-wider mb-1">Untranslatable</div>
        <div className="font-extrabold text-[#624185] text-xl leading-tight" style={{ color: course.color }}>
          {course.uniqueWord}
        </div>
        <div className="text-[10px] text-[#A5A5A5] mt-1 leading-tight">{course.uniqueVisualDesc}</div>
      </div>
      <div className="flex gap-1 mt-2 z-10">
        {["😊", "💕", "✨", "🎵"].map((emoji, i) => (
          <span key={i} className="text-lg animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
            {emoji}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes float-up-1 { 0%,100% { transform: translateY(0) scale(1); opacity: 0.6; } 50% { transform: translateY(-20px) scale(1.3); opacity: 1; } }
        @keyframes float-up-2 { 0%,100% { transform: translateY(0) scale(1); opacity: 0.6; } 50% { transform: translateY(-18px) scale(1.2); opacity: 1; } }
        @keyframes float-up-3 { 0%,100% { transform: translateY(0) scale(1); opacity: 0.6; } 50% { transform: translateY(-22px) scale(1.4); opacity: 1; } }
        @keyframes float-up-4 { 0%,100% { transform: translateY(0) scale(1); opacity: 0.6; } 50% { transform: translateY(-16px) scale(1.2); opacity: 1; } }
        @keyframes float-up-5 { 0%,100% { transform: translateY(0) scale(1); opacity: 0.6; } 50% { transform: translateY(-24px) scale(1.3); opacity: 1; } }
      `}</style>
    </div>
  );
}

function BlockCard({
  reverse,
  title,
  copy,
  children,
}: {
  reverse?: boolean;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col lg:flex-row h-auto lg:h-[542px] items-center lg:max-h-[542px] relative rounded-[28px] w-full bg-white overflow-hidden ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="w-full lg:w-auto h-[450px] md:h-[500px] lg:h-full lg:flex-1 relative shrink-0 p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-[400px] h-full max-h-[500px] mx-auto">
          {children}
        </div>
      </div>
      <div className="flex flex-col gap-6 h-full items-center lg:items-start justify-center px-6 md:px-[51px] py-10 lg:py-[119px] shrink-0 w-full lg:w-[630px] text-center lg:text-left">
        <h3 className="font-headline text-3xl leading-tight font-extrabold text-primary md:text-5xl">
          {title}
        </h3>
        <p className="text-lg font-medium text-[#A5A5A5]">
          {copy}
        </p>
      </div>
    </div>
  );
}

export function BlocksSection({ course }: { course: CourseData }) {
  return (
    <section className="bg-white flex flex-col items-center py-16 md:py-24 w-full px-4 md:px-6">
      <div className="flex flex-col gap-8 md:gap-16 w-full max-w-[1196px]">
        <BlockCard
          title={course.whereSpokenTitle}
          copy={course.whereSpokenCopy}
        >
          <MapPinScreen course={course} />
        </BlockCard>
        <BlockCard
          reverse
          title={course.cultureTraditionsTitle}
          copy={course.cultureTraditionsCopy}
        >
          <DialectoChatScreen course={course} />
        </BlockCard>
        <BlockCard
          title={course.whatMakesUniqueTitle}
          copy={course.whatMakesUniqueCopy}
        >
          <FlashcardExplosionScreen course={course} />
        </BlockCard>
      </div>
    </section>
  );
}
