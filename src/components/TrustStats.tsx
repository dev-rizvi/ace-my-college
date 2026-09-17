'use client';

import React from 'react';
import { GraduationCap, Building2, Star, Users, CheckCircle2 } from 'lucide-react';
import { TRUST_STATS } from '@/lib/mock-data';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={24} />,
  Building2: <Building2 size={24} />,
  Star: <Star size={24} fill="#d97706" />,
  Users: <Users size={24} />,
  CheckCircle2: <CheckCircle2 size={24} />,
};

export const TrustStats: React.FC = () => {
  return (
    <section className="trust-strip">
      <div className="container trust-strip-inner">
        {TRUST_STATS.map((item, idx) => (
          <div className="trust-item" key={idx}>
            <div className="trust-icon-box">
              {iconMap[item.icon] || <GraduationCap size={24} />}
            </div>
            <div>
              <div className="trust-val">{item.value}</div>
              <div className="trust-lbl">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
