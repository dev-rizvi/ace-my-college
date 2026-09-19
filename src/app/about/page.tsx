'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FinalCta } from '@/components/FinalCta';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { 
  Compass, Eye, Target, Users, HeartHandshake, ShieldCheck, 
  MapPin, CheckCircle2, ArrowRight, Sparkles, School, Award, Check,
  Phone, Mail, MessageCircle, Building2, CheckCircle, XCircle,
  HelpCircle, ChevronRight, GraduationCap, Clock, Flame
} from 'lucide-react';

export default function AboutPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO SECTION: Cinematic Dark Gradient with banner-about.jpg
          ========================================================================= */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Badge */}
          <div className="page-hero-badge">
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span className="badge-text">
              ABOUT ACE MY CAMPUS • LUCKNOW HQ
            </span>
          </div>

          {/* Heading */}
          <h1 className="page-hero-title">
            Architecting Academic Futures with <span className="text-gradient-orange">Clarity &amp; Integrity</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Headquartered in Lucknow, Uttar Pradesh, <strong style={{ color: '#ffffff' }}>ACE MY CAMPUS</strong> is India&apos;s premier 
            student-first consultancy and institutional marketing ecosystem. We eliminate admission confusion, decode complex university 
            pathways, and connect ambitious learners with high-ROI campuses.
          </p>

          {/* Trust Value Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free Guidance for Students</span>
            </div>
            <div className="hero-trust-pill">
              <Award size={15} color="var(--orange-primary)" />
              <span>Zero Capitation / Donation Policy</span>
            </div>
            <div className="hero-trust-pill">
              <Building2 size={15} color="var(--orange-primary)" />
              <span>500+ Accredited Campuses Across India</span>
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
            <Link 
              href="/colleges"
              className="btn btn-outline-white btn-lg"
            >
              <span>Browse 500+ Colleges</span>
            </Link>
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
                <Building2 size={26} />
              </div>
              <div>
                <div className="about-stat-val">500+</div>
                <div className="about-stat-label">Partner Campuses Across India</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Users size={26} />
              </div>
              <div>
                <div className="about-stat-val">10,000+</div>
                <div className="about-stat-label">Students Mentored &amp; Placed</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <div className="about-stat-val">₹0</div>
                <div className="about-stat-label">Capitation Fees (Zero Donation)</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Award size={26} />
              </div>
              <div>
                <div className="about-stat-val">100%</div>
                <div className="about-stat-label">Free Advisory for Students &amp; Parents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUNDERS & LEADERSHIP SECTION (DIRECT TRUST & ACCOUNTABILITY)
          ========================================================================= */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <div className="section-tag orange">DIRECT LEADERSHIP</div>
            <h2 className="section-title">Meet the Visionaries Behind ACE MY CAMPUS</h2>
            <p className="section-subtitle center-block">
              Unlike faceless web aggregators or commission brokers who sell student contacts, ACE MY CAMPUS is 
              founded on personal mentorship, institutional transparency, and direct executive availability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '30px', maxWidth: '1050px', margin: '0 auto' }}>
            
            {/* Founder 1: Vishesh Singh */}
            <div className="founder-card" style={{ borderTop: '4px solid var(--orange-primary)' }}>
              <div className="founder-card-top">
                <div className="founder-avatar" style={{ background: 'linear-gradient(135deg, #0A3871, #FA6400)' }}>
                  VS
                </div>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--orange-light)', color: 'var(--orange-primary)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', marginBottom: '4px' }}>
                    <Sparkles size={12} />
                    <span>DIRECTOR &amp; CAREER STRATEGIST</span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>Vishesh Singh</h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '2px' }}>Career Mapping &amp; Student Advisory Lead</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px', flexGrow: 1 }}>
                &ldquo;Every student possesses unique cognitive strengths and career potential. Our fundamental promise is to never 
                let a student choose a college out of peer pressure, anxiety, or marketing gimmicks. We map genuine career goals first, 
                then evaluate the campus that truly delivers on that vision.&rdquo;
              </p>

              <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', padding: '14px 18px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.775rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>Areas of Expertise</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Career Aptitude Alignment</span>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Engineering &amp; B.Tech Pathways</span>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Parent Financial Guidance</span>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => setCounsellingModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '0.925rem' }}
                >
                  <span>Request Career Mentorship</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Founder 2: Aditya Singh Rathore */}
            <div className="founder-card" style={{ borderTop: '4px solid var(--navy-primary)' }}>
              <div className="founder-card-top">
                <div className="founder-avatar" style={{ background: 'linear-gradient(135deg, #062147, #0A3871)' }}>
                  AR
                </div>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--blue-light)', color: 'var(--navy-primary)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', marginBottom: '4px' }}>
                    <Building2 size={12} />
                    <span>DIRECTOR &amp; CAMPUS PARTNERSHIPS</span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>Aditya Singh Rathore</h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '2px' }}>University Relations &amp; Education Marketing</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px', flexGrow: 1 }}>
                &ldquo;Higher education in India is transforming rapidly. Our institutional partnerships are built on verified placement 
                integrity, academic accreditations, and modern curriculum standards. We bridge the gap between forward-thinking colleges 
                and students who will flourish on their campuses.&rdquo;
              </p>

              <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', padding: '14px 18px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.775rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>Areas of Expertise</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Institutional Liaison</span>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Management (MBA/BBA) Admissions</span>
                  <span style={{ fontSize: '0.775rem', background: '#ffffff', border: '1px solid #CBD5E1', padding: '3px 8px', borderRadius: '4px', color: 'var(--navy-primary)', fontWeight: '600' }}>Campus Placement Auditing</span>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => setInstitutionModalOpen(true)}
                  className="btn btn-teal"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '0.925rem' }}
                >
                  <span>Discuss Institutional Partnerships</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPARISON TABLE: ACE MY CAMPUS vs TRADITIONAL ADMISSION BROKERS
          ========================================================================= */}
      <section className="py-section" style={{ background: '#F1F5F9' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <div className="section-tag blue">WHY PARENTS TRUST US</div>
            <h2 className="section-title">The ACE MY CAMPUS Standard</h2>
            <p className="section-subtitle center-block">
              See how our ethical, student-first framework fundamentally contrasts with conventional admission agents and commercial brokerages.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <div style={{ overflowX: 'auto' }}>
              <table className="comp-table">
                <thead>
                  <tr style={{ background: '#041630', color: '#ffffff' }}>
                    <th style={{ width: '28%', padding: '22px 26px' }}>Decision Dimension</th>
                    <th style={{ width: '36%', background: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1' }}>Traditional Admission Agents</th>
                    <th style={{ width: '36%', background: 'rgba(250, 100, 0, 0.15)', color: '#FF9E59', borderTop: '3px solid var(--orange-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={18} color="var(--orange-primary)" />
                        <span style={{ fontWeight: '800', color: '#ffffff' }}>ACE MY CAMPUS Advisory</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>1. Advisory Starting Point</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <XCircle size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Pushes whatever vacant college seat offers the highest referral cut.</span>
                      </div>
                    </td>
                    <td style={{ background: 'rgba(250, 100, 0, 0.02)', fontWeight: '600', color: 'var(--navy-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Career Before College: Diagnoses student strengths, goals, and budget before shortlisting.</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>2. Student Guidance Fees</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <XCircle size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Charges ₹10,000 to ₹50,000+ upfront &ldquo;file processing&rdquo; fees to parents.</span>
                      </div>
                    </td>
                    <td style={{ background: 'rgba(250, 100, 0, 0.02)', fontWeight: '600', color: 'var(--navy-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>100% Free Consultation for all students and parents at all stages.</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>3. Capitation &amp; Hidden Fees</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <XCircle size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Often facilitates unaccounted management donations or inflated quotas.</span>
                      </div>
                    </td>
                    <td style={{ background: 'rgba(250, 100, 0, 0.02)', fontWeight: '600', color: 'var(--navy-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Zero Capitation Policy: All fees are paid directly to the university with official receipts.</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>4. College Selection Rigor</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <XCircle size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Promotes tie-ups without verifying NAAC grade, faculty quality, or real placements.</span>
                      </div>
                    </td>
                    <td style={{ background: 'rgba(250, 100, 0, 0.02)', fontWeight: '600', color: 'var(--navy-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>500+ Verified Campuses: Every institution is vetted for AICTE/UGC approvals and campus audit.</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>5. Ongoing Support</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <XCircle size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Cuts off all contact as soon as admission tokens are deposited.</span>
                      </div>
                    </td>
                    <td style={{ background: 'rgba(250, 100, 0, 0.02)', fontWeight: '600', color: 'var(--navy-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Continuous Student Mentorship: Accessible guidance throughout your academic degree.</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PURPOSE, VISION, MISSION: LUXURY ARCHITECTURAL CARDS
          ========================================================================= */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <div className="section-tag">CORE FOUNDATION</div>
            <h2 className="section-title">Purpose, Vision &amp; Mission</h2>
            <p className="section-subtitle center-block">
              The guiding philosophy that steers every advisory session, university partnership, and student decision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Purpose */}
            <div className="pvm-card navy-accent">
              <div className="pvm-icon-bubble" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-primary)', marginBottom: '12px', fontWeight: '800' }}>Our Purpose</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '20px' }}>
                To empower students and parents to cut through commercial noise and decisively resolve three vital life questions:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: '10px', fontWeight: '700', color: 'var(--navy-primary)', fontSize: '0.9rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange-primary)' }} />
                  <span>What can I become? (Career Alignment)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: '10px', fontWeight: '700', color: 'var(--navy-primary)', fontSize: '0.9rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange-primary)' }} />
                  <span>How can I get there? (Academic Pathway)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: '10px', fontWeight: '700', color: 'var(--navy-primary)', fontSize: '0.9rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange-primary)' }} />
                  <span>Where should I study? (Campus Fit &amp; ROI)</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="pvm-card orange-accent">
              <div className="pvm-icon-bubble" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-primary)', marginBottom: '12px', fontWeight: '800' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '20px' }}>
                To become India&apos;s most credible and transparent higher education navigation ecosystem, empowering every 
                aspiring mind with tailored data and strategic direction, while expanding to premier global education corridors.
              </p>

              <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(250, 100, 0, 0.05)', borderRadius: '12px', border: '1px solid rgba(250, 100, 0, 0.15)' }}>
                <div style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--orange-primary)', marginBottom: '4px' }}>LONG-TERM OBJECTIVE</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--navy-primary)', lineHeight: '1.5' }}>
                  Bridging domestic tier-1 and tier-2 talent with high-impact universities and multinational career opportunities.
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="pvm-card navy-accent">
              <div className="pvm-icon-bubble" style={{ background: 'var(--bg-subtle)', color: 'var(--navy-primary)' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-primary)', marginBottom: '12px', fontWeight: '800' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '20px' }}>
                To empower learners to make confident, informed career and higher education choices by providing 
                personalized mentoring, verified campus intelligence, zero-cost advisory, and continuous post-admission support.
              </p>

              <div style={{ marginTop: 'auto', padding: '16px', background: 'var(--bg-subtle)', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '4px' }}>EXECUTION PLEDGE</div>
                <div style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.5' }}>
                  No hard-sell tactics, no undisclosed college fees, and zero compromises on academic suitability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO WE SERVE: DUAL SEGMENT LUXURY CARDS
          ========================================================================= */}
      <section className="py-section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <div className="section-tag blue">WHO WE SERVE</div>
            <h2 className="section-title">Tailored Value for Every Stakeholder</h2>
            <p className="section-subtitle center-block">
              Whether you are a student planning your career foundation, a parent securing your family&apos;s educational investment, 
              or an institution seeking quality enrollments, we deliver dedicated solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {/* For Students */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '38px 32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Students</h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--orange-primary)', fontWeight: '700' }}>Class 11, 12, UG &amp; PG Aspirants</span>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                From choosing the right stream after 12th to shortlisting competitive engineering, management, medical, and design 
                campuses, we provide structured 1-on-1 counseling, syllabus previews, and direct campus liaisons.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Aptitude and career suitability assessments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Realistic campus placement metrics (not average marketing fluff)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--orange-primary)"' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Assistance with scholarships &amp; university entrance exams</span>
                </div>
              </div>
            </div>

            {/* For Parents */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '38px 32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartHandshake size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Parents</h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--navy-primary)', fontWeight: '700' }}>Informed Financial &amp; Safety Partners</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                College education is one of the most critical financial and emotional investments a family makes. We ensure your funds 
                yield genuine career return-on-investment, transparent fee structures, and secure hostel environments.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Upfront breakdown of tuition, hostel &amp; examination expenses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--orange-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Zero donation guarantee &amp; official university fee receipts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--orange-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Direct phone access to senior directors in Lucknow</span>
                </div>
              </div>
            </div>

            {/* For Institutions */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '38px 32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Institutions</h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--orange-primary)', fontWeight: '700' }}>Strategic Education Marketing &amp; PR</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                We partner with premier universities and colleges to build sustained academic brand value, execute targeted student 
                lead campaigns, and organize high-impact feeder school outreach conclaves across Northern India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Qualified student lead generation with high conversion intent</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--orange-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Campus branding, PR features &amp; digital social campaigns</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--orange-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" />
                  <span>Feeder school interactions and career orientation workshops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIVE GUIDING PRINCIPLES (THE AMC CREED)
          ========================================================================= */}
      <section className="py-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <div className="section-tag orange">THE AMC STANDARD</div>
            <h2 className="section-title">Five Principles That Shape Every Interaction</h2>
            <p className="section-subtitle center-block">
              Many agencies work with universities. Few truly understand how modern higher education functions. 
              These 5 ethical pillars guide every conversation we have.
            </p>
          </div>

          <div className="principles-luxury-grid">
            <div className="principle-card-lux" style={{ borderLeft: '4px solid var(--orange-primary)' }}>
              <span className="principle-num">01</span>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '10px', fontWeight: '800' }}>Career Before College</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                We anchor education decisions in the student&apos;s ultimate career trajectory and industry demand, not whatever campus happens to have empty seats.
              </p>
            </div>

            <div className="principle-card-lux" style={{ borderLeft: '4px solid var(--navy-primary)' }}>
              <span className="principle-num">02</span>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '10px', fontWeight: '800' }}>Whole-Student Matching</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                We assess academic scores, personality, financial parameters, preferred location, and campus culture together for a complete, harmonious match.
              </p>
            </div>

            <div className="principle-card-lux" style={{ borderLeft: '4px solid var(--orange-primary)' }}>
              <span className="principle-num">03</span>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '10px', fontWeight: '800' }}>Guidance, Not Pressure</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                Our consultations are genuinely diagnostic and consultative. No aggressive sales quotas, no manufactured urgency, and no false promises.
              </p>
            </div>

            <div className="principle-card-lux" style={{ borderLeft: '4px solid var(--navy-primary)' }}>
              <span className="principle-num">04</span>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '10px', fontWeight: '800' }}>One Connected Journey</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                Career discovery, course evaluation, campus verification, application processing, and ongoing mentorship coalesce into one stress-free experience.
              </p>
            </div>

            <div className="principle-card-lux" style={{ borderLeft: '4px solid var(--orange-primary)' }}>
              <span className="principle-num">05</span>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '10px', fontWeight: '800' }}>Partner Ecosystem Mindset</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
                We create sustainable, compounding value for students, parents, and academic institutions, keeping student career outcomes at the absolute center.
              </p>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div style={{ textAlign: 'center', marginTop: '55px' }}>
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <button 
                onClick={() => setCounsellingModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ padding: '16px 36px', fontSize: '1.05rem', boxShadow: '0 10px 25px rgba(250, 100, 0, 0.35)' }}
              >
                <span>Schedule Free Consultation (Lucknow &amp; Online)</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setInstitutionModalOpen(true)}
                className="btn btn-outline btn-lg"
                style={{ padding: '16px 28px', fontSize: '1.05rem' }}
              >
                <span>Institutional Collaboration</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => setCounsellingModalOpen(true)} />

      {/* Footer */}
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
