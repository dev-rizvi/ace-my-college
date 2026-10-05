'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FinalCta } from '@/components/FinalCta';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ENTRANCE_EXAMS, EntranceExam } from '@/lib/mock-data';
import { CollegeFilterDropdown } from '@/components/CollegeFilterDropdown';
import {
  Search, X, ArrowRight, ExternalLink, Calendar,
  Award, BookOpen, Building2, CheckCircle2, ShieldCheck,
  GraduationCap, Briefcase, Laptop, Filter, ChevronRight,
  Info, HelpCircle
} from 'lucide-react';

export default function EntranceExamsPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [selectedExamForCounselling, setSelectedExamForCounselling] = useState<string>('');

  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const streamOptions = [
    { id: 'all', label: 'All Streams' },
    { id: 'btech-mtech', label: 'B.Tech & M.Tech' },
    { id: 'management', label: 'BBA, MBA & PGDM' },
    { id: 'computer-apps', label: 'BCA & MCA' },
  ];

  const levelOptions = [
    { id: 'all', label: 'All Levels' },
    { id: 'ug', label: 'Undergraduate (UG)' },
    { id: 'pg', label: 'Postgraduate (PG)' },
    { id: 'integrated', label: 'Integrated / Dual' },
  ];

  const getStreamCount = (streamId: string) => {
    if (streamId === 'all') return ENTRANCE_EXAMS.length;
    return ENTRANCE_EXAMS.filter((e) => e.category === streamId).length;
  };

  const getLevelCount = (lvlId: string) => {
    if (lvlId === 'all') return ENTRANCE_EXAMS.length;
    if (lvlId === 'ug') return ENTRANCE_EXAMS.filter((e) => e.level.toLowerCase().includes('ug') || e.level.toLowerCase().includes('undergraduate')).length;
    if (lvlId === 'pg') return ENTRANCE_EXAMS.filter((e) => e.level.toLowerCase().includes('pg') || e.level.toLowerCase().includes('postgraduate')).length;
    if (lvlId === 'integrated') return ENTRANCE_EXAMS.filter((e) => e.level.toLowerCase().includes('integrated')).length;
    return 0;
  };

  const streamOptionsWithCount = streamOptions.map(opt => ({
    ...opt,
    count: getStreamCount(opt.id)
  }));

  const levelOptionsWithCount = levelOptions.map(opt => ({
    ...opt,
    count: getLevelCount(opt.id)
  }));

  const filteredExams = ENTRANCE_EXAMS.filter((exam) => {
    const matchesStream = selectedStream === 'all' || exam.category === selectedStream;

    const matchesLevel = selectedLevel === 'all' ||
      (selectedLevel === 'ug' && (exam.level.toLowerCase().includes('ug') || exam.level.toLowerCase().includes('undergraduate'))) ||
      (selectedLevel === 'pg' && (exam.level.toLowerCase().includes('pg') || exam.level.toLowerCase().includes('postgraduate'))) ||
      (selectedLevel === 'integrated' && exam.level.toLowerCase().includes('integrated'));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = q === '' ||
      exam.name.toLowerCase().includes(q) ||
      exam.fullName.toLowerCase().includes(q) ||
      exam.conductingBody.toLowerCase().includes(q) ||
      exam.categoryLabel.toLowerCase().includes(q) ||
      exam.courses.some(c => c.toLowerCase().includes(q)) ||
      exam.topColleges.some(tc => tc.toLowerCase().includes(q)) ||
      exam.shortDescription.toLowerCase().includes(q);

    return matchesStream && matchesLevel && matchesSearch;
  });

  const handleOpenCounsellingForExam = (examName: string) => {
    setSelectedExamForCounselling(examName);
    setCounsellingModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <Header
        onOpenCounselling={() => { setSelectedExamForCounselling('Entrance Exam Guidance'); setCounsellingModalOpen(true); }}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO BANNER: Entrance Exams Directory
          ========================================================================= */}
      <section className="colleges-hero" style={{ padding: '60px 0 45px' }}>
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

          <h1 className="page-hero-title">
            All India &amp; State <span className="text-gradient-orange">Entrance Exams</span>
          </h1>

          <p className="page-hero-subtitle" style={{ maxWidth: '760px', margin: '0 auto 24px' }}>
            Verified information on exam eligibility, paper patterns, application deadlines, cutoffs, and participating colleges for <strong>B.Tech, M.Tech, BBA, MBA, PGDM, BCA &amp; MCA</strong>.
          </p>

          <div className="hero-trust-row" style={{ marginBottom: 0 }}>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>NTA &amp; National Authorities Data</span>
            </div>
            <div className="hero-trust-pill">
              <GraduationCap size={15} color="var(--orange-primary)" />
              <span>20+ Key Entrance Exams Covered</span>
            </div>
            <div className="hero-trust-pill">
              <CheckCircle2 size={15} color="var(--orange-primary)" />
              <span>100% Free Admission &amp; Cut-Off Counselling</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER & SEARCH BAR (UNIFIED STICKY TOOLBAR WITH DROPDOWNS)
          ========================================================================= */}
      <section className="courses-toolbar-section">
        <div className="container">
          <div className="courses-toolbar-container">
            {/* Custom Filter Dropdowns: Stream & Level */}
            <div className="colleges-filter-dropdowns-row">
              <CollegeFilterDropdown
                label="Stream"
                ariaLabel="Filter by Exam Stream"
                icon={<GraduationCap size={16} />}
                options={streamOptionsWithCount}
                selectedValue={selectedStream}
                onChange={setSelectedStream}
              />

              <CollegeFilterDropdown
                label="Level"
                ariaLabel="Filter by Degree Level"
                icon={<Award size={16} />}
                options={levelOptionsWithCount}
                selectedValue={selectedLevel}
                onChange={setSelectedLevel}
              />

              {/* Reset Button (only shown if a filter is active) */}
              {(selectedStream !== 'all' || selectedLevel !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedLevel('all');
                  }}
                  className="filter-reset-pill-btn"
                  title="Reset all filters"
                >
                  <X size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Unified Search Input */}
            <div className="courses-search-wrap">
              <input
                type="text"
                placeholder="Search exams, conducting body, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              <Search size={16} className="courses-search-icon" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="courses-search-clear"
                  aria-label="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXAMS LISTING GRID (Imperial Education Style with Circle Emblem)
          ========================================================================= */}
      <section style={{ padding: '40px 0 80px', flexGrow: 1 }}>
        <div className="container">
          {/* Header row with count & active filter badges */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.92rem', color: '#64748B', fontWeight: '600' }}>
                Showing <strong style={{ color: '#0A3871' }}>{filteredExams.length}</strong> verified entrance {filteredExams.length === 1 ? 'exam' : 'exams'}
              </span>

              {/* Active Stream Tag */}
              {selectedStream !== 'all' && (
                <span className="active-filter-badge">
                  Stream: {streamOptions.find(s => s.id === selectedStream)?.label}
                  <button onClick={() => setSelectedStream('all')} aria-label="Remove stream filter">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Active Level Tag */}
              {selectedLevel !== 'all' && (
                <span className="active-filter-badge">
                  Level: {levelOptions.find(l => l.id === selectedLevel)?.label}
                  <button onClick={() => setSelectedLevel('all')} aria-label="Remove level filter">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Active Search Tag */}
              {searchQuery && (
                <span className="active-filter-badge">
                  Search: &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} aria-label="Clear search">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Clear All Button */}
              {(selectedStream !== 'all' || selectedLevel !== 'all' || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                  className="filter-reset-pill-btn"
                  title="Clear all filters"
                >
                  <X size={12} />
                  <span>Clear all</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredExams.map((exam) => (
              <div
                key={exam.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(10, 56, 113, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(10, 56, 113, 0.12)';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(10, 56, 113, 0.05)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Top Row: Circular Emblem + Category Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: exam.badgeColor || '#0A3871',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '1.25rem',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    {exam.initialLetter}
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      background: '#F1F5F9',
                      color: '#0A3871',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {exam.categoryLabel}
                  </span>
                </div>

                {/* Exam Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0A3871', marginBottom: '6px' }}>
                  {exam.name}
                </h3>

                {/* Conducting Body */}
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--orange-primary)', marginBottom: '12px' }}>
                  {exam.conductingBody}
                </div>

                {/* Description matching Imperial Education text style */}
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '18px', flexGrow: 1 }}>
                  {exam.shortDescription}
                </p>

                {/* Courses & Level Pill Strip */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {exam.courses.map((course, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        color: '#334155',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      background: 'rgba(250, 100, 0, 0.08)',
                      color: 'var(--orange-primary)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {exam.frequency.split('(')[0].trim()}
                  </span>
                </div>

                {/* Full-Width Get Guidance Action Button */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9', marginTop: 'auto' }}>
                  <button
                    onClick={() => handleOpenCounsellingForExam(exam.name)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '11px 16px',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Get Guidance</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredExams.length === 0 && (
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px dashed #CBD5E1',
                padding: '60px 24px',
                textAlign: 'center',
                maxWidth: '540px',
                margin: '40px auto'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(250, 100, 0, 0.1)',
                  color: 'var(--orange-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <Search size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0A3871', marginBottom: '8px' }}>
                No entrance exams found
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: '20px' }}>
                We couldn&apos;t find any exams matching your criteria. Try another search keyword or clear your filters.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedStream('all'); setSelectedLevel('all'); }}
                className="btn btn-primary"
                style={{ padding: '10px 20px', borderRadius: '8px' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clean High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => handleOpenCounsellingForExam('Entrance Exams Guidance')} />

      <Footer
        onOpenCounselling={() => handleOpenCounsellingForExam('Entrance Exams Guidance')}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        prefillData={{ stream: selectedExamForCounselling }}
      />

      <InstitutionModal
        isOpen={institutionModalOpen}
        onClose={() => setInstitutionModalOpen(false)}
      />

      <WhatsAppButton />
    </main>
  );
}
