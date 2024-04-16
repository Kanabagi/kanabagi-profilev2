'use client';

import AfterHesec from '@/components/Home/AfterHesec';
import FeaturedWorks from '@/components/Home/FeaturedWorks';
import HeroSection from '@/components/Home/HeroSection';
import ServicesHome from '@/components/Home/ServicesHome';
import TechStacks from '@/components/Home/TechStacks';

export default function Home() {

  return (
    <main className="relative" id="top-home">

      <HeroSection />
      <AfterHesec />
      <FeaturedWorks />
      <ServicesHome />
      <TechStacks />
      <section className="h-[100px]"></section>

    </main>
  );
}
