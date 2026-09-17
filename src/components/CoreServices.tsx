'use client';

import React from 'react';
import { Compass, BookOpen, School, UserCheck, ArrowRight, Check } from 'lucide-react';
import { CORE_SERVICES } from '@/lib/mock-data';

interface CoreServicesProps {
  onOpenCounselling: (serviceName?: string) => void;
  onOpenCollegeFilter: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  Compass: <Compass size={28} />,
  BookOpen: <BookOpen size={28} />,
  School: <School size={28} />,
  UserCheck: <UserCheck size={28} />,
};

export const CoreServices: React.FC<CoreServicesProps> = ({ onOpenCounselling, onOpenCollegeFilter }) => {
  const handleServiceClick = (serviceId: string, title: string) => {
    if (serviceId === 'college-comparison') {
      const el = document.getElementById('colleges');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenCollegeFilter();
      }
    } else if (serviceId === 'course-exploration') {
      const el = document.getElementById('courses');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onOpenCounselling(title);
    }
  };

  return (
    <section className="py-section" id="services" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Core Guidance Areas</span>
          <h2 className="section-title">Six Guidance Areas, Discovery to Enrolment</h2>
          <p className="section-subtitle center-block">
            From your first question to lifelong support, every guidance area connects into the next so you never have to start over.
          </p>
        </div>

        <div className="services-grid">
          {CORE_SERVICES.map((srv) => (
            <div className="service-card" key={srv.id}>
              <div className="service-icon-box">
                {serviceIcons[srv.icon] || <Compass size={28} />}
              </div>
              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-desc">{srv.fullDesc}</p>
              
              <button 
                onClick={() => handleServiceClick(srv.id, srv.title)}
                className="service-card-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span>Learn more & get started</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Brochure Highlight Box: From First Question to Lifelong Support */}
        <div 
          style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, var(--navy-primary) 0%, #0d285f 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 40px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <span style={{ color: 'var(--orange-primary)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Connected Guidance Guarantee
            </span>
            <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '6px', marginBottom: '8px' }}>
              One Platform, Every Pathway a Student Might Consider
            </h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Discovery flows into pathway clarity, pathway clarity into confident applications, and applications into an ongoing relationship built for student growth.
            </p>
          </div>

          <button 
            onClick={() => onOpenCounselling("General Counselling")}
            className="btn btn-primary"
            style={{ whiteSpace: 'nowrap' }}
          >
            <span>Book Free 1-on-1 Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
