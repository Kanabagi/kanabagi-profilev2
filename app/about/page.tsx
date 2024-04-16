import AboutCard from '@/components/About/card';
import WhoAreWe from '@/components/About/who-are-we';
import SectionHeader from '@/components/section-header';
import HeroServices from '@/components/Services/HeroServices';
import SimpleContact from '@/components/Services/SimpleContact';

export default function AboutPage() {

  return (
    <>
      <section className='min-h-screen flex flex-col items-center justify-center' id='target-section'>
        <HeroServices
          bgUrl='bg-heroWorks'
          pageName='About us'
          title='Pioneering Web Development Solutions'
          titleStyle='md:!max-w-xl'
          blueWord='solutions'
          buttonName='Interact with us'
          buttonSize='px-10'
          linkTo='#about'
          chatPosition='md:-translate-y-5 md:translate-x-24 -translate-y-6 translate-x-12'
          subTitle='Your Dream, Our Digital Canvas Painting Your Vision with Innovative Web Solutions.'
          subDesc='Embrace the art of digital innovation with us. We transform your ideas into dynamic web realities, ensuring your vision shines online."          '
          quotePosition='translate-x-[310px]' />
      </section>
      <WhoAreWe />

      <SimpleContact />

      <SectionHeader
        name="Our Expertise"
        desc="Discover our expertise, which is where your goals start."
        position="top-3 translate-x-[100px] md:translate-x-[130px] lg:translate-x-[150px]"
        style='mt-20'
      />
      <AboutCard />
    </>
  );
}
