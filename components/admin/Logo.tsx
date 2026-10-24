import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
      <img
        src="/icon.png"
        alt="FONIB"
        style={{
          width: '30px',
          height: '30px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: '15px',
            color: 'var(--theme-text, #ffffff)',
            letterSpacing: '-0.3px',
            lineHeight: 1.1,
          }}
        >
          FONIB
        </span>
        <span
          style={{
            fontSize: '10px',
            color: 'var(--theme-elevation-500, #94a3b8)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Administration
        </span>
      </div>
    </div>
  )
}

export default Logo
