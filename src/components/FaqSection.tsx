'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/lib/mock-data';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-section" id="faq" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag blue">Got Questions?</span>
          <h2 className="section-title">Frequently Asked <span style={{ color: '#FF6F1E' }}>Questions</span></h2>
          <p className="section-subtitle center-block">
            Everything you need to know about our student guidance process, college comparisons, and university marketing services.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className="faq-item" key={idx}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={18} color="var(--orange-primary)" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
