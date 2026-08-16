import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CardComponents.css';

export default function BlogCard({ blog, layout = 'vertical' }) {
  const navigate = useNavigate();

  if (layout === 'horizontal') {
    return (
      <div className="blog-card-horizontal card-hover">
        <div className="blog-horizontal-img">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="blog-horizontal-content">
          <div className="blog-meta flex items-center gap-2 text-xs text-muted mb-2">
            <Calendar size={14} className="text-blue" />
            <span>{blog.date}</span>
            <span className="bullet">•</span>
            <span className="blog-category-badge">{blog.category}</span>
          </div>
          <h3 className="blog-horizontal-title">{blog.title}</h3>
          <p className="blog-horizontal-excerpt">{blog.excerpt}</p>
          <button
            onClick={() => navigate('/blog')}
            className="blog-read-more-btn"
          >
            <span>Read Article</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-card card-hover">
      <div className="blog-img-wrapper">
        <img src={blog.image} alt={blog.title} className="blog-img" />
        <span className="blog-cat-tag">{blog.category}</span>
      </div>
      <div className="blog-body">
        <div className="blog-date flex items-center gap-2">
          <Calendar size={14} />
          <span>{blog.date}</span>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <button
          onClick={() => navigate('/blog')}
          className="service-learn-more font-semibold border-none bg-transparent p-0 cursor-pointer"
        >
          <span>Read More</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
