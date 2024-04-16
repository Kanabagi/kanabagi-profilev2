"use client"

import Link from 'next/link'
import React from 'react'
import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import { useScrollTop } from '@/hooks/scroll-top';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollTop = () => {
    const scrolled = useScrollTop();

    return (

        <motion.div
            initial={{ opacity: 0, y: 110 }}
            whileInView={{
                opacity: 1, y: 50,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            }} viewport={{ once: true }}
            className={`fixed ${scrolled ? "bottom-16" : "bottom-0 translate-y-12"}  md:right-[50px] right-4  z-20 flex flex-col gap-4 items-center transition-all duration-500`}>
            <Link href="https://wa.link/hhvxf2" target='blank'>
                <div className='p-2 bg-gray-50 rounded-[12px] shadow-md'>
                    <Image src="/icons/wa1.png" alt='' width={30} height={30} className='md:w-[30px] md:h-[30px] h-[25px] w-[25px]' />
                </div>
            </Link>

            <Link href="#top-home">
                <AiOutlineVerticalAlignTop
                    className="transition-all duration-500 rounded-full p-2 w-10 h-10 md:w-12 md:h-12 bg-[#00a2df] text-white z-10 shadow-md"
                />
            </Link>
        </motion.div>
    )
}

export default ScrollTop