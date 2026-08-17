import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Building2, Calendar, ArrowRight, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';
import { departmentsData, doctorsData } from '../data/healthcareData';
import DoctorCard from '../components/DoctorCard';
import './PageStyles.css';

export default function DepartmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find department by ID or name fallback
  const department = departmentsData.find(
    (d) => d.id.toLowerCase() === (id || '').toLowerCase() || d.name.toLowerCase() === (id || '').toLowerCase()
  ) || departmentsData[0];

  // Find doctors belonging to this department/specialty
  const departmentDoctors = doctorsData.filter(
    (doc) => doc.specialty.toLowerCase() === department.name.toLowerCase() || doc.specialty.toLowerCase().includes(department.id.toLowerCase())
  );

  const doctorsToDisplay = departmentDoctors.length > 0 ? departmentDoctors : doctorsData.slice(0, 3);

  return (
    <div className="department-details-page animate-fade-in py-10">
      <div className="container">
        {/* Back link */}
        <Link to="/departments" className="back-link inline-flex items-center gap-2 mb-8 text-muted hover:text-blue transition-colors">
          <ArrowLeft size={18} />
          <span className="font-semibold">Back to All Departments</span>
        </Link>

        {/* Hero / Overview Card */}
        <div className="profile-main-card mb-12">
          <div className="dept-overview-grid">
            <div className="dept-media-frame">
              <img
                src={department.image}
                alt={department.name}
              />
            </div>

            <div className="dept-info-content">
              <span className="sub-heading-badge mb-3">{department.tagline}</span>
              <h1 className="heading-lg text-left mt-2">{department.name} Department</h1>
              <p className="profile-body-text mt-4 leading-relaxed">{department.longDescription || department.description}</p>

              <div className="dept-action-buttons">
                <button
                  onClick={() => navigate(`/appointment?department=${department.id}`)}
                  className="btn btn-primary btn-lg inline-flex items-center gap-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight size={18} />
                </button>

                <a href="tel:+10123456789" className="btn btn-secondary btn-lg inline-flex items-center gap-2">
                  <span>Contact Department</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facilities Section */}
        {department.facilities && department.facilities.length > 0 && (
          <div className="dept-section mb-12">
            <div className="section-header text-center mb-8">
              <span className="sub-heading-badge">EXCELLENCE & INFRASTRUCTURE</span>
              <h2 className="heading-md mt-2">Department Facilities</h2>
            </div>

            <div className="facilities-grid">
              {department.facilities.map((fac, idx) => (
                <div key={idx} className="facility-card">
                  <div className="facility-icon-box">
                    <Building2 size={20} />
                  </div>
                  <div className="facility-info">
                    <div className="facility-title">{fac}</div>
                    <div className="facility-desc">World-class standard facility at CarePlus Medical Center.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Treatments & Services Section */}
        {department.treatments && department.treatments.length > 0 && (
          <div className="dept-section treatments-section-box mb-12">
            <div className="section-header text-center mb-8">
              <span className="sub-heading-badge">TREATMENTS & PROCEDURES</span>
              <h2 className="heading-md mt-2">Services Offered in {department.name}</h2>
            </div>

            <div className="treatments-grid">
              {department.treatments.map((treatment, idx) => (
                <div key={idx} className="treatment-item">
                  <CheckCircle2 size={20} className="treatment-icon" />
                  <span className="treatment-text">{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specialists Section */}
        <div className="dept-section mb-12">
          <div className="section-header text-center mb-8">
            <span className="sub-heading-badge">EXPERT MEDICAL TEAM</span>
            <h2 className="heading-md mt-2">{department.name} Specialists</h2>
            <p className="text-muted mt-2">Consult with our board-certified specialists in {department.name}.</p>
          </div>

          <div className="doctors-grid">
            {doctorsToDisplay.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="cta-banner-card mt-12">
          <div className="cta-banner-content">
            <h2 className="cta-title">Need Consultation in {department.name}?</h2>
            <p className="cta-sub">
              Schedule an appointment with our {department.name.toLowerCase()} specialists today for comprehensive medical evaluation.
            </p>
          </div>

          <div className="cta-banner-actions">
            <button
              onClick={() => navigate(`/appointment?department=${department.id}`)}
              className="btn btn-secondary btn-lg cta-btn-white"
            >
              <span>Book Appointment Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
