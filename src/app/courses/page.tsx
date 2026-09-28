'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CounsellingModal } from '@/components/CounsellingModal';
import { InstitutionModal } from '@/components/InstitutionModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { 
  GraduationCap, Briefcase, TrendingUp, Award, Clock, 
  CheckCircle2, ArrowRight, ShieldCheck, Search, BookOpen, 
  Sparkles, Filter, Building2, ChevronRight
} from 'lucide-react';

interface CourseData {
  id: string;
  name: string;
  shortName: string;
  category: 'management' | 'undergrad' | 'technology' | 'law';
  level: string;
  duration: string;
  eligibility: string;
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

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'management', label: 'Management (MBA & PGDM)' },
    { id: 'undergrad', label: 'Undergraduate (BBA & B.Com)' },
    { id: 'technology', label: 'Technology (B.Tech & BCA)' },
    { id: 'law', label: 'Legal Studies (Law)' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.careerRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
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
      <section 
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(135deg, rgba(4, 22, 48, 0.94) 0%, rgba(10, 56, 113, 0.88) 50%, rgba(6, 33, 71, 0.94) 100%), url('/images/banner-colleges.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          padding: '85px 0 85px',
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
            CAREER &amp; COURSE EXPLORER
          </span>

          <h1 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.4vw, 3.8rem)', 
              fontWeight: '900', 
              letterSpacing: '-0.02em', 
              color: '#ffffff', 
              marginBottom: '14px',
              fontFamily: 'var(--font-outfit), sans-serif'
            }}
          >
            Course-Wise Information &amp; <span className="text-gradient-orange">Career Outcomes</span>
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
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', 
              color: '#CBD5E1', 
              maxWidth: '720px', 
              margin: '0 auto 28px',
              lineHeight: '1.65'
            }}
          >
            Compare duration, eligibility criteria, specialization pathways, verified placement packages, and career roles across India&apos;s leading disciplines.
          </p>

          {/* Quick Stats Ribbon */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '24px', 
              flexWrap: 'wrap',
              marginTop: '10px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#F1F5F9' }}>
              <ShieldCheck size={16} color="var(--orange-primary)" />
              <span>100% Free Career Guidance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#F1F5F9' }}>
              <CheckCircle2 size={16} color="var(--orange-primary)" />
              <span>200+ Leading Management &amp; Tech Institutes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#F1F5F9' }}>
              <Award size={16} color="var(--orange-primary)" />
              <span>Verified Placement Metrics</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER & SEARCH BAR
          ========================================================================= */}
      <section style={{ padding: '36px 0 20px', background: '#ffffff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '20px' 
            }}
          >
            {/* Category Filter Pills */}
            <div className="courses-filter-scroll">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="courses-filter-btn"
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    fontWeight: activeCategory === cat.id ? '800' : '600',
                    border: activeCategory === cat.id ? '1px solid var(--orange-primary)' : '1px solid #CBD5E1',
                    background: activeCategory === cat.id ? 'var(--orange-primary)' : '#ffffff',
                    color: activeCategory === cat.id ? '#ffffff' : 'var(--navy-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(250, 100, 0, 0.3)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search 
                size={17} 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} 
              />
              <input
                type="text"
                placeholder="Search courses or roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '40px',
                  height: '42px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  border: '1px solid #CBD5E1',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COURSES LISTING GRID
          ========================================================================= */}
      <section style={{ padding: '60px 0 80px', flexGrow: 1 }}>
        <div className="container">
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: '600' }}>
              Showing <strong style={{ color: 'var(--navy-primary)' }}>{filteredCourses.length}</strong> available programs
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px -4px rgba(6, 33, 71, 0.06)',
                  padding: '36px 32px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="course-detail-card"
              >
                {/* Top Border Accent */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '6px', 
                    height: '100%', 
                    background: course.category === 'management' ? 'var(--orange-primary)' : 'var(--navy-primary)' 
                  }} 
                />

                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '16px',
                    marginBottom: '16px' 
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span 
                        style={{ 
                          fontSize: '0.78rem', 
                          fontWeight: '800', 
                          textTransform: 'uppercase', 
                          color: 'var(--orange-primary)',
                          background: 'var(--orange-light)',
                          padding: '4px 12px',
                          borderRadius: '6px'
                        }}
                      >
                        {course.level}
                      </span>
                      <span style={{ fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} /> {course.duration}
                      </span>
                    </div>

                    <h2 
                      style={{ 
                        fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', 
                        fontWeight: '800', 
                        color: 'var(--navy-primary)', 
                        margin: 0,
                        fontFamily: 'var(--font-outfit), sans-serif'
                      }}
                    >
                      {course.name}
                    </h2>
                  </div>

                  {/* Placement Badges */}
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <div style={{ background: '#F1F5F9', padding: '10px 18px', borderRadius: '12px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Average CTC</div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', fontWeight: '800' }}>{course.avgPackage}</div>
                    </div>
                    <div style={{ background: 'var(--orange-light)', padding: '10px 18px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(250, 100, 0, 0.2)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--orange-primary)', fontWeight: '700', textTransform: 'uppercase' }}>Highest Package</div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--orange-primary)', fontWeight: '900' }}>{course.highestPackage}</div>
                    </div>
                  </div>
                </div>

                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  {course.description}
                </p>

                {/* Course Details Grid */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '24px',
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    marginBottom: '26px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {/* Specializations */}
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <BookOpen size={16} color="var(--orange-primary)" />
                      In-Demand Specializations
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {course.specializations.map((spec, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '0.8rem', 
                            background: '#ffffff', 
                            color: 'var(--navy-primary)', 
                            border: '1px solid #CBD5E1', 
                            padding: '4px 10px', 
                            borderRadius: '6px',
                            fontWeight: '600'
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Roles */}
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Briefcase size={16} color="var(--orange-primary)" />
                      Career Job Roles
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {course.careerRoles.slice(0, 3).map((role, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#475569' }}>
                          <CheckCircle2 size={14} color="var(--orange-primary)" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Eligibility */}
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--navy-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={16} color="var(--orange-primary)" />
                      Eligibility &amp; Admission
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.55', margin: 0 }}>
                      {course.eligibility}
                    </p>
                  </div>
                </div>

                {/* Card Action Row */}
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    flexWrap: 'wrap', 
                    gap: '16px',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', color: '#64748B' }}>
                    <span style={{ fontWeight: '700', color: 'var(--navy-primary)' }}>Top Recruiters:</span>
                    <span>{course.topRecruiters.join(', ')}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => handleOpenCounsellingForCourse(course.shortName)}
                      className="btn btn-primary"
                      style={{ padding: '11px 22px', borderRadius: '8px', fontWeight: '800', fontSize: '0.9rem' }}
                    >
                      <span>Get Free Counselling</span>
                      <ArrowRight size={15} />
                    </button>
                    
                    <Link
                      href="/colleges"
                      className="btn btn-outline"
                      style={{ padding: '11px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '0.9rem' }}
                    >
                      <span>Find {course.shortName} Colleges</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
