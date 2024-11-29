"use client"

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion';

const Services = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const img1 = useTransform(scrollYProgress, [0, 1], ['10%', '-30%'])
    const img2 = useTransform(scrollYProgress, [0, 1], ['-30%', '10%'])
    return (
        <div className='w-full md:flex flex-col items-center hidden gap-4' ref={ref}>
            <div className='flex w-full'>
                <motion.div style={{ y: img1 }} className={`flex-1 h-[250px] relative`}>
                    <Image src="/images/bg-services3.jpg" alt='' width={400} height={400} className='absolute object-cover w-full h-full' />
                </motion.div>
                <div className='flex-1 flex'>
                    <div className='px-10 flex flex-col gap-2'>
                        <motion.div
                            className='flex items-center gap-4'>
                            <Image src="/icons/quote.png" alt='' width={30} height={30} loading='lazy' />
                            <h1 className='text-[20px] font-semibold'>
                                Web Development
                            </h1>
                        </motion.div>
                        <motion.p
                            className='max-w-lg leading-relaxed max-md:text-[16px] text-gray-500'>
                            We provide custom website design and development, whenever you need a personal website, corporate website, product catalog or online store we here to help.
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className='flex w-full'>
                <div className='flex-1 flex justify-end'>
                    <div className='px-10 flex flex-col gap-2'>
                        <motion.div
                            className='flex items-center gap-4 justify-end'>
                            <h1
                                className='md:text-[20px] font-semibold'>
                                UI/UX Development
                            </h1>
                            <Image src="/icons/quote.png" alt='' width={30} height={30} loading='lazy' />
                        </motion.div>
                        <motion.p
                            className='max-w-lg text-end max-md:text-[16px] text-gray-500 leading-relaxed'>
                            Crafting exceptional digital experiences. Our UI/UX developers meticulously blend aesthetics with functionality to create captivating interfaces that resonate with users.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    style={{ y: img2 }}
                    className='flex-1 h-[250px] relative'>
                    <Image src="/images/bg-services2.jpg" alt='' width={400} height={400} className='absolute object-cover w-full h-full' />
                </motion.div>
            </div>
        </div>
    )
}

export default Services
