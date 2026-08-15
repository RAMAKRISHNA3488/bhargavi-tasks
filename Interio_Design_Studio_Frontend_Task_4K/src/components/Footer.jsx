import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <div className="logo-icon-box">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 32V16L20 9L30 16V32H10Z" stroke="#E5A93C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 32V21H24V32" stroke="#E5A93C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="logo-text-group">
              <span className="logo-brand-name">Interio</span>
              <span className="logo-brand-sub">DESIGN STUDIO</span>
            </div>
          </Link>

          <p className="footer-desc">
            We craft modern, functional, and visually captivating interior spaces tailored specifically to your lifestyle and personal aesthetic.
          </p>

          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Latest Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-col">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/services">Interior Design</Link></li>
            <li><Link to="/services">Space Planning</Link></li>
            <li><Link to="/services">Renovation & Remodeling</Link></li>
            <li><Link to="/services">Lighting Design</Link></li>
            <li><Link to="/services">Custom Furniture</Link></li>
            <li><Link to="/services">Commercial Interiors</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact-items">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>123 Design Street, Creative City, CA 90210, USA</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>hello@interiodesign.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Banner */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© {new Date().getFullYear()} Interio Design Studio. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
