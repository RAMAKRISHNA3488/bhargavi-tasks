import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingState({ text = 'Loading...' }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      gap: '16px',
      color: 'var(--gold)'
    }}>
      <Loader2 size={36} className="spinner-icon" />
      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)' }}>{text}</span>
    </div>
  );
}
