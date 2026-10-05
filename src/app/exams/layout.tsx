import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All India & State Entrance Exams 2026 - Eligibility, Dates & Cutoffs | ACE MY CAMPUS',
  description: 'Complete guide to national & state entrance exams for B.Tech, M.Tech, MBA, PGDM, BCA & MCA. Access official syllabus, exam dates, paper patterns, and participating colleges for JEE Main, GATE, CAT, CMAT, NIMCET & CUET.',
  keywords: [
    'Entrance Exams 2026',
    'JEE Main 2026',
    'JEE Advanced',
    'GATE Engineering',
    'CAT MBA Exam',
    'MAT CMAT XAT',
    'NIMCET MCA',
    'CUET UG BCA B.Tech',
    'All India Entrance Exams',
    'College Cutoffs India'
  ],
  alternates: {
    canonical: '/exams',
  },
  openGraph: {
    title: 'All India & State Entrance Exams 2026 | ACE MY CAMPUS',
    description: 'Verified information on exam eligibility, deadlines, cutoffs, and top participating colleges for Engineering, Management & Computer Applications.',
    url: 'https://acemycampus.com/exams',
    siteName: 'ACE MY CAMPUS',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-testimonials.jpg', width: 1200, height: 630, alt: 'Entrance Exams Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All India & State Entrance Exams 2026 | ACE MY CAMPUS',
    description: 'Check dates, eligibility, and cutoffs for JEE, GATE, CAT, NIMCET & CUET with free expert guidance.',
    images: ['/images/banner-testimonials.jpg'],
  },
};

export default function EntranceExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
