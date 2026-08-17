import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Printer,
  Share2,
  Download,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Video,
  FileCheck,
  MessageSquare,
  Compass,
  CheckSquare
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import './ConfirmedStatus.css';

export default function ConfirmedStatus() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve state passed from form or use default demo data
  const passedData = location.state || {};

  const [copied, setCopied] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [activeStage, setActiveStage] = useState(passedData.stageIndex || 0);

  // Client Details
  const clientInfo = {
    refNumber: passedData.refNumber || 'INT-2026-8942',
    name: passedData.name || 'Sophia Vance',
    email: passedData.email || 'sophia.vance@example.com',
    phone: passedData.phone || '+1 (555) 234-8901',
    service: passedData.service || 'Full Home Interior Design',
    budget: passedData.budget || '$50,000 - $100,000',
    date: 'Thursday, Aug 20, 2026',
    time: '10:30 AM EST',
    mode: 'Virtual 3D Studio Consultation',
    details: passedData.details || 'Looking to redesign our 3-bedroom penthouse with modern warm minimalist aesthetics and custom oak millwork.',
    createdTime: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };

  // Preparation checklist state
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Consultation request submitted & reference code generated', completed: true },
    { id: 2, text: 'Gather floor plan, sketches or dimensions of your room/house', completed: true },
    { id: 3, text: 'Save 3 to 5 inspiration photos of interior styles you admire', completed: false },
    { id: 4, text: 'List your key functional needs (e.g. storage, lighting, seating)', completed: false }
  ]);

  const toggleChecklistItem = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  // Copy Reference Number
  const handleCopyRef = () => {
    navigator.clipboard.writeText(clientInfo.refNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share Status Link
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  // Trigger Print View
  const handlePrint = () => {
    window.print();
  };

  // Generate .ics Calendar File Download
  const handleCalendarDownload = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Interio Design Studio//Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Interio Design Consultation (${clientInfo.refNumber})`,
      'DESCRIPTION:Virtual 3D Design Consultation with Senior Architect Elena Rostova.',
      'LOCATION:Online Video Studio',
      'DTSTART:20260820T143000Z',
      'DTEND:20260820T153000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Interio_Consultation_${clientInfo.refNumber}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projectStages = [
    {
      title: 'Consultation Confirmed',
      desc: 'Your request is verified and logged in our system.',
      badge: 'Step 1 • Completed',
      icon: <CheckCircle2 size={20} />
    },
    {
      title: 'Specialist Briefing & Site Assessment',
      desc: 'Architect assigned; reviewing layout & spatial requirements.',
      badge: 'Step 2 • Active Stage',
      icon: <Compass size={20} />
    },
    {
      title: '3D Moodboard & Concept Approval',
      desc: 'Custom material palettes, lighting plan & 3D visualizations.',
      badge: 'Step 3 • Upcoming',
      icon: <Sparkles size={20} />
    },
    {
      title: 'Turnkey Execution & Delivery',
      desc: 'Site transformation, custom furniture install & final walkthrough.',
      badge: 'Step 4 • Final',
      icon: <FileCheck size={20} />
    }
  ];

  return (
    <div className="confirmed-status-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <div className="status-breadcrumb-wrapper">
            <span className="status-pill-badge">
              <ShieldCheck size={14} /> STATUS: CONFIRMED
            </span>
          </div>
          <h1>Booking Confirmation</h1>
          <Breadcrumb items={[{ name: 'Status' }, { name: 'Confirmed' }]} />
        </div>
      </section>

      {/* Main Confirmation Dashboard */}
      <section className="status-main-section section-padding">
        <div className="container">
          
          {/* Top Banner: Success Card */}
          <div className="status-hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-content">
              <div className="status-icon-wrapper">
                <div className="status-pulse-ring"></div>
                <div className="status-icon-badge">
                  <CheckCircle2 size={36} />
                </div>
              </div>

              <div className="hero-text-block">
                <div className="hero-meta-row">
                  <span className="hero-status-tag">CONFIRMED & SCHEDULED</span>
                  <span className="hero-date-tag">Created {clientInfo.createdTime}</span>
                </div>
                <h2>Your Consultation is Successfully Confirmed!</h2>
                <p>
                  Thank you for choosing Interio Design Studio. We have assigned a Lead Interior Architect to guide your transformation.
                </p>
              </div>

              {/* Reference Box */}
              <div className="reference-code-box">
                <span className="ref-label">Reference Code</span>
                <div className="ref-value-group">
                  <span className="ref-value">{clientInfo.refNumber}</span>
                  <button className="btn-copy-ref" onClick={handleCopyRef} title="Copy reference code">
                    {copied ? <Check size={16} className="text-gold" /> : <Copy size={16} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="status-action-bar">
              <button className="status-action-btn" onClick={handleCalendarDownload}>
                <Calendar size={16} />
                <span>Add to Calendar (.ics)</span>
              </button>
              <button className="status-action-btn" onClick={handlePrint}>
                <Printer size={16} />
                <span>Print / Save PDF</span>
              </button>
              <button className="status-action-btn" onClick={handleShare}>
                <Share2 size={16} />
                <span>Share Status Link</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {shareToast && (
            <div className="status-toast animate-fade-in">
              <CheckCircle2 size={16} /> Status page link copied to clipboard!
            </div>
          )}

          {/* Main Grid: Details & Timeline */}
          <div className="status-grid">
            
            {/* Left Column: Details & Checklist */}
            <div className="status-left-column">
              
              {/* Card 1: Consultation Details */}
              <div className="status-card">
                <div className="card-header-bar">
                  <h3>
                    <FileCheck size={20} className="card-header-icon" /> Consultation Summary
                  </h3>
                  <span className="badge-gold-subtle">Verified Request</span>
                </div>

                <div className="details-grid-pairs">
                  <div className="detail-item">
                    <span className="detail-label">Client Name</span>
                    <span className="detail-val highlight-val">{clientInfo.name}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Email Address</span>
                    <span className="detail-val">{clientInfo.email}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Phone Contact</span>
                    <span className="detail-val">{clientInfo.phone}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Service Type</span>
                    <span className="detail-val text-gold font-bold">{clientInfo.service}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Estimated Budget</span>
                    <span className="detail-val">{clientInfo.budget}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Consultation Date & Time</span>
                    <span className="detail-val icon-val">
                      <Clock size={14} className="text-gold" /> {clientInfo.date} • {clientInfo.time}
                    </span>
                  </div>

                  <div className="detail-item full-width-item">
                    <span className="detail-label">Meeting Format</span>
                    <span className="detail-val icon-val">
                      <Video size={15} className="text-gold" /> {clientInfo.mode}
                    </span>
                  </div>

                  {clientInfo.details && (
                    <div className="detail-item full-width-item">
                      <span className="detail-label">Project Scope & Notes</span>
                      <p className="details-notes-box">{clientInfo.details}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card 2: Interactive Preparation Checklist */}
              <div className="status-card">
                <div className="card-header-bar">
                  <h3>
                    <CheckSquare size={20} className="card-header-icon" /> What to Prepare Next
                  </h3>
                  <span className="checklist-counter">
                    {checklist.filter((i) => i.completed).length} of {checklist.length} Completed
                  </span>
                </div>

                <p className="card-sub-desc">
                  Check off the steps below before your scheduled session to get the most out of your consultation.
                </p>

                <div className="checklist-items">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      className={`checklist-row ${item.completed ? 'checked' : ''}`}
                      onClick={() => toggleChecklistItem(item.id)}
                    >
                      <div className="checkbox-custom">
                        {item.completed && <Check size={14} />}
                      </div>
                      <span className="checklist-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Specialist & Stage Roadmap */}
            <div className="status-right-column">
              
              {/* Assigned Specialist Card */}
              <div className="status-card specialist-card">
                <div className="specialist-badge">ASSIGNED SPECIALIST</div>
                <div className="specialist-profile">
                  <div className="specialist-avatar-frame">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                      alt="Elena Rostova - Senior Interior Architect"
                    />
                    <div className="specialist-online-dot" title="Online & Ready"></div>
                  </div>
                  <div className="specialist-info">
                    <h4>Elena Rostova</h4>
                    <p className="specialist-role">Lead Architectural Interior Specialist</p>
                    <span className="specialist-exp">12+ Years Experience • Luxury Residential</span>
                  </div>
                </div>

                <div className="specialist-contact-links">
                  <a href="mailto:elena@interiodesign.com" className="spec-contact-btn">
                    <Mail size={14} /> Email Architect
                  </a>
                  <a href="tel:+12345678900" className="spec-contact-btn">
                    <Phone size={14} /> Studio Line
                  </a>
                </div>
              </div>

              {/* Interactive Milestone Stepper Card */}
              <div className="status-card">
                <div className="card-header-bar">
                  <h3>
                    <Sparkles size={20} className="card-header-icon" /> Project Roadmap
                  </h3>
                </div>

                {/* Stage Simulator Switcher */}
                <div className="stage-simulator-bar">
                  <span className="simulator-label">Test Stage View:</span>
                  <div className="stage-pills">
                    {projectStages.map((stg, idx) => (
                      <button
                        key={idx}
                        className={`stage-pill ${activeStage === idx ? 'active' : ''}`}
                        onClick={() => setActiveStage(idx)}
                      >
                        Step {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stepper Vertical List */}
                <div className="stepper-list">
                  {projectStages.map((stage, idx) => {
                    const isDone = idx < activeStage || (activeStage === 0 && idx === 0);
                    const isActive = idx === activeStage;
                    const isUpcoming = idx > activeStage;

                    return (
                      <div
                        key={idx}
                        className={`stepper-item ${
                          isDone ? 'done' : isActive ? 'active' : 'upcoming'
                        }`}
                      >
                        <div className="stepper-icon-col">
                          <div className="stepper-circle">
                            {isDone ? <Check size={16} /> : stage.icon}
                          </div>
                          {idx < projectStages.length - 1 && <div className="stepper-line"></div>}
                        </div>

                        <div className="stepper-content">
                          <div className="stepper-header-line">
                            <h4 className="stepper-title">{stage.title}</h4>
                            <span className="stepper-badge">{stage.badge}</span>
                          </div>
                          <p className="stepper-desc">{stage.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Immediate Direct Support CTA Box */}
              <div className="status-support-box">
                <div className="support-icon-circle">
                  <MessageSquare size={22} />
                </div>
                <div className="support-text">
                  <h4>Have Questions About Your Status?</h4>
                  <p>Our client care concierge team is available Mon-Fri, 9am-6pm EST.</p>
                </div>
                <div className="support-actions">
                  <Link to="/contact" className="btn-gold btn-sm">
                    <span>Contact Concierge</span>
                    <span className="btn-gold-icon">
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                  <Link to="/portfolio" className="btn-outline btn-sm">
                    <span>View Projects</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
