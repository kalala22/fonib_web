import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Événement',
    plural: 'Événements',
  },
  admin: {
    group: 'Actions & Impact',
    description: 'Campagnes, journées de sensibilisation et rendez-vous',
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'place', 'updatedAt'],
    preview: (doc) => (doc?.slug ? `/evenements` : '/evenements'),
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
      label: 'Titre de l’événement',
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
      name: 'date',
      type: 'text',
      required: true,
      label: 'Date affichée (ex: "À venir" ou "12 Décembre 2026")',
    },
    {
      name: 'eventDate',
      type: 'date',
      label: 'Date calendaire (pour le tri)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'place',
      type: 'text',
      required: true,
      defaultValue: 'Kinshasa',
      label: 'Lieu',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image illustrative',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Détails de l’événement',
    },
  ],
}
