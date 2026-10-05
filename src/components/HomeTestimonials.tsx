'use client';

import React from 'react';
import { Star, ShieldCheck, HeartHandshake, Award, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/mock-data';

interface HomeTestimonialsProps {
  onOpenCounselling?: () => void;
}

export const HomeTestimonials: React.FC<HomeTestimonialsProps> = ({ onOpenCounselling }) => {
  return (
    <section className="py-section" id="student-stories" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(250, 100, 0, 0.1)', 
              color: 'var(--orange-primary)', 
              padding: '6px 14px', 
              borderRadius: '999px', 
              fontSize: '0.82rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              marginBottom: '12px' 
            }}
          >
            <Star size={14} fill="var(--orange-primary)" /> Verified Student &amp; Parent Experiences
          </span>

          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: 'var(--navy-primary)', fontWeight: '800', lineHeight: '1.25', marginBottom: '14px', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Stories of Clarity, <span style={{ color: '#FF6F1E' }}>Confidence &amp; Growth</span>
          </h2>

          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Discover how thousands of students and parents cut through university advertising noise, evaluated real ROI, and secured merit admissions with complete peace of mind.
          </p>
        </div>

        {/* 3 Prominent Testimonial Cards matching Page 2 Screenshot */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '28px', 
            marginBottom: '40px' 
          }}
        >
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '32px 28px',
                boxShadow: '0 4px 20px -2px rgba(10, 56, 113, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(10, 56, 113, 0.14)';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(10, 56, 113, 0.06)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {/* Star Rating & Role Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    background: 'rgba(10, 56, 113, 0.08)', 
                    color: '#0A3871', 
                    padding: '4px 10px', 
                    borderRadius: '999px' 
                  }}
                >
                  Verified Admit
                </span>
              </div>

              {/* Main Quote */}
              <h3 
                style={{ 
                  fontSize: '1.15rem', 
                  color: '#0A3871', 
                  fontWeight: '800', 
                  marginBottom: '14px', 
                  lineHeight: '1.45' 
                }}
              >
                &ldquo;{rev.quote}&rdquo;
              </h3>

              {/* Story Details */}
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                {rev.id === '1' && 'In 12th grade, everyone told me to prepare for IIT without knowing if I liked coding or research. ACE MY CAMPUS did aptitude profiling with me, identified my passion for Artificial Intelligence, and helped me secure a high scholarship at Bennett University.'}
                {rev.id === '2' && 'ACE cut through the noise, evaluated our family budget, and matched me with high-placement programs in Business Analytics. Their whole-student matching approach made all the difference.'}
                {rev.id === '3' && 'The admission ecosystem is rife with fake consultants making false promises. ACE gave us accurate cut-off analysis, transparent state counseling guidance, and verified fee breakdowns.'}
              </p>

              {/* Author Footer Row */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  paddingTop: '18px', 
                  borderTop: '1px solid #F1F5F9' 
                }}
              >
                <img
                  src={rev.image}
                  alt={rev.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--orange-primary)',
                    boxShadow: '0 4px 12px rgba(250, 100, 0, 0.2)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: '800', color: '#0A3871', fontSize: '1rem' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#0A3871', fontWeight: '600' }}>{rev.college}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>{rev.course} • {rev.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div 
          style={{ 
            background: '#F8FAFC', 
            borderRadius: '14px', 
            padding: '16px 24px', 
            border: '1px solid #E2E8F0', 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '16px' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: '600' }}>
            <Star size={16} fill="#F59E0B" color="#F59E0B" />
            <span>4.9 / 5 Rating (1,200+ Genuine Reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: '600' }}>
            <HeartHandshake size={16} color="var(--orange-primary)" />
            <span>100% Student &amp; Parent Verified</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: '600' }}>
            <ShieldCheck size={16} color="#0A3871" />
            <span>Zero Sponsored Bias Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
