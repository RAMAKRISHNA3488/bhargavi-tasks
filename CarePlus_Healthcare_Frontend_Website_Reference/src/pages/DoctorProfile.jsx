import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Award, Globe, GraduationCap, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { doctorsData } from '../data/healthcareData';
import './PageStyles.css';

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((d) => String(d.id) === String(id)) || doctorsData[1]; // fallback to Dr. Michael Brown

  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const handleBookSlot = (e) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) {
      alert('Please select both date and time to proceed with booking.');
      return;
    }
    navigate(`/appointment?doctor=${doctor.id}&date=${bookingDate}&time=${bookingTime}`);
  };

  return (
    <div className="doctor-profile-page animate-fade-in">
      <div className="container py-8">
        {/* Back Link */}
        <Link to="/doctors" className="back-link flex items-center gap-2 mb-6">
          <ArrowLeft size={18} />
          <span>Back to Doctors</span>
        </Link>

        <div className="profile-layout-grid">
          {/* Left Main Details Box */}
          <div className="profile-main-card">
            <div className="profile-header-flex">
              <div className="profile-avatar-frame">
                <img src={doctor.image} alt={doctor.name} className="profile-avatar-img" />
              </div>

              <div className="profile-header-details">
                <h1 className="heading-lg doctor-profile-name">{doctor.name}</h1>
                <div className="profile-specialty-title">{doctor.title || doctor.specialty}</div>
                <div className="profile-exp-tag">{doctor.experience} Experience</div>

                {doctor.rating && (
                  <div className="profile-rating-row mt-3 flex items-center gap-2">
                    <div className="stars-flex flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <span className="font-bold text-dark">{doctor.rating}</span>
                    <span className="text-muted">({doctor.reviewsCount} Reviews)</span>
                  </div>
                )}

                <p className="profile-short-summary mt-4">
                  {doctor.name} is a highly experienced {doctor.specialty.toLowerCase()} specializing in the diagnosis and treatment of conditions with personalized care.
                </p>

                <div className="meta-list-grid mt-6">
                  <div className="meta-item">
                    <Award size={18} className="text-blue" />
                    <div>
                      <span className="meta-label">Specialization</span>
                      <span className="meta-val">{doctor.specialty}</span>
                    </div>
                  </div>

                  <div className="meta-item">
                    <Clock size={18} className="text-blue" />
                    <div>
                      <span className="meta-label">Experience</span>
                      <span className="meta-val">{doctor.experience}</span>
                    </div>
                  </div>

                  <div className="meta-item">
                    <GraduationCap size={18} className="text-blue" />
                    <div>
                      <span className="meta-label">Qualification</span>
                      <span className="meta-val">{doctor.education}</span>
                    </div>
                  </div>

                  <div className="meta-item">
                    <Globe size={18} className="text-blue" />
                    <div>
                      <span className="meta-label">Languages</span>
                      <span className="meta-val">{doctor.languages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Doctor Section */}
            <div className="profile-section-divider">
              <h2 className="heading-md mb-3">About Doctor</h2>
              <p className="profile-body-text">{doctor.about}</p>
            </div>

            {/* Areas of Expertise */}
            <div className="profile-section-divider">
              <h2 className="heading-md mb-4">Areas of Expertise</h2>
              <div className="expertise-tags-flex">
                {doctor.expertise.map((item, idx) => (
                  <span key={idx} className="expertise-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Quick Appointment Booking Panel matching Reference Slide 5 */}
          <div className="profile-side-panel">
            <div className="side-booking-card">
              <h3 className="heading-md mb-4">Book Appointment</h3>
              
              <form onSubmit={handleBookSlot} className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label">Select Date</label>
                  <div className="input-icon-box">
                    <Calendar size={18} className="field-icon" />
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Time</label>
                  <div className="input-icon-box">
                    <Clock size={18} className="field-icon" />
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="form-select"
                    >
                      <option value="">Select Time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:45 AM">11:45 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full mt-6">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
