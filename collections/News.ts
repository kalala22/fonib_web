import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Actualité',
    plural: 'Actualités',
  },
  admin: {
    group: 'Communication',
    description: 'Articles, communiqués de presse et actualités',
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'updatedAt'],
    preview: (doc) => (doc?.slug ? `/actualites` : '/actualites'),
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
      label: 'Titre de l’actualité',
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
      name: 'publishedDate',
      type: 'date',
      label: 'Date de publication',
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image illustrative',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Extrait / Chapô (court résumé)',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Corps de l’article',
    },
  ],
}
