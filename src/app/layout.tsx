import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071B41",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ACE MY CAMPUS | Career Discovery, Course & College Guidance | Education Marketing",
  description: "ACE MY CAMPUS is India's premier student-first platform for career discovery, course exploration, college guidance, and strategic education marketing for universities.",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    "Career Discovery",
    "College Guidance India",
    "Career Counselling Lucknow",
    "B.Tech MBBS MBA Admission Support",
    "Education Marketing Specialists",
    "University Lead Generation"
  ],
  authors: [{ name: "ACE MY CAMPUS" }],
  openGraph: {
    title: "ACE MY CAMPUS - Your Campus | Your Growth | Your Success",
    description: "Discover the Right Career. Choose the Right Education. Build a Successful Future.",
    siteName: "ACE MY CAMPUS",
    locale: "en_IN",
    type: "website",
    images: [{ url: '/images/logo.png', width: 1024, height: 1024, alt: 'ACE MY CAMPUS Logo' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
