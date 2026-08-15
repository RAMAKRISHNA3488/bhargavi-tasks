import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';
import './Blog.css';

export default function Blog() {
  return (
    <div className="blog-page animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <h1>Our Blog</h1>
          <Breadcrumb items={[{ name: 'Blog' }]} />
        </div>
      </section>

      {/* Main Blog Grid Section matching Slide 7 reference */}
      <section className="blog-main-section section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="JOURNAL & ARTICLES"
            title="Design Inspiration & Expert Insights"
            highlightWord="Insights"
            description="Ideas, inspiration and insights about interior design and home decor."
          />

          <div className="blog-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
