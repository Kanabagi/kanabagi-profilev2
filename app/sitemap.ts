export default function sitemap() {
  return [
    {
      url: `${process.env.BASE_URL || 'https://kanabagi-group.vercel.app'}/`,
      lastModified: new Date(),
    },
  ];
}
