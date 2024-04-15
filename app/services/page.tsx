import CarouselTechStacks from '@/components/Home/CarouselTechStacks'
import SectionHeader from '@/components/section-header'
import HeroServices from '@/components/Services/HeroServices'
import Services from '@/components/Services/Services'
import ServicesCard from '@/components/Services/ServicesCard'
import SimpleContact from '@/components/Services/SimpleContact'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='min-h-screen flex flex-col items-center justify-center' id='target-section'>
        <HeroServices
          bgUrl='bg-heroService'
          pageName='Services'
          title='Crafting Your Digital Identity'
          blueWord='identity'
          buttonName='Our Services'
          buttonSize='px-10'
          linkTo='#ourservices'
          chatPosition='-translate-y-7 md:translate-x-2 translate-x-7'
          subTitle='Crafting Digital Destinies Web Development and UI/UX Design, Tailored to You'
          subDesc='We customize web development and UI/UX design to fit your needs perfectly, ensuring your online presence stands out and resonates with your audience.'
          quotePosition='translate-x-[300px]' />
      </section>

      <section className='min-h-screen flex flex-col justify-center items-center scroll-mt-10 gap-6 pt-10 max-md:pb-10' id='ourservices'>
        <SectionHeader
          name="Our Services"
          desc="We specialize in crafting exceptional digital experiences through our comprehensive web development and UI/UX design services."
          position="top-3 translate-x-[100px] md:translate-x-[130px]"
        />

        <Services />
        <div className='wrapper'>
          <ServicesCard style='md:hidden block' cardStyle='shadow-lg' />
        </div>
      </section>

      <section className='min-h-screen flex flex-col justify-center items-center gap-10'>
        <SimpleContact />

        <div className='wrapper flex flex-col gap-4'>
          <div className='relative flex flex-col gap-2 items-center'>
            <h1 className='font-bold text-[24px] md:text-[32px] tracking-wide'>
              Tech Stacks
            </h1>
            <p className='text-gray-500 max-w-md sm:max-w-xl md:max-w-4xl text-center max-md:text-[16px]'>
              From coding languages to website, these resources drive our innovation and efficiency, ensuring we deliver top-quality solutions for our clients while keeping pace with industry advancements.
            </p>
            <Image
              src="/icons/code.png"
              alt=''
              width={30}
              height={30}
              className='absolute top-0 translate-x-[110px] md:translate-x-[140px] -translate-y-3' />
          </div>

          <CarouselTechStacks />
        </div>

      </section>

      <section className='h-[100px]'>

      </section>
    </>
  )
}

export default page