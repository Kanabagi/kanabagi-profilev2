"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';

const SimpleContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.5,
          ease: "easeInOut"
        }
      }} viewport={{ once: true }}
      className='relative w-full flex items-center justify-center md:h-[200px] h-[300px] bg-[#2e3192] overflow-hidden'>
      <div className='wrapper flex max-md:flex-col md:justify-between md:gap-4 gap-6 md:items-center z-10'>
        <div className='flex flex-col gap-2'>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'linear'
              }
            }} viewport={{ once: true }}
            className='font-medium text-[20px] text-gray-50'>Ready to Elevate Your Online Presence?</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'linear'
              }
            }} viewport={{ once: true }}
            className='lg:max-w-2xl max-w-xl text-gray-300 max-md:text-[14px]'>Let's transform your digital landscape. Our complimentary consultation service awaits. Drop us a line and let's craft your next success story together!</motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.5,
              ease: 'linear'
            }
          }} viewport={{ once: true }}>
          <Link href="/contact">
            <Button className='h-[54px] bg-gray-50 rounded-full text-gray-700 px-10 hover:bg-[#00a2df] hover:text-gray-50 max-md:w-full'>
              Connect with us
            </Button>
          </Link>
        </motion.div>
      </div>

      <Image src="/icons/binary.png" alt='' width={200} height={200} className='absolute md:left-0 opacity-20 md:-translate-y-24 md:translate-x-20 right-0 top-0 max-md:-translate-y-24' />
    </motion.div>
  )
}

export default SimpleContact