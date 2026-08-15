import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { blogs, blogCategories } from '../data/blogs';
import './BlogArticle.css';

export default function BlogArticle() {
  const { id } = useParams();
  const article = blogs.find((b) => b.id === parseInt(id, 10)) || blogs[0];
  const [searchQuery, setSearchQuery] = useState('');

  const recentPosts = blogs.filter((b) => b.id !== article.id);

  return (
    <div className="blog-article-page bg-cream-theme animate-fade-in">
      {/* Light Header Banner */}
      <section className="article-header-section">
        <div className="container">
          <Breadcrumb
            items={[
              { name: 'Blog', path: '/blog' },
              { name: article.title }
            ]}
          />
        </div>
      </section>

      {/* Main Article & Sidebar Grid matching Slide 12 reference */}
      <section className="article-body-section section-padding">
        <div className="container article-layout-grid">
          {/* Left Column: Article Content */}
          <main className="article-main-content">
            <h1 className="article-title-heading">{article.title}</h1>

            <div className="article-meta-row">
              <span>{article.date}</span>
              <span className="divider">|</span>
              <span>By {article.author}</span>
              <span className="divider">|</span>
              <span className="category-pill-light">{article.category}</span>
            </div>

            <div className="article-hero-image-box">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="article-prose-text">
              <p className="article-intro-lead">{article.excerpt}</p>
              
              <div
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/\n\n/g, '<br/><br/>')
                    .replace(/### (.*)/g, '<h3>$1</h3>')
                }}
              />
            </div>
          </main>

          {/* Right Column: Sidebar matching Slide 12 */}
          <aside className="article-sidebar">
            {/* Search Box Widget */}
            <div className="sidebar-widget search-widget">
              <h4 className="widget-title">Search</h4>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="sidebar-search-input"
                />
                <Search size={18} className="search-icon" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="sidebar-widget categories-widget">
              <h4 className="widget-title">Categories</h4>
              <ul className="categories-list">
                {blogCategories.map((cat, idx) => (
                  <li key={idx}>
                    <Link to="/blog" className="cat-link">
                      <span>{cat.name}</span>
                      <span className="cat-count">({cat.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="sidebar-widget recent-posts-widget">
              <h4 className="widget-title">Recent Posts</h4>
              <div className="recent-posts-list">
                {recentPosts.map((post) => (
                  <div key={post.id} className="recent-post-item">
                    <Link to={`/blog/${post.id}`} className="recent-thumb">
                      <img src={post.image} alt={post.title} />
                    </Link>
                    <div className="recent-post-info">
                      <h5>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h5>
                      <span className="recent-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
