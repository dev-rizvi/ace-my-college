'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917054545455?text=Hello%20ACE%20MY%20CAMPUS!%20I%20would%20like%20to%20get%20free%20career%20and%20college%20guidance."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with ACE MY CAMPUS on WhatsApp"
      title="Chat with our Lucknow counsellors on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};
