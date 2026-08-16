import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, Baby, UserCheck, Smile, ArrowRight } from 'lucide-react';
import './CardComponents.css';

const iconMap = {
  Heart: Heart,
  Brain: Brain,
  Activity: Activity,
  Baby: Baby,
  UserCheck: UserCheck,
  Smile: Smile
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Heart;

  return (
    <div className="service-card card-hover">
      <div className="service-icon-wrapper">
        <IconComponent size={28} className="service-icon" />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <Link to="/services" className="service-learn-more">
        <span>Learn More</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
