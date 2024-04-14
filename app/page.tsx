"use client"

import AfterHesec from "@/components/Home/AfterHesec";
import FeaturedWorks from "@/components/Home/FeaturedWorks";
import HeroSection from "@/components/Home/HeroSection";


export default function Home() {

  return (
    <main className="">
        <HeroSection />
        <AfterHesec />
        <FeaturedWorks />
        <section className="h-[999px]">

        </section>
    </main>
  );
}
