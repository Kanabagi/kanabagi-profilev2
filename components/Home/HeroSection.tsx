import React from 'react'
import { Mouse } from "lucide-react";
import Image from "next/image";
import AccordionHS from './AccordionHS';
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
        <section className="flex min-h-screen bg-hero bg-cover bg-center relative">
            <div className="absolute bg-[#2e3192]/30 w-full h-screen" />
            <div className="wrapper flex items-center max-md:justify-center z-10">
                <div className="flex flex-col gap-4">
                    <div className="md:max-w-4xl" id="target-section">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1, y: 0,
                                transition: {
                                    delay: 0.2, duration: 0.5
                                }
                            }} viewport={{ once: true }}
                            className="text-[42px] sm:text-[56px] max-md:text-center md:text-[72px] lg:text-[84px] text-white font-semibold"
                        >
                            Your Digital Frontier {" "}
                            <span className="bg-[#00a2df] px-2">P</span>
                            <span className='text-[#00a2df] tracking-wide'>artner</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{
                            opacity: 1, y: 0,
                            transition: {
                                delay: 0.2, duration: 0.5
                            }
                        }} viewport={{ once: true }}
                        className="gap-6 items-center md:flex hidden">
                        <Image src="/icons/chat.png" alt="" width={40} height={40} />
                        <h2 className="font-medium text-[24px] text-white">What we do?</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{
                            opacity: 1, x: 0,
                            transition: {
                                delay: 0.2, duration: 0.5
                            }
                        }} viewport={{ once: true }}
                        className="text-[18px] text-gray-300 max-w-[750px] tracking-wide leading-relaxed md:flex hidden">Experience seamless web development tailored to your vision.
                        Let us handle the complexities while you focus on your business.
                        Welcome to innovation, reliability, and digital empowerment.
                    </motion.p>

                    {/* ITS ON SMALL DEVICES */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{
                            opacity: 1, y: 0,
                            transition: {
                                delay: 0.8,
                                duration: 0.5,
                                ease: 'linear'
                            }
                        }} viewport={{ once: true }}>
                        <AccordionHS />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-6 flex justify-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            delay: 0.5,
                            duration: 0.5,
                            ease: 'linear'
                        }
                    }} viewport={{ once: true }}
                    className="flex flex-col gap-2 items-center text-white animate-bounce">
                    <Mouse className="animate-pulse" />
                    <span className="font-medium md:text-[18px] animate-pulse">Scroll down</span>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection