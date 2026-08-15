import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { companyStats, companyValues, teamMembers } from '../data/team';
import { Sparkles, ShieldCheck, Award } from 'lucide-react';
import './About.css';

const valueIcons = {
  Sparkles,
  ShieldCheck,
  Award
};

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>About Us</h1>
          <Breadcrumb items={[{ name: 'About Us' }]} />
        </div>
      </section>

      {/* Story / Overview Section matching Slide 4 reference */}
      <section className="about-story-section section-padding">
        <div className="container story-grid">
          {/* Left Large Interior Image */}
          <div className="story-image-box">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
              alt="Interio Design Studio Lounge"
            />
          </div>

          {/* Right Text Content */}
          <div className="story-content-box">
            <span className="eyebrow-gold">WHO WE ARE</span>
            
            <h2 className="story-title">
              Passionate About Design. Dedicated to Creating Beautiful Spaces.
            </h2>

            <p className="story-para">
              Interio Design Studio is a full-service interior design firm with a passion for creating elegant, functional and inspiring spaces tailored specifically to your unique personality and lifestyle.
            </p>

            <p className="story-para">
              With years of experience and a talented multidisciplinary team, we bring ideas to life with creativity, architectural precision and an uncompromising personal touch.
            </p>

            {/* Statistics Counters matching Slide 4 */}
            <div className="stats-counters-row">
              {companyStats.map((stat, idx) => (
                <div key={idx} className="stat-counter-item">
                  <span className="stat-value text-gold">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Gold Circular Icon Treatment */}
      <section className="about-values-section section-padding bg-dark-secondary">
        <div className="container">
          <SectionTitle
            eyebrow="OUR VALUES"
            title="Principles That Guide Our Craft"
            highlightWord="Craft"
            center={true}
          />

          <div className="values-grid">
            {companyValues.map((value, idx) => {
              const IconComp = valueIcons[value.icon] || Sparkles;
              return (
                <div key={idx} className="value-card card-hover-effect">
                  <div className="icon-circle-gold">
                    <IconComp size={24} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-desc">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="about-team-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="OUR TEAM"
            title="Meet Our Creative Directors"
            highlightWord="Directors"
            description="Our talented team of designers and creatives bring passion, experience, and innovation to every project."
            center={true}
          />

          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
