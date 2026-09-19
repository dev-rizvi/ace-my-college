'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenCounselling: () => void;
  tag?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ 
  onOpenCounselling,
  tag = 'START YOUR JOURNEY',
  title = 'Ready to find your own success pathway?',
  subtitle = 'Join thousands of students who found the right campus with zero pressure.',
  buttonText = 'Get Free Counselling Today'
}) => {
  return (
    <section style={{ padding: '40px 0 70px', background: 'transparent' }}>
      <div className="container">
        <div 
          style={{ 
            background: 'linear-gradient(135deg, #0A3871 0%, #062147 100%)', 
            borderRadius: '24px', 
            padding: '42px 48px', 
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 20px 45px -10px rgba(6, 33, 71, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
          className="clean-cta-banner"
        >
          <div style={{ maxWidth: '640px' }}>
            <span 
              style={{ 
                color: 'var(--orange-primary)', 
                fontSize: '0.825rem', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '6px'
              }}
            >
              {tag}
            </span>
            <h3 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', 
                fontWeight: '800', 
                color: '#ffffff', 
                margin: '0 0 8px 0',
                letterSpacing: '-0.02em',
                lineHeight: '1.25'
              }}
            >
              {title}
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
              {subtitle}
            </p>
          </div>

          <button 
            onClick={onOpenCounselling}
            className="btn btn-primary"
            style={{ 
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: '800',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(250, 100, 0, 0.45)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0
            }}
          >
            <span>{buttonText}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
