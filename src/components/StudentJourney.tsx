'use client';

import React, { useState } from 'react';
import { 
  Search, Brain, BookOpen, GitCompare, Target, CheckCircle, Send, TrendingUp, 
  ArrowRight, User, ShieldCheck, Sparkles 
} from 'lucide-react';
import { STUDENT_JOURNEY, JourneyStep } from '@/lib/mock-data';

const journeyIcons: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Brain: <Brain size={20} />,
  BookOpen: <BookOpen size={20} />,
  GitCompare: <GitCompare size={20} />,
  Target: <Target size={20} />,
  CheckCircle: <CheckCircle size={20} />,
  Send: <Send size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

interface StudentJourneyProps {
  onOpenCounselling: (stepName?: string) => void;
}

export const StudentJourney: React.FC<StudentJourneyProps> = ({ onOpenCounselling }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep: JourneyStep = STUDENT_JOURNEY[activeStepIndex];

  return (
    <section className="py-section journey-section" id="journey">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">The ACE MY CAMPUS Student Journey</span>
          <h2 className="section-title">Eight Steps, First Question to Lifelong Support</h2>
          <p className="section-subtitle center-block">
            A clear, transparent, and structured 8-step roadmap from self-discovery and college matching to enrolment and long-term career growth.
          </p>
        </div>

        {/* 8-Step Interactive Timeline Bar */}
        <div className="journey-timeline-nav">
          {STUDENT_JOURNEY.map((item, index) => {
            const isActive = index === activeStepIndex;
            return (
              <div 
                key={item.step} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px', 
                  minWidth: '100px',
                  cursor: 'pointer' 
                }}
                onClick={() => setActiveStepIndex(index)}
              >
                <button
                  type="button"
                  className={`journey-step-btn ${isActive ? 'active' : ''}`}
                  aria-label={`Step ${item.step}: ${item.title}`}
                >
                  {item.step}
                </button>
                <span 
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? 'var(--orange-primary)' : 'var(--navy-primary)',
                    textAlign: 'center',
                    transition: 'color 200ms ease'
                  }}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Presentation Card */}
        <div className="journey-detail-card">
          <div>
            <div className="journey-step-badge">
              {journeyIcons[activeStep.icon] || <Sparkles size={16} />}
              <span>Step {activeStep.step} of 8</span>
            </div>

            <h3 className="journey-step-title">{activeStep.title}</h3>
            <p className="journey-step-tagline">{activeStep.tagline}</p>
            <p className="journey-step-text">{activeStep.description}</p>

            <div className="journey-callout-box">
              <div className="journey-callout-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} color="var(--navy-primary)" />
                <span>What you do at this stage:</span>
              </div>
              <p className="journey-callout-desc">{activeStep.studentAction}</p>
            </div>

            <div className="journey-callout-box" style={{ borderLeftColor: 'var(--orange-primary)', background: 'var(--orange-light)' }}>
              <div className="journey-callout-title" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--orange-primary)' }}>
                <ShieldCheck size={16} />
                <span>How ACE MY CAMPUS guides you:</span>
              </div>
              <p className="journey-callout-desc">{activeStep.aceGuidance}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                Guiding Principles
              </span>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--navy-primary)', marginTop: '8px', marginBottom: '14px' }}>
                Guidance, Not Pressure. Career Before College.
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                We believe higher education decisions shape the next 40 years of a student&apos;s life. Every stage of the ACE Journey is built around honesty, data, and continuous mentorship.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={() => onOpenCounselling(`Step ${activeStep.step}: ${activeStep.title}`)}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Start Step {activeStep.step} With an Expert</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : STUDENT_JOURNEY.length - 1))}
                  className="btn btn-outline"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev < STUDENT_JOURNEY.length - 1 ? prev + 1 : 0))}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
