import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/services', 'works', '/about', '/contact'],
      disallow: '/private/',
    },
    sitemap: `${
      process.env.BASE_URL || 'https://kanabagi-group.vercel.app'
    }/sitemap.xml`,
  };
}
