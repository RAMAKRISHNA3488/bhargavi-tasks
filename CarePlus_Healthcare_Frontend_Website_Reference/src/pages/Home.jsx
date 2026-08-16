import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, UserCheck, Clock, Building2, Calendar } from 'lucide-react';
import { servicesData, statsData } from '../data/healthcareData';
import ServiceCard from '../components/ServiceCard';
import QuickActionCard from '../components/QuickActionCard';
import heroBgImage from '../public/images/home page back ground..png';
import './PageStyles.css';

export default function Home() {
  const navigate = useNavigate();

  const heroFeatures = [
    { title: 'Experienced Doctors', subtitle: 'Highly qualified specialists', Icon: UserCheck },
    { title: '24/7 Support', subtitle: 'Always here for you', Icon: Clock },
    { title: 'Modern Facilities', subtitle: 'State-of-the-art tech', Icon: Building2 }
  ];

  return (
    <div className="home-page-wrapper">
      {/* Hero Section matching Reference Slide 1 */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Text & CTA */}
          <div className="hero-content">
            <div className="sub-heading-badge hero-trust-badge">
              <CheckCircle2 size={16} />
              <span>Trusted by 20,000+ Patients</span>
            </div>

            <h1 className="heading-xl hero-headline">
              Compassionate Care, Better <span className="text-blue">Everyday</span>
            </h1>

            <p className="hero-description">
              We provide expert medical care with a personal touch. Your health and well-being are our top priority.
            </p>

            <div className="hero-cta-buttons">
              <button
                onClick={() => navigate('/appointment')}
                className="btn btn-primary btn-lg"
              >
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate('/services')}
                className="btn btn-secondary btn-lg"
              >
                <span>Our Services</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* 3 Feature Pills */}
            <div className="hero-features-row">
              {heroFeatures.map((badge, idx) => {
                const FeatureIcon = badge.Icon;
                return (
                  <div key={idx} className="hero-feature-item">
                    <div className="feature-icon-pill">
                      <FeatureIcon size={16} />
                    </div>
                    <div>
                      <div className="feature-title">{badge.title}</div>
                      <div className="feature-sub">{badge.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Doctor Image & Floating Card */}
          <div className="hero-media-wrapper">
            <div className="hero-image-frame">
              <img
                src={heroBgImage}
                alt="CarePlus Healthcare Doctor"
                className="hero-doctor-img"
              />
            </div>
            
            <div className="hero-floating-card">
              <QuickActionCard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section matching Reference Slide 1 */}
      <section className="home-services-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="sub-heading-badge">OUR SERVICES</span>
            <h2 className="heading-lg">Quality Care for a Better Life</h2>
            <p>We offer a wide range of medical services to meet the health needs of you and your family.</p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview matching Reference Slide 1 & 2 */}
      <section className="home-about-section section-padding bg-alt">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
              alt="Medical Team CarePlus"
              className="about-primary-img"
            />
            <div className="experience-experience-badge">
              <span className="exp-years">20+</span>
              <span className="exp-text">Years Experience</span>
            </div>
          </div>

          <div className="about-content">
            <span className="sub-heading-badge">ABOUT US</span>
            <h2 className="heading-lg mt-3">Your Health, Our Priority</h2>
            <p className="about-desc">
              We are committed to delivering exceptional healthcare services with compassion, innovation, and excellence. Our state-of-the-art medical center features world-class doctors and modern infrastructure.
            </p>

            <div className="about-pillars-grid">
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

      {/* Large Blue Appointment CTA Banner matching Reference Slide 1 & 2 */}
      <section className="appointment-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <h2 className="cta-title">Book Your Appointment Today!</h2>
              <p className="cta-sub">
                Take the first step towards a healthier you. Schedule your appointment with our experts.
              </p>

              <div className="cta-features-list">
                <div className="cta-feature-pill">
                  <CheckCircle2 size={16} />
                  <span>Quick & Easy Booking</span>
                </div>
                <div className="cta-feature-pill">
                  <CheckCircle2 size={16} />
                  <span>Secure & Confidential</span>
                </div>
                <div className="cta-feature-pill">
                  <CheckCircle2 size={16} />
                  <span>No Waiting Time</span>
                </div>
              </div>
            </div>

            <div className="cta-banner-actions">
              <button
                onClick={() => navigate('/appointment')}
                className="btn btn-secondary btn-lg cta-btn-white"
              >
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </button>

              <a href="tel:+10123456789" className="btn btn-outline btn-lg cta-btn-outline">
                <PhoneCall size={18} />
                <span>Call Now: +1 (012) 345 6789</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
