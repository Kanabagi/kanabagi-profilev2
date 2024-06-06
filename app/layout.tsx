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
  metadataBase: new URL('https://kanabagi-group.vercel.app/'),
  keywords: [
    'kanabagi',
    'kanabagi group',
    'kanabagi profile',
    'kanabagi web development',
  ],
  title: {
    default: 'Web Development - Kanabagi',
    template: '%s - Kanabagi',
  },
  description:
    'Hello! We are the right partner in realizing your business ideas into digital form. We provide company profile website development services and landing pages that you need with high quality production. We prioritize the quality of UI/UX in the product that we will create by using tech stacks such as ReactJS/NextJS, Typescript, and Tailwind CSS.',
  openGraph: {
    images: '/opengraph-image.png',
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
