import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import './TeamCard.css';

export default function TeamCard({ member }) {
  return (
    <div className="team-card card-hover-effect">
      <div className="team-card-image-box">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>
      <div className="team-card-body">
        <h3 className="team-member-name">{member.name}</h3>
        <span className="team-member-role">{member.role}</span>
        {member.bio && <p className="team-member-bio">{member.bio}</p>}
        <div className="team-member-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="team-social-icon">
            <Facebook size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="team-social-icon">
            <Twitter size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="team-social-icon">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
