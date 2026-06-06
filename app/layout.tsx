import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wika PH | Learn Tagalog, Cebuano, Ilocano & Philippine Languages",
  description:
    "Learn Tagalog, Cebuano, Ilocano, Hiligaynon, and Asi with Wika. Connect with your roots, practice everyday culture, and speak like a true Filipino local. Start your heritage journey today. Join the waitlist!",
  keywords: [
    "learn philippine languages",
    "philippine language learning app",
    "best app to learn tagalog",
    "speak like a local philippines",
    "interactive filipino lessons",
    "how to speak cebuano fluently",
    "learn ilocano phrases online",
    "hiligaynon conversation practice",
    "asi language learning track",
    "bisaya vocabulary for beginners",
    "philippine language app for tourists",
    "filipino heritage language learning",
    "philippine dialect training for kids",
    "tagalog conversation app for seniors",
    "business language localization philippines",
  ],
  metadataBase: new URL("https://wikaph.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://wikaph.com",
    title: "Wika PH | Learn Tagalog, Cebuano, Ilocano & Philippine Languages",
    description:
      "Learn Tagalog, Cebuano, Ilocano, Hiligaynon, and Asi with Wika. Connect with your roots, practice everyday culture, and speak like a true Filipino local. Start your heritage journey today. Join the waitlist!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wika PH — Learn Philippine Languages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wika PH | Learn Tagalog, Cebuano, Ilocano & Philippine Languages",
    description:
      "Learn Tagalog, Cebuano, Ilocano, Hiligaynon, and Asi with Wika. Connect with your roots, practice everyday culture, and speak like a true Filipino local. Start your heritage journey today. Join the waitlist!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full overflow-x-hidden bg-white font-body text-on-background">{children}<Analytics /></body>
    </html>
  );
}
