import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cadastroBlog/'],
    },
    sitemap: 'https://parqueolhodagua.com.br/sitemap.xml',
  }
}
