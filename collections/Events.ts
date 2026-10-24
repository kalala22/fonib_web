import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Événement',
    plural: 'Événements',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'place', 'updatedAt'],
  },
  access: {
    read: () => true,
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

