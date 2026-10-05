'use client';

import React from 'react';

interface TopCollegesShowcaseProps {
  onOpenCounselling?: (collegeName?: string) => void;
}

export const TopCollegesShowcase: React.FC<TopCollegesShowcaseProps> = ({ onOpenCounselling }) => {
  const partnerLogos = [
    {
      id: 'amity',
      name: 'Amity University',
      src: '/images/colleges/logos/amity.jpg',
      alt: 'Amity University',
      maxWidth: '155px',
      mixBlend: true
    },
    {
      id: 'jaipuria',
      name: 'Jaipuria Institute of Management',
      src: '/images/colleges/logos/jaipuria.jpg',
      alt: 'Jaipuria Institute of Management',
      maxWidth: '155px',
      mixBlend: true
    },
    {
      id: 'bbdu',
      name: 'Babu Banarasi Das University (BBDU)',
      src: '/images/colleges/logos/bbdu-blue.png',
      alt: 'BBDU Lucknow',
      maxWidth: '155px'
    },
    {
      id: 'maharishi',
      name: 'Maharishi University of Information Technology (MUIT)',
      src: '/images/colleges/logos/maharishi.png',
      alt: 'Maharishi University',
      maxWidth: '150px'
    },
    {
      id: 'aimt',
      name: 'Ambalika Institute of Management & Technology (AIMT)',
      src: '/images/colleges/logos/aimt.png',
      alt: 'AIMT Lucknow',
      maxWidth: '150px'
    }
  ];

  return (
    <section 
      id="top-colleges" 
      style={{ 
        background: '#F8FAFC', 
        padding: '50px 0 58px',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Title */}
        <h2 
          style={{ 
            fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', 
            color: '#1E293B', 
            fontWeight: '800', 
            margin: '0 0 32px 0', 
            fontFamily: 'var(--font-outfit), sans-serif',
            letterSpacing: '-0.01em'
          }}
        >
          Top Colleges &amp; <span style={{ color: '#FF6F1E' }}>Universities</span>
        </h2>

        {/* Only These 5 Logos Row Matching The User Screenshot */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '20px' 
          }}
        >
          {partnerLogos.map((college) => (
            <div
              key={college.id}
              onClick={() => onOpenCounselling && onOpenCounselling(college.name)}
              style={{
                flex: '0 0 205px',
                width: '205px',
                height: '105px',
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #EEF2F6',
                boxShadow: '0 4px 16px rgba(10, 56, 113, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px -2px rgba(10, 56, 113, 0.12)';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 56, 113, 0.04)';
                e.currentTarget.style.borderColor = '#EEF2F6';
              }}
              title={college.name}
            >
              <img
                src={college.src}
                alt={college.alt}
                style={{
                  maxHeight: '52px',
                  maxWidth: college.maxWidth || '150px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  ...(college.mixBlend ? { mixBlendMode: 'multiply' } : {})
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
