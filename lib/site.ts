/**
 * Contenu centralisé du site FONIB.
 * Source : use/Textes Frontend Prêts à l'Intégration - FONIB.CD.pdf
 */

export const fonibLogo =
  '/logo-fonib.png'

export const brand = {
  name: 'Fondation Nicole Bwatshia',
  short: 'FONIB',
  motto: 'Connaître pour être, Être pour connaître',
  url: 'https://fonib.vercel.app',
}

/** 1. Navigation */
export const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Projets', href: '/projets' },
  { label: 'Évènements', href: '/evenements' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
] as const

export const socials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'X-twitter', href: 'https://x.com', icon: 'x' },
  { label: 'Youtube', href: 'https://youtube.com', icon: 'youtube' },
] as const

/** 2. Hero */
export const hero = {
  motto: brand.motto,
  text: "La Fondation Nicole Bwatshia agit pour un changement profond en République Démocratique du Congo en investissant dans le capital humain et les valeurs sociétales. À travers des actions concrètes dans l'éducation, le soutien aux orphelins, la santé et la lutte contre la malnutrition, FONIB rassemble acteurs locaux et bénévoles pour améliorer l'environnement communautaire. Son approche repose sur une vision altruiste et une philosophie innovante : \"Connaître pour être, être pour connaître\".",
  signature: { name: 'Mme Nicole BWATSHIA', title: 'Présidente de la Fondation' },
  portrait: '/presidente.webp',
}

export const partnersTitle = 'Ils nous ont fait confiance'
export const partners = [
  { name: 'Texaf', logo: '/icon-05-texaf-150x150.png' },
  { name: 'FBN', logo: '/icon-05-FBN-150x150.png' },
  { name: 'Ministère', logo: '/icon-Ministere-150x150.png' },
  { name: 'PRONANUT', logo: '/icon-PRONANUT-150x150.png' },
] as const

/** 4. Piliers */
export const pillars = [
  {
    title: 'Connaître pour être',
    text: 'Aider une famille est une initiative visant à apporter un soutien matériel et émotionnel aux familles dans le besoin.',
    image: '/fonib-family.webp',
  },
  {
    title: 'Être pour connaître',
    text: "Cette initiative favorise le bien-être des enfants en leur fournissant les ressources pour s'épanouir.",
    image: '/fonib-education.webp',
  },
]

/** 6. À propos */
export const about = {
  title: 'À propos',
  subtitle: 'Qui sommes-nous ?',
  text: "La Fondation Nicole BWATSHIA (FONIB) est une association sans but lucratif engagée dans l'action sociale et humanitaire en République Démocratique du Congo, axée sur le soutien aux communautés et aux personnes vulnérables. Sa mission plurisectorielle repose sur des piliers essentiels tels que la sensibilisation aux droits fondamentaux, l'amélioration de l'accès à l'éducation, et la promotion des droits de la femme, pour une société plus équitable et paritaire. FONIB adopte une approche centrée sur l'humain et le vivre-ensemble, visant à mieux comprendre et résoudre les défis socio-économiques et sanitaires.",
  blocks: [
    {
      key: 'vision',
      title: 'Vision',
      text: "La devise de la fondation étant : « connaître pour être, être pour connaître. », notre vision est de s'imprégner des problématiques sociales de notre pays pour y apporter des solutions idoines et durables. En somme, il s'agit de baliser l'amont de la rivière pour une eau plus claire en aval.",
    },
    {
      key: 'action',
      title: 'Action',
      text: "Déterminée à matérialiser sa vision et ses objectifs, la Fondation a, pour ce faire, conformément à son agenda d'action et suite aux différents besoins criants de la communauté, opéré diverses actions et accompagné plusieurs autres. Ce dans le but inexorable de pouvoir participer continuellement à la baisse de la pauvreté, tout en démontrant le bien-fondé du soutien commun et de l'amour du prochain.",
    },
    {
      key: 'collaboration',
      title: 'Collaboration',
      text: "La Fondation part du principe que tout comme chaque individu dans une société a besoin d'interaction pour s'épanouir, elle aussi s'entend se développer en entretenant des relations étroites avec d'autres associations afin de participer au nivellement vers le haut de la société congolaise.",
    },
  ],
} as const

/** 7. Projets, Évènements, Actualités (contenu de démonstration, à remplacer) */
export const projects = [
  { slug: 'aider-une-famille', title: 'Aider une famille', category: 'Familles', image: '/fonib-family.webp', text: pillars[0].text },
  { slug: 'bien-etre-enfants', title: "Bien-être de l'enfant", category: 'Éducation', image: '/fonib-education.webp', text: pillars[1].text },
  { slug: 'droits-de-la-femme', title: 'Droits de la femme', category: 'Parité', image: '/fonib-women.webp', text: 'Promotion des droits de la femme pour une société plus équitable et paritaire.' },
]

export const events = [
  { title: 'Journée de sensibilisation aux droits fondamentaux', date: 'À venir', place: 'Kinshasa', image: '/fonib-women.webp' },
  { title: 'Distribution de kits scolaires', date: 'À venir', place: 'Kinshasa', image: '/fonib-education.webp' },
  { title: 'Lutte contre la malnutrition avec PRONANUT', date: 'À venir', place: 'Kinshasa', image: '/fonib-family.webp' },
  { title: 'Rencontre communautaire FONIB', date: 'À venir', place: 'Kinshasa', image: '/fonib-hero.webp' },
]

export const news = [
  { title: 'FONIB aux côtés des orphelins', excerpt: 'Soutien aux orphelins et à leurs familles d’accueil.', image: '/fonib-hero.webp' },
  { title: 'Accès à l’éducation', excerpt: 'Des ressources pour que chaque enfant puisse s’épanouir.', image: '/fonib-education.webp' },
  { title: 'Santé communautaire', excerpt: 'Actions concrètes de santé et de nutrition.', image: '/fonib-family.webp' },
]

/** 8 & 9. Contact & footer */
export const contact = {
  title: 'Nous contacter',
  subtitle: 'Contacts',
  city: 'Kinshasa',
  phone: '+243 819 999 960',
  email: 'courrier_fonib@fonib.cd',
  hours: '08h 00 - 16h 00 Lundi - Vendredi',
}
