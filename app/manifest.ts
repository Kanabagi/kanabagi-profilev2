import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Web Development - Kanabagi',
    short_name: 'Kanabagi',
    description:
      'Hello! We are the right partner in realizing your business ideas into digital form. We provide company profile website development services and landing pages that you need with high quality production. We prioritize the quality of UI/UX in the product that we will create by using tech stacks such as ReactJS/NextJS, Typescript, and Tailwind CSS.',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
