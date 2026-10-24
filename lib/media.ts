import type { Media } from '@/payload-types'

/**
 * Helper sécurisé et universel (Client & Server) pour extraire l'URL d'un média Payload.
 */
export function getMediaUrl(
  media: Media | number | string | null | undefined,
  fallback = '/fonib-hero.webp',
  size?: 'thumbnail' | 'card' | 'hero',
): string {
  if (!media) return fallback
  if (typeof media === 'string') return media
  if (typeof media === 'object') {
    if (size && media.sizes && media.sizes[size]?.url) {
      return media.sizes[size]!.url!
    }
    if (media.url) {
      return media.url
    }
  }
  return fallback
}

