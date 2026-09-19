'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Phone, AlertCircle 
} from 'lucide-react';

interface HeroProps {
  onOpenCounselling: (prefill?: { stream?: string; classLevel?: string; location?: string }) => void;
  onFilterColleges: (stream: string, location: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling, onFilterColleges }) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('MBA');
  const [message, setMessage] = useState('');
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
          city: 'Lucknow',
          class_level: 'Class 12 / Passed',
          interested_stream: course,
          preferred_location: 'Pan India',
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(d.error || 'Failed to submit. Please call or WhatsApp our helpline.');
      }
    } catch {
      setErrorMsg('Network error. Please connect via WhatsApp or Phone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(135deg, rgba(4, 22, 48, 0.90) 0%, rgba(10, 56, 113, 0.88) 55%, rgba(6, 33, 71, 0.95) 100%), url('/images/banner-about.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        color: '#ffffff',
        padding: '90px 0 90px',
        overflow: 'hidden',
      }}
    >
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-consultation-grid">
            {/* Left Column: Bold Headline & Trust Information */}
            <div style={{ color: '#ffffff' }}>
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: 'rgba(255, 255, 255, 0.12)', 
                  backdropFilter: 'blur(10px)',
                  padding: '6px 16px', 
                  borderRadius: '9999px', 
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)' 
                }}
              >
                <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff' }}>
                  PROFESSIONAL EDUCATION CONSULTING
                </span>
              </div>

              <h1 
                style={{ 
                  fontFamily: 'var(--font-outfit), sans-serif', 
                  fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)', 
                  fontWeight: '800', 
                  lineHeight: '1.15', 
                  letterSpacing: '-0.025em', 
                  color: '#ffffff',
                  marginBottom: '14px',
                  textTransform: 'uppercase'
                }}
              >
                TAKE YOUR FUTURE TO <br />
                <span className="text-gradient-orange">BEST COLLEGES</span>
              </h1>

              {/* Orange Divider */}
              <div 
                style={{ 
                  width: '75px', 
                  height: '4px', 
                  background: 'linear-gradient(90deg, #FA6400, #FF782D)', 
                  borderRadius: '2px', 
                  marginBottom: '20px' 
                }} 
              />

              <p 
                style={{ 
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', 
                  color: '#CBD5E1', 
                  lineHeight: '1.7', 
                  maxWidth: '560px', 
                  marginBottom: '28px' 
                }}
              >
                ACE MY CAMPUS provides personalized career clarity, transparent fee cutoffs, 
                and verified admissions across India’s leading universities. Guidance, not pressure.
              </p>

              {/* Trust Checkpoints */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>100% Free Student Guidance &amp; Profile Evaluation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>Zero Capitation Fee / Zero Donation Stance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>500+ Verified Partner Institutions Across India</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <a 
                  href="#colleges" 
                  className="btn btn-primary"
                  style={{ 
                    padding: '13px 26px', 
                    borderRadius: '10px', 
                    fontWeight: '700', 
                    boxShadow: '0 8px 24px rgba(250, 100, 0, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>Explore 500+ Colleges</span>
                  <ArrowRight size={18} />
                </a>

                <a 
                  href="tel:+917054545455"
                  className="btn btn-outline-white"
                  style={{ 
                    padding: '13px 22px', 
                    borderRadius: '10px', 
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Phone size={17} />
                  <span>Call +91 70545 45455</span>
                </a>
              </div>
            </div>

            {/* Right Column: "ENQUIRE NOW - Get Consultation" Card */}
            <div>
              <div 
                className="consultation-hero-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  boxShadow: '0 24px 50px -12px rgba(4, 22, 48, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'var(--text-main)',
                  width: '100%',
                  maxWidth: '460px',
                  marginLeft: 'auto'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span 
                    style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: '800', 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      color: 'var(--orange-primary)',
                      background: 'var(--orange-light)',
                      padding: '4px 12px',
                      borderRadius: '6px'
                    }}
                  >
                    ENQUIRE NOW
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} color="var(--orange-primary)" /> Instant Callback
                  </span>
                </div>

                <h3 
                  style={{ 
                    fontFamily: 'var(--font-outfit), sans-serif', 
                    fontSize: '1.75rem', 
                    fontWeight: '800', 
                    color: 'var(--navy-primary)', 
                    letterSpacing: '-0.02em',
                    marginTop: '8px', 
                    marginBottom: '4px' 
                  }}
                >
                  Get Consultation
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '22px' }}>
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
                      Thank you, <strong style={{ color: 'var(--navy-primary)' }}>{name}</strong>. Our senior education advisor will call you within 15 minutes.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => { setSubmitted(false); setName(''); setPhone(''); setEmail(''); setMessage(''); }}
                      className="btn btn-outline btn-sm"
                      style={{ borderRadius: '8px', fontWeight: '700' }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                    {errorMsg && (
                      <div 
                        style={{ 
                          background: '#FEF2F2', 
                          border: '1px solid #F87171', 
                          color: '#991B1B', 
                          padding: '10px 12px', 
                          borderRadius: '8px', 
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          width: '100%'
                        }}
                      >
                        <AlertCircle size={16} style={{ flexShrink: 0 }} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div style={{ width: '100%' }}>
                      <input 
                        type="text"
                        placeholder="Your Full Name *"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%' }}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
                      <input 
                        type="email"
                        placeholder="Email Address"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%' }}
                      />
                      <input 
                        type="tel"
                        placeholder="Phone No *"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ width: '100%' }}
                      />
                    </div>

                    {/* Course */}
                    <div style={{ width: '100%' }}>
                      <select 
                        className="form-select"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        style={{ width: '100%' }}
                      >
                        <option value="MBA">MBA / PGDM</option>
                        <option value="BBA">BBA</option>
                        <option value="B.Tech">B.Tech / Engineering</option>
                        <option value="BCA">BCA / MCA</option>
                        <option value="MBBS">MBBS / Healthcare</option>
                        <option value="Law">Law (LLB / BA LLB)</option>
                        <option value="Design">Design &amp; Architecture</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div style={{ width: '100%' }}>
                      <textarea 
                        rows={3}
                        placeholder="Message or Preferred College (Optional)"
                        className="form-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ resize: 'none', width: '100%' }}
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%', marginTop: '2px' }}>
                      <input 
                        type="checkbox" 
                        id="hero-agree" 
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        style={{ marginTop: '3px', cursor: 'pointer', accentColor: 'var(--orange-primary)', width: '16px', height: '16px', flexShrink: 0 }}
                      />
                      <label htmlFor="hero-agree" style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: '1.45', cursor: 'pointer', margin: 0 }}>
                        By submitting, you agree to our Terms of Service &amp; authorize notifications on Call / WhatsApp / SMS.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ 
                        width: '100%', 
                        padding: '14px', 
                        borderRadius: '10px', 
                        fontWeight: '800', 
                        fontSize: '1rem',
                        boxShadow: '0 8px 22px rgba(250, 100, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '4px'
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit Request →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
