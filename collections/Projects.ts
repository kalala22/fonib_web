import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Projet',
    plural: 'Projets',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
  },
  access: {
    read: () => true,
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

