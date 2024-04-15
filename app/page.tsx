'use client';

import AfterHesec from '@/components/Home/AfterHesec';
import FeaturedWorks from '@/components/Home/FeaturedWorks';
import HeroSection from '@/components/Home/HeroSection';
import ServicesHome from '@/components/Home/ServicesHome';
import TechStacks from '@/components/Home/TechStacks';
import { useScrollTop } from '@/hooks/scroll-top';
import Link from 'next/link';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';

export default function Home() {
  const scrolled = useScrollTop();

  return (
    <main className="relative" id="top-home">
      <HeroSection />
      <AfterHesec />
      <FeaturedWorks />
      <ServicesHome />
      <TechStacks />
      <section className="h-[100px]"></section>

      <Link href="#top-home">
        <AiOutlineVerticalAlignTop
          className={`${
            scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } 
          transition-all duration-500 fixed rounded-full p-2 w-10 h-10 md:w-12 md:h-12 bg-[#00a2df] top-[670px] right-6 md:right-10 text-white z-10 shadow-md`}
        />
      </Link>
    </main>
  );
}
