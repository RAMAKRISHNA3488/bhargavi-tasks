import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import './BlogCard.css';

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card card-hover-effect">
      <div className="blog-card-image-box">
        <img src={blog.image} alt={blog.title} loading="lazy" />
        <span className="blog-category-tag">{blog.category}</span>
      </div>

      <div className="blog-card-body">
        <div className="blog-meta-date">
          <Calendar size={14} className="meta-icon" />
          <span>{blog.date}</span>
        </div>

        <h3 className="blog-card-title">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{blog.excerpt}</p>

        <Link to={`/blog/${blog.id}`} className="blog-read-more">
          <span>Read More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
