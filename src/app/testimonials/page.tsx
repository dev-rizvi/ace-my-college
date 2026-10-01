'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CollegeFilterDropdown } from '@/components/CollegeFilterDropdown';
import {
  Star, Quote, ArrowRight, CheckCircle2, GraduationCap, Users,
  ShieldCheck, Award, HeartHandshake, Building2, Search, X,
  Laptop, Briefcase, HeartPulse, Scale, Layers
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
  },
  {
    id: "6",
    name: "Vikramaditya Roy",
    role: "Student",
    stream: "Management / MBA",
    college: "SCMS & Top B-Schools",
    city: "Noida, UP",
    rating: 5,
    image: "/images/testimonial-rohan.jpg",
    quote: "Accurate placement realities instead of inflated marketing brochure figures.",
    story: "ACE mapped out my GD-PI preparation and gave an honest breakdown of average CTC versus median CTC. Secured my preferred specialization with absolute peace of mind."
  },
  {
    id: "7",
    name: "Meera Nambiar",
    role: "Student",
    stream: "Medical & Health",
    college: "KMC Manipal / Health Sciences",
    city: "Lucknow, UP",
    rating: 5,
    image: "/images/testimonial-priya.jpg",
    quote: "Steered us safely through all counseling rounds and seat allocations.",
    story: "NEET counselling rules change every year. The counsellors guided us step-by-step through choice-filling, state quotas, and security deposit refunds without a single error."
  },
  {
    id: "8",
    name: "Tanvi Saxena",
    role: "Student",
    stream: "Design & Law",
    college: "National Law University & Private Law Colleges",
    city: "Prayagraj, UP",
    rating: 5,
    image: "/images/testimonial-ananya.jpg",
    quote: "Mentors who understand corporate law internships and moot court culture.",
    story: "Helped me choose between 5-year integrated BBA LLB and BA LLB programs based on my career ambition in corporate advisory rather than litigation."
  }
];

