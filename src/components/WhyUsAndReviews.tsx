'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/mock-data';

export const WhyUsAndReviews: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-section" id="why-us" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="why-us-grid">
          {/* Left Column: Why Students & Parents Choose Us */}
          <div>
            <span className="section-tag">Unbiased Advice & Mentorship</span>
            <h2 className="section-title">
              Why Students & Parents Choose <span style={{ color: 'var(--orange-primary)' }}>ACE MY CAMPUS</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
              We cut through the clutter of college advertisements and marketing noise. Our core mission is empowering every student to make confident career and higher education choices.
            </p>

            <div className="checklist-group">
              <div className="check-item">
                <div className="check-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="check-title">Student-First Guidance, Always</h4>
                  <p className="check-desc">We never push seats or institutional quotas. Your aspirations dictate the choice.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="check-title">Career Before College</h4>
                  <p className="check-desc">We connect education decisions to your long-term career trajectory, not just seat availability.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="check-title">Whole-Student Matching</h4>
                  <p className="check-desc">We evaluate academics, budget, personality, location and family goals in one balanced matrix.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="check-title">Guidance, Not Pressure</h4>
                  <p className="check-desc">Consultative, patient, and transparent conversations so you choose with complete conviction.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="check-title">Lifelong Support Beyond Admission</h4>
                  <p className="check-desc">Ongoing mentoring, internship connections, and transition help through your degree years.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Testimonial Slider Card */}
          <div>
            <div className="testimonial-card-frame">
              <span className="quote-icon-watermark">“</span>
              
              <div className="test-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" />
                ))}
              </div>

              <p className="test-quote">&ldquo;{current.quote}&rdquo;</p>

              <div className="test-author-row">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="test-avatar" 
                />
                <div>
                  <h4 className="test-author-name">{current.name}</h4>
                  <div className="test-author-meta">{current.course}</div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--navy-primary)', fontWeight: '700' }}>
                    {current.college} • {current.city}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="test-controls">
                <div className="slider-dots">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      className={`slider-dot ${i === currentIdx ? 'active' : ''}`}
                      onClick={() => setCurrentIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    type="button"
                    className="slider-arrow-btn" 
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    type="button"
                    className="slider-arrow-btn" 
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
