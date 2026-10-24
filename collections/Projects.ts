import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Projet',
    plural: 'Projets',
  },
  admin: {
    group: 'Actions & Impact',
    description: 'Gestion des projets et actions de terrain de la fondation',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
    preview: (doc) => (doc?.slug ? `/projets/${doc.slug}` : '/projets'),
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data) {
          if (!data.slug && data.title) {
            data.slug = data.title
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '')
          } else if (data.slug) {
            data.slug = data.slug
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '')
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du projet',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Identifiant URL (slug)',
      admin: {
        position: 'sidebar',
        description: 'Généré automatiquement depuis le titre si laissé vide',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Catégorie',
      options: [
        { label: 'Familles', value: 'Familles' },
        { label: 'Éducation', value: 'Éducation' },
        { label: 'Parité & Droits de la femme', value: 'Parité' },
        { label: 'Santé & Nutrition', value: 'Santé' },
        { label: 'Autre', value: 'Autre' },
      ],
      defaultValue: 'Familles',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image principale',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Description courte / Résumé',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu détaillé',
    },
  ],
}
