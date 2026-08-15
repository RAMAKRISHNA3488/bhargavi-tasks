import React from 'react';
import { Layout, Maximize, Hammer, Armchair, Lamp, ClipboardCheck, Home, Building2, Box, Palette, ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  Layout,
  Maximize,
  Hammer,
  Armchair,
  Lamp,
  ClipboardCheck,
  Home,
  Building2,
  Box,
  Palette
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Layout;

  return (
    <div className="service-card card-hover-effect">
      <div className="service-card-image-box">
        <img src={service.image} alt={service.title} loading="lazy" />
        <div className="service-card-icon-badge">
          <IconComponent size={22} />
        </div>
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}
