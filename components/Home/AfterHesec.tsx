import Image from 'next/image'
import React from 'react'
import Tatamlainan from './Tatamlainan'
import { motion } from 'framer-motion';


const AfterHesec = () => {
    return (
        <>
            <section className='lg:min-h-screen flex flex-col md:h-[650px]'>
                <div className='bg-gray-50 h-[250px] flex justify-center items-center relative overflow-hidden'>
                    <div className='wrapper flex justify-center items-center max-md:flex-col'>
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{
                                opacity: 1, y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: 'easeInOut'
                                }
                            }} viewport={{ once: true }}
                            className='z-10 max-w-xl text-center text-[20px] sm:text-[24px] font-medium'>
                            We offer optimization of your business idea
                            Where the idea becomes a digital form.
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }
                            }} viewport={{ once: true }}
                            className='absolute top-[45px] translate-x-[300px] hidden md:block'
                        >
                            <Image src="/icons/quote.png" alt='' width={50} height={50} className='' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{
                                opacity: 1, y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: 'easeInOut'
                                }
                            }} viewport={{ once: true }}
                        >
                            <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{
                        opacity: 1, scale: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5,
                            ease: 'easeInOut'
                        }
                    }} viewport={{ once: true }}
                    className='bg-white flex justify-center items-center relative flex-col overflow-hidden md:py-14'>
                    <Tatamlainan />

                    <Image src="/icons/terminal.png" alt='' width={400} height={400} className='absolute top-0 opacity-20 right-0 translate-x-20 hidden md:block' />
                    <Image src="/icons/targetblue.png" alt='' width={400} height={400} className='absolute bottom-0 opacity-20 left-0 -translate-x-36 hidden md:block' />
                </motion.div>
            </section>

            <div className='relative wrapper flex justify-center items-center max-md:flex-col py-20'>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                            ease: 'easeInOut'
                        }
                    }} viewport={{ once: true }}
                    className='z-10 max-w-md text-center text-[20px] sm:text-[24px] font-medium'>
                    Your happiness, our achievement
                    Your joy, our Inspiration

                </motion.span>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            delay: 0.8,
                            duration: 0.5,
                            ease: 'easeInOut',
                        }
                    }} viewport={{ once: true }}
                    className='absolute top-[65px] translate-x-[240px] hidden md:block'
                >
                    <Image src="/icons/quote.png" alt='' width={50} height={50} className='' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            delay: 0.5,
                            duration: 0.5,
                            ease: 'easeInOut'
                        }
                    }} viewport={{ once: true }}
                >
                    <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
                </motion.div>
            </div>
        </>
    )
}

export default AfterHesec