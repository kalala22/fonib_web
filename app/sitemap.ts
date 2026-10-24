import type { MetadataRoute } from 'next'
import { brand } from '@/lib/site'
import { getEventsList, getNewsList, getProjectsList } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = brand.url
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/evenements`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/don`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  const [news, projects, events] = await Promise.all([
    getNewsList(100),
    getProjectsList(100),
    getEventsList(100),
  ])

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${baseUrl}/actualites/${item.slug}`,
    lastModified: new Date(item.updatedAt || item.publishedDate || lastModified),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((item) => ({
    url: `${baseUrl}/projets/${item.slug}`,
    lastModified: new Date(item.updatedAt || lastModified),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const eventRoutes: MetadataRoute.Sitemap = events.map((item) => ({
    url: `${baseUrl}/evenements/${item.slug}`,
    lastModified: new Date(item.updatedAt || lastModified),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...newsRoutes, ...projectRoutes, ...eventRoutes]
}
