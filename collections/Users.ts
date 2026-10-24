import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
  },
  admin: {
    group: 'Paramètres',
    description: 'Gestion des comptes administrateurs et accès',
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'createdAt'],
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom complet',
    },
  ],
}

