'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, 
  ShieldCheck, FileText, ArrowRight, Sparkles, Users, Award, 
  Navigation, ExternalLink, AlertCircle, Check, Building2
} from 'lucide-react';

export default function ContactPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stream, setStream] = useState('Management (MBA / PGDM)');
  const [classLevel, setClassLevel] = useState('Class 12 / Passed');
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
    if (!mail) return true; // optional unless entered
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
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
      setErrorMsg('Please agree to the terms to proceed with your consultation.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/counselling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: 'Lucknow',
          class_level: classLevel,
          interested_stream: stream,
          preferred_location: 'Lucknow & Uttar Pradesh',
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(d.error || 'Failed to submit enquiry. Please call or WhatsApp our helpline.');
      }
    } catch {
      setErrorMsg('Network connectivity issue. Please connect directly via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO BANNER: Clean, High-Contrast Hero with Dark Overlay & Banner Image
          ========================================================================= */}
      <section 
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(4, 22, 48, 0.88), rgba(6, 33, 71, 0.94)), url('/images/banner-contact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 28%',
          color: '#ffffff',
          padding: '90px 0 85px',
          overflow: 'hidden',
        }}
      >
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Badge */}
          <div className="page-hero-badge" style={{ marginBottom: '16px' }}>
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span className="badge-text">
              CENTRAL ADVISORY DESK • LUCKNOW HQ
            </span>
          </div>

          {/* Heading */}
          <h1 
            style={{ 
              fontFamily: 'var(--font-outfit), sans-serif', 
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)', 
              fontWeight: '800', 
              letterSpacing: '-0.025em', 
              color: '#ffffff',
              marginBottom: '8px',
              textTransform: 'uppercase'
            }}
          >
            CONTACT <span className="text-gradient-orange">US</span>
          </h1>

          {/* Clean Orange Divider */}
          <div 
            style={{ 
              width: '70px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #FA6400, #FF782D)', 
              borderRadius: '2px', 
              margin: '0 auto 18px' 
            }} 
          />

          {/* Subtitle */}
          <p 
            style={{ 
              maxWidth: '720px', 
              margin: '0 auto 28px', 
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', 
              color: '#CBD5E1', 
              lineHeight: '1.6' 
            }}
          >
            Reach out to our senior career advisors for personalized college shortlists, 
            transparent fee structures, and immediate admission counseling.
          </p>

          {/* Value Badges */}
          <div className="hero-trust-row" style={{ marginBottom: '0' }}>
            <div className="hero-trust-pill">
              <Clock size={15} color="var(--orange-primary)" />
              <span>Callback Under 15 Minutes</span>
            </div>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free Initial Guidance</span>
            </div>
            <div className="hero-trust-pill">
              <MapPin size={15} color="var(--orange-primary)" />
              <span>In-Person &amp; Virtual Counselling</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUICK CONTACT CHANNELS: 4 Clean Highlight Cards
          ========================================================================= */}
      <section style={{ marginTop: '-42px', position: 'relative', zIndex: 10, paddingBottom: '20px' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '16px' 
            }}
          >
            {/* Card 1: Online Counselling Desk */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px 16px',
                border: '1px solid rgba(10, 56, 113, 0.08)',
                boxShadow: '0 12px 30px -5px rgba(6, 33, 71, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.25s ease',
              }}
              className="quick-contact-card"
            >
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <Sparkles size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--orange-primary)', letterSpacing: '0.04em' }}>
                  Counselling Desk
                </div>
                <div style={{ fontSize: '1.025rem', fontWeight: '800', color: 'var(--navy-primary)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  100% Free Guidance
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Fill form below for instant call</div>
              </div>
            </div>

            {/* Card 2: Lucknow Advisory Hub */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px 16px',
                border: '1px solid rgba(10, 56, 113, 0.08)',
                boxShadow: '0 12px 30px -5px rgba(6, 33, 71, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.25s ease',
              }}
              className="quick-contact-card"
            >
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <MapPin size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--navy-primary)', letterSpacing: '0.04em' }}>
                  Advisory Centre
                </div>
                <div style={{ fontSize: '1.025rem', fontWeight: '800', color: 'var(--navy-primary)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  Hazratganj, Lucknow
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Mon–Sat: 9:30 AM – 7 PM</div>
              </div>
            </div>

            {/* Card 3: WhatsApp Support */}
            <a 
              href="https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS,%20I%20would%20like%20to%20get%20college%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px 16px',
                border: '1px solid rgba(10, 56, 113, 0.08)',
                boxShadow: '0 12px 30px -5px rgba(6, 33, 71, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              className="quick-contact-card"
            >
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: '#ECFDF5', 
                  color: '#25D366', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <WhatsAppIcon size={24} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: '#059669', letterSpacing: '0.04em' }}>
                  WhatsApp Priority
                </div>
                <div style={{ fontSize: '1.025rem', fontWeight: '800', color: 'var(--navy-primary)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  Chat Live 24/7
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct counselor chat</div>
              </div>
            </a>

            {/* Card 4: Official Email */}
            <a 
              href="mailto:acemycampus@gmail.com"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px 16px',
                border: '1px solid rgba(10, 56, 113, 0.08)',
                boxShadow: '0 12px 30px -5px rgba(6, 33, 71, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              className="quick-contact-card"
            >
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}
              >
                <Mail size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--navy-primary)', letterSpacing: '0.04em' }}>
                  Official Email
                </div>
                <div style={{ 
                  fontSize: '0.86rem', 
                  fontWeight: '800', 
                  color: 'var(--navy-primary)', 
                  marginTop: '2px', 
                  whiteSpace: 'nowrap'
                }}>
                  acemycampus@gmail.com
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Response within 2 hrs</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONSULTATION SECTION (Two Column: Information & Form Card)
          ========================================================================= */}
      <section style={{ padding: '60px 0 75px', background: '#F8FAFC' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
              gap: '40px',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Office Coordinates & Advisory Centre Info */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="section-tag" style={{ margin: 0 }}>DIRECT ACCESS &amp; VISITS</span>
              </div>
              
              <h2 
                style={{ 
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', 
                  fontWeight: '800', 
                  color: 'var(--navy-primary)', 
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px' 
                }}
              >
                We Are Always Ready to Guide Your Future
              </h2>
              
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '32px' }}>
                Visit our state-of-the-art career advisory centre in Lucknow for one-on-one parent-student counseling, 
                official university brochures, scholarship screening, and genuine placement verification.
              </p>

              {/* Coordinates List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: 'var(--orange-light)', 
                      color: 'var(--orange-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      border: '1px solid rgba(250, 100, 0, 0.2)'
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>
                      Lucknow Advisory Centre (HQ)
                    </strong>
                    <span style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.5', display: 'block', marginTop: '2px' }}>
                      Hazratganj Advisory Hub, Lucknow, Uttar Pradesh, 226001, India
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: 'var(--blue-light)', 
                      color: 'var(--navy-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      border: '1px solid rgba(10, 56, 113, 0.15)'
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>
                      Counseling Centre Hours
                    </strong>
                    <span style={{ color: 'var(--text-body)', fontSize: '0.92rem', display: 'block', marginTop: '2px' }}>
                      Monday – Saturday: 9:30 AM to 7:00 PM (IST)
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                      Sunday: Open by prior telephone appointment
                    </span>
                  </div>
                </div>

                {/* Institutional Tie-ups */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: 'var(--blue-light)', 
                      color: 'var(--navy-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      border: '1px solid rgba(10, 56, 113, 0.15)'
                    }}
                  >
                    <Building2 size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-primary)', fontSize: '1.05rem', display: 'block' }}>
                      Institutional Marketing &amp; Tie-ups
                    </strong>
                    <span style={{ color: 'var(--text-body)', fontSize: '0.92rem', display: 'block', marginTop: '2px' }}>
                      Dedicated desk for university partnerships, student outreach &amp; campus branding:
                    </span>
                    <a href="mailto:acemycampus@gmail.com?subject=Institutional%20Partnerships" style={{ color: 'var(--orange-primary)', fontWeight: '700', fontSize: '0.92rem', display: 'inline-block', marginTop: '4px' }}>
                      acemycampus@gmail.com (Partnerships Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div 
                style={{ 
                  background: 'linear-gradient(135deg, #062147 0%, #0A3871 100%)', 
                  borderRadius: '16px', 
                  padding: '24px 28px', 
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  boxShadow: '0 12px 28px -5px rgba(6, 33, 71, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                    Need urgent clarity on admissions?
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)' }}>
                    Skip waiting and talk straight with our Lucknow team on WhatsApp.
                  </p>
                </div>
                <a
                  href="https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS,%20I%20would%20like%20to%20connect%20with%20an%20education%20advisor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ 
                    background: 'var(--orange-primary)', 
                    color: '#ffffff', 
                    fontWeight: '700', 
                    flexShrink: 0, 
                    boxShadow: '0 4px 14px rgba(250, 100, 0, 0.4)',
                    padding: '10px 18px',
                    borderRadius: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean, Elevated "Get Consultation" Form Card */}
            <div 
              style={{ 
                background: '#ffffff', 
                borderRadius: '20px', 
                padding: '36px 32px', 
                border: '1px solid rgba(10, 56, 113, 0.1)',
                boxShadow: '0 20px 45px -10px rgba(6, 33, 71, 0.12), 0 4px 15px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
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
                  <ShieldCheck size={14} color="var(--orange-primary)" /> 100% Free
                </span>
              </div>

              <h3 
                style={{ 
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '1.8rem', 
                  fontWeight: '800', 
                  color: 'var(--navy-primary)', 
                  letterSpacing: '-0.02em',
                  marginTop: '10px', 
                  marginBottom: '6px' 
                }}
              >
                Get Free Consultation
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Fill out the quick form below. Our dedicated counselor will contact you within 15 minutes.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div 
                    style={{ 
                      width: '64px', 
                      height: '64px', 
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
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                    Form Submitted Successfully!
                  </h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.5', maxWidth: '380px', margin: '0 auto 24px' }}>
                    Thank you, <strong style={{ color: 'var(--navy-primary)' }}>{fullName}</strong>. Your consultation request has been received. Our senior advisor will reach out to you shortly.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => { 
                      setSubmitted(false); 
                      setFullName(''); 
                      setPhone(''); 
                      setEmail(''); 
                      setMessage(''); 
                    }}
                    className="btn btn-outline"
                    style={{ borderRadius: '10px', padding: '10px 20px', fontWeight: '700' }}
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {errorMsg && (
                    <div 
                      style={{ 
                        background: '#FEF2F2', 
                        border: '1px solid #F87171', 
                        color: '#991B1B', 
                        padding: '11px 14px', 
                        borderRadius: '10px', 
                        fontSize: '0.88rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <AlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{ borderRadius: '10px', padding: '12px 14px', fontSize: '0.95rem' }}
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', width: '100%' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Stream & Class Level Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', width: '100%' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                        Interested Stream
                      </label>
                      <select
                        className="form-select"
                        value={stream}
                        onChange={(e) => setStream(e.target.value)}
                        style={{ width: '100%' }}
                      >
                        <option value="Management (MBA / PGDM)">MBA / PGDM</option>
                        <option value="Undergraduate Management (BBA)">BBA</option>
                        <option value="Engineering & Technology (B.Tech)">B.Tech / Engineering</option>
                        <option value="Computer Applications (BCA / MCA)">BCA / MCA</option>
                        <option value="Medical & Allied Health Sciences">MBBS / Healthcare</option>
                        <option value="Law & Legal Studies (LLB / BA LLB)">Law / LLB</option>
                        <option value="Design & Architecture">Design &amp; Arch</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                        Current Level
                      </label>
                      <select
                        className="form-select"
                        value={classLevel}
                        onChange={(e) => setClassLevel(e.target.value)}
                        style={{ width: '100%' }}
                      >
                        <option value="Class 12 / Passed">Class 12 / Passed</option>
                        <option value="Class 10 / 11">Class 10 / 11</option>
                        <option value="Undergraduate (Final Year)">Undergraduate (UG)</option>
                        <option value="Graduate / Working Professional">Graduate / Working</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '6px' }}>
                      Message or Preferred Colleges
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your preferred cities, colleges, budget, or exam scores..."
                      className="form-input"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ resize: 'none', borderRadius: '10px', padding: '12px 14px', fontSize: '0.92rem' }}
                    />
                  </div>

                  {/* Terms & Consent Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                    <input 
                      type="checkbox" 
                      id="terms-agree" 
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      style={{ marginTop: '3px', cursor: 'pointer', accentColor: 'var(--orange-primary)' }}
                    />
                    <label htmlFor="terms-agree" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.45', cursor: 'pointer' }}>
                      By clicking Submit, you agree to our Terms of Service &amp; Privacy Policy, and authorize ACE MY CAMPUS to contact you via Phone, WhatsApp, or SMS with counseling updates.
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
                      letterSpacing: '0.02em',
                      marginTop: '6px',
                      boxShadow: '0 8px 24px rgba(250, 100, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOGLE MAPS EMBED SECTION
          ========================================================================= */}
      <section style={{ padding: '20px 0 70px', background: '#F8FAFC' }}>
        <div className="container">
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              border: '1px solid rgba(10, 56, 113, 0.1)',
              boxShadow: '0 15px 35px -5px rgba(6, 33, 71, 0.08)'
            }}
          >
            {/* Map Header Bar */}
            <div 
              style={{ 
                padding: '20px 28px', 
                borderBottom: '1px solid rgba(10, 56, 113, 0.08)', 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                gap: '14px',
                background: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: 'var(--orange-light)', 
                    color: 'var(--orange-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <Navigation size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--navy-primary)', margin: 0 }}>
                    Locate Our Central Advisory Centre
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Hazratganj, Lucknow, Uttar Pradesh, 226001
                  </p>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Hazratganj,+Lucknow,+Uttar+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ 
                  borderRadius: '10px', 
                  padding: '8px 18px', 
                  fontSize: '0.88rem', 
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Google Map Iframe */}
            <div style={{ position: 'relative', height: '380px', width: '100%', background: '#E2E8F0' }}>
              <iframe
                title="ACE MY CAMPUS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.641775829699!2d80.93663678589578!3d26.850785191845898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd08151952e5%3A0xb35fae16d4faecb6!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PLATFORM TRANSPARENCY & ETHICAL CODE (Terms of Service 4-Card Grid)
          ========================================================================= */}
      <section style={{ padding: '60px 0 80px', background: '#ffffff', borderTop: '1px solid rgba(10, 56, 113, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <FileText size={18} color="var(--orange-primary)" />
              <span className="section-tag" style={{ margin: 0 }}>TRANSPARENCY &amp; ETHICS</span>
            </div>
            
            <h2 
              style={{ 
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', 
                fontWeight: '800', 
                color: 'var(--navy-primary)', 
                letterSpacing: '-0.02em',
                marginBottom: '12px' 
              }}
            >
              Advisory Code &amp; Student Commitments
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6' }}>
              ACE MY CAMPUS strictly operates under lawful, student-first, and completely ethical career counseling practices.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}
          >
            {/* Commitment 1 */}
            <div 
              style={{ 
                background: '#F8FAFC', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid rgba(10, 56, 113, 0.08)' 
              }}
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                1. 100% Free Initial Discovery
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                All career clarity tests, course matching sessions, and university comparisons for prospective students are provided 100% free of charge. We never levy hidden consultation fees.
              </p>
            </div>

            {/* Commitment 2 */}
            <div 
              style={{ 
                background: '#F8FAFC', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid rgba(10, 56, 113, 0.08)' 
              }}
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}
              >
                <Award size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                2. Zero Capitation Fee Stance
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                We firmly stand against illegal donation or capitation fees. All recommended fees, NIRF statistics, and median placement records are sourced directly from verified university records.
              </p>
            </div>

            {/* Commitment 3 */}
            <div 
              style={{ 
                background: '#F8FAFC', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid rgba(10, 56, 113, 0.08)' 
              }}
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}
              >
                <Building2 size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                3. Institutional Marketing Integrity
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                For institutional partners, ACE MY CAMPUS delivers student outreach and campus elevation under structured agreements with measurable KPIs and full applicant transparency.
              </p>
            </div>

            {/* Commitment 4 */}
            <div 
              style={{ 
                background: '#F8FAFC', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid rgba(10, 56, 113, 0.08)' 
              }}
            >
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}
              >
                <FileText size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                4. Strict Data Privacy
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Your personal details, contact phone numbers, and academic inquiries are held strictly confidential. We never sell student data to unauthorized third-party marketing entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => setCounsellingModalOpen(true)} />

      {/* Shared Modals & Footers */}
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
