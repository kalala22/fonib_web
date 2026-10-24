import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Actualité',
    plural: 'Actualités',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'updatedAt'],
  },
  access: {
    read: () => true,
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

