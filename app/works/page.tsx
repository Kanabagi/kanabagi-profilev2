import SectionHeader from '@/components/section-header'
import HeroServices from '@/components/Services/HeroServices'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Website from '@/components/Works/Website'
import { featuredWorksDetail } from '@/constants'


const page = () => {
  return (
    <>
      <section className='min-h-screen flex flex-col items-center justify-center' id='target-section'>
        <HeroServices
          bgUrl='bg-heroWorks'
          pageName='Works'
          title='Transforming Ideas into Websites'
          blueWord='ideas'
          buttonName='Our recent works'
          buttonSize='px-10'
          linkTo='#ourworks'
          chatPosition='md:-translate-y-5 md:translate-x-3 -translate-y-6 translate-x-6'
          subTitle='Transforming Ideas into Experiences
        Innovative Web Solutions, Beautifully Designed'
          subDesc='Discover digital transformation through our innovative web solutions and beautifully crafted UI/UX interfaces, seamlessly merging technology and design to create captivating online experiences.'
          quotePosition='translate-x-[320px]' />
      </section>
      <section className='wrapper min-h-screen flex items-center flex-col' id='ourworks'>
        <SectionHeader
          name='Our Recent Works'
          desc="It is an honor for us to showcase the latest additions to our portfolio, highlighting our team's dedication and expertise in delivering exceptional digital solutions."
          position="top-3 translate-x-[130px] md:translate-x-[180px]" />

        <div className='w-full flex items-center justify-center'>
          <Tabs defaultValue="all" className="flex-col flex items-center gap-10 md:gap-4">
            <TabsList className=''>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 lg:gap-4 place-items-center'>
              {featuredWorksDetail.map((works) => (
                <Website key={works.name} works={works} />
              ))}
            </TabsContent>
            <TabsContent value="website" className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4 place-items-center'>
              {featuredWorksDetail.map((works) => (
                <Website key={works.name} works={works} />
              ))}
            </TabsContent>
            <TabsContent value="uiux">
              Kontol ageng
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default page