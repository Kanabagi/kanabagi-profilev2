import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Progressbar from '@/components/ProgressBar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Web Development - Kanabagi',
  description: 'Generated by create next app',
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
        {children}

        {/* <ChatUs /> */}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
