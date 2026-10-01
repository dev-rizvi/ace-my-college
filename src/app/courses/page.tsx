'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CollegeFilterDropdown } from '@/components/CollegeFilterDropdown';
import {
  GraduationCap, Briefcase, TrendingUp, Award, Clock,
  CheckCircle2, ArrowRight, ShieldCheck, Search,
  Sparkles, Filter, Building2, ChevronRight, Trophy, Laptop, Scale, Layers, X
} from 'lucide-react';

interface CourseData {
  id: string;
  name: string;
  shortName: string;
  category: 'management' | 'undergrad' | 'technology' | 'law';
  level: string;
  duration: string;
  eligibility: string;
  shortEligibility?: string;
  avgPackage: string;
  highestPackage: string;
  specializations: string[];
  careerRoles: string[];
  description: string;
  topRecruiters: string[];
}

const COURSES_DATA: CourseData[] = [
  {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    shortName: 'MBA',
    category: 'management',
    level: 'Postgraduate (PG)',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Graduation in any discipline with minimum 50% marks + CAT/MAT/CMAT/XAT/State Entrance',
    shortEligibility: 'Graduation (50%+) + National Entrance (CAT/MAT/CMAT)',
    avgPackage: '₹7.5 LPA - ₹16.0 LPA',
    highestPackage: '₹28.5 LPA',
    specializations: [
      'Marketing & Digital Strategy',
      'Finance & Banking',
      'Human Resource Management (HR)',
      'Business Analytics & Big Data',
      'Operations & Supply Chain Management',
      'International Business (IB)'
    ],
    careerRoles: [
      'Marketing Director / Brand Manager',
      'Investment Banker / Financial Analyst',
      'Management Consultant',
      'Product Manager',
      'Talent Acquisition Lead'
    ],
    description: 'A transformative 2-year leadership degree designed to develop cross-functional corporate acumen, strategic decision-making, and entrepreneurial leadership across national and global organizations.',
    topRecruiters: ['Deloitte', 'HDFC Bank', 'KPMG', 'Amazon', 'EY', 'ICICI Bank']
  },
  {
    id: 'pgdm',
    name: 'Post Graduate Diploma in Management (PGDM)',
    shortName: 'PGDM',
    category: 'management',
    level: 'Postgraduate Diploma (AICTE Approved)',
    duration: '2 Years (Trimester / Semester)',
    eligibility: 'Bachelor’s Degree (50%+) from a recognized university + Valid score in National MBA Entrance Tests',
    shortEligibility: 'Bachelor’s Degree (50%+) + Entrance Exam Score',
    avgPackage: '₹8.0 LPA - ₹18.5 LPA',
    highestPackage: '₹32.0 LPA',
    specializations: [
      'Corporate Finance & FinTech',
      'Marketing & Consumer Insights',
      'Artificial Intelligence for Business',
      'Supply Chain & Global Logistics',
      'Entrepreneurship & Family Business'
    ],
    careerRoles: [
      'Corporate Strategy Consultant',
      'FinTech Product Specialist',
      'Supply Chain Architect',
      'Senior Business Analyst',
      'Private Equity Associate'
    ],
    description: 'An industry-centric, dynamic program continuously updated in collaboration with top corporate leaders, emphasizing corporate internships, live consulting assignments, and dual specializations.',
    topRecruiters: ['McKinsey', 'PwC', 'Tata Consultancy Services', 'Axis Bank', 'Accenture']
  },
  {
    id: 'bba',
    name: 'Bachelor of Business Administration (BBA)',
    shortName: 'BBA',
    category: 'undergrad',
    level: 'Undergraduate (UG)',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 (Higher Secondary) with minimum 50% aggregate in any stream from recognized board',
    shortEligibility: '10+2 in any stream (minimum 50% aggregate)',
    avgPackage: '₹4.5 LPA - ₹8.5 LPA',
    highestPackage: '₹15.0 LPA',
    specializations: [
      'General Management',
      'Digital Marketing & E-Commerce',
      'Banking & Financial Services',
      'International Business',
      'Human Resource Development'
    ],
    careerRoles: [
      'Business Development Executive',
      'Client Relationship Manager',
      'Financial Analyst Trainee',
      'Digital Marketing Associate',
      'Operations Analyst'
    ],
    description: 'The premier undergraduate management degree that builds early foundations in corporate communication, marketing, financial planning, and organizational psychology.',
    topRecruiters: ['Wipro', 'Infosys', 'Genpact', 'HCL Technologies', 'Kotak Mahindra']
  },
  {
    id: 'bcom',
    name: 'Bachelor of Commerce (B.Com / B.Com Hons)',
    shortName: 'B.Com',
    category: 'undergrad',
    level: 'Undergraduate (UG)',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Commerce / Mathematics preferred (minimum 50% aggregate)',
    shortEligibility: '10+2 with Commerce / Math preferred (50%+)',
    avgPackage: '₹4.0 LPA - ₹7.5 LPA',
    highestPackage: '₹12.5 LPA',
    specializations: [
      'Accounting & Auditing',
      'Corporate Tax Planning & GST',
      'Banking, Insurance & Investments',
      'Financial Markets & Capital Trading',
      'International Financial Reporting (IFRS)'
    ],
    careerRoles: [
      'Chartered Accountancy Trainee',
      'Tax & Compliance Specialist',
      'Credit & Risk Analyst',
      'Accounts Manager',
      'Equity Research Assistant'
    ],
    description: 'A comprehensive study of commercial law, auditing, international trade, and financial systems. Ideal for students aspiring toward CA, CS, CMA, and CPA certifications.',
    topRecruiters: ['Grant Thornton', 'BDO India', 'ICICI Securities', 'Standard Chartered']
  },
  {
    id: 'btech',
    name: 'Bachelor of Technology (B.Tech / B.E.)',
    shortName: 'B.Tech',
    category: 'technology',
    level: 'Undergraduate (UG)',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with Physics, Mathematics, and Chemistry/Computer (minimum 50%) + JEE Main / CUET / State Exam',
    shortEligibility: '10+2 with PCM (50%+) + JEE Main / CUET',
    avgPackage: '₹6.5 LPA - ₹15.0 LPA',
    highestPackage: '₹44.0 LPA',
    specializations: [
      'Computer Science & Engineering (CSE)',
      'Artificial Intelligence & Machine Learning (AI & ML)',
      'Data Science & Analytics',
      'Cyber Security & Blockchain',
      'Cloud Computing & DevOps',
      'Electronics & Communication (ECE)'
    ],
    careerRoles: [
      'Software Development Engineer (SDE)',
      'Machine Learning Scientist',
      'Cloud Solutions Architect',
      'Cyber Security Analyst',
      'DevOps Specialist'
    ],
    description: 'Equips aspiring engineers with technical competence, algorithm design, software architecture, and modern hands-on engineering labs for global tech industries.',
    topRecruiters: ['Microsoft', 'Google India', 'Amazon', 'Cisco', 'Cognizant', 'Capgemini']
  },
  {
    id: 'bca-mca',
    name: 'Bachelor & Master of Computer Applications (BCA / MCA)',
    shortName: 'BCA / MCA',
    category: 'technology',
    level: 'Undergraduate (BCA 3 Yrs) / Postgraduate (MCA 2 Yrs)',
    duration: '3 Years (BCA) / 2 Years (MCA)',
    eligibility: '10+2 with Mathematics or Computer Science for BCA; BCA/B.Sc IT with 50%+ for MCA',
    shortEligibility: '10+2 with Math/CS (BCA); BCA/B.Sc IT (50%+) for MCA',
    avgPackage: '₹5.0 LPA - ₹11.0 LPA',
    highestPackage: '₹22.0 LPA',
    specializations: [
      'Full Stack Web Development',
      'Mobile Application Engineering (iOS/Android)',
      'Cloud Infrastructure & AWS',
      'Database Administration & Big Data',
      'UI/UX & Product Engineering'
    ],
    careerRoles: [
      'Full Stack Developer (MERN / Java)',
      'Mobile Application Developer',
      'Database Administrator',
      'Systems Analyst',
      'Network Security Specialist'
    ],
    description: 'A fast-track technical computing path emphasizing modern programming languages, database architectures, enterprise applications, and cloud-native frameworks.',
    topRecruiters: ['TCS', 'Tech Mahindra', 'LTIMindtree', 'Hexaware', 'Paytm']
  },
  {
    id: 'law',
    name: 'Integrated Law (BA LLB / BBA LLB / LLM)',
    shortName: 'Law (LLB / LLM)',
    category: 'law',
    level: 'Integrated UG (5 Years) / PG (1-2 Years)',
    duration: '5 Years (Integrated) / 2 Years (LLM)',
    eligibility: '10+2 with minimum 45% aggregate (General) or 40% (Reserved) for 5-Year Law',
    shortEligibility: '10+2 with 45%+ (5-Yr Integrated) / LLB (LLM)',
    avgPackage: '₹5.5 LPA - ₹12.5 LPA',
    highestPackage: '₹20.0 LPA',
    specializations: [
      'Corporate & Commercial Law',
      'Intellectual Property Rights (IPR)',
      'Cyber Law & Data Privacy',
      'Constitutional & Administrative Law',
      'Criminal Justice & Litigation'
    ],
    careerRoles: [
      'Corporate Legal Counsel',
      'Litigation Advocate',
      'Legal & Compliance Advisor',
      'Arbitration Specialist',
      'Judicial Services Officer'
    ],
    description: 'Rigorous legal education integrating courtroom mooting, constitutional jurisprudence, corporate legal compliance, and contract drafting for top law firms and corporations.',
    topRecruiters: ['Shardul Amarchand Mangaldas', 'AZB & Partners', 'Trilegal', 'Khaitan & Co', 'Corporate Legal Cells']
  }
];

