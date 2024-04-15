'use client';

import Map from '@/components/Contact/Map';
import ContactForm from '@/components/Contact/contact-form';
import Hero from '@/components/hero';

export default function ContactPage() {
  return (
    <div id="target-section">
      <Hero
        bgImg="bg-heroContact"
        image="/icons/chat.png"
        name="Contact"
        button="Contact Us"
        linkTo="#contact"
      >
        Your Web <span className="text-[#00a2df]">Visionaries</span> Here
      </Hero>
      <div className="flex my-[125px] wrapper flex-col md:flex-row justify-center items-center gap-8 md:h-[700px]">
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
        <div className="md:w-1/2 w-full border bg-slate-300 h-[480px] md:h-full z-10">
          <Map />
        </div>
      </div>
    </div>
  );
}
