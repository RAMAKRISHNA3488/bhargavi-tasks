import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Sliders, Diamond, ShieldCheck, ArrowRight, Sofa, Bed, Utensils, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { services } from '../data/services';
import './Home.css';

export default function Home() {
  const featureItems = [
    {
      title: "Personalized Design",
      desc: "Spaces that reflect your style and personality.",
      icon: UserCheck
    },
    {
      title: "Functional Spaces",
      desc: "Smart layouts that maximize comfort and usability.",
      icon: Sliders
    },
    {
      title: "Quality Execution",
      desc: "Premium materials and flawless finishing.",
      icon: Diamond
    },
    {
      title: "End-to-End Support",
      desc: "From concept to completion, we've got you covered.",
      icon: ShieldCheck
    }
  ];

  const spaceCards = [
    {
      title: "Living Room",
      desc: "Sophisticated lounge layouts designed for relaxation and warm social gatherings.",
      icon: Sofa,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      category: "Living Room"
    },
    {
      title: "Bedroom",
      desc: "Serene private havens with ambient cove lighting and customized headboards.",
      icon: Bed,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop",
      category: "Bedroom"
    },
    {
      title: "Kitchen",
      desc: "Modern open-plan culinary spaces with marble islands and custom oak millwork.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
      category: "Kitchen"
    },
    {
      title: "Office Spaces",
      desc: "Ergonomic executive suites engineered for focus, productivity, and luxury.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      category: "Office"
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="home-hero-section">
        <div className="container hero-container">
          {/* Left Content */}
          <div className="hero-content-left animate-fade-in">
            <span className="eyebrow-gold">DESIGN THAT INSPIRES</span>
            
            <h1 className="hero-title">
              Let's Create Spaces You <span className="text-gold">Love.</span>
            </h1>

            <p className="hero-description">
              We design modern, functional and beautiful interiors tailored to your lifestyle and personality.
            </p>

            <div className="hero-action-buttons">
              <Button to="/portfolio" variant="gold">
                Explore Our Work
              </Button>
              <Button to="/services" variant="outline">
                Our Services
              </Button>
            </div>

            {/* Happy Clients Avatar Stack */}
            <div className="hero-client-stack">
              <div className="avatar-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" alt="Client Avatar 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" alt="Client Avatar 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop" alt="Client Avatar 3" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop" alt="Client Avatar 4" />
              </div>
              <div className="client-text">
                <span className="client-count text-gold">500+ Happy Clients</span>
                <span className="client-sub">across the globe</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="hero-image-right animate-fade-in">
            <div className="hero-gold-frame-box">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Luxury Interior Living Room"
                className="hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Items Strip */}
      <section className="features-strip-section">
        <div className="container">
          <div className="features-grid">
            {featureItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="feature-item-card">
                  <div className="icon-circle-gold-outline">
                    <IconComp size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Designs for Every Space (Cream Theme Section) */}
      <section className="space-collection-section bg-cream-theme section-padding">
        <div className="container">
          <div className="space-collection-header">
            <SectionTitle
              eyebrow="OUR COLLECTION"
              title="Designs for Every Space"
              light={true}
            />
            <Button to="/portfolio" variant="gold" className="collection-cta-btn">
              View All Projects
            </Button>
          </div>

          <div className="space-cards-grid">
            {spaceCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="space-card">
                  <div className="space-card-img-wrapper">
                    <img src={card.image} alt={card.title} loading="lazy" />
                    <div className="space-card-icon-circle">
                      <IconComp size={22} />
                    </div>
                  </div>
                  <div className="space-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={`/portfolio?category=${encodeURIComponent(card.category)}`} className="space-card-link">
                      <span>Explore {card.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase */}
      <section className="featured-portfolio-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="OUR PORTFOLIO"
            title="Featured Design Projects"
            highlightWord="Projects"
            description="Take a glance at our recent bespoke interior transformations engineered with precision and elegance."
            center={true}
          />

          <div className="projects-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button to="/portfolio" variant="outline">
              Browse Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Free Quote Banner */}
      <section className="home-quote-cta-banner">
        <div className="container">
          <div className="quote-cta-inner">
            <div className="quote-cta-text">
              <span className="eyebrow-gold">READY TO TRANSFORM YOUR SPACE?</span>
              <h2>Let's Build Your Dream Interior Together.</h2>
              <p>Schedule a personalized consultation with our principal interior architects today.</p>
            </div>
            <Button to="/quote" variant="gold" className="quote-cta-button">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
