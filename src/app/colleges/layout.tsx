import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Verified Colleges & Universities Directory in India | ACE MY CAMPUS',
  description: 'Filter and compare 500+ verified partner campuses across Lucknow, Delhi NCR, and India. Check official NIRF rankings, NAAC accreditations, fee structures, highest placement records, and campus facilities.',
  keywords: [
    'Top Colleges in Lucknow',
    'Best MBA Colleges Delhi NCR',
    'B.Tech Universities India',
    'Amity University',
    'BBDU Lucknow',
    'Jaipuria Institute of Management',
    'Bennett University',
    'AIMT Lucknow',
    'College Fees Comparison',
    'Verified Placement Metrics'
  ],
  alternates: {
    canonical: '/colleges',
  },
  openGraph: {
    title: 'Explore Verified Colleges on What Truly Matters | ACE MY CAMPUS',
    description: 'Filter campuses by stream, location, fees & placement records. Get 100% free admission counselling and unbiased college comparisons.',
    url: 'https://acemycampus.com/colleges',
    siteName: 'ACE MY CAMPUS',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-colleges.jpg', width: 1200, height: 630, alt: 'Verified Colleges Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Verified Colleges Directory | ACE MY CAMPUS',
    description: 'Compare 500+ colleges on fee structures, placements, and campus amenities with zero capitation fees.',
    images: ['/images/banner-colleges.jpg'],
  },
};

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
