export type CourseSlug = "filipino" | "cebuano" | "ilocano" | "hiligaynon" | "asi";

export interface CourseData {
  slug: CourseSlug;
  displayName: string;
  heroTitle: string;
  heroSubheader: string;
  spotlightTitle: string;
  spotlightSubtitle: string;
  whereSpokenTitle: string;
  whereSpokenCopy: string;
  cultureTraditionsTitle: string;
  cultureTraditionsCopy: string;
  whatMakesUniqueTitle: string;
  whatMakesUniqueCopy: string;
  uniqueWord: string;
  uniqueVisualDesc: string;
  ctaHeader: string;
  color: string;
  emoji: string;
}

export const COURSES: Record<CourseSlug, CourseData> = {
  filipino: {
    slug: "filipino",
    displayName: "Tagalog",
    heroTitle: "Learn to Speak Tagalog Online",
    heroSubheader: "Speak everyday Tagalog naturally with fun language learning lessons designed to connect you with the culture.",
    spotlightTitle: "Discover Tagalog: The Heart of the National Voice",
    spotlightSubtitle: "Step into a world of incredible warmth, deep respect, and a vibrant culture that connects millions of people across the globe.",
    whereSpokenTitle: "Where Tagalog is Spoken",
    whereSpokenCopy: "Tagalog is spoken all over Metro Manila, across the beautiful provinces of Luzon, and even on sunny beaches like Palawan. It is the perfect language to learn if you want to chat with people easily wherever you go in the country.",
    cultureTraditionsTitle: "The Culture and Traditions",
    cultureTraditionsCopy: "The community is famous for an amazing tradition called bayanihan, which is all about neighbors helping each other with big smiles. Learning Tagalog lets you step right into this incredibly warm and welcoming way of life.",
    whatMakesUniqueTitle: "What Makes Tagalog Unique",
    whatMakesUniqueCopy: "This language is completely built around respect and close connections. By using sweet words like po and opo, you can instantly make people feel like family and share genuine happiness in every conversation.",
    uniqueWord: "Po",
    uniqueVisualDesc: "A young person smiling respectfully while greeting a family elder",
    ctaHeader: "Ready to start your Tagalog learning journey?",
    color: "#624185",
    emoji: "🥥",
  },
  cebuano: {
    slug: "cebuano",
    displayName: "Cebuano",
    heroTitle: "Learn to Speak Cebuano Online",
    heroSubheader: "Speak everyday Cebuano naturally with fun language learning lessons designed to connect you with the culture.",
    spotlightTitle: "Discover Cebuano: The Heart of the Sunny South",
    spotlightSubtitle: "Dive into the musical rhythms, sun-drenched beaches, and proud, joyful heritage of the Visayas and Mindanao.",
    whereSpokenTitle: "Where Cebuano is Spoken",
    whereSpokenCopy: "Cebuano is the main language spoken across the sunny islands of Cebu, the beautiful hills of Bohol, and vibrant cities all over Mindanao. It is your ultimate golden ticket to exploring the beautiful southern parts of the Philippines.",
    cultureTraditionsTitle: "The Culture and Traditions",
    cultureTraditionsCopy: "The region loves colorful festivals, incredible music, and delicious food. People here are known for being exceptionally joyful and expressive, and they absolutely love sharing a good laugh with everyone they meet.",
    whatMakesUniqueTitle: "What Makes Cebuano Unique",
    whatMakesUniqueCopy: "Cebuano sounds beautifully musical and is wonderfully direct. It is packed with amazing local jokes and lively expressions that make telling stories super fun and full of personality.",
    uniqueWord: "Chada",
    uniqueVisualDesc: "Bright musical notes and laughing sound waves",
    ctaHeader: "Ready to start your Cebuano learning journey?",
    color: "#E8734A",
    emoji: "🥭",
  },
  ilocano: {
    slug: "ilocano",
    displayName: "Ilocano",
    heroTitle: "Learn to Speak Ilocano Online",
    heroSubheader: "Speak everyday Ilocano naturally with fun language learning lessons designed to connect you with the culture.",
    spotlightTitle: "Discover Ilocano: The Heart of the Proud North",
    spotlightSubtitle: "Explore the dramatic coastlines, ancient heritage towns, and deeply resilient spirit of Northern Luzon.",
    whereSpokenTitle: "Where Ilocano is Spoken",
    whereSpokenCopy: "Ilocano is the powerful voice of Northern Luzon. You will hear it spoken from the historic streets of Vigan all the way to the beautiful mountain ranges and breezy coastlines of the north.",
    cultureTraditionsTitle: "The Culture and Traditions",
    cultureTraditionsCopy: "Northern communities are famous for their strong teamwork, amazing food feasts, and massive hearts. They treat every single guest like royalty, so speaking their language opens the door to awesome lifelong friendships.",
    whatMakesUniqueTitle: "What Makes Ilocano Unique",
    whatMakesUniqueCopy: "Ilocano has a wonderful, grounding rhythm that sounds incredibly friendly. Learning its hearty phrases helps you show deep respect and easily bond with the proud communities of the north.",
    uniqueWord: "Naimbag a bigatyo",
    uniqueVisualDesc: "Warm morning sunshine and steaming bowls of local food",
    ctaHeader: "Ready to start your Ilocano learning journey?",
    color: "#2E8B57",
    emoji: "🌸",
  },
  hiligaynon: {
    slug: "hiligaynon",
    displayName: "Hiligaynon",
    heroTitle: "Learn to Speak Hiligaynon Online",
    heroSubheader: "Speak everyday Hiligaynon naturally with fun language learning lessons designed to connect you with the culture.",
    spotlightTitle: "Discover Hiligaynon: The Heart of the Gentle West",
    spotlightSubtitle: "Experience the famous affectionate sweetness, legendary sugar fields, and bright smiles of the Western Visayas.",
    whereSpokenTitle: "Where Hiligaynon is Spoken",
    whereSpokenCopy: "Hiligaynon is spoken across the lovely city of Iloilo, the rich sugarlands of Negros Occidental, and the beautiful islands of Guimaras. It perfectly matches the calm and breezy vibe of the western provinces.",
    cultureTraditionsTitle: "The Culture and Traditions",
    cultureTraditionsCopy: "This region is famous for cheerful festivals and an absolute love for sweet treats. The people are celebrated as some of the gentlest souls because they treat everyone with a special, affectionate kindness that melts your heart.",
    whatMakesUniqueTitle: "What Makes Hiligaynon Unique",
    whatMakesUniqueCopy: "Hiligaynon is so melodic that even a normal daily question sounds like a beautiful, comforting song. It is a soft and lovely language that makes every single chat feel incredibly safe and happy.",
    uniqueWord: "Palangga",
    uniqueVisualDesc: "Soft pink clouds, honey drops, and gentle visual hugs",
    ctaHeader: "Ready to start your Hiligaynon learning journey?",
    color: "#D4569A",
    emoji: "💎",
  },
  asi: {
    slug: "asi",
    displayName: "Asi",
    heroTitle: "Learn to Speak Asi Online",
    heroSubheader: "Speak everyday Asi naturally with fun language learning lessons designed to connect you with the culture.",
    spotlightTitle: "Discover Asi: The Heart of the Hidden Islands",
    spotlightSubtitle: "Uncover a deeply treasured, exclusive linguistic paradise tucked away in the crystal-clear waters of Romblon.",
    whereSpokenTitle: "Where Asi is Spoken",
    whereSpokenCopy: "Asi is an awesome island language spoken natively in Romblon, specifically on the stunning, marble-rich islands of Banton, Simara, and parts of Odiongan. It is a true coastal treasure.",
    cultureTraditionsTitle: "The Culture and Traditions",
    cultureTraditionsCopy: "This beautiful paradise is full of untouched nature and deep seafaring history. The community is incredibly proud of its roots and loves welcoming anyone who wants to discover their unique island lifestyle.",
    whatMakesUniqueTitle: "What Makes Asi Unique",
    whatMakesUniqueCopy: "Asi is like a rare cultural time capsule with words and phrases you cannot find anywhere else on earth. Learning it lets you join a special group of people keeping a wonderful piece of history alive.",
    uniqueWord: "Kagandahan",
    uniqueVisualDesc: "Crystal clear waters, secret maps, and hidden tropical keys",
    ctaHeader: "Ready to start your Asi learning journey?",
    color: "#1A8A9E",
    emoji: "🐚",
  },
};

export function getCourseData(slug: string): CourseData | null {
  return COURSES[slug as CourseSlug] ?? null;
}

export function getValidSlugs(): CourseSlug[] {
  return Object.keys(COURSES) as CourseSlug[];
}
