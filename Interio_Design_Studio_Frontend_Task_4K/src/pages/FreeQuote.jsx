import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import QuoteForm from '../components/QuoteForm';
import './FreeQuote.css';

export default function FreeQuote() {
  return (
    <div className="free-quote-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Get a Free Quote</h1>
          <Breadcrumb items={[{ name: 'Get a Free Quote' }]} />
        </div>
      </section>

      {/* Main Quote Section matching Slide 10 reference */}
      <section className="quote-main-section section-padding">
        <div className="container quote-grid">
          {/* Left Column: Form */}
          <div className="quote-form-column">
            <SectionTitle
              eyebrow="ESTIMATE YOUR PROJECT"
              title="Tailored Design Consultation"
              highlightWord="Consultation"
              description="Tell us about your project and we'll get back to you with a customized quote."
            />

            <QuoteForm />
          </div>

          {/* Right Column: Full Height Interior Photo matching Slide 10 */}
          <div className="quote-image-column">
            <div className="quote-image-frame">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Yellow Lounge Armchair and Lamp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
