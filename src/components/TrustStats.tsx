'use client';

import React from 'react';
import { Building2, Users, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const TrustStats: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 75px', background: '#ffffff', position: 'relative' }}>
      <div className="container text-center">
        {/* Section Header */}
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
            <span>PROVEN EXCELLENCE</span>
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

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
            Empowering students across India with data-backed counseling, transparent fee cutoffs, and genuine admissions.
          </p>
        </div>

        {/* 3 Large Trust Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '28px' 
          }}
        >
          {/* Stat Card 1 */}
          <div 
            style={{ 
              background: '#F8FAFC', 
              borderRadius: '20px', 
              padding: '38px 28px', 
              border: '1px solid rgba(10, 56, 113, 0.08)',
              boxShadow: '0 10px 30px -5px rgba(6, 33, 71, 0.06)',
              position: 'relative',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '16px', 
                background: 'var(--orange-light)', 
                color: 'var(--orange-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 18px',
                boxShadow: '0 6px 18px rgba(250, 100, 0, 0.2)'
              }}
            >
              <Building2 size={28} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', 
                fontWeight: '900', 
                color: 'var(--navy-primary)', 
                lineHeight: 1, 
                marginBottom: '10px' 
              }}
            >
              1000+
            </h3>
            <h5 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '6px' }}>
              Partner Institutions
            </h5>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
              Accredited colleges and universities across Uttar Pradesh, Delhi NCR, and PAN India.
            </p>
          </div>

          {/* Stat Card 2 */}
          <div 
            style={{ 
              background: '#F8FAFC', 
              borderRadius: '20px', 
              padding: '38px 28px', 
              border: '1px solid rgba(10, 56, 113, 0.08)',
              boxShadow: '0 10px 30px -5px rgba(6, 33, 71, 0.06)',
              position: 'relative',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '16px', 
                background: 'var(--blue-light)', 
                color: 'var(--navy-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 18px',
                boxShadow: '0 6px 18px rgba(10, 56, 113, 0.15)'
              }}
            >
              <Users size={28} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', 
                fontWeight: '900', 
                color: 'var(--navy-primary)', 
                lineHeight: 1, 
                marginBottom: '10px' 
              }}
            >
              10,000+
            </h3>
            <h5 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '6px' }}>
              Successful Admissions
            </h5>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
              Students guided with personalized counseling across Lucknow, Kanpur, Delhi NCR &amp; Pune.
            </p>
          </div>

          {/* Stat Card 3 */}
          <div 
            style={{ 
              background: '#F8FAFC', 
              borderRadius: '20px', 
              padding: '38px 28px', 
              border: '1px solid rgba(10, 56, 113, 0.08)',
              boxShadow: '0 10px 30px -5px rgba(6, 33, 71, 0.06)',
              position: 'relative',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="trust-stat-box"
          >
            <div 
              style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '16px', 
                background: 'var(--orange-light)', 
                color: 'var(--orange-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 18px',
                boxShadow: '0 6px 18px rgba(250, 100, 0, 0.2)'
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', 
                fontWeight: '900', 
                color: 'var(--orange-primary)', 
                lineHeight: 1, 
                marginBottom: '10px' 
              }}
            >
              100%
            </h3>
            <h5 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '6px' }}>
              Guaranteed Honest Guidance
            </h5>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
              Transparent fee disclosures, personal 1-on-1 counseling model, and zero capitation fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
