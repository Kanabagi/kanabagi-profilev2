import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Progressbar from '@/components/ProgressBar';
import ScrollTop from '@/components/ScrollTop';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './about/loading';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  verification: { google: 'b0J4NqD2m6Y_-S1QAAOFGeQ_vZ2IEQl3PUt9tDfUUK8' },
  applicationName: 'Web Development - Kanabagi',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Web Development - Kanabagi',
    statusBarStyle: 'default',
  },
  creator: 'Kanabagi',
  title: {
    default: 'Web Development - Kanabagi',
    template: '%s - Kanabagi',
  },
  description:
    'Hello! We are the right partner in realizing your business ideas into digital form. We provide company profile website development services and landing pages that you need with high quality production. We prioritize the quality of UI/UX in the product that we will create by using tech stacks such as ReactJS/NextJS, Typescript, and Tailwind CSS.',
  openGraph: {
    title: 'Web Development - Kanabagi',
    images: '/opengraph-image.png',
    description:
      'Hello! We are the right partner in realizing your business ideas into digital form. We provide company profile website development services and landing pages that you need with high quality production. We prioritize the quality of UI/UX in the product that we will create by using tech stacks such as ReactJS/NextJS, Typescript, and Tailwind CSS.',
    type: 'website',
    siteName: 'Kanabagi',
    url: `${process.env.BASE_URL}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#2E3192',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.variable}`}>
        <Navbar />
        <Progressbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* <ChatUs /> */}
        <ScrollTop />
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
