import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Newsletter Box matching Reference Slide 12 */}
        <div className="newsletter-card">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated with Our Health Tips</h2>
            <p className="newsletter-desc">
              Subscribe to our newsletter and get healthy living tips, updates, and expert medical advice directly in your inbox.
            </p>
            
            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={22} />
                <span>Thank you for subscribing! Check your inbox soon for health tips.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="newsletter-input"
                  />
                  {errorMsg && <span className="newsletter-error">{errorMsg}</span>}
                </div>
                <button type="submit" className="btn btn-primary newsletter-btn">
                  <span>Subscribe</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
          
          <div className="newsletter-image-container">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
              alt="Healthcare professional with tablet"
              className="newsletter-doctor-img"
            />
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <div className="logo-icon">
                <Plus size={20} strokeWidth={3.5} />
              </div>
              <div className="logo-text">
                <span className="brand-name">CarePlus</span>
                <span className="brand-tag">HEALTHCARE</span>
              </div>
            </Link>
            
            <p className="footer-about-text">
              We provide expert medical care with compassion and excellence. Your health and well-being are our top priority everyday.
            </p>
            
            <div className="social-icons flex gap-3 mt-4">
              <a href="#facebook" className="social-badge" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#twitter" className="social-badge" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#instagram" className="social-badge" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#linkedin" className="social-badge" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Cardiology</Link></li>
              <li><Link to="/services">Neurology</Link></li>
              <li><Link to="/services">Orthopedics</Link></li>
              <li><Link to="/services">Pediatrics</Link></li>
              <li><Link to="/services">Gynecology</Link></li>
              <li><Link to="/services">Dental Care</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+10123456789">+1 (012) 345 6789</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@careplus.com">info@careplus.com</a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Health Street, Medical City, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <p>© 2026 CarePlus Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
