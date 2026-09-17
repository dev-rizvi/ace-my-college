'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { COLLEGES } from '@/lib/mock-data';
import { 
  MapPin, Award, Filter, ArrowRight, Sparkles, Building2, ShieldCheck, TrendingUp, GraduationCap, CheckCircle2 
} from 'lucide-react';

export default function CollegesPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [enquiringCollege, setEnquiringCollege] = useState('');

  const [selectedStream, setSelectedStream] = useState('All Streams');
  const [selectedCity, setSelectedCity] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');

  const streams = [
    'All Streams',
    'Engineering & Technology',
    'Medical & Health Sciences',
    'Management & Commerce',
    'Law & Legal Studies',
    'Design & Architecture'
  ];

  const cities = [
    'All Locations',
    'Lucknow',
    'Greater Noida',
    'Ghaziabad',
    'Dehradun'
  ];

  const filteredColleges = COLLEGES.filter((col) => {
    const matchesStream = selectedStream === 'All Streams' || col.streams.some(s => s.toLowerCase().includes(selectedStream.toLowerCase()));
    const matchesCity = selectedCity === 'All Locations' || col.city.toLowerCase().includes(selectedCity.toLowerCase()) || col.state.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.streams.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

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
            Filter accredited institutions across Lucknow, Uttar Pradesh, and nationwide by actual fee structures, 
            verified placement statistics, and genuine campus reviews with zero hidden capitation fees.
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

          {/* CTA Row */}
          <div className="hero-cta-row">
            <button 
              onClick={() => { setEnquiringCollege(''); setCounsellingModalOpen(true); }}
              className="btn btn-primary btn-lg"
              style={{ boxShadow: '0 12px 30px rgba(250, 100, 0, 0.4)' }}
            >
              <span>Get Free College Advisory</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="#college-filters"
              className="btn btn-outline-white btn-lg"
            >
              <span>Filter 500+ Campuses</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          IMPACT STATS RIBBON (FLOATING)
          ========================================================================= */}
      <section className="about-stats-ribbon">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <Building2 size={26} />
              </div>
              <div>
                <div className="about-stat-val">500+</div>
                <div className="about-stat-label">Accredited Partner Campuses</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <TrendingUp size={26} />
              </div>
              <div>
                <div className="about-stat-val">₹18.5 LPA</div>
                <div className="about-stat-label">Peak Verified Salary Package</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <div className="about-stat-val">₹0</div>
                <div className="about-stat-label">Capitation / Donation Policy</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <GraduationCap size={26} />
              </div>
              <div>
                <div className="about-stat-val">25+</div>
                <div className="about-stat-label">Specialised Career Streams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Content Section */}
      <section className="py-section" id="college-filters" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* Main Filter Toolbar */}
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: 'var(--radius-xl)', 
              padding: '28px', 
              boxShadow: 'var(--shadow-md)', 
              border: '1px solid var(--border-subtle)',
              marginBottom: '36px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', alignItems: 'flex-end' }}>
              <div className="form-group">
                <label className="form-label">
                  <Filter size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  Filter by Stream
                </label>
                <select
                  className="form-select"
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                >
                  {streams.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Filter by Location</label>
                <select
                  className="form-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.map((c, idx) => (
                    <option key={idx} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Search College or Keyword</label>
                <input
                  type="text"
                  placeholder="e.g. BBDU, Amity, Lucknow, Engineering, MBA..."
                  className="form-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => { setSelectedStream('All Streams'); setSelectedCity('All Locations'); setSearchQuery(''); }}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', height: '44px' }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Colleges Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '30px' }}>
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
        </div>
      </section>

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
