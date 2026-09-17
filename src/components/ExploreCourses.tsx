'use client';

import React from 'react';
import { Cpu, Stethoscope, Briefcase, Scale, Palette, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { COURSE_STREAMS } from '@/lib/mock-data';

interface ExploreCoursesProps {
  onSelectStream: (streamTitle: string) => void;
}

const streamIconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={24} />,
  Stethoscope: <Stethoscope size={24} />,
  Briefcase: <Briefcase size={24} />,
  Scale: <Scale size={24} />,
  Palette: <Palette size={24} />,
  Globe: <Globe size={24} />,
  Sparkles: <Sparkles size={24} />,
};

export const ExploreCourses: React.FC<ExploreCoursesProps> = ({ onSelectStream }) => {
  return (
    <section className="py-section" id="courses" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag blue">Course & Career Areas</span>
          <h2 className="section-title">Explore Top Courses & Career Areas</h2>
          <p className="section-subtitle center-block">
            From premier degrees to emerging futuristic fields, discover the qualifications, eligibility, and industry career outcomes that match your goals.
          </p>
        </div>

        <div className="courses-grid">
          {COURSE_STREAMS.map((stream) => (
            <div className="course-stream-card" key={stream.id}>
              <div className="course-card-top">
                <div 
                  className="stream-icon-box"
                  style={{ 
                    background: `${stream.accentColor}18`, 
                    color: stream.accentColor 
                  }}
                >
                  {streamIconMap[stream.icon] || <Cpu size={24} />}
                </div>
                <span className="stream-demand-tag">{stream.demand}</span>
              </div>

              <h3 className="stream-card-title">{stream.title}</h3>

              <div className="degrees-pills">
                {stream.popularDegrees.map((deg, i) => (
                  <span className="degree-pill" key={i}>{deg}</span>
                ))}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                  Top High-Demand Careers:
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--navy-primary)', fontWeight: '600', marginTop: '3px' }}>
                  {stream.topCareers.slice(0, 3).join(' • ')}
                </p>
              </div>

              <div className="stream-footer">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {stream.duration}
                </span>

                <button 
                  onClick={() => onSelectStream(stream.title)}
                  className="stream-explore-btn"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <button 
            onClick={() => onSelectStream('All Streams')}
            className="btn btn-outline"
            style={{ padding: '14px 32px' }}
          >
            <span>View All Courses & Streams</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
