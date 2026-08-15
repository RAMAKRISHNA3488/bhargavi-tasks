import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import FilterTabs from '../components/FilterTabs';
import ProjectCard from '../components/ProjectCard';
import LightboxModal from '../components/LightboxModal';
import { projects, projectCategories } from '../data/projects';
import './Portfolio.css';

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [quickViewProject, setQuickViewProject] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && projectCategories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="portfolio-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Our Portfolio</h1>
          <Breadcrumb items={[{ name: 'Portfolio' }]} />
        </div>
      </section>

      {/* Main Portfolio Grid Section matching Slide 6 reference */}
      <section className="portfolio-main-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Explore Our Curated Projects"
            highlightWord="Projects"
            description="Browse our portfolio across luxury living spaces, master bedrooms, modern kitchens, corporate offices, and commercial interiors."
          />

          {/* Filter Pills */}
          <FilterTabs
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="portfolio-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onQuickView={(proj) => setQuickViewProject(proj)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-portfolio-state">
              <h3>No projects found in this category.</h3>
              <p>Try switching filter tabs to view more of our work.</p>
              <button
                type="button"
                className="btn-gold"
                onClick={() => handleSelectCategory('All')}
                style={{ marginTop: '16px' }}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Lightbox Modal */}
      {quickViewProject && (
        <LightboxModal
          image={quickViewProject.heroImage}
          title={quickViewProject.title}
          category={quickViewProject.category}
          onClose={() => setQuickViewProject(null)}
        />
      )}
    </div>
  );
}
