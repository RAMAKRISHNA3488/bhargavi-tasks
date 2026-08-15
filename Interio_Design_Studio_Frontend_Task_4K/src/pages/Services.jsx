import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { services } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Our Services</h1>
          <Breadcrumb items={[{ name: 'Services' }]} />
        </div>
      </section>

      {/* Main Services Grid Section matching Slide 5 reference */}
      <section className="services-main-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="BESPOKE SOLUTIONS"
            title="Comprehensive Interior Architecture & Design"
            highlightWord="Architecture"
            description="We offer end-to-end interior design solutions tailored to your needs and style."
          />

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="services-bottom-cta">
            <div className="cta-box bg-dark-secondary">
              <h3>Have a Custom Interior Project in Mind?</h3>
              <p>Consult with our lead architects to turn your architectural vision into reality.</p>
              <Button to="/quote" variant="gold">
                Request Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
