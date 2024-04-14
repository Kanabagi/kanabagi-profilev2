import { featuredWorksHome } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import CardHome from './CardHome'
import { Button } from '../ui/button'

const FeaturedWorks = () => {
  return (
    <section className='min-h-screen max-md:pt-10 flex flex-col justify-items-center'>
      <div className='wrapper flex flex-col justify-center items-center gap-4'>
        <div className='relative flex flex-col gap-2 items-center'>
          <h1 className='font-bold text-[24px] md:text-[32px] tracking-wide'>
            FEATURED WORKS
          </h1>
          <p className='text-[#6B7280] max-w-sm sm:max-w-lg md:max-w-2xl text-center max-md:text-[14px]'>
            Our diverse portfolio showcases our ability to deliver exceptional website solutions across various domains. Here are some highlights:
          </p>

          <Image
            src="/icons/code.png"
            alt=''
            width={30}
            height={30}
            className='absolute top-0 translate-x-[170px] -translate-y-3' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-2 place-items-center'>
          {featuredWorksHome.map((works) => (
            <CardHome works={works} />
          ))}
          <div className='hidden w-full md:flex justify-center items-center bg-gray-100 shadow-md h-full rounded-[12px] flex-col gap-2'>
            <span className='text-gray-400 text-[24px] font-medium'>You are the next</span>
            <Button asChild className='bg-transparent text-gray-400 border-2 rounded-full h-[54px]' size="lg">
              <Link href="/contact">Connect with us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks