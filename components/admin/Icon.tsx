import React from 'react'

export const Icon: React.FC = () => {
  return (
    <img
      src="/icon.png"
      alt="FONIB"
      className="graphic-icon"
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  )
}

export default Icon
