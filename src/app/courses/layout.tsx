import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Course-Wise Information, Eligibility & Career Outcomes | ACE MY CAMPUS',
  description: 'Compare undergraduate & postgraduate degree programs across Management, Engineering, Computer Applications, and Law. Explore verified eligibility, fee ranges, specialization tracks, and placement salary benchmarks.',
  keywords: [
    'MBA vs PGDM',
    'B.Tech Specializations',
    'BCA MCA Career Opportunities',
    'Course Eligibility India',
    'Highest Placement Packages',
    'Average Salary MBA Engineering',
    'Best Degree Programs 2026',
    'Career Outcomes'
  ],
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Course-Wise Information & Career Outcomes | ACE MY CAMPUS',
    description: 'Compare duration, eligibility criteria, specialization pathways, verified placement packages, and career roles across India’s leading disciplines.',
    url: 'https://acemycampus.com/courses',
    siteName: 'ACE MY CAMPUS',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/hero-students.jpg', width: 1200, height: 630, alt: 'Course & Career Guidance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Course-Wise Information & Career Outcomes | ACE MY CAMPUS',
    description: 'Compare duration, eligibility, fees & packages across MBA, B.Tech, BCA, MCA and Law.',
    images: ['/images/hero-students.jpg'],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
