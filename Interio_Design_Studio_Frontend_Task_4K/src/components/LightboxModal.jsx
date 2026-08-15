import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({ image, title, category, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="lightbox-image-box">
          <img src={image} alt={title || 'Gallery Preview'} />
        </div>

        {(title || category) && (
          <div className="lightbox-caption">
            {category && <span className="lightbox-category">{category}</span>}
            {title && <h3>{title}</h3>}
          </div>
        )}
      </div>
    </div>
  );
}
