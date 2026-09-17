'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass, Star, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCounselling: (prefill?: { stream?: string; classLevel?: string; location?: string }) => void;
  onFilterColleges: (stream: string, location: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling, onFilterColleges }) => {
  const [stream, setStream] = useState('Engineering & Technology');
  const [classLevel, setClassLevel] = useState('Class 12 / Passed');
  const [location, setLocation] = useState('Lucknow & Uttar Pradesh');

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterColleges(stream, location);
    const el = document.getElementById('colleges');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-glow-bg" />
      
      <div className="container hero-grid">
        {/* Left Column: Headline & Action */}
        <div className="hero-content">
          <div className="hero-tag-badge">
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span>Student-First Education &amp; Career Guidance</span>
          </div>

          <h1 className="hero-title">
            Discover the Right Career.<br className="d-none-sm" /> 
            Choose the Right Education.<br className="d-none-sm" /> 
            <span className="highlight-orange">Build a Successful Future.</span>
          </h1>

          <p className="hero-description">
            ACE MY CAMPUS is your student-first platform for career discovery, course exploration, 
            college comparison and expert guidance — from clarity to admission and beyond.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => onOpenCounselling({ stream, classLevel, location })}
              className="btn btn-primary btn-lg"
              id="hero-cta-counselling"
            >
              <span>Get Free Counselling</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#courses" 
              className="btn btn-outline btn-lg"
              id="hero-cta-explore"
            >
              <span>Explore Careers &amp; Courses</span>
            </a>
          </div>

          {/* Value Checklist Row */}
          <div className="hero-checklist-row">
            <div className="hero-check-pill">
              <CheckCircle2 size={16} color="var(--orange-primary)" />
              <span>100% Free Initial Guidance</span>
            </div>
            <div className="hero-check-pill">
              <CheckCircle2 size={16} color="var(--orange-primary)" />
              <span>Guidance, Not Pressure</span>
            </div>
            <div className="hero-check-pill">
              <CheckCircle2 size={16} color="var(--orange-primary)" />
              <span>Verified Partner Admissions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual & Floating Form */}
        <div className="hero-visual-wrapper">
          {/* Main Visual Image Card */}
          <div className="hero-image-card">
            <img 
              src="/images/hero-students.jpg" 
              alt="Diverse Indian College Students - ACE MY CAMPUS" 
              className="hero-students-img"
            />

            {/* Floating Top Pill Stat */}
            <div className="hero-floating-stat">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ background: 'rgba(10, 56, 113, 0.08)', color: 'var(--navy-primary)', padding: '6px', borderRadius: '8px', display: 'flex' }}>
                  <GraduationCap size={18} />
                </div>
                <div className="stat-col">
                  <span className="stat-num">10,000+</span>
                  <span className="stat-lbl">Students Guided</span>
                </div>
              </div>

              <div style={{ height: '28px', width: '1px', background: '#E2E8F0' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ background: '#FEF3C7', color: '#D97706', padding: '6px', borderRadius: '8px', display: 'flex' }}>
                  <Star size={16} fill="#D97706" />
                </div>
                <div className="stat-col">
                  <span className="stat-num">4.8 / 5</span>
                  <span className="stat-lbl">Rating</span>
                </div>
              </div>
            </div>

            {/* Floating Bottom Trust Pill */}
            <div className="hero-floating-badge-bottom">
              <span className="verified-dot" />
              <span>500+ Official University Partners</span>
            </div>
          </div>

          {/* Floating 'Find the best path for you' form */}
          <div className="hero-finder-card">
            <div className="finder-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="finder-icon-wrap">
                  <Compass size={20} color="#ffffff" />
                </div>
                <div>
                  <h2 className="finder-title">Find the Best Path for You</h2>
                  <p className="finder-subtitle">Match verified colleges &amp; degrees tailored to your aspirations</p>
                </div>
              </div>
              <span className="finder-ai-chip">
                <Sparkles size={12} />
                <span>AI Matcher</span>
              </span>
            </div>

            <form onSubmit={handleFinderSubmit} className="finder-form-layout">
              <div className="finder-fields-row">
                <div className="finder-field">
                  <label className="form-label">I want to explore</label>
                  <select 
                    className="finder-select"
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    id="select-interest"
                  >
                    <option value="Engineering & Technology">Engineering &amp; Technology</option>
                    <option value="Medical & Health Sciences">Medical &amp; Sciences</option>
                    <option value="Management & Commerce">Management &amp; MBA</option>
                    <option value="Law & Legal Studies">Law &amp; Legal</option>
                    <option value="Design & Architecture">Design &amp; Arch</option>
                    <option value="Postgraduate & Global Pathways">Postgraduate / Global</option>
                  </select>
                </div>

                <div className="finder-field">
                  <label className="form-label">Select Class</label>
                  <select 
                    className="finder-select"
                    value={classLevel}
                    onChange={(e) => setClassLevel(e.target.value)}
                    id="select-class"
                  >
                    <option value="Class 10 / 11">Class 10 / 11</option>
                    <option value="Class 12 / Passed">Class 12 / Passed</option>
                    <option value="Undergraduate (College)">Undergraduate (UG)</option>
                    <option value="Postgraduate Aspirant">Postgraduate (PG)</option>
                  </select>
                </div>

                <div className="finder-field">
                  <label className="form-label">Study Location</label>
                  <select 
                    className="finder-select"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    id="select-location"
                  >
                    <option value="Lucknow & Uttar Pradesh">Lucknow &amp; UP</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bangalore & South India">Bangalore &amp; South</option>
                    <option value="Pune & Maharashtra">Pune &amp; West</option>
                    <option value="All India">Pan India</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary finder-submit-btn"
                id="btn-explore-options"
              >
                <span>Explore Matched Colleges &amp; Career Options</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
