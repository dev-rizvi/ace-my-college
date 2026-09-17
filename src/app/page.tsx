'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStats } from '@/components/TrustStats';
import { CoreServices } from '@/components/CoreServices';
import { ExploreCourses } from '@/components/ExploreCourses';
import { StudentJourney } from '@/components/StudentJourney';
import { WhyUsAndReviews } from '@/components/WhyUsAndReviews';
import { CollegeDirectory } from '@/components/CollegeDirectory';
import { ForInstitutions } from '@/components/ForInstitutions';
import { FaqSection } from '@/components/FaqSection';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
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

  // Stream and city filter state for the college directory
  const [selectedStream, setSelectedStream] = useState('All Streams');
  const [selectedCity, setSelectedCity] = useState('All Locations');

  const handleOpenCounselling = (serviceOrStepName?: string) => {
    setCounsellingPrefill({
      stream: selectedStream !== 'All Streams' ? selectedStream : 'Engineering & Technology',
      collegeName: serviceOrStepName,
    });
    setCounsellingModalOpen(true);
  };

  const handleHeroPathFinder = (stream: string, location: string) => {
    setSelectedStream(stream);
    // Map city string
    if (location.includes('Lucknow')) setSelectedCity('Lucknow');
    else if (location.includes('Delhi')) setSelectedCity('Greater Noida');
    else setSelectedCity('All Locations');
  };

  const handleSelectStreamFromCourses = (streamTitle: string) => {
    if (streamTitle === 'All Streams') {
      setSelectedStream('All Streams');
    } else {
      setSelectedStream(streamTitle);
    }
    const el = document.getElementById('colleges');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireCollege = (collegeName: string) => {
    setCounsellingPrefill({
      collegeName,
      stream: selectedStream !== 'All Streams' ? selectedStream : 'Engineering & Technology',
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

      {/* 2. Hero Section with 3 Students Visual & Path Finder */}
      <Hero
        onOpenCounselling={(prefill) => {
          if (prefill) setCounsellingPrefill(prefill);
          setCounsellingModalOpen(true);
        }}
        onFilterColleges={handleHeroPathFinder}
      />

      {/* 3. Trust & Statistics Bar */}
      <TrustStats />

      {/* 4. Four Main Core Services */}
      <CoreServices
        onOpenCounselling={handleOpenCounselling}
        onOpenCollegeFilter={() => {
          const el = document.getElementById('colleges');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. Explore Courses & Career Areas */}
      <ExploreCourses onSelectStream={handleSelectStreamFromCourses} />

      {/* 6. The ACE MY CAMPUS 8-Step Student Journey */}
      <StudentJourney onOpenCounselling={handleOpenCounselling} />

      {/* 7. Why ACE MY CAMPUS & Student Testimonial Slider */}
      <WhyUsAndReviews />

      {/* 8. Verified Colleges Directory & Comparison Explorer */}
      <CollegeDirectory
        selectedStream={selectedStream}
        setSelectedStream={setSelectedStream}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onEnquireCollege={handleEnquireCollege}
      />

      {/* 9. For Institutions (Education Marketing Specialists) */}
      <ForInstitutions onOpenInstitutionModal={() => setInstitutionModalOpen(true)} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => handleOpenCounselling()} />

      {/* 12. Comprehensive Footer */}
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
