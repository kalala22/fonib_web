import React from 'react'
import Link from 'next/link'

export const DashboardHero: React.FC = () => {
  return (
    <div className="fonib-dashboard-hero">
      <div className="fonib-hero-content">
        <div className="fonib-hero-badge">
          <span className="fonib-badge-dot"></span>
          <span>Portail Éditorial Officiel • FONIB</span>
        </div>
        <h1 className="fonib-hero-title">
          Bienvenue sur l'Espace d'Administration
        </h1>
        <p className="fonib-hero-motto">
          « Connaître pour être, Être pour connaître » — Actions sociales, humanitaires et développement communautaire en RDC.
        </p>
      </div>

      <div className="fonib-hero-actions">
        <Link
          href="/admin/collections/news/create"
          className="fonib-btn fonib-btn-primary"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Nouvelle Actualité
        </Link>

        <Link
          href="/admin/collections/projects/create"
          className="fonib-btn fonib-btn-secondary"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Nouveau Projet
        </Link>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="fonib-btn fonib-btn-outline"
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Voir le site en direct
        </a>
      </div>
    </div>
  )
}

export default DashboardHero

