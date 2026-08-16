import React, { useState } from 'react';
import { blogsData } from '../data/healthcareData';
import BlogCard from '../components/BlogCard';
import './PageStyles.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Heart Care', 'Preventive Health', 'Wellness'];

  const filteredBlogs = blogsData.filter((b) =>
    selectedCategory === 'All' ? true : b.category === selectedCategory
  );

  return (
    <div className="blog-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">OUR BLOG</span>
          <h1 className="heading-xl mt-3">Latest Health Tips & Articles</h1>
          <p className="page-banner-sub">
            Stay informed with our latest health tips, news, and medical research articles.
          </p>

          <div className="blog-category-pills flex justify-center gap-3 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} layout="horizontal" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
