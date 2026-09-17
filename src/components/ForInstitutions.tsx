'use client';

import React from 'react';
import { 
  Target, Award, Share2, Megaphone, ArrowRight, TrendingUp, Users, Radio, 
  PhoneCall, Mail, BarChart3, CheckCircle2 
} from 'lucide-react';
import { INSTITUTION_PILLARS, MARKETING_FUNNEL_STEPS } from '@/lib/mock-data';

interface ForInstitutionsProps {
  onOpenInstitutionModal: () => void;
}

const pillarIconMap: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  Award: <Award size={28} />,
  Share2: <Share2 size={28} />,
  Megaphone: <Megaphone size={28} />,
};

const funnelIconMap: Record<string, React.ReactNode> = {
  Radio: <Radio size={24} />,
  PhoneCall: <PhoneCall size={24} />,
  Mail: <Mail size={24} />,
  BarChart3: <BarChart3 size={24} />,
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
            Helping premier institutes and universities scale qualified enrolments through strategy-led branding, targeted lead generation, and multi-city outreach campaigns.
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

        {/* Lead Generation Channel Mix & Ecosystem */}
        <div className="funnel-container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--orange-primary)', fontWeight: '700' }}>
              Lead Generation For The Education Sector
            </span>
            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginTop: '6px' }}>
              A Channel Mix, Backed by Performance Analytics
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '640px', margin: '8px auto 0' }}>
              Our branding and growth specialists build an engaged prospective audience, generate verified student leads, and accelerate your admissions cycle.
            </p>
          </div>

          <div className="funnel-grid">
            {MARKETING_FUNNEL_STEPS.map((step, idx) => (
              <div className="funnel-step-box" key={idx}>
                <div className="funnel-step-num">{step.step}</div>
                <div style={{ color: 'var(--orange-primary)', marginBottom: '10px' }}>
                  {funnelIconMap[step.icon]}
                </div>
                <h4 className="funnel-step-title">{step.channel}</h4>
                <p className="funnel-step-detail">{step.detail}</p>
              </div>
            ))}
          </div>

          {/* Two Engines & CTA Banner */}
          <div 
            style={{ 
              marginTop: '40px', 
              paddingTop: '30px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <span style={{ color: 'var(--orange-primary)', fontWeight: '700', fontSize: '0.85rem' }}>ENGINE 1</span>
              <h5 style={{ color: '#ffffff', fontSize: '1.1rem', margin: '4px 0 6px' }}>Alumni Relations Enhancement</h5>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                Transform your alumni into active brand ambassadors through email stories, digital spotlights, and reunion events.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <span style={{ color: '#60A5FA', fontWeight: '700', fontSize: '0.85rem' }}>ENGINE 2</span>
              <h5 style={{ color: '#ffffff', fontSize: '1.1rem', margin: '4px 0 6px' }}>Student Recruitment Campaigns</h5>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                Direct school seminars, career conclaves, and high-conversion counseling drives to attract top-calibre applicants.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>
                Better Reach. Better Leads. Better Admissions.
              </div>
              <button 
                onClick={onOpenInstitutionModal}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <span>Partner With ACE MY CAMPUS</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
