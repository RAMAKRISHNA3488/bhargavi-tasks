import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="breadcrumb-separator" />
          {item.path ? (
            <Link to={item.path}>{item.name}</Link>
          ) : (
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