export default function CoursesPage() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [institutionModalOpen, setInstitutionModalOpen] = useState(false);
  const [selectedCoursePrefill, setSelectedCoursePrefill] = useState('MBA');

  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const streamOptions = [
    { id: 'all', label: 'All Streams' },
    { id: 'management', label: 'Management & Commerce' },
    { id: 'undergrad', label: 'Undergraduate Studies' },
    { id: 'technology', label: 'Engineering & Technology' },
    { id: 'law', label: 'Law & Legal Studies' },
  ];

  const levelOptions = [
    { id: 'all', label: 'All Levels' },
    { id: 'pg', label: 'Postgraduate (PG)' },
    { id: 'ug', label: 'Undergraduate (UG)' },
    { id: 'integrated', label: 'Integrated Degrees' },
  ];

  const getStreamCount = (streamId: string) => {
    if (streamId === 'all') return COURSES_DATA.length;
    return COURSES_DATA.filter((c) => c.category === streamId).length;
  };

  const getLevelCount = (lvlId: string) => {
    if (lvlId === 'all') return COURSES_DATA.length;
    if (lvlId === 'pg') return COURSES_DATA.filter((c) => c.level.toLowerCase().includes('pg') || c.level.toLowerCase().includes('postgraduate')).length;
    if (lvlId === 'ug') return COURSES_DATA.filter((c) => c.level.toLowerCase().includes('ug') || c.level.toLowerCase().includes('undergraduate')).length;
    if (lvlId === 'integrated') return COURSES_DATA.filter((c) => c.level.toLowerCase().includes('integrated')).length;
    return 0;
  };

  const streamOptionsWithCount = streamOptions.map(opt => ({
    ...opt,
    count: getStreamCount(opt.id)
  }));

  const levelOptionsWithCount = levelOptions.map(opt => ({
    ...opt,
    count: getLevelCount(opt.id)
  }));

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'management': return <Briefcase size={14} />;
      case 'undergrad': return <GraduationCap size={14} />;
      case 'technology': return <Laptop size={14} />;
      case 'law': return <Scale size={14} />;
      default: return <Layers size={14} />;
    }
  };

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesStream = selectedStream === 'all' || course.category === selectedStream;

    const matchesLevel = selectedLevel === 'all' ||
      (selectedLevel === 'pg' && (course.level.toLowerCase().includes('pg') || course.level.toLowerCase().includes('postgraduate'))) ||
      (selectedLevel === 'ug' && (course.level.toLowerCase().includes('ug') || course.level.toLowerCase().includes('undergraduate'))) ||
      (selectedLevel === 'integrated' && course.level.toLowerCase().includes('integrated'));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = q === '' ||
      course.name.toLowerCase().includes(q) ||
      course.shortName.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      course.level.toLowerCase().includes(q) ||
      course.specializations.some(s => s.toLowerCase().includes(q)) ||
      course.careerRoles.some(r => r.toLowerCase().includes(q));

    return matchesStream && matchesLevel && matchesSearch;
  });

  const handleOpenCounsellingForCourse = (courseName: string) => {
    setSelectedCoursePrefill(courseName);
    setCounsellingModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <Header
        onOpenCounselling={() => { setSelectedCoursePrefill('MBA'); setCounsellingModalOpen(true); }}
        onOpenInstitutionModal={() => setInstitutionModalOpen(true)}
      />

      {/* =========================================================================
          HERO BANNER: Cinematic Contrast Banner
          ========================================================================= */}
      <section className="colleges-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-glow-left" />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Heading */}
          <h1 className="page-hero-title">
            Course-Wise Information &amp; <br />
            <span className="text-gradient-orange" style={{ whiteSpace: 'nowrap' }}>Career Outcomes</span>
          </h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            Compare duration, eligibility criteria, specialization pathways, verified placement packages, and career roles across India&apos;s leading disciplines.
          </p>

          {/* Trust Value Badges */}
          <div className="hero-trust-row" style={{ marginBottom: 0 }}>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free Career Guidance</span>
            </div>
            <div className="hero-trust-pill">
              <CheckCircle2 size={15} color="var(--orange-primary)" />
              <span>200+ Leading Management &amp; Tech Institutes</span>
            </div>
            <div className="hero-trust-pill">
              <Award size={15} color="var(--orange-primary)" />
              <span>Verified Placement Metrics</span>
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
            {/* Custom Filter Dropdowns: Stream & Level */}
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
                label="Level"
                ariaLabel="Filter by Degree Level"
                icon={<Award size={16} />}
                options={levelOptionsWithCount}
                selectedValue={selectedLevel}
                onChange={setSelectedLevel}
              />

              {/* Reset Button (only shown if a filter is active) */}
              {(selectedStream !== 'all' || selectedLevel !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedLevel('all');
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
                placeholder="Search programs, skills, roles..."
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

      {/* =========================================================================
          COURSES LISTING GRID (RESPONSIVE CARDS)
          ========================================================================= */}
      <section style={{ padding: '48px 0 80px', flexGrow: 1 }}>
        <div className="container">
          {/* Header row with count & active filter badges */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.92rem', color: '#64748B', fontWeight: '600' }}>
                Showing <strong style={{ color: '#0A3871' }}>{filteredCourses.length}</strong> verified career {filteredCourses.length === 1 ? 'program' : 'programs'}
              </span>

              {/* Active Stream Tag */}
              {selectedStream !== 'all' && (
                <span className="active-filter-badge">
                  Stream: {streamOptions.find(s => s.id === selectedStream)?.label}
                  <button onClick={() => setSelectedStream('all')} aria-label="Remove stream filter">
                    <X size={12} />
                  </button>
                </span>
              )}

              {/* Active Level Tag */}
              {selectedLevel !== 'all' && (
                <span className="active-filter-badge">
                  Level: {levelOptions.find(l => l.id === selectedLevel)?.label}
                  <button onClick={() => setSelectedLevel('all')} aria-label="Remove level filter">
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
              {(selectedStream !== 'all' || selectedLevel !== 'all' || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStream('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
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
                <ShieldCheck size={14} color="#0A3871" /> UGC / AICTE Verified
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="courses-grid-cards">
            {filteredCourses.map((course) => {
              const accentGradient =
                course.category === 'management' ? 'linear-gradient(90deg, #0A3871 0%, #FA6400 100%)' :
                  course.category === 'technology' ? 'linear-gradient(90deg, #0A3871 0%, #165EB8 100%)' :
                    course.category === 'law' ? 'linear-gradient(90deg, #0A3871 0%, #FF782D 100%)' :
                      'linear-gradient(90deg, #0A3871 0%, #062147 100%)';

              const categoryLabel =
                course.category === 'management' ? 'Management' :
                  course.category === 'technology' ? 'Technology' :
                    course.category === 'undergrad' ? 'Undergraduate' :
                      'Legal Studies';

              return (
                <div key={course.id} className="course-card-pro">
                  {/* Top Accent Gradient Line */}
                  <div className="course-card-accent-bar" style={{ background: accentGradient }} />

                  <div className="course-card-content">
                    {/* Header Row: Category Badge + Duration + Code Emblem */}
                    <div className="course-card-header-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="course-meta-pill">
                          {getCategoryIcon(course.category)}
                          {categoryLabel}
                        </span>
                        <span className="course-duration-text">
                          <Clock size={12} color="#64748B" />
                          {course.duration.split('(')[0].trim()}
                        </span>
                      </div>
                      <span className="course-code-badge">{course.shortName}</span>
                    </div>

                    {/* Course Title */}
                    <h3 className="course-card-title" title={course.name}>
                      {course.name}
                    </h3>

                    {/* Short Description */}
                    <p className="course-card-desc">
                      {course.description}
                    </p>


                    {/* Clean Metadata (Airy, clean 2-line info with icons) */}
                    <div className="course-clean-meta">
                      <div className="course-clean-meta-item">
                        <GraduationCap size={14} color="#0A3871" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>
                          <strong>Eligibility: </strong>
                          {course.shortEligibility || course.eligibility}
                        </span>
                      </div>
                      <div className="course-clean-meta-item">
                        <Building2 size={14} color="#FA6400" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>
                          <strong>Top Recruiters: </strong>
                          {course.topRecruiters.slice(0, 4).join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="course-card-actions">
                      <button
                        onClick={() => handleOpenCounsellingForCourse(course.shortName)}
                        className="course-btn-counsel"
                      >
                        <span>Get Free Counselling</span>
                        <ArrowRight size={14} />
                      </button>

                      <Link
                        href="/colleges"
                        className="course-btn-explore"
                      >
                        <span>Colleges</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '60px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 20px -2px rgba(10, 56, 113, 0.05)',
                maxWidth: '540px',
                margin: '30px auto'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(250, 100, 0, 0.1)',
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
                No courses found
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.6' }}>
                We couldn&apos;t find any programs matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or clearing the category filter.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedStream('all'); setSelectedLevel('all'); }}
                className="btn btn-primary"
                style={{ padding: '10px 22px', borderRadius: '8px', fontWeight: '700' }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          GUARANTEED GUIDANCE CALLOUT BANNER (Slide 6)
          ========================================================================= */}
      <section style={{ padding: '0 0 80px', background: '#F8FAFC' }}>
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
                CONFUSED ABOUT CHOOSING THE RIGHT MBA OR PGDM COLLEGE?
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
              onClick={() => { setSelectedCoursePrefill('MBA'); setCounsellingModalOpen(true); }}
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
        prefillData={{ stream: selectedCoursePrefill }}
      />

      <InstitutionModal
        isOpen={institutionModalOpen}
        onClose={() => setInstitutionModalOpen(false)}
      />

      <WhatsAppButton />
    </main>
  );
}
