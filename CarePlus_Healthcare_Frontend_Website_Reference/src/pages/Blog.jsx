import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { blogsData } from '../data/healthcareData';
import BlogCard from '../components/BlogCard';
import './PageStyles.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(blogsData.map(b => b.category)))];

  const filteredBlogs = blogsData.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = 
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">HEALTH & WELLNESS BLOG</span>
          <h1 className="heading-xl mt-3">Latest Health Tips & Articles</h1>
          <p className="page-banner-sub">
            Expert medical insights, preventive wellness advice, and essential healthcare tips curated by our specialists.
          </p>

          {/* Search Bar */}
          <div className="doctor-search-box max-w-lg mx-auto mt-6">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search health tips, wellness advice, categories..."
                className="doctor-search-input"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="blog-category-pills flex justify-center gap-2.5 mt-6 flex-wrap">
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
          {filteredBlogs.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} layout="horizontal" />
              ))}
            </div>
          ) : (
            <div className="no-results-box text-center py-12 bg-white rounded-2xl border border-slate-200">
              <BookOpen size={40} className="mx-auto text-slate-400 mb-3" />
              <p className="text-xl font-bold text-slate-900 mb-1">No Health Articles Found</p>
              <p className="text-slate-500">Try searching for another health keyword or select 'All' categories.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
