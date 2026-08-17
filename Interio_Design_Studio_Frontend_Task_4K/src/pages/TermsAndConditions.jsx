import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Scale, 
  Search, 
  Printer, 
  Download, 
  CheckCircle, 
  HelpCircle, 
  ChevronRight, 
  Clock, 
  Lock, 
  CreditCard, 
  Compass, 
  AlertCircle,
  Mail,
  Phone
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('section-1');

  const lastUpdatedDate = 'August 15, 2026';

  const sections = [
    {
      id: 'section-1',
      number: '01',
      title: 'Agreement & Acceptance of Terms',
      icon: <FileText size={20} />,
      content: `Welcome to Interio Design Studio. By accessing our website, purchasing design packages, scheduling consultations, or retaining our interior design services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these terms, you should refrain from utilizing our website or engaging our services.

These Terms constitute a legally binding agreement between you ("Client" or "User") and Interio Design Studio LLC ("Studio", "we", "us", or "our").`
    },
    {
      id: 'section-2',
      number: '02',
      title: 'Scope of Interior Design Services',
      icon: <Compass size={20} />,
      content: `Interio Design Studio provides comprehensive interior architecture, residential spatial planning, commercial fit-outs, 3D visualization, material selection, and procurement advisory services. 

- Conceptual Design & Space Planning: Development of mood boards, floor plans, 3D renderings, and material palettes.
- Procurement & Sourcing: Assisting clients in selecting furniture, fixtures, lighting, and finishes from vetted vendors.
- Project Coordination: Interfacing with client-appointed general contractors, tradespeople, and craftsmen to ensure design intent fidelity.`
    },
    {
      id: 'section-3',
      number: '03',
      title: 'Intellectual Property & Renderings',
      icon: <ShieldCheck size={20} />,
      content: `All design drawings, 3D photorealistic renderings, spatial schematics, mood boards, and custom furniture concepts created by Interio Design Studio remain the exclusive intellectual property of the Studio.

- Non-Exclusive License: Upon final payment in full, the Client is granted a non-exclusive, non-transferable license to use the design concepts solely for the designated property.
- Publication & Portfolio Rights: The Studio retains the right to photograph completed projects and utilize images for promotional materials, website portfolios, press features, and social media showcase, unless explicitly restricted via a signed Non-Disclosure Agreement (NDA).`
    },
    {
      id: 'section-4',
      number: '04',
      title: 'Client Responsibilities & Site Access',
      icon: <CheckCircle size={20} />,
      content: `To ensure accurate design development and project execution, the Client agrees to:
- Provide accurate architectural dimensions, structural blueprints, and property access schedules.
- Ensure timely response to design submissions, material approvals, and procurement choices within 5 business days to avoid project timeline shifts.
- Maintain adequate property insurance covering the site during renovation and installation phases.`
    },
    {
      id: 'section-5',
      number: '05',
      title: 'Fee Structure, Retainers & Payments',
      icon: <CreditCard size={20} />,
      content: `Services are billed on a fixed project retainer, hourly rate, or percentage-of-cost basis as specified in your individual Design Service Agreement.

- Design Deposit: A non-refundable initial retainer (typically 30-50% of the total design fee) is required prior to project kickoff.
- Procurement Payments: Orders for custom furniture, lighting, or imported materials require 100% upfront payment prior to purchase placement with third-party manufacturers.
- Late Fees: Invoices overdue by more than 15 business days may incur a 1.5% monthly administrative fee.`
    },
    {
      id: 'section-6',
      number: '06',
      title: 'Orders, Procurement & Deliveries',
      icon: <Clock size={20} />,
      content: `Interio Design Studio facilitates procurement with third-party vendors and manufacturers. Lead times provided by suppliers are estimates and subject to factory schedules and supply chain factors.

- Inspection Upon Delivery: The Client or authorized site representative must inspect custom items upon arrival and report any transit damage within 48 hours.
- Custom Items: Bespoke furniture, cut-to-size stone, and custom cabinetry orders are non-cancellable once manufacturing has commenced.`
    },
    {
      id: 'section-7',
      number: '07',
      title: 'Revisions & Scope Modifications',
      icon: <Scale size={20} />,
      content: `Initial design proposals include up to two (2) rounds of minor revisions. Additional revisions or major structural changes requested after concept sign-off will be billed at our standard hourly design consultation rate ($150/hr).`
    },
    {
      id: 'section-8',
      number: '08',
      title: 'Third-Party Contractors & Liability',
      icon: <AlertCircle size={20} />,
      content: `Interio Design Studio acts solely as an interior design consultant. We do not act as general contractors, structural engineers, or licensed plumbing/electrical installers.

- Trade Execution: All structural alterations, electrical wiring, plumbing, and construction must be executed by licensed and insured independent contractors hired directly by the Client.
- Limitation of Liability: The Studio shall not be held liable for contractor delays, structural defects, or workmanship errors committed by third-party tradespeople.`
    },
    {
      id: 'section-9',
      number: '09',
      title: 'Privacy & Confidential Data',
      icon: <Lock size={20} />,
      content: `We respect your privacy. Personal contact details, billing information, and home floor plans shared with Interio Design Studio are safeguarded using enterprise-grade encryption and will never be sold or leased to third parties. For complete details, refer to our Privacy Policy.`
    },
    {
      id: 'section-10',
      number: '10',
      title: 'Governing Law & Dispute Resolution',
      icon: <Scale size={20} />,
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, USA. Any disputes arising from or relating to these Terms or our services shall first be submitted to good-faith mediation prior to formal legal proceedings.`
    }
  ];

  // Filter sections based on search input
  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePrint = () => {
    window.print();
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="terms-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <div className="header-badge">LEGAL POLICIES</div>
          <h1>Terms & Conditions</h1>
          <p className="header-subtitle">
            Please read these terms carefully before engaging our interior design services or utilizing our digital platform.
          </p>
          <Breadcrumb items={[{ name: 'Terms & Conditions' }]} />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="terms-main-section section-padding">
        <div className="container">
          
          {/* Top Bar with Search & Quick Tools */}
          <div className="terms-utility-bar">
            <div className="terms-search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search terms, policies, or keywords..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search terms and conditions"
              />
              {searchTerm && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>

            <div className="terms-actions">
              <div className="last-updated-tag">
                <Clock size={15} />
                <span>Last Updated: {lastUpdatedDate}</span>
              </div>
              <button onClick={handlePrint} className="btn-action-outline" title="Print Terms">
                <Printer size={16} />
                <span>Print Document</span>
              </button>
            </div>
          </div>

          <div className="terms-layout-grid">
            {/* Left Sidebar Navigation */}
            <aside className="terms-sidebar">
              <div className="sidebar-sticky-wrapper">
                <h3 className="sidebar-heading">Navigation Index</h3>
                <nav className="terms-nav-list">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`terms-nav-item ${activeSection === sec.id ? 'active' : ''}`}
                    >
                      <span className="nav-item-num">{sec.number}</span>
                      <span className="nav-item-title">{sec.title}</span>
                      <ChevronRight size={14} className="nav-item-arrow" />
                    </button>
                  ))}
                </nav>

                {/* Direct Contact Card */}
                <div className="sidebar-contact-card">
                  <HelpCircle size={24} className="contact-card-icon" />
                  <h4>Have Legal Questions?</h4>
                  <p>Our studio team is available to clarify any contractual details or service terms.</p>
                  <Link to="/contact" className="btn-gold btn-sm">
                    Contact Legal Team
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Main Terms Content */}
            <main className="terms-content-area">
              {filteredSections.length === 0 ? (
                <div className="no-results-card">
                  <AlertCircle size={40} className="no-results-icon" />
                  <h3>No matching terms found</h3>
                  <p>We couldn't find any section matching "{searchTerm}". Try searching with different terms like "payment", "copyright", or "contractor".</p>
                  <button className="btn-gold" onClick={() => setSearchTerm('')}>
                    Reset Search Filter
                  </button>
                </div>
              ) : (
                filteredSections.map((sec) => (
                  <article key={sec.id} id={sec.id} className="terms-card-block card-hover-effect">
                    <header className="terms-card-header">
                      <div className="terms-number-badge">{sec.number}</div>
                      <div className="terms-header-info">
                        <div className="terms-category-icon">{sec.icon}</div>
                        <h2>{sec.title}</h2>
                      </div>
                    </header>
                    <div className="terms-card-body">
                      {sec.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))
              )}

              {/* Bottom Acceptance Callout */}
              <div className="terms-acknowledgment-box">
                <ShieldCheck size={36} className="ack-icon" />
                <div className="ack-text">
                  <h3>Client Acknowledgment</h3>
                  <p>By engaging Interio Design Studio for interior consultation, space planning, or custom furniture procurement, you acknowledge having read, understood, and agreed to these Terms & Conditions.</p>
                </div>
                <div className="ack-buttons">
                  <Link to="/contact" className="btn-gold">
                    Start a Project
                  </Link>
                  <Link to="/quote" className="btn-outline">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </main>
          </div>

        </div>
      </section>
    </div>
  );
}
