'use client';

import React, { useState } from 'react';
import { 
  X, CheckCircle, ShieldCheck, Check, ArrowRight 
} from 'lucide-react';

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    stream?: string;
    classLevel?: string;
    location?: string;
    collegeName?: string;
  };
}

export const CounsellingModal: React.FC<CounsellingModalProps> = ({
  isOpen,
  onClose,
  prefillData,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(prefillData?.stream || '');
  const [location, setLocation] = useState(prefillData?.location || '');
  const [targetCollege, setTargetCollege] = useState(prefillData?.collegeName || '');
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your full name and contact phone number.');
      return;
    }

    if (!location.trim()) {
      setErrorMsg('Please enter your city/location.');
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
          city: location.trim(),
          class_level: 'Higher Education / Degree Aspirant',
          interested_stream: course,
          preferred_location: location.trim(),
          message: targetCollege ? `Target College: ${targetCollege.trim()}` : 'Counselling Modal Request',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-box-premium" onClick={(e) => e.stopPropagation()}>
        {/* Left Brand Panel: Slide 2 Reference */}
        <div className="modal-brand-sidebar">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(10, 56, 113, 0.12)',
                  border: '1px solid #E2E8F0'
                }}
              >
                <img 
                  src="/images/emblem-transparent.png" 
                  alt="ACE MY CAMPUS" 
                  style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.01em', color: '#0A3871', lineHeight: '1.1' }}>
                  ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
                </span>
                <span style={{ fontSize: '0.67rem', color: '#64748B', marginTop: '3px', fontWeight: '600', letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
                  Your Campus | <span style={{ color: 'var(--orange-primary)', fontWeight: '700' }}>Your Growth</span> | Your Success
                </span>
              </div>
            </div>

            <h4 style={{ fontSize: '1.1rem', color: '#0A3871', fontWeight: '800', marginBottom: '16px' }}>
              Why register with us?
            </h4>

            {/* Consistent Brand Stats: 5000+ Students Counselled & 2500+ Successful Admissions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.12)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.45' }}>
                  <strong style={{ color: '#041630' }}>5000+ Students Counselled</strong>, Absolutely Free of Cost
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.12)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.45' }}>
                  <strong style={{ color: '#041630' }}>2500+ Successful Admissions</strong> across 200+ partner colleges
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.12)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.45' }}>
                  Get help from our experts in finding the right college for you
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.12)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.45' }}>
                  With totally online Admission Process we help you get college admission without having to step out
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.12)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.45' }}>
                  You won&apos;t get unwanted calls from third parties
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', background: '#F8FAFC', borderRadius: '12px', padding: '12px 14px', border: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.75rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="var(--orange-primary)" /> 100% Free Guidance • 2500+ Admissions Secured
            </span>
          </div>
        </div>

        {/* Right Form Panel: Slide 2 Reference */}
        <div className="modal-form-content">
          <button className="modal-close-btn-premium" onClick={handleResetAndClose} aria-label="Close modal">
            <X size={18} />
          </button>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px', margin: 'auto' }}>
              <div 
                style={{ 
                  width: '68px', 
                  height: '68px', 
                  borderRadius: '50%', 
                  background: 'var(--orange-light)', 
                  color: 'var(--orange-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 24px rgba(250, 100, 0, 0.25)'
                }}
              >
                <CheckCircle size={38} />
              </div>

              <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '8px', fontWeight: '800' }}>
                Counselling Request Confirmed!
              </h3>

              <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px' }}>
                Thank you, <strong>{fullName}</strong>. An ACE MY CAMPUS senior academic mentor will evaluate your profile and contact you shortly.
              </p>

              <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '26px', textAlign: 'left', fontSize: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.15)', maxWidth: '440px', margin: '0 auto 26px', color: '#F1F5F9' }}>
                <div style={{ marginBottom: '6px' }}><strong>Selected Course:</strong> {course}</div>
                <div style={{ marginBottom: '6px' }}><strong>Location:</strong> {location}</div>
                <div><strong>Contact Phone:</strong> {phone}</div>
              </div>

              <button 
                onClick={handleResetAndClose}
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="modal-form-header-content">
                <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: '700', marginTop: '2px', marginBottom: '6px' }}>
                  Give us your details and let&apos;s start your admission journey today !
                </h3>

                <p style={{ color: '#CBD5E1', fontSize: '0.85rem', marginBottom: '18px' }}>
                  Fill out the form below to receive personalized college recommendations.
                </p>
              </div>

              {errorMsg && (
                <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '14px' }}>
                  {errorMsg}
                </div>
              )}

              {/* Form matching Slide 2: Name, Phone Number, Email address, Course( MBA, PGDM, BBA, B.com), Location, Target college (Optional) */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* 1. Name */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                    style={{ height: '40px', fontSize: '0.875rem' }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* 2. Phone Number & 3. Email */}
                <div className="modal-form-grid-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.875rem' }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Email address</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.875rem' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* 4. Course / Program of Interest */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Course / Program of Interest</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Undergrad, Postgrad, or Specific Field"
                    style={{ height: '40px', fontSize: '0.85rem' }}
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>

                {/* 5. Location & 6. Target College (Optional) */}
                <div className="modal-form-grid-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your City / State"
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.875rem' }}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Target college (Optional)</label>
                    <input
                      type="text"
                      placeholder="Target College (Optional)"
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.875rem' }}
                      value={targetCollege}
                      onChange={(e) => setTargetCollege(e.target.value)}
                    />
                  </div>
                </div>

                {/* WhatsApp Updates Checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <input
                    type="checkbox"
                    id="modal-wa-updates"
                    checked={whatsappUpdates}
                    onChange={(e) => setWhatsappUpdates(e.target.checked)}
                    style={{ cursor: 'pointer', accentColor: 'var(--orange-primary)', width: '15px', height: '15px' }}
                  />
                  <label htmlFor="modal-wa-updates" style={{ fontSize: '0.78rem', color: '#CBD5E1', cursor: 'pointer', margin: 0 }}>
                    Enable updates &amp; important information on WhatsApp
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    marginTop: '8px', 
                    height: '44px',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    boxShadow: '0 4px 16px rgba(250, 100, 0, 0.35)',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}
                >
                  {loading ? 'Submitting...' : 'Get Free Counselling'}
                </button>

                <p style={{ fontSize: '0.74rem', color: '#94A3B8', textAlign: 'center', margin: '2px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="var(--orange-primary)" />
                  <span>100% Free &amp; Unbiased • 2500+ Admissions • Zero Spam</span>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
