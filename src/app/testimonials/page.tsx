'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { 
  Star, Quote, ArrowRight, CheckCircle2, GraduationCap, Users, 
  ShieldCheck, Award, HeartHandshake, Building2 
} from 'lucide-react';

interface FullReview {
  id: string;
  name: string;
  role: string;
  stream: string;
  college: string;
  city: string;
  rating: number;
  image: string;
  quote: string;
  story: string;
}

const ALL_REVIEWS: FullReview[] = [
  {
    id: "1",
    name: "Ananya Singh",
    role: "Student",
    stream: "Engineering & Tech",
    college: "SRM University / Bennett",
    city: "Lucknow, UP",
    rating: 5,
    image: "/images/testimonial-ananya.jpg",
    quote: "ACE MY CAMPUS helped me discover the right career path and find a college that truly fits me.",
    story: "In 12th grade, everyone told me to prepare for IIT without knowing if I liked coding or research. ACE MY CAMPUS did aptitude profiling with me, identified my passion for Artificial Intelligence, and helped me secure a high scholarship at Bennett University."
  },
  {
    id: "2",
    name: "Rohan Verma",
    role: "Student",
    stream: "Management / MBA",
    college: "BBD University & Corporate Tie-ups",
    city: "Kanpur, UP",
    rating: 5,
    image: "/images/testimonial-rohan.jpg",
    quote: "Before speaking to ACE MY CAMPUS, my parents and I were completely overwhelmed by glossy university ads.",
    story: "ACE cut through the noise, evaluated our family budget, and matched me with high-placement programs in Business Analytics. Their whole-student matching approach made all the difference."
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    role: "Student",
    stream: "Medical & Health",
    college: "Integral Institute of Medical Sciences",
    city: "Varanasi, UP",
    rating: 5,
    image: "/images/testimonial-priya.jpg",
    quote: "Complete transparency on fees, hospital patient load, and honest admission guidance.",
    story: "The medical admission ecosystem is rife with fake consultants making false promises. ACE gave us accurate cut-off analysis, transparent state counseling guidance, and verified fee breakdowns."
  },
  {
    id: "4",
    name: "Rajesh & Sunita Srivastava",
    role: "Parents",
    stream: "Engineering & Tech",
    college: "Parent of B.Tech CSE Aspirant",
    city: "Lucknow, UP",
    rating: 5,
    image: "/images/testimonial-ananya.jpg",
    quote: "Guidance, Not Pressure is real. They never pushed any single college onto us.",
    story: "As middle-class parents, financing our son's education was a huge milestone. ACE showed us realistic placement records and helped us pick a university where the tuition fee gave the highest return on investment."
  },
  {
    id: "5",
    name: "Aarav Kapoor",
    role: "Student",
    stream: "Design & Law",
    college: "UPES School of Design",
    city: "Delhi NCR",
    rating: 5,
    image: "/images/testimonial-rohan.jpg",
    quote: "From portfolio review to campus transition, ACE was with me at every milestone.",
    story: "Design entrance tests have unique portfolio requirements. The mentors at ACE arranged sessions with senior design students, giving me immense confidence during the studio test."
  }
];

export default function TestimonialsPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Engineering & Tech', 'Management / MBA', 'Medical & Health', 'Design & Law'];

  const filteredReviews = activeFilter === 'All'
    ? ALL_REVIEWS
    : ALL_REVIEWS.filter(r => r.stream === activeFilter);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO SECTION: Cinematic Dark Gradient with banner-testimonials.jpg
          ========================================================================= */}
      <section className="testimonials-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Badge */}
          <div className="page-hero-badge">
            <span className="live-pulse-dot blue" style={{ background: 'var(--orange-primary)' }} />
            <span className="badge-text">
              VERIFIED REVIEWS • 10,000+ STORIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="page-hero-title">
            Stories of Clarity, <span className="text-gradient-orange">Confidence &amp; Growth</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Discover how thousands of students and parents navigated complex admission procedures, avoided expensive capitation traps, 
            and secured merit admissions at top universities across India with ACE MY CAMPUS.
          </p>

          {/* Trust Value Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-pill">
              <Star size={15} color="var(--orange-primary)" />
              <span>4.9 / 5 Rating (1,200+ Reviews)</span>
            </div>
            <div className="hero-trust-pill">
              <HeartHandshake size={15} color="var(--orange-primary)" />
              <span>100% Student &amp; Parent Verified</span>
            </div>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>Zero Sponsored Bias Policy</span>
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
              href="#student-reviews"
              className="btn btn-outline-white btn-lg"
            >
              <span>Read Student Journeys</span>
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
                <Star size={26} />
              </div>
              <div>
                <div className="about-stat-val">4.9 / 5</div>
                <div className="about-stat-label">Verified Rating (1,200+ Reviews)</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--orange-light)', color: 'var(--orange-primary)' }}>
                <Award size={26} />
              </div>
              <div>
                <div className="about-stat-val">98%</div>
                <div className="about-stat-label">Admission Satisfaction Index</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap" style={{ background: 'var(--blue-light)', color: 'var(--navy-primary)' }}>
                <Building2 size={26} />
              </div>
              <div>
                <div className="about-stat-val">500+</div>
                <div className="about-stat-label">Partner Campuses Represented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-section" id="student-reviews" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* Stream Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '44px' }}>
            {filterTabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  background: activeFilter === tab ? 'linear-gradient(135deg, var(--orange-vibrant), var(--orange-primary))' : '#ffffff',
                  color: activeFilter === tab ? '#ffffff' : 'var(--navy-primary)',
                  border: '1px solid',
                  borderColor: activeFilter === tab ? 'var(--orange-primary)' : 'var(--border-subtle)',
                  padding: '9px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: activeFilter === tab ? 'var(--shadow-orange)' : 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-subtle)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 250ms ease, box-shadow 250ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', background: 'var(--blue-light)', color: 'var(--navy-primary)', padding: '4px 12px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(10, 56, 113, 0.2)' }}>
                    {rev.role}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', fontWeight: '800', marginBottom: '14px', lineHeight: '1.4' }}>
                  &ldquo;{rev.quote}&rdquo;
                </h4>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '26px', flexGrow: 1 }}>
                  {rev.story}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                  <img 
                    src={rev.image} 
                    alt={rev.name} 
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2.5px solid var(--orange-primary)', boxShadow: '0 4px 10px rgba(250, 100, 0, 0.25)' }}
                  />
                  <div>
                    <div style={{ fontWeight: '800', color: 'var(--navy-primary)', fontSize: '1.05rem' }}>{rev.name}</div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--navy-primary)', fontWeight: '700' }}>{rev.college}</div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{rev.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean High-Impact CTA Banner */}
      <FinalCta onOpenCounselling={() => setCounsellingModalOpen(true)} />

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
