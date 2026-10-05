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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acemycampus.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ACE MY CAMPUS | Career Discovery, Course & College Guidance | Education Marketing",
    template: "%s | ACE MY CAMPUS",
  },
  description: "ACE MY CAMPUS is India's premier student-first platform for career discovery, course exploration, college guidance, and strategic education marketing for universities.",
  alternates: {
    canonical: '/',
  },
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
    "B.Tech MBA Admission Support",
    "Education Marketing Specialists",
    "University Lead Generation",
    "Top Colleges Lucknow Delhi NCR",
    "Entrance Exams 2026",
    "NIRF Ranked Colleges"
  ],
  authors: [{ name: "ACE MY CAMPUS" }],
  creator: "ACE MY CAMPUS",
  publisher: "ACE MY CAMPUS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ACE MY CAMPUS - Your Campus | Your Growth | Your Success",
    description: "Discover the Right Career. Choose the Right Education. Build a Successful Future with 100% free guidance.",
    url: siteUrl,
    siteName: "ACE MY CAMPUS",
    locale: "en_IN",
    type: "website",
    images: [{ url: '/images/hero-graduation-banner.jpg', width: 1200, height: 630, alt: 'ACE MY CAMPUS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ACE MY CAMPUS - Career Discovery & College Guidance",
    description: "100% Free Career Guidance, 200+ Leading Management & Tech Institutes, Verified Placement Metrics.",
    images: ['/images/hero-graduation-banner.jpg'],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'ACE MY CAMPUS',
  url: 'https://acemycampus.com',
  logo: 'https://acemycampus.com/images/emblem-transparent.png',
  description: 'India premier student-first platform for career discovery, course exploration, college guidance, and education marketing.',
  email: 'acemycampus@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://linkedin.com',
    'https://facebook.com',
    'https://instagram.com'
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
