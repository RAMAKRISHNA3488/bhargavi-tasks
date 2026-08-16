import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, Plus, Calendar } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Doctors' },
    { path: '/departments', label: 'Departments' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="logo-icon">
            <Plus size={20} strokeWidth={3.5} />
          </div>
          <div className="logo-text">
            <span className="brand-name">CarePlus</span>
            <span className="brand-tag">HEALTHCARE</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Emergency Info & Action Button */}
        <div className="header-actions">
          <div className="emergency-info">
            <div className="phone-icon-badge">
              <PhoneCall size={18} />
            </div>
            <div className="emergency-text">
              <span className="emergency-label">Emergency 24/7</span>
              <a href="tel:+10123456789" className="emergency-number">+1 (012) 345 6789</a>
            </div>
          </div>

          <button
            onClick={() => navigate('/appointment')}
            className="btn btn-primary header-book-btn"
          >
            <Calendar size={18} />
            <span>Book Appointment</span>
          </button>

          {/* Hamburger Menu Toggle for Tablet/Mobile */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}
                onClick={() => setIsMobileMenuOpen(false)}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="mobile-drawer-footer">
            <div className="mobile-emergency">
              <PhoneCall size={20} className="text-blue" />
              <div>
                <div className="text-xs text-muted">Emergency Call 24/7</div>
                <a href="tel:+10123456789" className="font-bold">+1 (012) 345 6789</a>
              </div>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/appointment');
              }}
              className="btn btn-primary w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
