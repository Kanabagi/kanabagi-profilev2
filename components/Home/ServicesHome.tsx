import { servicesHome } from '@/constants'
import Image from 'next/image'
import React from 'react'
import ServicesCard from '../Services/ServicesCard'

const ServicesHome = () => {
    return (
        <section className='md:pt-40 pt-20'>
            <div className='bg-[#2e3192] w-full py-10 flex items-center justify-center relative overflow-hidden'>
                <div className='wrapper flex items-center justify-center flex-col gap-6 z-10'>
                    <div className='relative flex flex-col gap-2 items-center'>
                        <h1 className='font-bold text-[24px] md:text-[32px] tracking-wide text-white'>
                            Our Services
                        </h1>
                        <p className='text-gray-400 max-w-md sm:max-w-lg md:max-w-2xl text-center max-md:text-[16px]'>
                            We specialize in crafting exceptional digital experiences through our comprehensive web development and UI/UX design services.
                        </p>

                        <Image
                            src="/icons/code.png"
                            alt=''
                            width={30}
                            height={30}
                            className='absolute top-0 translate-x-[110px] md:translate-x-[140px] -translate-y-3' />
                    </div>

                    <ServicesCard />
                </div>

                <Image
                    src="/icons/website.png"
                    alt=''
                    height={400}
                    width={400} 
                    className='absolute opacity-20 lg:left-10 left-0 -translate-x-[150px] max-md:hidden block'/>
                <Image
                    src="/icons/uiux-b.png"
                    alt=''
                    height={350}
                    width={350} 
                    className='absolute opacity-20 lg:right-20 lg:translate-x-[200px] translate-x-[500px] max-md:hidden block'/>
            </div>
        </section>
    )
}

export default ServicesHome