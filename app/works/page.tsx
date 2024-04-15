import HeroServices from '@/components/Services/HeroServices'
import React from 'react'

const page = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center' id='target-section'>
      <HeroServices
        bgUrl='bg-heroWorks'
        pageName='Works'
        title='Transforming Ideas into Websites'
        blueWord='ideas'
        buttonName='Our recent works'
        buttonSize='px-10'
        linkTo=''
        chatPosition='md:-translate-y-5 md:translate-x-3 -translate-y-6 translate-x-6'
        subTitle='Transforming Ideas into Experiences
        Innovative Web Solutions, Beautifully Designed'
        subDesc='Discover digital transformation through our innovative web solutions and beautifully crafted UI/UX interfaces, seamlessly merging technology and design to create captivating online experiences.'
        quotePosition='translate-x-[300px]' />
    </section>
  )
}

export default page