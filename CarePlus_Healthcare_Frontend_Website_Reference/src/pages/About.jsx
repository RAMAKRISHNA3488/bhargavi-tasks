import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, PhoneCall, Award, Users, HeartPulse, Building2 } from 'lucide-react';
import { statsData } from '../data/healthcareData';
import './PageStyles.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page animate-fade-in">
      {/* Page Banner Header */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">ABOUT CAREPLUS</span>
          <h1 className="heading-xl mt-3">Your Health, Our Priority</h1>
          <p className="page-banner-sub">
            Dedicated to providing compassionate healthcare with advanced medical technology and expert medical specialists.
          </p>
        </div>
      </section>

      {/* Main About Story Section */}
      <section className="section-padding">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
              alt="CarePlus Doctor Consultation"
              className="about-primary-img"
            />
          </div>

          <div className="about-content">
            <h2 className="heading-lg">Committed to Excellence in Patient Care</h2>
            <p className="about-desc">
              CarePlus Healthcare is a premier medical institution dedicated to offering world-class treatment options across a broad spectrum of medical specialties. Founded with a vision to revolutionize patient care, we combine state-of-the-art diagnostic facilities with empathetic clinical experts.
            </p>

            <div className="about-pillars-grid my-6">
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Patient-Centered Care</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Advanced Technology</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Experienced Specialists</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Comfortable Environment</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Personalized Treatment</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Trusted by Thousands</span>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="stats-row">
              {statsData.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="appointment-cta-section my-12">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <h2 className="cta-title">Book Your Appointment Today!</h2>
              <p className="cta-sub">
                Take the first step towards a healthier you. Schedule your appointment with our experts.
              </p>
            </div>

            <div className="cta-banner-actions">
              <button
                onClick={() => navigate('/appointment')}
                className="btn btn-secondary btn-lg cta-btn-white"
              >
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
