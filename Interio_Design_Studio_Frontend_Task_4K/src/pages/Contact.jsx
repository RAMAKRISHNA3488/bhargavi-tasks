import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Contact Us</h1>
          <Breadcrumb items={[{ name: 'Contact' }]} />
        </div>
      </section>

      {/* Main Contact Section matching Slide 9 reference */}
      <section className="contact-main-section section-padding">
        <div className="container contact-grid">
          {/* Left Column: Contact Cards */}
          <div className="contact-info-column">
            <SectionTitle
              eyebrow="GET IN TOUCH"
              title="Let's Discuss Your Interior Vision"
              highlightWord="Vision"
              description="Reach out to our studio directors to schedule a complimentary design consultation."
            />

            <div className="contact-details-list">
              <div className="contact-detail-card">
                <div className="icon-circle-gold">
                  <MapPin size={22} />
                </div>
                <div className="detail-text">
                  <h4>Address</h4>
                  <p>123 Design Street, Creative City, CA 90210, USA</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="icon-circle-gold">
                  <Phone size={22} />
                </div>
                <div className="detail-text">
                  <h4>Phone</h4>
                  <p>+1 234 567 8900</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="icon-circle-gold">
                  <Mail size={22} />
                </div>
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>hello@interiodesign.com</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="icon-circle-gold">
                  <Clock size={22} />
                </div>
                <div className="detail-text">
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="contact-social-bar">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
