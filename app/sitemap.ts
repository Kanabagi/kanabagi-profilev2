import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/works`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
