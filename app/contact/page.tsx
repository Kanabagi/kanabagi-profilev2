'use client';

import HeroContact from '@/components/Contact/HeroContact';
import Map from '@/components/Contact/Map';
import ContactForm from '@/components/Contact/contact-form';
import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div id="target-section">
      {/* <Hero
        bgImg="bg-heroContact"
        image="/icons/chat.png"
        name="Contact"
        button="Contact Us"
        linkTo="#contact"
      >
        <h1 className='leading-tight'>
          Your Web <span className="text-[#00a2df]">Visionaries</span> Here
        </h1>
      </Hero> */}
      <HeroContact />

      <div className="flex my-[50px] md:my-[80px] wrapper flex-col md:flex-row justify-center items-center gap-8 md:h-[700px]">
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
        <div className="md:w-1/2 w-full border bg-slate-300 h-[480px] md:h-full z-10 rounded-[12px]">
          <Map />
        </div>
      </div>
    </div>
  );
}
