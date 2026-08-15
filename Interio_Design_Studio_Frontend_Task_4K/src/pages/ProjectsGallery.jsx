import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import FilterTabs from '../components/FilterTabs';
import LightboxModal from '../components/LightboxModal';
import { projects, projectCategories } from '../data/projects';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectsGallery.css';

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-gallery-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Our Projects</h1>
          <Breadcrumb items={[{ name: 'Projects' }]} />
        </div>
      </section>

      {/* Main Projects Gallery Grid matching Slide 11 reference */}
      <section className="gallery-main-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="GALLERY SHOWCASE"
            title="Architectural & Interior Showcase"
            highlightWord="Showcase"
            description="Explore our high-resolution gallery of contemporary living rooms, luxury bedrooms, designer kitchens, and corporate spaces."
          />

          {/* Filter Tabs */}
          <FilterTabs
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />

          {/* 4-Column Grid matching Slide 11 layout */}
          <div className="gallery-masonry-grid">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="gallery-item-card card-hover-effect">
                <div className="gallery-item-image-box">
                  <img src={proj.heroImage} alt={proj.title} loading="lazy" />
                  
                  <div className="gallery-item-overlay">
                    <span className="gallery-cat-badge">{proj.category}</span>
                    <h4>{proj.title}</h4>

                    <div className="gallery-actions">
                      <button
                        type="button"
                        className="btn-gold gallery-zoom-btn"
                        onClick={() => setActiveModalImage(proj)}
                      >
                        <Eye size={16} />
                        <span>Quick Zoom</span>
                      </button>

                      <Link to={`/portfolio/${proj.id}`} className="btn-outline gallery-details-btn">
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <LightboxModal
          image={activeModalImage.heroImage}
          title={activeModalImage.title}
          category={activeModalImage.category}
          onClose={() => setActiveModalImage(null)}
        />
      )}
    </div>
  );
}
