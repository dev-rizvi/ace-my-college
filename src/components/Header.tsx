'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

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
    { label: 'Colleges', href: '/colleges' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Notification & Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contacts">
            <span className="top-bar-item">
              <Phone size={14} style={{ color: 'var(--orange-primary)' }} />
              <a href="tel:+917054545455">+91 70545 45455</a>
            </span>
            <span className="top-bar-item">
              <Phone size={14} style={{ color: 'var(--orange-primary)' }} />
              <a href="tel:+919648313555">+91 96483 13555</a>
            </span>
          </div>

          <div className="top-bar-contacts">
            <span className="top-bar-item">
              <Mail size={14} style={{ color: 'var(--orange-primary)' }} />
              <a href="mailto:acemycampus@gmail.com">acemycampus@gmail.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container site-header-inner">
          {/* Logo with High-Contrast White Badge for Perfect Icon Visibility */}
          <Link href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '4px 6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.35)',
                flexShrink: 0
              }}
            >
              <img 
                src="/images/emblem-transparent.png" 
                alt="ACE MY CAMPUS" 
                style={{ height: '38px', width: 'auto', objectFit: 'contain', display: 'block' }} 
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">
                ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
              </span>
              <span className="brand-tagline">
                Your Campus | <span>Your Growth</span> | Your Success
              </span>
            </div>
          </Link>

          {/* Desktop 5-Page Navigation */}
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

          {/* Header Action Buttons (Login button removed as requested) */}
          <div className="nav-actions">
            <button 
              onClick={onOpenCounselling}
              className="btn btn-primary btn-sm"
              id="header-guidance-btn"
            >
              <span>Get Guidance</span>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
          <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '10px',
                padding: '3px 5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                flexShrink: 0
              }}
            >
              <img 
                src="/images/emblem-transparent.png" 
                alt="ACE MY CAMPUS" 
                style={{ height: '30px', width: 'auto', objectFit: 'contain', display: 'block' }} 
              />
            </div>
            <span className="brand-name" style={{ fontSize: '1.1rem' }}>
              ACE MY <span style={{ color: 'var(--orange-primary)' }}>CAMPUS</span>
            </span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px' }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              style={{ fontSize: '1.05rem', fontWeight: pathname === item.href ? '700' : '500', padding: '6px 0' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Contact Quick Strip */}
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '14px', marginBottom: '22px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.825rem', color: '#CBD5E1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={14} color="var(--orange-primary)" />
            <a href="tel:+917054545455" style={{ color: '#ffffff', fontWeight: '600' }}>+91 70545 45455</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={14} color="var(--orange-primary)" />
            <a href="tel:+919648313555" style={{ color: '#ffffff', fontWeight: '600' }}>+91 96483 13555</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={14} color="var(--orange-primary)" />
            <a href="mailto:acemycampus@gmail.com" style={{ color: '#ffffff' }}>acemycampus@gmail.com</a>
          </div>
        </div>

        {/* Drawer CTAs */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenCounselling(); }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
          >
            Get Free Counselling
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenInstitutionModal(); }}
            className="btn btn-outline-white"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
          >
            For Institutions &amp; Colleges
          </button>
        </div>
      </div>
    </>
  );
};
