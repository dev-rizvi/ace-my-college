'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CoreServicesProps {
  onOpenCounselling: (serviceName?: string) => void;
  onOpenCollegeFilter: () => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onOpenCounselling, onOpenCollegeFilter }) => {
  const whatWeDoCards = [
    {
      id: 'career-guidance',
      title: 'Personalized Career Guidance',
      image: '/images/what-we-do-career-guidance.jpg',
      points: [
        'Profile-based program and college selection',
        'Stream & specialization clarity tailored to your strengths',
        'ROI & fee structure comparative analysis',
      ],
      actionText: 'Get Career Guidance',
    },
    {
      id: 'college-shortlisting',
      title: 'College Shortlisting',
      image: '/images/what-we-do-colleges.jpg',
      points: [
        '200+ partner institutions across India',
        'Evaluation based on faculty, campus & placement records',
        'Transparent, 100% unbiased recommendations',
      ],
      actionText: 'Explore Partner Colleges',
    },
    {
      id: 'admission-support',
      title: 'Admission Support',
      image: '/images/what-we-do-counselling.jpg',
      points: [
        'Application & documentation assistance',
        'GD & Personal interview preparation',
        'Direct institutional liaison & scholarship guidance',
      ],
      actionText: 'Get Admission Support',
    },
  ];

  return (
    <section className="py-section" id="what-we-do" style={{ background: '#F8FAFC' }}>
      <div className="container">
        {/* Section Heading as per Slide 4 */}
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span className="section-tag orange">OUR CORE EXPERTISE</span>
          <h2 className="section-title" style={{ textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
            WHAT WE DO
          </h2>
          <p className="section-subtitle center-block" style={{ maxWidth: '640px' }}>
            Clear, cluster-free guidance tailored to help you navigate college admissions with absolute confidence.
          </p>
        </div>

        {/* 3 Column Luxury Service Cards (Slide 4 Image 2 Reference) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '28px',
            marginBottom: '54px'
          }}
        >
          {whatWeDoCards.map((card) => (
            <div 
              key={card.id}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.08)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="what-we-do-card"
            >
              {/* Card Image */}
              <div style={{ height: '210px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    background: 'linear-gradient(180deg, transparent 60%, rgba(4, 22, 48, 0.4) 100%)' 
                  }} 
                />
              </div>

              {/* Card Deep Blue Bottom Panel (Slide 4 Image 2 Reference) */}
              <div 
                style={{ 
                  background: 'linear-gradient(180deg, #0A3871 0%, #062147 100%)', 
                  color: '#ffffff', 
                  padding: '26px 24px', 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '800', 
                      color: '#ffffff', 
                      marginBottom: '16px',
                      fontFamily: 'var(--font-outfit), sans-serif',
                      borderBottom: '2px solid rgba(250, 100, 0, 0.6)',
                      paddingBottom: '8px'
                    }}
                  >
                    {card.title}
                  </h3>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {card.points.map((pt, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '0.9rem', color: '#E2E8F0', lineHeight: '1.45' }}>
                        <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    if (card.id === 'college-shortlisting') {
                      onOpenCollegeFilter();
                    } else {
                      onOpenCounselling(card.title);
                    }
                  }}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    padding: '11px', 
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    boxShadow: '0 4px 14px rgba(250, 100, 0, 0.3)'
                  }}
                >
                  <span>{card.actionText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guaranteed Guidance Callout Banner as per Slide 6 */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #041630 0%, #0A3871 60%, #082852 100%)',
            borderRadius: '20px',
            padding: '38px 40px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 40px -10px rgba(4, 22, 48, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span 
              style={{ 
                color: 'var(--orange-primary)', 
                fontSize: '0.8rem', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                background: 'rgba(250, 100, 0, 0.15)',
                padding: '4px 12px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              CONFUSED ABOUT CHOOSING THE RIGHT COLLEGE OR PROGRAM?
            </span>
            <h3 
              style={{ 
                fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', 
                color: '#ffffff', 
                fontWeight: '800',
                marginBottom: '8px',
                fontFamily: 'var(--font-outfit), sans-serif'
              }}
            >
              Not sure which college is right for you?
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              You&apos;re not alone. We&apos;re here to help you make the right choice with confidence.
            </p>
          </div>

          <button 
            onClick={() => onOpenCounselling("College Counselling Session")}
            className="btn btn-primary btn-lg"
            style={{ 
              whiteSpace: 'nowrap',
              padding: '14px 28px',
              borderRadius: '10px',
              fontWeight: '800',
              boxShadow: '0 8px 24px rgba(250, 100, 0, 0.4)'
            }}
          >
            <span>Get Free Counselling Session</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};
