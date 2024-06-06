import HeroContact from '@/components/Contact/HeroContact';
import Map from '@/components/Contact/Map';
import ContactForm from '@/components/Contact/contact-form';
import { MotionDiv } from '@/framer';

export const metadata = {
  title: 'Contact',
  description: 'Your Web Visionaries Here',
  openGraph: {
    images: '/contact/opengraph-image.png',
  },
};

export default function ContactPage() {
  return (
    <div id="target-section">
      <HeroContact />
      <div className="flex my-[50px] md:my-[80px] wrapper flex-col md:flex-row justify-center items-center gap-8 md:h-[700px]">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: 'linear',
            },
          }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <ContactForm />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: 'linear',
            },
          }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full border bg-slate-300 h-[350px] md:h-full z-10 rounded-[12px]"
        >
          <Map />
        </MotionDiv>
      </div>
    </div>
  );
}
