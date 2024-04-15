import AboutCard from '@/components/About/card';
import WhoAreWe from '@/components/About/who-are-we';
import Hero from '@/components/hero';
import SectionHeader from '@/components/section-header';
import Tagline from '@/components/tagline';

export default function AboutPage() {
  return (
    <>
      <div id="target-section">
        <Hero
          bgImg="bg-heroAbout"
          image="/icons/chat.png"
          name="About Us"
          button="Interact With Us"
          linkTo="#about"
        >
          <span>Pioneering Web Development</span>
          <span className="text-[#00A2DF]">&nbsp;Solutions</span>
        </Hero>
        <Tagline />
        <WhoAreWe />
        <SectionHeader
          name="Our Expertise"
          desc="Discover our expertise, which is where your goals start."
          position="top-3 translate-x-[200px]"
        />
        <AboutCard />
      </div>
    </>
  );
}
