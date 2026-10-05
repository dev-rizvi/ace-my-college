import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Mission, Philosophy & Team | ACE MY CAMPUS',
  description: 'Learn about ACE MY CAMPUS — India’s trusted education guidance platform. We connect aspiring students to accredited colleges through unbiased mentoring, profile evaluation, and strategic institutional advisory.',
  keywords: [
    'About ACE MY CAMPUS',
    'College Advisory Mission',
    'Career Guidance Platform India',
    'Education Marketing Experts',
    'Student Mentorship Lucknow'
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Guidance, Not Pressure | ACE MY CAMPUS',
    description: 'Empowering students and parents with authentic guidance, verified ROI, and zero capitation fees.',
    url: 'https://acemycampus.com/about',
    siteName: 'ACE MY CAMPUS',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-about.jpg', width: 1200, height: 630, alt: 'About ACE MY CAMPUS' }],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
