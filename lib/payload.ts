import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Event, News, Project } from '@/payload-types'
export { getMediaUrl } from '@/lib/media'

// Protection contre l'erreur interne de promesse orpheline dans @payloadcms/db-postgres lorsque la DB est injoignable
if (typeof process !== 'undefined' && typeof process.on === 'function') {
  process.on('unhandledRejection', (reason) => {
    if (reason === undefined) {
      // Ignorer l'unhandled rejection sans raison émise par l'adapter Postgres
      return
    }
  })
}

/**
 * Récupère l'instance singleton de Payload Local API (Payload gère son propre cache interne).
 */
export async function getPayloadClient() {
  try {
    return await getPayload({ config })
  } catch (error) {
    console.warn('[Payload Client] Impossible d’initialiser Payload ou la base de données:', error)
    return null
  }
}

/**
 * Helper pour formater une date ISO au format francophone (ex: "12 octobre 2026").
 */
export function formatDate(dateString?: string | null, fallback = ''): string {
  if (!dateString) return fallback
  try {
    const d = new Date(dateString)
    if (isNaN(d.getTime())) return fallback || dateString
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d)
  } catch {
    return fallback || dateString
  }
}

/* =========================================================================
   COLLECTION : NEWS (Actualités)
   ========================================================================= */

export const getNewsList = cache(async (limit = 100): Promise<News[]> => {
  try {
    const payload = await getPayloadClient()
    if (!payload) return []

    const res = await payload.find({
      collection: 'news',
      sort: '-publishedDate',
      limit,
      depth: 1,
    })

    return (res.docs || []) as News[]
  } catch (error) {
    console.warn('[getNewsList] Erreur lors de la récupération des actualités:', error)
    return []
  }
})

export const getNewsBySlug = cache(async (rawSlug: string): Promise<News | null> => {
  try {
    if (!rawSlug) return null
    const payload = await getPayloadClient()
    if (!payload) return null

    const slug = decodeURIComponent(rawSlug).trim()
    const isId = !isNaN(Number(slug))

    // 1. Recherche directe par slug
    let res = await payload.find({
      collection: 'news',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 1,
    })

    // 2. Recherche en minuscules si casse différente
    if (!res.docs?.[0] && slug !== slug.toLowerCase()) {
      res = await payload.find({
        collection: 'news',
        where: {
          slug: {
            equals: slug.toLowerCase(),
          },
        },
        limit: 1,
        depth: 1,
      })
    }

    // 3. Recherche par ID numérique si applicable
    if (!res.docs?.[0] && isId) {
      try {
        const docById = await payload.findByID({
          collection: 'news',
          id: Number(slug),
          depth: 1,
        })
        if (docById) return docById as News
      } catch {
        // ID introuvable
      }
    }

    return (res.docs?.[0] as News) || null
  } catch (error) {
    console.warn(`[getNewsBySlug] Erreur lors de la récupération de l'actualité "${rawSlug}":`, error)
    return null
  }
})

/* =========================================================================
   COLLECTION : PROJECTS (Projets)
   ========================================================================= */

export const getProjectsList = cache(async (limit = 100): Promise<Project[]> => {
  try {
    const payload = await getPayloadClient()
    if (!payload) return []

    const res = await payload.find({
      collection: 'projects',
      sort: '-createdAt',
      limit,
      depth: 1,
    })

    return (res.docs || []) as Project[]
  } catch (error) {
    console.warn('[getProjectsList] Erreur lors de la récupération des projets:', error)
    return []
  }
})

export const getProjectBySlug = cache(async (rawSlug: string): Promise<Project | null> => {
  try {
    if (!rawSlug) return null
    const payload = await getPayloadClient()
    if (!payload) return null

    const slug = decodeURIComponent(rawSlug).trim()
    const isId = !isNaN(Number(slug))

    let res = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 1,
    })

    if (!res.docs?.[0] && slug !== slug.toLowerCase()) {
      res = await payload.find({
        collection: 'projects',
        where: {
          slug: {
            equals: slug.toLowerCase(),
          },
        },
        limit: 1,
        depth: 1,
      })
    }

    if (!res.docs?.[0] && isId) {
      try {
        const docById = await payload.findByID({
          collection: 'projects',
          id: Number(slug),
          depth: 1,
        })
        if (docById) return docById as Project
      } catch {
        // ID introuvable
      }
    }

    return (res.docs?.[0] as Project) || null
  } catch (error) {
    console.warn(`[getProjectBySlug] Erreur lors de la récupération du projet "${rawSlug}":`, error)
    return null
  }
})

/* =========================================================================
   COLLECTION : EVENTS (Événements)
   ========================================================================= */

export const getEventsList = cache(async (limit = 100): Promise<Event[]> => {
  try {
    const payload = await getPayloadClient()
    if (!payload) return []

    const res = await payload.find({
      collection: 'events',
      sort: '-eventDate',
      limit,
      depth: 1,
    })

    return (res.docs || []) as Event[]
  } catch (error) {
    console.warn('[getEventsList] Erreur lors de la récupération des événements:', error)
    return []
  }
})

export const getEventBySlug = cache(async (rawSlug: string): Promise<Event | null> => {
  try {
    if (!rawSlug) return null
    const payload = await getPayloadClient()
    if (!payload) return null

    const slug = decodeURIComponent(rawSlug).trim()
    const isId = !isNaN(Number(slug))

    let res = await payload.find({
      collection: 'events',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 1,
    })

    if (!res.docs?.[0] && slug !== slug.toLowerCase()) {
      res = await payload.find({
        collection: 'events',
        where: {
          slug: {
            equals: slug.toLowerCase(),
          },
        },
        limit: 1,
        depth: 1,
      })
    }

    if (!res.docs?.[0] && isId) {
      try {
        const docById = await payload.findByID({
          collection: 'events',
          id: Number(slug),
          depth: 1,
        })
        if (docById) return docById as Event
      } catch {
        // ID introuvable
      }
    }

    return (res.docs?.[0] as Event) || null
  } catch (error) {
    console.warn(`[getEventBySlug] Erreur lors de la récupération de l'événement "${rawSlug}":`, error)
    return null
  }
})