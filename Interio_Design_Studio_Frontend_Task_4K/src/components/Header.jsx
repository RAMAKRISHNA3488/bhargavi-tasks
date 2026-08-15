import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Interio Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon-box">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#E5A93C" fillOpacity="0.15" />
              <path d="M10 32V16L20 9L30 16V32H10Z" stroke="#E5A93C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 32V21H24V32" stroke="#E5A93C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-brand-name">Interio</span>
            <span className="logo-brand-sub">DESIGN STUDIO</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-nav-link' : ''}`
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="header-cta-wrapper">
          <Link to="/quote" className="btn-gold header-cta-btn">
            <span>Get a Free Quote</span>
            <span className="btn-gold-icon">
              <ArrowRight size={14} />
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-content">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active-mobile-link' : ''}`
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/quote" className="btn-gold mobile-drawer-cta">
            <span>Get a Free Quote</span>
            <span className="btn-gold-icon">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
