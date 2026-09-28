'use client';

import React from 'react';
import { Building2, Users, Award, Sparkles } from 'lucide-react';

export const TrustStats: React.FC = () => {
  return (
    <section style={{ padding: '110px 0 80px', background: '#ffffff', position: 'relative' }}>
      <div className="container text-center">
        {/* Section Header as per Slide 5 */}
        <div style={{ maxWidth: '750px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'var(--orange-light)', 
              color: 'var(--orange-primary)', 
              padding: '4px 14px', 
              borderRadius: '9999px', 
              fontSize: '0.8rem',
              fontWeight: '800',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            <Sparkles size={14} />
            <span>UNMATCHED CREDIBILITY</span>
          </div>

          <h2 
            style={{ 
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
              fontWeight: '800', 
              color: 'var(--navy-primary)', 
              letterSpacing: '-0.02em',
              marginBottom: '12px' 
            }}
          >
            Why trust ACE MY CAMPUS ?
          </h2>

          <div 
            style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #FA6400, #FF782D)', 
              borderRadius: '2px', 
              margin: '0 auto 16px' 
            }} 
          />

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Empowering students and parents with unbiased guidance, verified college options, and zero capitation fees.
          </p>
        </div>

        {/* 3 Bold Stat Cards matching Slide 5 Image 2 */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '28px',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {/* Card 1: 200+ Partner Institutions Across India */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)', 
              borderRadius: '22px', 
              padding: '42px 28px', 
              color: '#ffffff',
              boxShadow: '0 14px 34px -6px rgba(250, 100, 0, 0.35)',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '58px', 
                height: '58px', 
                borderRadius: '16px', 
                background: 'rgba(255, 255, 255, 0.2)', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '18px'
              }}
            >
              <Building2 size={30} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.8rem, 4.5vw, 3.5rem)', 
                fontWeight: '900', 
                color: '#ffffff', 
                lineHeight: 1, 
                marginBottom: '12px' 
              }}
            >
              200+
            </h3>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
              Partner institutions across India
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.45', margin: 0 }}>
              Accredited universities &amp; top management institutes
            </p>
          </div>

          {/* Card 2: 2500+ Successful admissions */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)', 
              borderRadius: '22px', 
              padding: '42px 28px', 
              color: '#ffffff',
              boxShadow: '0 14px 34px -6px rgba(250, 100, 0, 0.35)',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '58px', 
                height: '58px', 
                borderRadius: '16px', 
                background: 'rgba(255, 255, 255, 0.2)', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '18px'
              }}
            >
              <Users size={30} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.8rem, 4.5vw, 3.5rem)', 
                fontWeight: '900', 
                color: '#ffffff', 
                lineHeight: 1, 
                marginBottom: '12px' 
              }}
            >
              2500+
            </h3>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
              Successful admissions
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.45', margin: 0 }}>
              Presence in Pune, Mumbai, Delhi, Lucknow &amp; PAN India
            </p>
          </div>

          {/* Card 3: 100% Placement support */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)', 
              borderRadius: '22px', 
              padding: '42px 28px', 
              color: '#ffffff',
              boxShadow: '0 14px 34px -6px rgba(250, 100, 0, 0.35)',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '58px', 
                height: '58px', 
                borderRadius: '16px', 
                background: 'rgba(255, 255, 255, 0.2)', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '18px'
              }}
            >
              <Award size={30} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.8rem, 4.5vw, 3.5rem)', 
                fontWeight: '900', 
                color: '#ffffff', 
                lineHeight: 1, 
                marginBottom: '12px' 
              }}
            >
              100%
            </h3>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
              Placement support
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.45', margin: 0 }}>
              Personal One-on-One Counselling Model
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
