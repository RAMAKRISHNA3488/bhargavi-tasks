import React from 'react';
import { Phone, Mail, MapPin, AlertCircle, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './PageStyles.css';

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">CONTACT US</span>
          <h1 className="heading-xl mt-3">We're Here to Help</h1>
          <p className="page-banner-sub">
            Have questions? Reach out to us anytime and our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-page-grid">
          {/* Left Contact Info Cards matching Reference Slide 10 */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="contact-card-title">Phone</h3>
                <a href="tel:+10123456789" className="contact-card-value">+1 (012) 345 6789</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="contact-card-title">Email</h3>
                <a href="mailto:info@careplus.com" className="contact-card-value">info@careplus.com</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="contact-card-title">Address</h3>
                <p className="contact-card-value">123 Health Street, Medical City, New York, NY 10001</p>
              </div>
            </div>

            <div className="contact-info-card emergency-card">
              <div className="contact-card-icon text-red">
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="contact-card-title text-red">Emergency 24/7</h3>
                <a href="tel:+10123456789" className="contact-card-value font-bold">+1 (012) 345 6789</a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form-column">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
