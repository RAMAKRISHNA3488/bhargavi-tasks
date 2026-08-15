import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({ children, to, onClick, variant = 'gold', type = 'button', className = '', icon = true }) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="btn-gold-icon">
          <ArrowRight size={14} />
        </span>
      )}
    </>
  );

  const btnClass = `${variant === 'gold' ? 'btn-gold' : 'btn-outline'} ${className}`;

  if (to) {
    return (
      <Link to={to} className={btnClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass}>
      {content}
    </button>
  );
}
