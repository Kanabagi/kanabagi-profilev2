import { featuredWorksHome } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CardHome from './CardHome'
import { Button } from '../ui/button'
import { motion } from 'framer-motion';

const FeaturedWorks = () => {
  return (
    <section className='min-h-screen md:pt-20 flex flex-col justify-items-center'>
      <div className='wrapper flex flex-col justify-center items-center md:gap-10 gap-6'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.5,
              ease: 'linear'
            }
          }} viewport={{ once: true }}
          className='relative flex flex-col gap-2 items-center'>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1, x: 0,
              transition: {
                delay: 0.4,
                duration: 0.5,
                ease: 'linear'
              }
            }} viewport={{ once: true }}
            className='font-bold text-[24px] md:text-[32px] tracking-wide capitalize'>
            Featured Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1, x: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'linear'
              }
            }} viewport={{ once: true }}
            className='text-[#6B7280] max-w-sm sm:max-w-lg md:max-w-2xl text-center max-md:text-[16px]'>
            Our diverse portfolio showcases our ability to deliver exceptional website solutions across various domains. Here are some highlights:
          </motion.p>

          <Image
            src="/icons/code.png"
            alt=''
            width={30}
            height={30}
            className='absolute top-0 translate-x-[130px] md:translate-x-[170px] -translate-y-3' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1, y: 0,
            transition: {
              delay: 0.7,
              duration: 0.5,
              ease: 'linear'
            }
          }} viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-2 place-items-center'>
          {featuredWorksHome.map((works) => (
            <CardHome works={works} key={works.name} />
          ))}
          <div className='hidden w-full md:flex justify-center items-center bg-gray-100 shadow-md h-full rounded-[12px] flex-col gap-2'>
            <span className='text-gray-400 text-[24px] font-medium'>You are the next</span>
            <Button asChild className='bg-transparent text-gray-400 border-2 rounded-full h-[54px]' size="lg">
              <Link href="/contact">Connect with us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWorks
