'use client';

import Map from '@/components/Map';
import ContactForm from '@/components/contact-form';
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
        <span>Your Web</span>
        <span className="text-[#00A2DF]">
          &nbsp;Visionaries&nbsp;
          <br />
        </span>
        <span>Here</span>
      </Hero>
      <div className="flex my-[125px] wrapper justify-center items-center gap-8 h-[700px]">
        <div className="w-1/2">
          <ContactForm />
        </div>
        <div className="w-1/2 border bg-slate-300 h-full z-10">
          <Map />
        </div>
      </div>
    </div>
  );
}
