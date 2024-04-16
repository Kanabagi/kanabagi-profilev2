"use client"

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

interface workProps {
    name: string;
    imgUrl: string;
    link: string;
}

const Website = ({ works }: { works: workProps }) => {
    return (
        <div className='group flex items-center justify-center'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 0.,
                        duration: 0.5,
                        ease: 'easeInOut'
                    }
                }} viewport={{ once: true }}
                className='relative flex flex-col rounded-[12px] group-hover:shadow-md group-hover:bg-gray-100 transtiion duration-200 overflow-hidden'>
                <div className='relative overflow-hidden flex items-center justify-center w-full'>
                    <Image src={works.imgUrl} alt='' width={800} height={800} className='rounded-[12px]' />
                    <Link
                        href={works.link}
                        target='blank'
                        className='w-full h-full bg-gray-700 absolute opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-[12px]' />
                    <Link href={works.link} className='absolute z-20 md:text-[48px] text-[32px] max-md:border-t-2 max-md:border-b-2 font-semibold text-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-700 tracking-wider scale-90 group-hover:scale-100 select-none'>
                        Visit
                    </Link>

                    <div className='absolute w-full h-[5px] translate-x-[350px] group-hover:translate-x-[200px] top-0 bg-gray-50 rotate-45 group-hover:opacity-100 transition-all duration-700 lg:group-hover:translate-y-10 md:group-hover:translate-y-20 group-hover:translate-y-10 max-md:hidden' />
                    <div className='absolute w-full group-hover:h-[5px] opacity-0 bg-gray-50 -rotate-45 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-60 lg:group-hover:translate-y-40 md:group-hover:translate-x-44 md:group-hover:translate-y-16 group-hover:translate-y-28 max-md:hidden' />
                    <div className='absolute w-full group-hover:h-[5px] opacity-0 bg-gray-50 -rotate-45 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-x-60 lg:group-hover:-translate-y-24 md:group-hover:translate-y-5 group-hover:-translate-y-20 max-md:hidden' />
                </div>

                <div className='flex flex-col p-4 py-6 z-10'>
                    <div className='flex flex-col'>
                        <span className='text-gray-400 max-md:text-[16px]'>Website</span>
                        <h1 className='lg:text-[24px] md:text-[20px] text-[18px] font-medium'>{works.name}</h1>
                    </div>
                    <p className='md:text-[16px] text-[14px] text-gray-500 max-w-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla corporis
                        placeat illum quas iure, repellat tempore eum fugit enim.
                    </p>
                    <div className='mt-10'>
                        <span className='text-gray-300 font-mdium'>Kanabagi グループ</span>
                    </div>
                </div>

                <Image src="/icons/settings.png" alt='' width={200} height={200} className='absolute bottom-0 right-0 opacity-20 translate-x-10 translate-y-20' />
            </motion.div>
        </div>
    )
}

export default Website