'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Menu, X, ArrowRight } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from '@/components/SocialIcons';

interface HeaderProps {
  onOpenCounselling: () => void;
  onOpenInstitutionModal: () => void;
  audienceMode?: 'student' | 'institution';
  setAudienceMode?: (mode: 'student' | 'institution') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCounselling,
  onOpenInstitutionModal,
  audienceMode = 'student',
  setAudienceMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleAudienceChange = (mode: 'student' | 'institution') => {
    if (setAudienceMode) {
      setAudienceMode(mode);
    }
    if (pathname === '/') {
      const targetElement = mode === 'institution' 
        ? document.getElementById('for-institutions') 
        : document.getElementById('hero-section');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Colleges', href: '/colleges' },
    { label: 'Entrance Exams', href: '/exams' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar: Email on Left, Social Media on Right */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contacts">
            <span className="top-bar-item">
              <Mail size={14} style={{ color: 'var(--orange-primary)' }} />
              <a href="mailto:acemycampus@gmail.com">acemycampus@gmail.com</a>
            </span>
          </div>

          <div className="top-bar-socials" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '500' }}>Follow Us:</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              style={{ color: '#475569', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              style={{ color: '#475569', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              title="Facebook"
            >
              <FacebookIcon size={15} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              style={{ color: '#475569', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              title="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container site-header-inner">
          {/* Clean Logo without any square background box */}
          <Link href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src="/images/emblem-transparent.png" 
              alt="ACE MY CAMPUS" 
              style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }} 
            />
            <div className="brand-text">
              <span className="brand-name">
                ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
              </span>
              <span className="brand-tagline">
                Your Campus | <span>Your Growth</span> | Your Success
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="nav-actions">
            <button 
              onClick={onOpenCounselling}
              className="btn btn-primary btn-sm"
              id="header-guidance-btn"
            >
              <span>Get Free Counselling</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay" 
          onClick={() => setMobileMenuOpen(false)} 
        />
      )}

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} style={{ overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', paddingBottom: '14px', borderBottom: '1px solid #E2E8F0' }}>
          <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="/images/emblem-transparent.png" 
              alt="ACE MY CAMPUS" 
              style={{ height: '38px', width: 'auto', objectFit: 'contain', display: 'block' }} 
            />
            <span className="brand-name" style={{ fontSize: '1.2rem', color: '#0A3871' }}>
              ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
            </span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            style={{ background: 'none', border: 'none', color: '#041630', cursor: 'pointer', padding: '6px' }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)} 
              style={{
                fontSize: '1rem',
                fontWeight: pathname === item.href ? '700' : '600',
                color: pathname === item.href ? 'var(--orange-primary)' : '#1E293B',
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
                display: 'block'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Contact Quick Strip */}
        <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '14px', marginBottom: '22px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#475569' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={14} color="var(--orange-primary)" />
            <a href="mailto:acemycampus@gmail.com" style={{ color: '#0F172A', fontWeight: '600' }}>acemycampus@gmail.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '6px', borderTop: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Follow Us:</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#475569' }}><LinkedinIcon size={16} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#475569' }}><FacebookIcon size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#475569' }}><InstagramIcon size={16} /></a>
          </div>
        </div>

        {/* Drawer CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenCounselling(); }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
          >
            Get Free Counselling
          </button>
        </div>
      </div>
    </>
  );
};
