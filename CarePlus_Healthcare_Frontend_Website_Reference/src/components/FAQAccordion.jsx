import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './CardComponents.css';

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-container">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question-btn"
              onClick={() => toggleAccordion(faq.id)}
              aria-expanded={isOpen}
            >
              <span className="faq-question-text">{faq.question}</span>
              <div className="faq-toggle-icon">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            {isOpen && (
              <div className="faq-answer-content animate-fade-in">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
