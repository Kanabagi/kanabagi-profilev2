"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ourTeam } from '@/constants';
import Link from 'next/link';

const OurTeam = () => {
    return (
        <section className='w-full wrapper min-h-screen flex flex-col gap-10 max-md:items-center justify-center md:pt-20 pt-16'>
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
                    Our Team
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
                    Our expert team delivers custom websites that are visually stunning, user-friendly, and fully functional, combining creativity with technical expertise to bring your vision to life.
                </motion.p>

                <Image
                    src="/icons/code.png"
                    alt=''
                    width={30}
                    height={30}
                    className='absolute top-0 translate-x-[90px] md:translate-x-[120px] -translate-y-2' />
            </motion.div>

            <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 max-md:px-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1, y: 0,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: 'easeInOut'
                    }
                }} viewport={{ once: true }}>
                {ourTeam.map((team) => (
                    <Link href={team.link} key={team.name} className='w-full group relative md:hover:scale-105 md:hover:-translate-y-3 transition-all duration-300 ease-in-out' target='blank'>
                        <Image src={team.imgUrl} alt='member' width={450} height={450} className='md:block hidden' sizes='100vw' />
                        <Image src={team.imgUrlHover} alt='member' width={450} height={450} className='md:absolute md:top-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 ease-in-out' sizes='100vw' />
                    </Link>
                ))}
            </motion.div>
        </section>
    )
}

export default OurTeam