export default function TestimonialsPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const streamOptions = [
    { id: 'all', label: 'All Streams' },
    { id: 'Engineering & Tech', label: 'Engineering & Tech' },
    { id: 'Management / MBA', label: 'Management / MBA' },
    { id: 'Medical & Health', label: 'Medical & Health' },
    { id: 'Design & Law', label: 'Design & Law' },
  ];

  const roleOptions = [
    { id: 'all', label: 'All Reviewers' },
    { id: 'Student', label: 'Students' },
    { id: 'Parents', label: 'Parents' },
  ];

  const getStreamCount = (streamId: string) => {
    if (streamId === 'all') return ALL_REVIEWS.length;
    return ALL_REVIEWS.filter(r => r.stream === streamId).length;
  };

  const getRoleCount = (roleId: string) => {
    if (roleId === 'all') return ALL_REVIEWS.length;
    return ALL_REVIEWS.filter(r => r.role === roleId).length;
  };

  const streamOptionsWithCount = streamOptions.map(opt => ({
    ...opt,
    count: getStreamCount(opt.id)
  }));

  const roleOptionsWithCount = roleOptions.map(opt => ({
    ...opt,
    count: getRoleCount(opt.id)
  }));

  const filteredReviews = ALL_REVIEWS.filter((rev) => {
    const matchesStream = selectedStream === 'all' || rev.stream === selectedStream;
    const matchesRole = selectedRole === 'all' || rev.role === selectedRole;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = q === '' ||
      rev.name.toLowerCase().includes(q) ||
      rev.role.toLowerCase().includes(q) ||
      rev.stream.toLowerCase().includes(q) ||
      rev.college.toLowerCase().includes(q) ||
      rev.city.toLowerCase().includes(q) ||
      rev.quote.toLowerCase().includes(q) ||
      rev.story.toLowerCase().includes(q);

    return matchesStream && matchesRole && matchesSearch;
  });

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
          {/* Heading */}
          <h1 className="page-hero-title">
            Stories of Clarity, <span className="text-gradient-orange">Confidence &amp; Growth</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Discover how students and parents navigated admissions, avoided capitation fees, and secured merit seats with ACE MY CAMPUS.
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

        </div>
      </section>

      {/* =========================================================================
          FILTER & SEARCH BAR (UNIFIED STICKY TOOLBAR WITH DROPDOWNS)
          ========================================================================= */}
      <section className="courses-toolbar-section">
        <div className="container">
          <div className="courses-toolbar-container">
            {/* Custom Filter Dropdowns: Stream & Reviewer */}
            <div className="colleges-filter-dropdowns-row">
              <CollegeFilterDropdown
                label="Stream"
                ariaLabel="Filter by Academic Stream"
                icon={<GraduationCap size={16} />}
                options={streamOptionsWithCount}
                selectedValue={selectedStream}
                onChange={setSelectedStream}
              />

              <CollegeFilterDropdown
                label="Reviewer"
                ariaLabel="Filter by Reviewer Type"
                icon={<Users size={16} />}
                options={roleOptionsWithCount}
                selectedValue={selectedRole}
                onChange={setSelectedRole}
              />

              {/* Reset Button (only shown if a filter is active) */}
              {(selectedStream !== 'all' || selectedRole !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedRole('all');
                  }}
                  className="filter-reset-pill-btn"
                  title="Reset all filters"
                >
                  <X size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Unified Search Input */}
            <div className="courses-search-wrap">
              <input
                type="text"
                placeholder="Search reviews, students, colleges, stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              <Search size={16} className="courses-search-icon" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="courses-search-clear"
                  aria-label="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-section" id="student-reviews" style={{ background: 'var(--bg-page)', flexGrow: 1, paddingTop: '36px' }}>
        <div className="container">
          {/* Header row with count & active filter badges */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.92rem', color: '#64748B', fontWeight: '600' }}>
                Showing <strong style={{ color: '#0A3871' }}>{filteredReviews.length}</strong> verified {filteredReviews.length === 1 ? 'story' : 'stories'}
              </span>

              {/* Active Stream Tag */}
              {selectedStream !== 'all' && (
                <span className="active-filter-badge">
                  Stream: {streamOptions.find(t => t.id === selectedStream)?.label}
                  <button onClick={() => setSelectedStream('all')} aria-label="Remove stream filter">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Active Reviewer Tag */}
              {selectedRole !== 'all' && (
                <span className="active-filter-badge">
                  Reviewer: {roleOptions.find(r => r.id === selectedRole)?.label}
                  <button onClick={() => setSelectedRole('all')} aria-label="Remove reviewer filter">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Active Search Tag */}
              {searchQuery && (
                <span className="active-filter-badge">
                  Search: &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} aria-label="Clear search">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Reset All Button */}
              {(selectedStream !== 'all' || selectedRole !== 'all' || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={() => { setSelectedStream('all'); setSelectedRole('all'); setSearchQuery(''); }}
                  className="filter-reset-pill-btn"
                  title="Clear all filters"
                >
                  <X size={12} />
                  <span>Clear all</span>
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: '#64748B' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Star size={14} fill="#F59E0B" color="#F59E0B" /> 100% Genuine Reviews
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={14} color="#0A3871" /> Verified Admissions
              </span>
            </div>
          </div>

          {/* Reviews Grid or Empty State */}
          {filteredReviews.length > 0 ? (
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
          ) : (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px dashed #CBD5E1',
                padding: '60px 24px',
                textAlign: 'center',
                maxWidth: '560px',
                margin: '40px auto'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#FFF5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--orange-primary)'
                }}
              >
                <Search size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '8px' }}>
                No stories found
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.6' }}>
                We couldn&apos;t find any reviews matching your search criteria. Try adjusting your search keywords or switching streams.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedStream('all'); setSelectedRole('all'); }}
                className="btn btn-primary"
                style={{ padding: '10px 22px', borderRadius: '8px', fontWeight: '700' }}
              >
                Reset All Filters
              </button>
            </div>
          )}
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
