import React from 'react';
import { faqsData } from '../data/healthcareData';
import FAQAccordion from '../components/FAQAccordion';
import './PageStyles.css';

export default function FAQPage() {
  return (
    <div className="faq-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">FAQS</span>
          <h1 className="heading-xl mt-3">Frequently Asked Questions</h1>
          <p className="page-banner-sub">
            Find answers to common questions about our healthcare services, appointments, and insurance.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <FAQAccordion faqs={faqsData} />
        </div>
      </section>
    </div>
  );
}
