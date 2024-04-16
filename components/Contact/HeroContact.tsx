"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion';

const HeroContact = () => {
    return (
        <div className='relative w-full h-[450px] bg-heroContact bg-cover bg-center flex items-center justify-center'>
            <div className='w-full h-full bg-[#2e3192] opacity-60 absolute' />
            <div className='w-full h-[30px] bg-gray-50 opacity-50 absolute bottom-0' />

            <div className='wrapper w-full flex flex-col justify-center items-center gap-4 z-10 mt-10'>
                <div className='relative flex flex-col items-center'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 1,
                                duration: 0.5,
                                ease: 'easeInOut'
                            }
                        }} viewport={{ once: true }}
                        className="flex gap-4 items-center absolute left-0 md:-translate-y-5 -translate-y-6 md:translate-x-6 sm:translate-x-0 translate-x-4">
                        <Image src="/icons/chat.png" alt='' width={30} height={30} />
                        <span className='text-gray-300 text-[18px] md:text-[20px] font-medium'>
                            Contact
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{
                            opacity: 1, scale: 1,
                            transition: {
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut'
                            }
                        }} viewport={{ once: true }}
                        className='text-gray-50 text-[28px] sm:text-[32px] md:text-[48px] font-semibold max-w-md md:max-w-xl text-center'>
                        Your Web <span className='text-[#00a2df]'>Visionaries</span> Here
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{
                        opacity: 1, scale: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5,
                            ease: 'linear'
                        }
                    }} viewport={{ once: true }}>
                    <Button className="relative z-10 group bg-transparent px-10 h-[54px] border-2 border-[#00a2df] rounded-full hover:bg-[#00a2df]" size="lg">
                        <Link href="#contact" className='group-hover:-translate-x-4 transition-all duration-500'>
                            Contact us
                        </Link>
                        <FaArrowRight className='absolute right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500' />
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroContact