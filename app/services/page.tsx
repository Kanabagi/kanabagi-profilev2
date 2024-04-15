import HeroServices from '@/components/Services/HeroServices'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center' id='target-section'>
      <HeroServices
        bgUrl='bg-heroService'
        pageName='Services'
        title='Crafting Your Digital Identity'
        blueWord='identity'
        buttonName='Our Services'
        buttonSize='px-10'
        linkTo='' 
        chatPosition='-translate-y-7 md:translate-x-2 translate-x-7'
        subTitle='Crafting Digital Destinies Web Development and UI/UX Design, Tailored to You'
        subDesc='We customize web development and UI/UX design to fit your needs perfectly, ensuring your online presence stands out and resonates with your audience.'
        quotePosition='translate-x-[320px]'/>
    </section>
  )
}

export default page