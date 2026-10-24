import React from 'react'
import Link from 'next/link'

export const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Projets Humanitaires',
      tag: 'Piliers d’action',
      desc: 'Familles, Éducation, Parité',
      href: '/admin/collections/projects',
      color: '#ef9224',
      bg: 'rgba(239, 146, 36, 0.08)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Événements & Campagnes',
      tag: 'Calendrier terrain',
      desc: 'Sensibilisation & distributions',
      href: '/admin/collections/events',
      color: '#4b9bc4',
      bg: 'rgba(75, 155, 196, 0.08)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Actualités & Presse',
      tag: 'Publications en ligne',
      desc: 'Communiqués et reportages',
      href: '/admin/collections/news',
      color: '#1f9d6b',
      bg: 'rgba(31, 157, 107, 0.08)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      title: 'Médiathèque',
      tag: 'Optimisation Sharp',
      desc: 'Visuels & galeries photos',
      href: '/admin/collections/media',
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.08)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="fonib-stats-grid">
      {stats.map((s) => (
        <Link key={s.title} href={s.href} className="fonib-stat-card">
          <div className="fonib-stat-header">
            <span className="fonib-stat-tag">{s.tag}</span>
            <div
              className="fonib-stat-icon"
              style={{ color: s.color, backgroundColor: s.bg }}
            >
              {s.icon}
            </div>
          </div>
          <div className="fonib-stat-title">{s.title}</div>
          <div className="fonib-stat-desc">{s.desc}</div>
          <div className="fonib-stat-footer">
            <span>Accéder à la collection</span>
            <span className="fonib-stat-arrow">&rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default DashboardStats

