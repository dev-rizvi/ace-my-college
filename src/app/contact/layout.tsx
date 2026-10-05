import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Free Career Guidance Centres | ACE MY CAMPUS',
  description: 'Connect with senior education consultants at ACE MY CAMPUS. Reach our advisory desks in Lucknow and Delhi NCR for personalized student admissions, counselling, and institutional partnerships.',
  keywords: [
    'Contact ACE MY CAMPUS',
    'Career Counselling Centre Lucknow',
    'Admission Guidance Phone Number',
    'College Advisory Helpdesk',
    'Institutional Partnership Contact'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact ACE MY CAMPUS - Schedule Free 1-on-1 Advisory',
    description: 'Reach our guidance centers via phone, WhatsApp, or in-person consultation in Lucknow & Delhi NCR.',
    url: 'https://acemycampus.com/contact',
    siteName: 'ACE MY CAMPUS',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-contact.jpg', width: 1200, height: 630, alt: 'Contact ACE MY CAMPUS' }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
