'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap, MapPin, Mail, Phone, ShieldCheck,
  Award, Building2, CheckCircle2, Clock, ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenCounselling: () => void;
  onOpenInstitutionModal: () => void;
  hidePreFooter?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCounselling,
  onOpenInstitutionModal,
  hidePreFooter = false
}) => {
  return (
    <footer className="site-footer" id="contact" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(10, 56, 113, 0.4) 0%, transparent 65%), linear-gradient(180deg, #041630 0%, #020C1C 100%)', color: '#94A3B8', borderTop: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative' }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid" style={{ marginBottom: '40px', paddingTop: '40px' }}>
          {/* Column 1: Brand Info & Mission */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Link href="/" style={{ display: 'inline-block' }}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    padding: '10px 16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <img
                    src="/images/logo-trimmed.png"
                    alt="ACE MY CAMPUS Official Logo"
                    style={{ height: '56px', width: 'auto', display: 'block' }}
                  />
                </div>
              </Link>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.65', marginBottom: '18px', maxWidth: '340px' }}>
              India&apos;s premier student-first platform for career discovery, course exploration, verified college admissions, and strategic education marketing.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: '#E2E8F0', marginBottom: '20px' }}>
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free &amp; Unbiased Guidance</span>
            </div>

            <div>
              <button
                onClick={onOpenCounselling}
                className="btn btn-primary btn-sm"
              >
                <span>Get Free Guidance</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/colleges">Colleges Directory</Link></li>
              <li><Link href="/testimonials">Student Reviews</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/#for-institutions">For Institutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Pathways */}
          <div>
            <h4 className="footer-col-title">Academic Pathways</h4>
            <ul className="footer-links">
              <li><Link href="/colleges">Engineering &amp; Technology</Link></li>
              <li><Link href="/colleges">Management &amp; Business (MBA/BBA)</Link></li>
              <li><Link href="/colleges">Medical &amp; Allied Health</Link></li>
              <li><Link href="/colleges">Law &amp; Legal Studies</Link></li>
              <li><Link href="/colleges">Design &amp; Architecture</Link></li>
              <li><Link href="/colleges">Pan-India College Search</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Lucknow HQ (Clean Admissions Desk) */}
          <div>
            <h4 className="footer-col-title">Admissions &amp; Advisory</h4>

            <div className="footer-contact-item">
              <MapPin size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Central Headquarters</span>
                <span style={{ fontSize: '0.875rem' }}>Lucknow, Uttar Pradesh, India - 226010</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Admissions Helpline</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
                  <a href="tel:+917054545455" style={{ color: 'var(--orange-primary)', fontWeight: '700', fontSize: '0.925rem' }}>
                    +91 70545 45455
                  </a>
                  <a href="tel:+919648313555" style={{ color: 'var(--orange-primary)', fontWeight: '700', fontSize: '0.925rem' }}>
                    +91 96483 13555
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Email Enquiries</span>
                <a href="mailto:acemycampus@gmail.com" style={{ color: '#CBD5E1', fontSize: '0.875rem' }}>
                  acemycampus@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Counselling Desk Hours</span>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div suppressHydrationWarning style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>ACE MY CAMPUS</strong>. All Rights Reserved. Lucknow | India
          </div>
        </div>
      </div>
    </footer>
  );
};
