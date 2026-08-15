import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tag, User, Calendar, MapPin, Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10)) || projects[0];

  const [activeImage, setActiveImage] = useState(project.heroImage);

  // Update active image whenever project ID changes
  useEffect(() => {
    setActiveImage(project.heroImage);
    window.scrollTo(0, 0);
  }, [project]);

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="project-details-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <Breadcrumb
            items={[
              { name: 'Portfolio', path: '/portfolio' },
              { name: project.title }
            ]}
          />
        </div>
      </section>

      {/* Main Project Details Section matching Slide 8 reference */}
      <section className="project-details-main section-padding">
        <div className="container details-grid">
          {/* Left: Main Image + Thumbnail Strip */}
          <div className="project-media-column">
            <div className="project-main-image-box">
              <img src={activeImage} alt={project.title} />
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="project-thumbnails-strip">
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`thumbnail-btn ${activeImage === imgUrl ? 'active-thumb' : ''}`}
                  onClick={() => setActiveImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Project Specs & Metadata */}
          <div className="project-info-column">
            <h1 className="project-detail-title">{project.title}</h1>

            <div className="project-meta-list">
              <div className="meta-row">
                <span className="icon-circle-gold-small">
                  <Tag size={16} />
                </span>
                <span className="meta-label">Category:</span>
                <span className="meta-val">{project.category}</span>
              </div>

              <div className="meta-row">
                <span className="icon-circle-gold-small">
                  <User size={16} />
                </span>
                <span className="meta-label">Client:</span>
                <span className="meta-val">{project.client}</span>
              </div>

              <div className="meta-row">
                <span className="icon-circle-gold-small">
                  <Calendar size={16} />
                </span>
                <span className="meta-label">Date:</span>
                <span className="meta-val">{project.date}</span>
              </div>

              {project.location && (
                <div className="meta-row">
                  <span className="icon-circle-gold-small">
                    <MapPin size={16} />
                  </span>
                  <span className="meta-label">Location:</span>
                  <span className="meta-val">{project.location}</span>
                </div>
              )}

              {project.area && (
                <div className="meta-row">
                  <span className="icon-circle-gold-small">
                    <Maximize2 size={16} />
                  </span>
                  <span className="meta-label">Area:</span>
                  <span className="meta-val">{project.area}</span>
                </div>
              )}
            </div>

            <p className="project-detail-desc">{project.description}</p>

            {/* Project Features List */}
            <div className="project-features-box">
              <h3>Project Features</h3>
              <ul className="features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button matching Slide 8 */}
            <div style={{ marginTop: '32px' }}>
              <Button to="/portfolio" variant="gold">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="related-projects-section section-padding bg-dark-secondary">
        <div className="container">
          <SectionTitle
            eyebrow="MORE INSPIRATION"
            title="Related Interior Projects"
            highlightWord="Projects"
            center={true}
          />

          <div className="projects-grid">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
