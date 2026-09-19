'use client';

import React, { useState } from 'react';
import { 
  X, CheckCircle, Phone, MessageSquare, ShieldCheck, Check, ArrowRight
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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(prefillData?.location || 'Lucknow');
  const [classLevel, setClassLevel] = useState(prefillData?.classLevel || 'Class 12 / Passed');
  const [stream, setStream] = useState(prefillData?.stream || 'Engineering & Technology');
  const [message, setMessage] = useState(prefillData?.collegeName ? `Enquiring about admission at ${prefillData.collegeName}` : '');

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
          city,
          class_level: classLevel,
          interested_stream: stream,
          preferred_location: city,
          message,
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
      setErrorMsg('Network error. Please WhatsApp us directly at +91 70545 45455.');
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
        {/* Left Brand Panel */}
        <div className="modal-brand-sidebar">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <img 
                src="/images/logo-icon.png" 
                alt="ACE MY CAMPUS" 
                style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
              />
              <span style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.02em', color: '#ffffff' }}>
                ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '28px', fontStyle: 'italic' }}>
              Your Campus | Your Growth | Your Success
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Career First Matching</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>Align career pathways before locking a college degree.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>500+ Partner Campuses</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>Direct liaison with verified university admission desks.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Zero Hidden Fees</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>No donation, no capitation fees. 100% transparency.</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <span style={{ fontSize: '0.725rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
              Direct Helpline (Call / WhatsApp)
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="tel:+917054545455" style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} color="var(--orange-primary)" /> +91 70545 45455
              </a>
              <a href="tel:+919648313555" style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} color="var(--orange-primary)" /> +91 96483 13555
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
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

              <h3 style={{ fontSize: '1.65rem', color: 'var(--navy-primary)', marginBottom: '8px', fontWeight: '800' }}>
                Counselling Request Confirmed!
              </h3>

              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px' }}>
                Thank you, <strong>{fullName}</strong>. An ACE MY CAMPUS senior academic mentor will evaluate your profile and contact you within 24 hours.
              </p>

              <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '26px', textAlign: 'left', fontSize: '0.85rem', border: '1px solid var(--border-subtle)', maxWidth: '440px', margin: '0 auto 26px' }}>
                <div style={{ marginBottom: '6px' }}><strong>Interested Stream:</strong> {stream}</div>
                <div style={{ marginBottom: '6px' }}><strong>Class Level:</strong> {classLevel}</div>
                <div><strong>Contact Phone:</strong> {phone}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '440px', margin: '0 auto' }}>
                <a
                  href={`https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS,%20I%20am%20${encodeURIComponent(fullName)}.%20I%20just%20requested%20counselling%20for%20${encodeURIComponent(stream)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} />
                  <span>Connect Instantly on WhatsApp</span>
                </a>

                <button 
                  onClick={handleResetAndClose}
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '4px' }}>
                <span 
                  style={{ 
                    fontSize: '0.725rem', 
                    fontWeight: '800', 
                    color: 'var(--orange-primary)', 
                    background: 'var(--orange-light)', 
                    padding: '4px 12px', 
                    borderRadius: 'var(--radius-full)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    border: '1px solid rgba(250, 100, 0, 0.25)',
                    display: 'inline-block'
                  }}
                >
                  Free 1-on-1 Mentorship
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-primary)', fontWeight: '800', marginTop: '6px', marginBottom: '4px' }}>
                Book Your Free Counselling Session
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '18px' }}>
                No sales pressure. Honest, transparent career & college admission guidance.
              </p>

              {errorMsg && (
                <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '16px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Full Name */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    style={{ height: '42px', fontSize: '0.875rem' }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Phone and Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Academic Level and Stream */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Current Academic Level</label>
                    <select
                      className="form-select"
                      style={{ height: '42px', fontSize: '0.85rem' }}
                      value={classLevel}
                      onChange={(e) => setClassLevel(e.target.value)}
                    >
                      <option value="Class 10 / 11">Class 10 / 11</option>
                      <option value="Class 12 / Passed">Class 12 / Passed</option>
                      <option value="Undergraduate (College)">Undergraduate (UG)</option>
                      <option value="Postgraduate Aspirant">Postgraduate (PG)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Interested Stream</label>
                    <select
                      className="form-select"
                      style={{ height: '42px', fontSize: '0.85rem' }}
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
                </div>

                {/* City and Message/Target College */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow, Kanpur, Delhi"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Target College (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. BBDU, Amity, SRM..."
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    marginTop: '10px', 
                    height: '46px',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 16px rgba(250, 100, 0, 0.35)',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}
                >
                  {loading ? 'Submitting...' : 'Confirm Free Counselling Session →'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', margin: '2px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="var(--orange-primary)" />
                  <span>100% Free & Confidential • Verified Mentors • No Spam</span>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
