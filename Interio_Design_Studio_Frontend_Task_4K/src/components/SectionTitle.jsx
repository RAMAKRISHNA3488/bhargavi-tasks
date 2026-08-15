import React from 'react';

export default function SectionTitle({ eyebrow, title, highlightWord, description, center = false, light = false }) {
  // If highlightWord is specified, wrap it in a gold span
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-gold">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '40px' }}>
      {eyebrow && <span className="eyebrow-gold">{eyebrow}</span>}
      <h2 style={{ color: light ? 'var(--text-dark)' : 'var(--text-white)', marginTop: '4px' }}>
        {renderTitle()}
      </h2>
      {description && (
        <p style={{
          maxWidth: center ? '680px' : '620px',
          margin: center ? '16px auto 0 auto' : '16px 0 0 0',
          color: light ? 'var(--text-dark-muted)' : 'var(--text-muted)',
          fontSize: '1.05rem'
        }}>
          {description}
        </p>
      )}
    </div>
  );
}
