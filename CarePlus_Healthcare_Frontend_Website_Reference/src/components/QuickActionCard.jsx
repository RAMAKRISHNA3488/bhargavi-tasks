import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Search, ShieldCheck, AlertCircle, ChevronRight } from 'lucide-react';
import './CardComponents.css';

export default function QuickActionCard() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      sub: 'EASY & FAST',
      path: '/appointment',
      color: '#0D52D6'
    },
    {
      icon: Search,
      title: 'Find a Doctor',
      sub: 'EXPERT SPECIALISTS',
      path: '/doctors',
      color: '#0284C7'
    },
    {
      icon: ShieldCheck,
      title: 'Health Checkup',
      sub: 'FULL BODY CHECKUP',
      path: '/packages',
      color: '#059669'
    },
    {
      icon: AlertCircle,
      title: 'Emergency Care',
      sub: '24/7 AVAILABLE',
      path: '/contact',
      color: '#DC2626'
    }
  ];

  return (
    <div className="quick-action-card glass-panel">
      <div className="quick-action-list">
        {actions.map((act, index) => {
          const IconComp = act.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(act.path)}
              className="quick-action-item"
            >
              <div className="quick-icon-box" style={{ color: act.color, backgroundColor: `${act.color}12` }}>
                <IconComp size={20} />
              </div>
              <div className="quick-text-box">
                <span className="quick-title">{act.title}</span>
                <span className="quick-sub">{act.sub}</span>
              </div>
              <ChevronRight size={16} className="quick-arrow" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
