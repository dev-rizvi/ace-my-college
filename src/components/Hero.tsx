'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, AlertCircle,
  BookOpen, Compass, Building2, GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenCounselling: (prefill?: { stream?: string; classLevel?: string; location?: string }) => void;
  onFilterColleges: (stream: string, location: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling, onFilterColleges }) => {
  // Form State as per Slide 2: Name, Phone Number, Email address, Course( MBA, PGDM, BBA, B.com), Location, Target college (Optional)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [location, setLocation] = useState('');
  const [targetCollege, setTargetCollege] = useState('');
  const [agreed, setAgreed] = useState(true);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validatePhone = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const validateEmail = (mail: string) => {
    if (!mail) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!phone.trim() || !validatePhone(phone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (email && !validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!location.trim()) {
      setErrorMsg('Please enter your city/location.');
      return;
    }

    if (!agreed) {
      setErrorMsg('Please accept terms to proceed with consultation.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/counselling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: location.trim(),
          class_level: 'Higher Education / Degree Aspirant',
          interested_stream: course,
          preferred_location: location.trim(),
          message: targetCollege ? `Target College: ${targetCollege.trim()}` : 'General Consultation',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(d.error || 'Failed to submit. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again or submit your inquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        color: '#ffffff',
        padding: '50px 0 54px',
        overflow: 'hidden',
        backgroundColor: '#041630',
      }}
    >
        {/* Full-visibility celebration photo without any blur */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/images/hero-graduation-banner.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            opacity: 1,
            zIndex: 0,
          }}
        />
        {/* Light subtle overlay: provides soft contrast on left for text while keeping photo clear and visible */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(4, 22, 48, 0.65) 0%, rgba(4, 22, 48, 0.35) 45%, rgba(0, 0, 0, 0.05) 100%)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-consultation-grid">
            {/* Left Column: Heading and Tagline as requested in Slide 1 */}
            <div style={{ color: '#ffffff' }}>

              {/* Exact Heading from Slide 1 */}
              <h1 
                style={{ 
                  fontFamily: 'var(--font-outfit), sans-serif', 
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', 
                  fontWeight: '800', 
                  lineHeight: '1.16', 
                  letterSpacing: '-0.025em', 
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#ffffff' }}>
                  Right Guidance,
                </span>
                <br />
                <span 
                  style={{ 
                    color: '#FF6F1E', 
                    display: 'inline-block'
                  }}
                >
                  Bright Future
                </span>
              </h1>

              {/* Orange Divider */}
              <div 
                style={{ 
                  width: '65px', 
                  height: '3.5px', 
                  background: 'linear-gradient(90deg, #FA6400, #FF782D)', 
                  borderRadius: '2px', 
                  marginBottom: '14px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
                }} 
              />

              {/* Exact Subtitles from Slide 1 */}
              <p 
                style={{ 
                  fontSize: 'clamp(0.95rem, 1.3vw, 1.08rem)', 
                  color: '#ffffff', 
                  lineHeight: '1.45', 
                  maxWidth: '100%', 
                  marginBottom: '6px',
                  fontWeight: '600',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.85)'
                }}
              >
                Guiding Thousand of students and parents to find the right college.
              </p>
              <p 
                style={{ 
                  fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)', 
                  color: '#F1F5F9', 
                  lineHeight: '1.45', 
                  maxWidth: '100%', 
                  marginBottom: '22px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.85)'
                }}
              >
                One Student, One Dream, One Step Toward India&apos;s Future
              </p>

              {/* Single Clean Bold CTA Button */}
              <div>
                <button 
                  onClick={() => onOpenCounselling()}
                  className="btn btn-primary"
                  style={{ 
                    padding: '13px 30px', 
                    borderRadius: '10px', 
                    fontWeight: '800', 
                    fontSize: '0.98rem',
                    boxShadow: '0 8px 24px rgba(250, 100, 0, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>Get Free Counselling</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Right Column: Clean Compact Form matching Slide 2 reference */}
            <div>
              <div 
                className="consultation-hero-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '22px 22px',
                  boxShadow: '0 20px 45px -10px rgba(4, 22, 48, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'var(--text-main)',
                  width: '100%',
                  maxWidth: '440px',
                  marginLeft: 'auto'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span 
                    style={{ 
                      fontSize: '0.74rem', 
                      fontWeight: '800', 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      color: 'var(--orange-primary)',
                      background: 'var(--orange-light)',
                      padding: '3px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    ENQUIRE NOW
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} color="var(--orange-primary)" /> Instant Callback
                  </span>
                </div>

                <h3 
                  style={{ 
                    fontFamily: 'var(--font-outfit), sans-serif', 
                    fontSize: '1.45rem', 
                    fontWeight: '800', 
                    color: 'var(--navy-primary)', 
                    letterSpacing: '-0.02em',
                    marginTop: '4px', 
                    marginBottom: '2px' 
                  }}
                >
                  Get Consultation
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '14px' }}>
                  Connect directly with verified admissions counsellors.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                    <div 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%', 
                        background: 'var(--orange-light)', 
                        color: 'var(--orange-primary)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 16px',
                        boxShadow: '0 6px 18px rgba(250, 100, 0, 0.2)'
                      }}
                    >
                      <CheckCircle2 size={34} />
                    </div>
                    <h4 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                      Request Submitted!
                    </h4>
                    <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', marginBottom: '22px' }}>
                      Thank you, <strong style={{ color: 'var(--navy-primary)' }}>{name}</strong>. Our senior education advisor will reach out shortly.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => { setSubmitted(false); setName(''); setPhone(''); setEmail(''); setLocation(''); setTargetCollege(''); }}
                      className="btn btn-outline btn-sm"
                      style={{ borderRadius: '8px', fontWeight: '700' }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    {errorMsg && (
                      <div 
                        style={{ 
                          background: '#FEF2F2', 
                          border: '1px solid #F87171', 
                          color: '#991B1B', 
                          padding: '8px 10px', 
                          borderRadius: '8px', 
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          width: '100%'
                        }}
                      >
                        <AlertCircle size={15} style={{ flexShrink: 0 }} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* 1. Name */}
                    <div style={{ width: '100%' }}>
                      <input 
                        type="text"
                        placeholder="Name *"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                        required
                      />
                    </div>

                    {/* 2. Phone Number & 3. Email Address */}
                    <div className="hero-form-grid-2">
                      <input 
                        type="tel"
                        placeholder="Phone Number *"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                        required
                      />
                      <input 
                        type="email"
                        placeholder="Email Address"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                      />
                    </div>

                    {/* 4. Course / Program */}
                    <div style={{ width: '100%' }}>
                      <input 
                        type="text"
                        placeholder="Course / Program of Interest (Optional)"
                        className="form-input"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                      />
                    </div>

                    {/* 5. Location */}
                    <div style={{ width: '100%' }}>
                      <input 
                        type="text"
                        placeholder="Location / City *"
                        className="form-input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                        required
                      />
                    </div>

                    {/* 6. Target College (Optional) */}
                    <div style={{ width: '100%' }}>
                      <input 
                        type="text"
                        placeholder="Target College (Optional)"
                        className="form-input"
                        value={targetCollege}
                        onChange={(e) => setTargetCollege(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', fontSize: '0.88rem' }}
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%', marginTop: '1px' }}>
                      <input 
                        type="checkbox" 
                        id="hero-agree" 
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        style={{ marginTop: '3px', cursor: 'pointer', accentColor: 'var(--orange-primary)', width: '14px', height: '14px', flexShrink: 0 }}
                      />
                      <label htmlFor="hero-agree" style={{ fontSize: '0.74rem', color: '#64748B', lineHeight: '1.35', cursor: 'pointer', margin: 0 }}>
                        Enable updates &amp; important information on WhatsApp.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ 
                        width: '100%', 
                        padding: '11px', 
                        borderRadius: '9px', 
                        fontWeight: '800', 
                        fontSize: '0.94rem',
                        boxShadow: '0 6px 18px rgba(250, 100, 0, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '3px'
                      }}
                    >
                      {loading ? 'Submitting...' : 'Get Free Counselling'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Overlapping Feature Highlights matching a3career.com */}
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '34px', marginBottom: '-28px' }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '14px' 
            }}
          >
            {/* Card 1 */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '14px 16px',
                boxShadow: '0 12px 30px -4px rgba(4, 22, 48, 0.08)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="hero-feature-card"
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '11px', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <BookOpen size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#041630', margin: 0 }}>
                  Career Discovery
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0', lineHeight: '1.35' }}>
                  Find careers matching your strengths
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '14px 16px',
                boxShadow: '0 12px 30px -4px rgba(4, 22, 48, 0.08)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="hero-feature-card"
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '11px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <Compass size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#041630', margin: 0 }}>
                  Course Exploration
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0', lineHeight: '1.35' }}>
                  Explore top courses &amp; growth paths
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '14px 16px',
                boxShadow: '0 12px 30px -4px rgba(4, 22, 48, 0.08)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="hero-feature-card"
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '11px', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <Building2 size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#041630', margin: 0 }}>
                  College Comparison
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0', lineHeight: '1.35' }}>
                  Compare fees, placements &amp; ROI
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '14px 16px',
                boxShadow: '0 12px 30px -4px rgba(4, 22, 48, 0.08)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="hero-feature-card"
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '11px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#041630', margin: 0 }}>
                  Expert Guidance
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 0', lineHeight: '1.35' }}>
                  1-on-1 personalized advisory
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
