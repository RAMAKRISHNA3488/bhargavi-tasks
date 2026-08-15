import React from 'react';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page animate-fade-in">
      <div className="container not-found-container">
        {/* Left Column: Text & 404 Display */}
        <div className="not-found-content">
          <span className="not-found-code text-gold">404</span>
          
          <h1 className="not-found-heading">Oops! Page Not Found</h1>

          <p className="not-found-text">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Button to="/" variant="gold" className="not-found-btn">
            Back to Home
          </Button>
        </div>

        {/* Right Column: Interior Photo matching Slide 13 */}
        <div className="not-found-media">
          <div className="not-found-img-frame">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
              alt="Dark Armchair and Gold Floor Lamp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
