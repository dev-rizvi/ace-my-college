'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CoreServices } from '@/components/CoreServices';
import { TrustStats } from '@/components/TrustStats';
import { FaqSection } from '@/components/FaqSection';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  const router = useRouter();
  const [audienceMode, setAudienceMode] = useState<'student' | 'institution'>('student');
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);

  // Prefill state for the modal
  const [counsellingPrefill, setCounsellingPrefill] = useState<{
    stream?: string;
    classLevel?: string;
    location?: string;
    collegeName?: string;
  }>({});

  const handleOpenCounselling = (serviceOrStepName?: string) => {
    setCounsellingPrefill({
      stream: 'Career & College Guidance',
      collegeName: serviceOrStepName,
    });
    setCounsellingModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header with Audience Switcher & Navigation */}
      <Header
        audienceMode={audienceMode}
        setAudienceMode={setAudienceMode}
        onOpenCounselling={() => handleOpenCounselling()}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* 2. Hero Section with Consultation Form & 4 Highlight Boxes */}
      <Hero
        onOpenCounselling={(prefill) => {
          if (prefill) setCounsellingPrefill(prefill);
          setCounsellingModalOpen(true);
        }}
        onFilterColleges={() => {
          router.push('/colleges');
        }}
      />

      {/* 3. Proven Trust Statistics from Slide 5 (Why trust ACE MY CAMPUS?) */}
      <TrustStats />

      {/* 4. WHAT WE DO: 3 Clear Photo Guidance Cards + Slide 6 Banner */}
      <CoreServices
        onOpenCounselling={handleOpenCounselling}
        onOpenCollegeFilter={() => {
          router.push('/colleges');
        }}
      />

      {/* 5. Frequently Asked Questions (Clean Accordion) */}
      <FaqSection />

      {/* 6. High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => handleOpenCounselling()} />


      {/* 9. Comprehensive Footer */}
      <Footer
        onOpenCounselling={() => handleOpenCounselling()}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
        hidePreFooter={true}
      />

      {/* Interactive Counselling Lead Capture Modal */}
      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        prefillData={counsellingPrefill}
      />

      {/* Interactive Institution Partnership Modal */}
      <InstitutionModal
        isOpen={institutionModalOpen}
        onClose={() => setInstitutionModalOpen(false)}
      />

      {/* Sticky Floating WhatsApp Direct Connect Button */}
      <WhatsAppButton />
    </main>
  );
}
