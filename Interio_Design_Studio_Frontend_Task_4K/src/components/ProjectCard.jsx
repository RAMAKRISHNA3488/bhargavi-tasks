import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onQuickView }) {
  return (
    <div className="project-card card-hover-effect">
      <div className="project-card-image-box">
        <img src={project.heroImage} alt={project.title} loading="lazy" />
        
        {/* Overlay on hover */}
        <div className="project-card-overlay">
          <span className="project-category-badge">{project.category}</span>
          <h3 className="project-card-title">{project.title}</h3>
          
          <div className="project-card-actions">
            <Link to={`/portfolio/${project.id}`} className="btn-gold project-view-btn">
              <span>View Project</span>
              <span className="btn-gold-icon">
                <ArrowRight size={14} />
              </span>
            </Link>

            {onQuickView && (
              <button 
                type="button"
                onClick={() => onQuickView(project)}
                className="btn-outline quick-view-btn"
                aria-label="Quick preview image"
              >
                <Eye size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
