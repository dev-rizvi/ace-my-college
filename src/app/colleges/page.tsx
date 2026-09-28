'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FinalCta } from '@/components/FinalCta';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CollegeFilterDropdown } from '@/components/CollegeFilterDropdown';
import { COLLEGES } from '@/lib/mock-data';
import {
  MapPin, Award, ArrowRight, Sparkles, Building2, ShieldCheck, GraduationCap, CheckCircle2,
  Search, X, Briefcase, Laptop, Scale, HeartPulse, Layers, ChevronDown
} from 'lucide-react';

export default function CollegesPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [enquiringCollege, setEnquiringCollege] = useState('');

  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const streamOptions = [
    { id: 'all', label: 'All Streams' },
    { id: 'engineering', label: 'Engineering & Technology' },
    { id: 'management', label: 'Management & Commerce' },
    { id: 'medical', label: 'Medical & Health Sciences' },
    { id: 'law', label: 'Law & Legal Studies' },
    { id: 'applied', label: 'Applied Sciences' },
  ];

  const cityOptions = [
    { id: 'all', label: 'All Locations' },
    { id: 'lucknow', label: 'Lucknow, UP' },
    { id: 'greater noida', label: 'Greater Noida, UP' },
    { id: 'ghaziabad', label: 'Ghaziabad, UP' },
    { id: 'dehradun', label: 'Dehradun, UK' },
  ];

  const getStreamCount = (streamId: string) => {
    if (streamId === 'all') return COLLEGES.length;
    return COLLEGES.filter(c => c.streams.some(s => s.toLowerCase().includes(streamId.toLowerCase()))).length;
  };

  const getCityCount = (cityId: string) => {
    if (cityId === 'all') return COLLEGES.length;
    return COLLEGES.filter(c => c.city.toLowerCase().includes(cityId.toLowerCase())).length;
  };

  const streamOptionsWithCount = streamOptions.map(opt => ({
    ...opt,
    count: getStreamCount(opt.id)
  }));

  const cityOptionsWithCount = cityOptions.map(opt => ({
    ...opt,
    count: getCityCount(opt.id)
  }));

  const filteredColleges = COLLEGES.filter((col) => {
    const matchesStream = selectedStream === 'all' ||
      col.streams.some(s => s.toLowerCase().includes(selectedStream.toLowerCase()));

    const matchesCity = selectedCity === 'all' ||
      col.city.toLowerCase().includes(selectedCity.toLowerCase());

    const matchesSearch = searchQuery === '' ||
      col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.streams.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (col.campusType && col.campusType.toLowerCase().includes(searchQuery.toLowerCase())) ||
      col.accreditation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStream && matchesCity && matchesSearch;
  });

  const handleEnquire = (collegeName: string) => {
    setEnquiringCollege(collegeName);
    setCounsellingModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onOpenCounselling={() => { setEnquiringCollege(''); setCounsellingModalOpen(true); }}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO SECTION: Cinematic Dark Gradient with banner-colleges.jpg
          ========================================================================= */}
      <section className="colleges-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Badge */}
          <div className="page-hero-badge">
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span className="badge-text">
              VERIFIED DIRECTORY • 500+ CAMPUSES
            </span>
          </div>

          {/* Heading */}
          <h1 className="page-hero-title">
            Explore Verified Colleges on <span className="text-gradient-orange">What Truly Matters</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Compare accredited institutions by verified fees, placements & genuine reviews—no hidden capitation fees.
          </p>

          {/* Trust Value Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Verified Placements & Cut-offs</span>
            </div>
            <div className="hero-trust-pill">
              <Award size={15} color="var(--orange-primary)" />
              <span>UGC, AICTE & NAAC Accredited</span>
            </div>
            <div className="hero-trust-pill">
              <Building2 size={15} color="var(--orange-primary)" />
              <span>Direct Institutional Advisory Tie-ups</span>
            </div>
          </div>

          {/* CTA Row 
          <div className="hero-cta-row">
            <button
              onClick={() => { setEnquiringCollege(''); setCounsellingModalOpen(true); }}
              className="btn btn-primary"
              style={{ boxShadow: '0 12px 30px rgba(250, 100, 0, 0.4)' }}
            >
              <span>Get Free College Advisory</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#college-filters"
              className="btn btn-outline-white"
            >
              <span>Filter 500+ Campuses</span>
            </a>
          </div>*/}
        </div>
      </section>

      {/* =========================================================================
          FILTER & SEARCH BAR (UNIFIED STICKY TOOLBAR MATCHING COURSES)
          ========================================================================= */}
      <section className="courses-toolbar-section">
        <div className="container">
          <div className="courses-toolbar-container">
            {/* Custom Filter Dropdowns: Stream & Location */}
            <div className="colleges-filter-dropdowns-row">
              <CollegeFilterDropdown
                label="Stream"
                ariaLabel="Filter by Academic Stream"
                icon={<GraduationCap size={16} />}
                options={streamOptionsWithCount}
                selectedValue={selectedStream}
                onChange={setSelectedStream}
              />

              <CollegeFilterDropdown
                label="Location"
                ariaLabel="Filter by City or Location"
                icon={<MapPin size={16} />}
                options={cityOptionsWithCount}
                selectedValue={selectedCity}
                onChange={setSelectedCity}
              />

              {/* Reset Button (only shown if a filter is active) */}
              {(selectedStream !== 'all' || selectedCity !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedCity('all');
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
                placeholder="Search colleges, cities, streams..."
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
          COLLEGES LISTING GRID (RESPONSIVE CARDS)
          ========================================================================= */}
      <section style={{ padding: '36px 0 80px', flexGrow: 1 }}>
        <div className="container">
          {/* Header row with count & active filter badges */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.92rem', color: '#64748B', fontWeight: '600' }}>
                Showing <strong style={{ color: '#0A3871' }}>{filteredColleges.length}</strong> verified {filteredColleges.length === 1 ? 'institution' : 'institutions'}
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

              {/* Active City Tag */}
              {selectedCity !== 'all' && (
                <span className="active-filter-badge">
                  City: {cityOptions.find(c => c.id === selectedCity)?.label}
                  <button onClick={() => setSelectedCity('all')} aria-label="Remove city filter">
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

              {(selectedStream !== 'all' || selectedCity !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedCity('all');
                    setSearchQuery('');
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748B',
                    fontSize: '0.8rem',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontWeight: 600,
                    padding: '2px 6px'
                  }}
                >
                  Clear all
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: '#64748B' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#0A3871" /> UGC / NAAC Verified
              </span>
            </div>
          </div>

          {/* Colleges Cards Grid */}
          <div className="colleges-cards-grid">
            {filteredColleges.map((col) => {
              return (
                <div key={col.id} className="premium-college-card">
                  {/* Top Image Banner with Badges & Location Overlay */}
                  <div className="premium-college-card-img-wrapper">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="premium-college-card-img"
                      loading="lazy"
                    />
                    <div className="premium-college-card-overlay" />

                    {/* Top Left: Featured Badge */}
                    {/* Top Badges Bar - flex container to guarantee ZERO overlap */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        right: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        zIndex: 2,
                        pointerEvents: 'none'
                      }}
                    >
                      {col.featured ? (
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: '800',
                            background: 'var(--orange-primary)',
                            color: '#ffffff',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 4px 12px rgba(250, 100, 0, 0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                          }}
                        >
                          <Sparkles size={12} />
                          <span>Featured Partner</span>
                        </span>
                      ) : <div />}

                      {col.accreditation && (
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: '700',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            color: 'var(--navy-primary)',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.6)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: col.featured ? 'calc(100% - 150px)' : '100%'
                          }}
                          title={col.accreditation}
                        >
                          {col.accreditation}
                        </span>
                      )}
                    </div>

                    {/* Bottom Image Overlay: City & Est Year */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '16px',
                        right: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: '#ffffff',
                        fontSize: '0.825rem',
                        fontWeight: '600',
                        zIndex: 2,
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MapPin size={14} color="var(--orange-primary)" />
                        <span>{col.city}, {col.state}</span>
                      </span>
                      <span style={{ opacity: 0.92, fontSize: '0.775rem' }}>
                        Est. {col.established}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="premium-college-card-body">
                    {/* College Title */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        color: 'var(--navy-primary)',
                        lineHeight: '1.35',
                        marginBottom: '10px',
                        minHeight: '2.7em',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {col.name}
                    </h3>

                    {/* Campus Specialization / Type Tag */}
                    {col.campusType && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'var(--blue-light)',
                          color: 'var(--navy-primary)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.775rem',
                          fontWeight: '700',
                          marginBottom: '12px',
                          border: '1px solid rgba(10, 56, 113, 0.12)',
                          width: 'fit-content'
                        }}
                      >
                        <Award size={13} color="var(--orange-primary)" />
                        <span>{col.campusType}</span>
                      </div>
                    )}

                    {/* Tagline / Description */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#475569',
                        lineHeight: '1.55',
                        marginBottom: '14px',
                        minHeight: '2.7em',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {col.tagline}
                    </p>

                    {/* Available Program Streams */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {col.streams.slice(0, 3).map((stream, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: '600',
                            background: 'var(--bg-subtle)',
                            color: 'var(--text-body)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          {stream.split(' ')[0]}
                        </span>
                      ))}
                      {col.streams.length > 3 && (
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: '700',
                            background: 'var(--blue-light)',
                            color: 'var(--navy-primary)',
                            padding: '3px 7px',
                            borderRadius: '4px'
                          }}
                        >
                          +{col.streams.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Key Metrics: Fees, Avg Package, Highest Package */}
                    <div
                      style={{
                        background: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 14px',
                        marginBottom: '20px',
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr 1fr',
                        gap: '8px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                          Annual Fees
                        </span>
                        <strong style={{ color: 'var(--navy-primary)', fontSize: '0.85rem', display: 'block', marginTop: '2px' }}>
                          {col.feesRange.replace(' / year', '')}
                        </strong>
                      </div>
                      <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '8px' }}>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                          Avg Pkg
                        </span>
                        <strong style={{ color: 'var(--navy-primary)', fontSize: '0.95rem', display: 'block', marginTop: '2px' }}>
                          {col.avgPackage}
                        </strong>
                      </div>
                      <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '8px' }}>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                          Highest
                        </span>
                        <strong style={{ color: 'var(--orange-primary)', fontSize: '0.95rem', display: 'block', marginTop: '2px' }}>
                          {col.highestPackage}
                        </strong>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div style={{ marginTop: 'auto' }}>
                      <button
                        onClick={() => handleEnquire(col.name)}
                        className="btn btn-primary btn-sm"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          height: '44px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          borderRadius: '10px',
                          boxShadow: '0 4px 14px rgba(250, 100, 0, 0.25)'
                        }}
                      >
                        <span>Check Cutoffs & Enquire</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredColleges.length === 0 && (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '60px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 20px -2px rgba(10, 56, 113, 0.05)',
                maxWidth: '540px',
                margin: '30px auto'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(250, 100, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--orange-primary)'
                }}
              >
                <Search size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                No colleges found
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                No partner campuses match your selected category or search keyword.
              </p>
              <button
                onClick={() => { setSelectedStream('all'); setSelectedCity('all'); setSearchQuery(''); }}
                className="btn btn-primary btn-sm"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clean High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => setCounsellingModalOpen(true)} />

      <Footer
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        prefillData={{ collegeName: enquiringCollege }}
      />

      <InstitutionModal
        isOpen={institutionModalOpen}
        onClose={() => setInstitutionModalOpen(false)}
      />

      <WhatsAppButton />
    </main>
  );
}
