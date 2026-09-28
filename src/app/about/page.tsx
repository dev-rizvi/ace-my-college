'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import {
  Building2, Users, Award, ShieldCheck, CheckCircle2,
  ArrowRight, GraduationCap, HeartHandshake, Sparkles,
  Megaphone, TrendingUp, Compass
} from 'lucide-react';

export default function AboutPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          1. CLEAN HERO BANNER: Modeled after reference (a3career.com / Slide 7)
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(135deg, rgba(4, 22, 48, 0.92) 0%, rgba(10, 56, 113, 0.85) 60%, rgba(6, 33, 71, 0.92) 100%), url('/images/banner-about.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          padding: '80px 0 80px',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span
            style={{
              display: 'inline-block',
              color: 'var(--orange-primary)',
              background: 'rgba(250, 100, 0, 0.15)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
              border: '1px solid rgba(250, 100, 0, 0.3)'
            }}
          >
            ABOUT ACE MY CAMPUS
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '12px',
              fontFamily: 'var(--font-outfit), sans-serif'
            }}
          >
            ABOUT US
          </h1>

          <div
            style={{
              width: '65px',
              height: '4px',
              background: 'linear-gradient(90deg, #FA6400, #FF782D)',
              borderRadius: '2px',
              margin: '0 auto 18px'
            }}
          />

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: '#CBD5E1',
              maxWidth: '680px',
              margin: '0 auto 28px',
              lineHeight: '1.6'
            }}
          >
            Empowering students with transparent counselling, verified college insights, and confident admission pathways.
          </p>

          <div className="hero-cta-buttons-responsive">
            <button
              onClick={() => setCounsellingModalOpen(true)}
              className="btn btn-primary"
              style={{ padding: '13px 26px', borderRadius: '10px', fontWeight: '800' }}
            >
              <span>Get Free Counselling</span>
              <ArrowRight size={16} />
            </button>
            <Link
              href="/colleges"
              className="btn btn-outline-white"
              style={{ padding: '13px 22px', borderRadius: '10px', fontWeight: '700' }}
            >
              <span>Explore Colleges</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FOUNDING STORY (Exact text as specified in Slide 7)
          ========================================================================= */}
      <section style={{ padding: '70px 0 50px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div
            style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '42px 40px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.05)',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '40px',
                width: '60px',
                height: '4px',
                background: 'var(--orange-primary)',
                borderRadius: '0 0 4px 4px'
              }}
            />

            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: 'var(--navy-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-outfit), sans-serif'
              }}
            >
              Our Mission &amp; Foundation
            </h3>

            <p
              style={{
                fontSize: '1.08rem',
                color: '#334155',
                lineHeight: '1.85',
                margin: 0,
                textAlign: 'justify'
              }}
            >
              <strong>Ace My Campus</strong> was founded to simplify the admission journey for students across India by providing clear, reliable, and unbiased guidance. We help students navigate the complexities of college selection, cut through misleading placement claims, and make informed decisions based on their academic profile, career goals, and budget. Our mission is simple: to empower every student with transparent counselling and the confidence to choose the right path for a successful future.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EXPERIENCE AND NETWORK (Image + Content as specified in Slide 7)
          ========================================================================= */}
      <section style={{ padding: '40px 0 70px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Campus & Network Image */}
            <div>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 18px 45px -10px rgba(6, 33, 71, 0.15)',
                  border: '1px solid #E2E8F0',
                  position: 'relative'
                }}
              >
                <img
                  src="/images/about-experience-network.jpg"
                  alt="Ace My Campus Experience and Network"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Experience and Network text from Slide 7 */}
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: 'var(--orange-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                DECADE OF TRUST &amp; EXPERTISE
              </span>

              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                  fontWeight: '800',
                  color: 'var(--navy-primary)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-outfit), sans-serif'
                }}
              >
                Experience and Network
              </h2>

              <div
                style={{
                  width: '50px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FA6400, #FF782D)',
                  borderRadius: '2px',
                  marginBottom: '20px'
                }}
              />

              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#475569',
                  lineHeight: '1.8',
                  marginBottom: '24px'
                }}
              >
                With over 10 years of experience in admissions counselling, <strong>Ace My Campus</strong> has built strong partnerships with <strong>200+ leading management institutes</strong> across India. We have successfully guided more than <strong>2,500 students</strong> toward colleges that align with their career goals, academic profile, and budget. Our personalized counselling approach considers each student&apos;s unique preferences, including location, specialization, and financial requirements. Backed by deep industry knowledge and extensive institutional networks, we provide clear, practical insights that help students make informed decisions with confidence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>Personalized preferences: location, specialization &amp; budget alignment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>Deep industry knowledge &amp; verified placement cutoffs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={18} color="var(--orange-primary)" style={{ flexShrink: 0 }} />
                  <span>100% Free guidance with zero hidden charges or donation demands</span>
                </div>
              </div>

              <button
                onClick={() => setCounsellingModalOpen(true)}
                className="btn btn-primary"
                style={{ padding: '12px 24px', borderRadius: '10px', fontWeight: '800' }}
              >
                <span>Get Free Counselling</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PROVEN STATS (Exact format as specified in Slide 5)
          ========================================================================= */}
      <section style={{ padding: '60px 0 70px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '650px', margin: '0 auto 40px' }}>
            <h3
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                fontWeight: '800',
                color: 'var(--navy-primary)',
                marginBottom: '10px',
                fontFamily: 'var(--font-outfit), sans-serif'
              }}
            >
              Why trust ACE MY CAMPUS ?
            </h3>
            <div
              style={{
                width: '50px',
                height: '4px',
                background: 'linear-gradient(90deg, #FA6400, #FF782D)',
                borderRadius: '2px',
                margin: '0 auto 14px'
              }}
            />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Clear, cluster-free metrics that speak for our decade-long commitment to Indian students.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              maxWidth: '1240px',
              margin: '0 auto'
            }}
          >
            {/* Card 1: 5000+ */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)',
                borderRadius: '20px',
                padding: '38px 24px',
                color: '#ffffff',
                boxShadow: '0 12px 30px -4px rgba(250, 100, 0, 0.35)',
                textAlign: 'center'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <GraduationCap size={26} />
              </div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', lineHeight: 1, marginBottom: '10px', fontFamily: 'var(--font-outfit), sans-serif' }}>
                5000+
              </h3>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                Students Counselled
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                Absolutely Free of Cost
              </p>
            </div>

            {/* Card 2: 2500+ */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)',
                borderRadius: '20px',
                padding: '38px 24px',
                color: '#ffffff',
                boxShadow: '0 12px 30px -4px rgba(250, 100, 0, 0.35)',
                textAlign: 'center'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', lineHeight: 1, marginBottom: '10px', fontFamily: 'var(--font-outfit), sans-serif' }}>
                2500+
              </h3>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                Successful admissions
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                Presence in Pune, Mumbai, Delhi, Lucknow &amp; PAN India
              </p>
            </div>

            {/* Card 3: 200+ */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)',
                borderRadius: '20px',
                padding: '38px 24px',
                color: '#ffffff',
                boxShadow: '0 12px 30px -4px rgba(250, 100, 0, 0.35)',
                textAlign: 'center'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Building2 size={26} />
              </div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', lineHeight: 1, marginBottom: '10px', fontFamily: 'var(--font-outfit), sans-serif' }}>
                200+
              </h3>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                Partner institutions across India
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                Accredited universities &amp; top management institutes
              </p>
            </div>

            {/* Card 4: 100% */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FA6400 0%, #E05300 100%)',
                borderRadius: '20px',
                padding: '38px 24px',
                color: '#ffffff',
                boxShadow: '0 12px 30px -4px rgba(250, 100, 0, 0.35)',
                textAlign: 'center'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', lineHeight: 1, marginBottom: '10px', fontFamily: 'var(--font-outfit), sans-serif' }}>
                100%
              </h3>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                Placement support
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                Personal One-on-One Counselling Model
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHO WE SERVE: Simplified & Aligned as specified in Slide 8 & 9
          ========================================================================= */}
      <section style={{ padding: '75px 0 65px', background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <span className="section-tag blue">OUR STAKEHOLDERS</span>
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-subtitle center-block" style={{ maxWidth: '620px' }}>
              Clear, focused value propositions tailored for students, parents, and higher educational institutions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              maxWidth: '1140px',
              margin: '0 auto'
            }}
          >
            {/* Card 1: For Students (Slide 9: Class 11 removed!) */}
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: '18px',
                padding: '34px 28px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Students</h3>
                  {/* Exactly updated as per Slide 9: "Remove call 11 from the For Student section" */}
                  <span style={{ fontSize: '0.82rem', color: 'var(--orange-primary)', fontWeight: '700' }}>
                    Class 12, UG &amp; PG Aspirants
                  </span>
                </div>
              </div>

              <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '0.94rem', marginBottom: '20px', flexGrow: 1 }}>
                From choosing the right stream after 12th to shortlisting competitive management, engineering, and commerce colleges, we provide structured 1-on-1 counseling, syllabus previews, and direct campus liaisons.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Aptitude and career suitability assessments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Realistic campus placement metrics (not marketing fluff)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Assistance with scholarships &amp; admission cutoffs</span>
                </div>
              </div>
            </div>

            {/* Card 2: For Parents */}
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: '18px',
                padding: '34px 28px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Parents</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--navy-primary)', fontWeight: '700' }}>
                    Informed Financial &amp; Safety Partners
                  </span>
                </div>
              </div>

              <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '0.94rem', marginBottom: '20px', flexGrow: 1 }}>
                College education is one of the most critical investments a family makes. We ensure your funds yield genuine career return-on-investment, transparent fee structures, and safe campus environments.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Upfront breakdown of tuition, hostel &amp; examination expenses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Zero donation guarantee &amp; official university fee receipts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Direct guidance from senior education advisors</span>
                </div>
              </div>
            </div>

            {/* Card 3: For Institutions */}
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: '18px',
                padding: '34px 28px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-primary)', margin: 0, fontWeight: '800' }}>For Institutions</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--orange-primary)', fontWeight: '700' }}>
                    Strategic Education Marketing &amp; PR
                  </span>
                </div>
              </div>

              <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '0.94rem', marginBottom: '20px', flexGrow: 1 }}>
                We partner with premier universities and colleges to build sustained academic brand value, execute targeted student lead campaigns, and organize high-impact feeder school outreach conclaves.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Qualified student lead generation with high conversion intent</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Campus branding, PR features &amp; digital social campaigns</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--orange-primary)' }}>
                  <CheckCircle2 size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Feeder school interactions &amp; career orientation workshops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INSTITUTIONAL SERVICES (Exact content as specified in Slide 8)
          ========================================================================= */}
      <section style={{ padding: '75px 0 85px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="text-center" style={{ marginBottom: '45px' }}>
            <span className="section-tag orange">INSTITUTIONAL PARTNERSHIPS</span>
            <h2 className="section-title">Comprehensive Institutional Solutions</h2>
            <p
              className="section-subtitle center-block"
              style={{ maxWidth: '820px', fontSize: '1.05rem', color: '#334155', lineHeight: '1.7' }}
            >
              &ldquo;We partner with leading colleges and universities to strengthen institutional brand value, enhance student outreach, and drive high-quality admissions through integrated marketing, recruitment, and engagement solutions.&rdquo;
            </p>
          </div>

          {/* 6 Solutions from Slide 8 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {/* 1. Admissions & Recruitment Support */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                Admissions &amp; Recruitment Support
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Optimize enrollment outcomes with expert student recruitment, lead nurturing, and conversion-focused admission support.
              </p>
            </div>

            {/* 2. Digital Marketing Solutions */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Megaphone size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                Digital Marketing Solutions
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Increase visibility, attract the right student audience, and boost inquiries through data-driven digital marketing strategies.
              </p>
            </div>

            {/* 3. Revenue Growth & Enrollment Enhancement */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <TrendingUp size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                Revenue Growth &amp; Enrollment Enhancement
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Improve admission channels, increase student enrollments, and drive sustainable institutional growth.
              </p>
            </div>

            {/* 4. Student Lead Generation */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                Student Lead Generation
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Generate qualified, high-intent student leads through targeted recruitment campaigns that drive admissions growth.
              </p>
            </div>

            {/* 5. Campus Branding & Visibility */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-light)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Building2 size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                Campus Branding &amp; Visibility
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Strengthen your institution&apos;s reputation with strategic campus branding, PR initiatives, and impactful digital marketing campaigns.
              </p>
            </div>

            {/* 6. School Outreach Programs */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--blue-light)', color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Compass size={22} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '8px' }}>
                School Outreach Programs
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                Engage prospective students through feeder school partnerships, career guidance sessions, and orientation workshops.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setInstitutionModalOpen(true)}
              className="btn btn-outline"
              style={{ padding: '13px 28px', borderRadius: '10px', fontWeight: '800', fontSize: '0.95rem' }}
            >
              <span>Connect for Institutional Partnership</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. HIGH-IMPACT FINAL CTA BANNER (Slide 6 Copy)
          ========================================================================= */}
      <section style={{ padding: '60px 0 80px', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #041630 0%, #0A3871 60%, #082852 100%)',
              borderRadius: '20px',
              padding: '40px 44px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: '0 16px 40px -10px rgba(4, 22, 48, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <span
                style={{
                  color: 'var(--orange-primary)',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'rgba(250, 100, 0, 0.15)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                FREE CAREER &amp; COLLEGE COUNSELLING
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                  color: '#ffffff',
                  fontWeight: '800',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-outfit), sans-serif'
                }}
              >
                Not sure which college is right for you?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                You&apos;re not alone. We&apos;re here to help you make the right choice with confidence.
              </p>
            </div>

            <button
              onClick={() => setCounsellingModalOpen(true)}
              className="btn btn-primary btn-lg"
              style={{
                whiteSpace: 'nowrap',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: '800',
                boxShadow: '0 8px 24px rgba(250, 100, 0, 0.4)'
              }}
            >
              <span>Get Free Counselling Session</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* Modals */}
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
