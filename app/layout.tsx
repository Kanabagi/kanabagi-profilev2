import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Progressbar from '@/components/ProgressBar';
import ScrollTop from '@/components/ScrollTop';
import type { Metadata } from 'next';
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
  keywords: [
    'kanabagi',
    'kanabagi group',
    'kanabagigroup',
    'kanabagi profile',
    'kanabagi profile website',
    'kanabagi web development',
    'web development tasikmalaya',
    'pembuatan website tasikmalaya',
  ],
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
