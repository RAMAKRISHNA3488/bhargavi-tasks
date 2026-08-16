import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './CardComponents.css';

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();

  return (
    <div className={`package-card ${pkg.isPopular ? 'popular-package' : ''} card-hover`}>
      {pkg.isPopular && (
        <div className="popular-badge">
          <span>{pkg.badgeText || 'Most Popular'}</span>
        </div>
      )}

      <h3 className="package-title">{pkg.name}</h3>

      <div className="package-price-row">
        <span className="price-val">{pkg.price}</span>
        <span className="price-period">{pkg.period}</span>
      </div>

      <ul className="package-features-list">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <div className="check-badge">
              <Check size={14} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate(`/appointment?package=${pkg.id}`)}
        className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-secondary'} w-full package-btn`}
      >
        Book Now
      </button>
    </div>
  );
}
