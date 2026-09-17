'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, 
  ShieldCheck, FileText, ArrowRight, Sparkles, Users, Award 
} from 'lucide-react';

export default function ContactPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stream, setStream] = useState('Engineering & Technology');
  const [classLevel, setClassLevel] = useState('Class 12 / Passed');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/counselling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          city: 'Lucknow',
          class_level: classLevel,
          interested_stream: stream,
          preferred_location: 'Lucknow & Uttar Pradesh',
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const d = await res.json();
        setErrorMsg(d.error || 'Failed to submit enquiry.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please connect via WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO SECTION: Cinematic Dark Gradient with banner-contact.jpg
          ========================================================================= */}
      <section className="contact-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Badge */}
          <div className="page-hero-badge">
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span className="badge-text">
              ADVISORY DESKS • LUCKNOW HQ
            </span>
          </div>

          {/* Heading */}
          <h1 className="page-hero-title">
            Get in Touch With <span className="text-gradient-orange">ACE MY CAMPUS</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Whether you are a student seeking career clarity, a parent reviewing university investments, 
            or an institution aiming to scale admissions, our dedicated Lucknow team is here to guide you.
          </p>

          {/* Trust Value Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-pill">
              <Clock size={15} color="var(--orange-primary)" />
              <span>Callback Under 15 Minutes</span>
            </div>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free Consultation</span>
            </div>
            <div className="hero-trust-pill">
              <MapPin size={15} color="var(--orange-primary)" />
              <span>In-Person Lucknow HQ &amp; Virtual</span>
            </div>
          </div>

          {/* CTA Row */}
          <div className="hero-cta-row">
            <button 
              onClick={() => setCounsellingModalOpen(true)}
              className="btn btn-primary btn-lg"
              style={{ boxShadow: '0 12px 30px rgba(250, 100, 0, 0.4)' }}
            >
              <span>Book Free 1-on-1 Consultation</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:+917054545455"
              className="btn btn-outline-white btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={18} />
              <span>Call +91 70545 45455</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          IMPACT STATS RIBBON (FLOATING)
          ========================================================================= */}
      <section className="about-stats-ribbon">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <Clock size={26} />
              </div>
              <div>
                <div className="about-stat-val">&lt; 15 Mins</div>
                <div className="about-stat-label">Average Response Time</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Users size={26} />
              </div>
              <div>
                <div className="about-stat-val">10,000+</div>
                <div className="about-stat-label">Students Guided &amp; Placed</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <MapPin size={26} />
              </div>
              <div>
                <div className="about-stat-val">Lucknow HQ</div>
                <div className="about-stat-label">Hazratganj Advisory Centre</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Award size={26} />
              </div>
              <div>
                <div className="about-stat-val">Mon – Sat</div>
                <div className="about-stat-label">9:30 AM to 7:30 PM (IST)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>
            {/* Left Column: Direct Info & Location Card */}
            <div>
              <span className="section-tag">Direct Access</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                We Are Always Ready to Listen
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '32px' }}>
                Drop by our counseling centre in Lucknow, connect with an expert over the phone, or send an instant WhatsApp query for same-day priority guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(242, 107, 33, 0.2)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>Central Headquarters</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      Lucknow, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(10, 56, 113, 0.2)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>Direct Helpline Lines</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px', fontSize: '0.95rem' }}>
                      <a href="tel:+917054545455" style={{ color: 'var(--navy-primary)', fontWeight: '700' }}>+91 70545 45455 (Admissions &amp; Career Counselling Desk)</a>
                      <a href="tel:+919648313555" style={{ color: 'var(--navy-primary)', fontWeight: '700' }}>+91 96483 13555 (Student Guidance &amp; Advisory)</a>
                      <a href="tel:+918527948763" style={{ color: 'var(--navy-primary)', fontWeight: '700' }}>+91 85279 48763 (Institutional Partnership Desk)</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F1F5F9', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>Official Email</strong>
                    <a href="mailto:acemycampus@gmail.com" style={{ color: 'var(--navy-primary)', fontWeight: '700', fontSize: '0.95rem' }}>
                      acemycampus@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>Admissions Hours</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      Monday – Saturday: 9:30 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div 
                style={{ 
                  background: 'linear-gradient(135deg, #FF782D 0%, #FA6400 100%)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '26px', 
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  boxShadow: '0 10px 25px rgba(250, 100, 0, 0.35)'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '4px' }}>Need instant answers?</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.92)' }}>
                    Chat directly with our Lucknow senior counsellors on WhatsApp.
                  </p>
                </div>
                <a
                  href="https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS,%20I%20would%20like%20to%20connect%20with%20an%20education%20advisor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#ffffff', color: 'var(--navy-primary)', fontWeight: '800', flexShrink: 0, boxShadow: 'var(--shadow-md)' }}
                >
                  <MessageSquare size={16} />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div 
              style={{ 
                background: '#ffffff', 
                borderRadius: 'var(--radius-xl)', 
                padding: '40px', 
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="section-tag" style={{ margin: 0 }}>Priority Inquiry</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-primary)', marginTop: '8px', marginBottom: '8px' }}>
                Send Us a Message
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '26px' }}>
                Fill in your details below and an ACE MY CAMPUS advisor will connect within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 10px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--navy-primary)', marginBottom: '8px' }}>Message Received!</h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '24px' }}>
                    Thank you, {fullName}. Our counselling desk has logged your request and will contact you shortly.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => { setSubmitted(false); setFullName(''); setPhone(''); setMessage(''); }}
                    className="btn btn-outline btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {errorMsg && (
                    <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Srivastava"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Interested Stream</label>
                      <select
                        className="form-select"
                        value={stream}
                        onChange={(e) => setStream(e.target.value)}
                      >
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Medical & Health Sciences">Medical & Health Sciences</option>
                        <option value="Management & Commerce">Management & Commerce</option>
                        <option value="Law & Legal Studies">Law & Legal Studies</option>
                        <option value="Design & Architecture">Design & Architecture</option>
                        <option value="Postgraduate & Global Pathways">Postgraduate & Global</option>
                        <option value="Applied Sciences & Humanities">Sciences & Humanities</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current Level</label>
                      <select
                        className="form-select"
                        value={classLevel}
                        onChange={(e) => setClassLevel(e.target.value)}
                      >
                        <option value="Class 10 / 11">Class 10 / 11</option>
                        <option value="Class 12 / Passed">Class 12 / Passed</option>
                        <option value="Undergraduate (UG)">Undergraduate (UG)</option>
                        <option value="Postgraduate (PG)">Postgraduate (PG)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">How can we help you?</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about colleges, courses, fee cutoffs, or marketing partnerships..."
                      className="form-input"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    {loading ? 'Submitting...' : 'Submit Inquiry →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section (Required by Quotation) */}
      <section className="py-section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <FileText size={20} color="var(--orange-primary)" />
              <span className="section-tag" style={{ margin: 0 }}>Platform Policies & Transparency</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '14px' }}>
              Terms & Conditions and Advisory Code
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '32px' }}>
              ACE MY CAMPUS is committed to 100% legal, honest, and ethical career advisory and university marketing practices.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', background: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '40px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  1. Free Student Guidance & Non-Commercial Advisory
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                  All initial career discovery sessions, course evaluations, and profile matching services provided to students and parents by ACE MY CAMPUS are completely free of charge. We never charge registration fees or consultation levies to prospective students for basic discovery sessions.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  2. Transparent Information & Zero Capitation Fee Stance
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                  ACE MY CAMPUS strictly opposes illegal donation/capitation fees. All college fee estimates, NIRF rankings, and placement figures displayed or advised are sourced from verified official university publications and regulatory authorities.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  3. Institutional Marketing & Representation
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                  For institutional partners (colleges and universities), ACE MY CAMPUS provides strategic brand elevation, performance lead generation, and candidate outreach. Institutional partnerships operate under formal agreements with agreed KPIs, maintaining complete transparency toward applicants.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  4. Privacy & Data Confidentiality
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                  Student and parent contact information submitted through this website is held strictly confidential. We do not sell user data to unsolicited third parties. Information is used exclusively to facilitate personalized counselling sessions and requested college admission assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
      />

      <InstitutionModal
        isOpen={institutionModalOpen}
        onClose={() => setInstitutionModalOpen(false)}
      />

      <WhatsAppButton />
    </main>
  );
}
