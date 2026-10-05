import type { MetadataRoute } from 'next'
import { brand } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.short,
    description: brand.motto,
    start_url: '/',
    display: 'standalone',
    background_color: '#12110f',
    theme_color: '#12110f',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
