'use client';

import React from 'react';
import { Target, Award, Share2, Megaphone, ArrowRight, TrendingUp } from 'lucide-react';
import { INSTITUTION_PILLARS } from '@/lib/mock-data';

interface ForInstitutionsProps {
  onOpenInstitutionModal: () => void;
}

const pillarIconMap: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  Award: <Award size={28} />,
  Share2: <Share2 size={28} />,
  Megaphone: <Megaphone size={28} />,
};

export const ForInstitutions: React.FC<ForInstitutionsProps> = ({ onOpenInstitutionModal }) => {
  return (
    <section className="py-section-lg institution-section" id="for-institutions">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag" style={{ background: 'rgba(242, 107, 33, 0.2)', color: '#FF782D', borderColor: 'rgba(242, 107, 33, 0.4)' }}>
            Education Marketing Specialists
          </span>
          <h2 className="section-title">Grow Your Institution With Smarter Education Marketing</h2>
          <p className="section-subtitle center-block" style={{ color: '#94A3B8' }}>
            Helping premier institutes and universities scale qualified enrolments through strategy-led branding, targeted outreach, and multi-city campaigns.
          </p>
        </div>

        {/* Four Marketing Pillars */}
        <div className="pillars-grid">
          {INSTITUTION_PILLARS.map((pillar) => (
            <div className="pillar-card" key={pillar.id}>
              <div className="pillar-icon-box">
                {pillarIconMap[pillar.icon] || <Target size={28} />}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
              <div className="pillar-metric">
                <TrendingUp size={16} />
                <span>{pillar.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button 
            onClick={onOpenInstitutionModal}
            className="btn btn-primary btn-lg"
            style={{ padding: '14px 34px', borderRadius: '12px', fontWeight: '800' }}
          >
            <span>Partner With ACE MY CAMPUS</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
