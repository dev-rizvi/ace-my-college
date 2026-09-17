'use client';

import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onOpenCounselling: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenCounselling }) => {
  return (
    <section style={{ padding: '40px 0 80px', background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="cta-banner">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255, 255, 255, 0.2)', padding: '6px 16px', borderRadius: 'var(--radius-full)', display: 'inline-block', marginBottom: '16px' }}>
              Your Campus • Your Growth • Your Success
            </span>

            <h2 className="cta-banner-title">
              Not Sure What to Choose?<br />
              Let&apos;s Find the Right Path Together.
            </h2>

            <p className="cta-banner-desc">
              Speak with an experienced career mentor who listens to your ambitions, respects your budget, and gives unbiased direction.
            </p>

            <div className="cta-banner-buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenCounselling}
                className="btn btn-lg"
                style={{ background: '#ffffff', color: 'var(--navy-primary)', fontWeight: '700', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}
              >
                <span>Get Free Career Guidance</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS,%20I%20would%20like%20to%20get%20free%20guidance%20for%20my%20career%20and%20college%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-outline-white"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div style={{ marginTop: '24px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              Call our Lucknow Admissions Desk: <strong>+91 70545 45455</strong> • <strong>+91 96483 13555</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
