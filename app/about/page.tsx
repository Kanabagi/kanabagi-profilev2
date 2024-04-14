import Hero from '@/components/hero';
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
      </div>
    </>
  );
}
