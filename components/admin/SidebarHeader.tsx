import React from 'react'
import Link from 'next/link'

export const SidebarHeader: React.FC = () => {
  return (
    <div className="fonib-sidebar-header">
      <Link href="/admin" className="fonib-sidebar-brand">
        <img
          src="/icon.png"
          alt="FONIB"
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'contain',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div className="fonib-sidebar-info">
          <div className="fonib-sidebar-title">FONIB Admin</div>
          <div className="fonib-sidebar-sub">Fondation N. Bwatshia</div>
        </div>
      </Link>
      <span className="fonib-sidebar-version">v3.91</span>
    </div>
  )
}

export default SidebarHeader
