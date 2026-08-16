import React from 'react';
import { PhoneCall, AlertCircle } from 'lucide-react';
import { servicesData } from '../data/healthcareData';
import ServiceCard from '../components/ServiceCard';
import './PageStyles.css';

export default function Services() {
  return (
    <div className="services-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">OUR SERVICES</span>
          <h1 className="heading-xl mt-3">Quality Care for a Better Life</h1>
          <p className="page-banner-sub">
            We offer a wide range of medical services to meet the needs of you and your family.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid mb-16">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Emergency Care 24/7 Banner matching Reference Slide 3 */}
          <div className="emergency-banner-card">
            <div className="emergency-banner-content">
              <span className="emergency-tag flex items-center gap-2">
                <AlertCircle size={18} />
                <span>Need Immediate Help?</span>
              </span>
              <h2 className="emergency-banner-title">Emergency Care 24/7 Available</h2>
              <p className="emergency-banner-desc">
                Our emergency team is always ready to provide you with immediate care, 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="emergency-banner-action">
              <a href="tel:+10123456789" className="btn btn-outline cta-btn-white text-white border-white">
                <PhoneCall size={20} />
                <span>Call Now: +1 (012) 345 6789</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
