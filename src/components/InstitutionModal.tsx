'use client';

import React, { useState } from 'react';
import { 
  X, CheckCircle, Mail, Phone, Check, ShieldCheck 
} from 'lucide-react';

interface InstitutionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstitutionModal: React.FC<InstitutionModalProps> = ({ isOpen, onClose }) => {
  const [instituteName, setInstituteName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Lead Generation', 'Institutional Branding']);
  const [message, setMessage] = useState('');

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

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instituteName || !contactPerson || !email || !phone) {
      setErrorMsg('Please fill in all mandatory institution contact details.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/institutions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          institute_name: instituteName,
          contact_person: contactPerson,
          designation,
          email,
          phone,
          location,
          services_requested: selectedServices,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Connection issue. Please email acemycampus@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const serviceOptions = [
    'Lead Generation',
    'Institutional Branding',
    'Social Media Marketing',
    'Outreach Campaigns',
    'Alumni Relations',
    'Recruitment Conclaves'
  ];

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-box-premium" onClick={(e) => e.stopPropagation()}>
        {/* Left Brand Panel */}
        <div className="modal-brand-sidebar">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <img 
                src="/images/emblem-transparent.png" 
                alt="ACE MY CAMPUS" 
                style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
              />
              <span style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.02em', color: '#ffffff' }}>
                ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '28px', fontStyle: 'italic' }}>
              Institutional Education Marketing & Growth
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>High-Intent Student Leads</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>Qualified applicants filtered by merit, budget, and academic goals.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Strategic Campus Branding</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>Omnichannel video storytelling, CXO positioning, and student reels.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(250, 100, 0, 0.2)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Direct School Feeder Drives</strong>
                  <span style={{ fontSize: '0.775rem', color: '#94A3B8', lineHeight: '1.4' }}>Direct access to 200+ feeder schools and career conclaves.</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <span style={{ fontSize: '0.725rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
              Partnership Desk
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="mailto:acemycampus@gmail.com" style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} color="var(--orange-primary)" /> acemycampus@gmail.com
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
                  background: 'var(--blue-light)', 
                  color: 'var(--navy-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 24px rgba(10, 56, 113, 0.2)'
                }}
              >
                <CheckCircle size={38} />
              </div>

              <h3 style={{ fontSize: '1.65rem', color: 'var(--navy-primary)', marginBottom: '8px', fontWeight: '800' }}>
                Partnership Inquiry Logged!
              </h3>

              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px' }}>
                Thank you, <strong>{contactPerson}</strong>. Our Head of Education Marketing Partnerships will review your campus requirements and connect with you within 24 hours.
              </p>

              <button 
                onClick={handleResetAndClose}
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '300px', margin: '0 auto', justifyContent: 'center' }}
              >
                Back to Website
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '4px' }}>
                <span 
                  style={{ 
                    fontSize: '0.725rem', 
                    fontWeight: '800', 
                    color: 'var(--navy-primary)', 
                    background: 'var(--blue-light)', 
                    padding: '4px 12px', 
                    borderRadius: 'var(--radius-full)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    border: '1px solid rgba(10, 56, 113, 0.2)',
                    display: 'inline-block'
                  }}
                >
                  University & College Growth
                </span>
              </div>

              <div className="modal-form-header-content">
                <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-primary)', fontWeight: '800', marginTop: '6px', marginBottom: '4px' }}>
                  Partner With ACE MY CAMPUS
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '18px' }}>
                  Accelerate enrollment conversions with customized educational marketing.
                </p>
              </div>

              {errorMsg && (
                <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '16px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Institute Name */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Institute / University Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex University / National Institute"
                    className="form-input"
                    style={{ height: '42px', fontSize: '0.875rem' }}
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                  />
                </div>

                {/* Contact Person and Designation */}
                <div className="modal-form-grid-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Contact Person *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Director / Dean / Marketing Head"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="modal-form-grid-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="admissions@institute.edu.in"
                      className="form-input"
                      style={{ height: '42px', fontSize: '0.875rem' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Direct Phone *</label>
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
                </div>

                {/* Services of Interest */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Services of Interest</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
                    {serviceOptions.map((srv, idx) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleService(srv)}
                          style={{
                            background: isSelected ? 'var(--orange-primary)' : 'var(--bg-subtle)',
                            color: isSelected ? '#ffffff' : 'var(--navy-primary)',
                            border: '1px solid',
                            borderColor: isSelected ? 'var(--orange-primary)' : 'var(--border-subtle)',
                            padding: '5px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          {isSelected ? '✓ ' : '+ '}{srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Goals */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>Specific Goals / Comments (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Target enrollment numbers, specific courses..."
                    className="form-input"
                    style={{ height: '42px', fontSize: '0.875rem' }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
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
                  {loading ? 'Submitting...' : 'Request Institutional Strategy Call →'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', margin: '2px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="var(--orange-primary)" />
                  <span>Strategic Confidentiality Guaranteed • Direct Founders Access</span>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
