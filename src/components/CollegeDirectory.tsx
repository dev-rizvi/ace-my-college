'use client';

import React, { useState } from 'react';
import { MapPin, Award, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { COLLEGES, College } from '@/lib/mock-data';

interface CollegeDirectoryProps {
  selectedStream: string;
  setSelectedStream: (stream: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  onEnquireCollege: (collegeName: string) => void;
}

export const CollegeDirectory: React.FC<CollegeDirectoryProps> = ({
  selectedStream,
  setSelectedStream,
  selectedCity,
  setSelectedCity,
  onEnquireCollege,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

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
    const matchesSearch = searchTerm === '' || 
      col.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      col.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.city.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStream && matchesCity && matchesSearch;
  });

  return (
    <section className="py-section" id="colleges" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Institutions & Campus Options</span>
          <h2 className="section-title">Explore Top Partner Colleges</h2>
          <p className="section-subtitle center-block">
            Filter through recognized universities and colleges on real parameters: accreditation, annual fee structures, average packages, and authentic campus reviews.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="directory-filter-bar">
          {/* Stream Filter */}
          <div className="directory-filter-item">
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={16} color="var(--orange-primary)" /> Stream:
            </span>
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

          {/* Location Filter */}
          <div className="directory-filter-item">
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)' }}>
              Location:
            </span>
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

          {/* Search Box */}
          <div className="directory-search-box" style={{ flex: '1 1 220px' }}>
            <input
              type="text"
              className="form-input"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              placeholder="Search college name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            Showing {filteredColleges.length} Verified Colleges
          </span>
        </div>

        {/* Colleges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))', gap: '24px' }}>
          {filteredColleges.map((col) => (
            <div key={col.id} className="premium-college-card">
              {/* Image Banner */}
              <div className="premium-college-card-img-wrapper">
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className="premium-college-card-img"
                  loading="lazy"
                />
                <div className="premium-college-card-overlay" />

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

                {/* Bottom Overlay Info */}
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

              {/* Card Body */}
              <div className="premium-college-card-body">
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

                {/* Key Metrics: Fees & Placements */}
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

                <div style={{ marginTop: 'auto' }}>
                  <button 
                    onClick={() => onEnquireCollege(col.name)}
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
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px 20px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--navy-primary)', fontWeight: '700' }}>No colleges match this filter combination.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>Try resetting the stream or location, or reach our counsellors directly.</p>
            <button 
              onClick={() => { setSelectedStream('All Streams'); setSelectedCity('All Locations'); setSearchTerm(''); }}
              className="btn btn-outline btn-sm"
              style={{ marginTop: '16px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
