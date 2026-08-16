import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Calendar, ArrowRight } from 'lucide-react';
import './CardComponents.css';

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="doctor-card card-hover">
      <div className="doctor-image-wrapper">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
      </div>
      <div className="doctor-info-content">
        <div className="doctor-header-row">
          <h3 className="doctor-name">{doctor.name}</h3>
        </div>
        <div className="doctor-specialty">{doctor.specialty}</div>
        <div className="doctor-experience-badge">{doctor.experience} Experience</div>
        
        {doctor.rating && (
          <div className="doctor-rating-row">
            <Star size={16} className="star-icon" fill="#F59E0B" color="#F59E0B" />
            <span className="rating-score">{doctor.rating}</span>
            <span className="reviews-count">({doctor.reviewsCount} Reviews)</span>
          </div>
        )}

        <div className="doctor-card-actions">
          <button
            onClick={() => navigate(`/doctors/${doctor.id}`)}
            className="btn btn-secondary btn-sm flex-1"
          >
            View Profile
          </button>
          <button
            onClick={() => navigate(`/appointment?doctor=${doctor.id}`)}
            className="btn btn-primary btn-sm flex-1"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
