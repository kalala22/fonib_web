import React from 'react'

export const EditorialGuide: React.FC = () => {
  return (
    <div className="fonib-after-dashboard">
      <div className="fonib-guide-card">
        <div className="fonib-guide-header">
          <div className="fonib-guide-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="fonib-guide-title">Guide Qualité Éditoriale — Équipe FONIB</h3>
            <p className="fonib-guide-subtitle">Bonnes pratiques pour la publication des actions et reportages</p>
          </div>
        </div>

        <div className="fonib-guide-items">
          <div className="fonib-guide-item">
            <div className="fonib-item-badge">1</div>
            <div>
              <strong>Photothèque & Visuels :</strong> Privilégiez des photos au format paysage <strong>1920×1080</strong> (haute résolution). Le processeur d'image Sharp génère automatiquement les déclinaisons carte et miniature.
            </div>
          </div>

          <div className="fonib-guide-item">
            <div className="fonib-item-badge">2</div>
            <div>
              <strong>Accessibilité & Balise Alt :</strong> Décrivez précisément chaque image téléversée (ex: <em>« Remise de kits scolaires aux enfants de Kinshasa »</em>). Cela optimise le référencement et l'accessibilité aux personnes malvoyantes.
            </div>
          </div>

          <div className="fonib-guide-item">
            <div className="fonib-item-badge">3</div>
            <div>
              <strong>Identifiants URLs (slugs) :</strong> Laissez le champ slug vide lors de la création d'un article ou projet : le système génère automatiquement une URL propre et sans accents à partir de votre titre.
            </div>
          </div>
        </div>
      </div>

      <div className="fonib-links-card">
        <h3 className="fonib-links-title">Tester le Site en Direct</h3>
        <p className="fonib-links-subtitle">Vérifiez le rendu public de vos publications</p>
        
        <div className="fonib-links-list">
          <a href="/" target="_blank" rel="noopener noreferrer" className="fonib-quick-link">
            <span>Page d'Accueil</span>
            <span className="fonib-link-arrow">&rarr;</span>
          </a>
          <a href="/projets" target="_blank" rel="noopener noreferrer" className="fonib-quick-link">
            <span>Nos Projets & Piliers</span>
            <span className="fonib-link-arrow">&rarr;</span>
          </a>
          <a href="/evenements" target="_blank" rel="noopener noreferrer" className="fonib-quick-link">
            <span>Événements & Agenda</span>
            <span className="fonib-link-arrow">&rarr;</span>
          </a>
          <a href="/actualites" target="_blank" rel="noopener noreferrer" className="fonib-quick-link">
            <span>Actualités & Communiqués</span>
            <span className="fonib-link-arrow">&rarr;</span>
          </a>
          <a href="/don" target="_blank" rel="noopener noreferrer" className="fonib-quick-link">
            <span>Faire un Don</span>
            <span className="fonib-link-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EditorialGuide

