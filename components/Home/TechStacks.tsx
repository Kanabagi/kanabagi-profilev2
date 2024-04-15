import Image from 'next/image'
import React from 'react'
import CarouselTechStacks from './CarouselTechStacks'
import { Button } from '../ui/button'
import Link from 'next/link'



const TechStacks = () => {

    return (
        <section className='relative overflow-hidden min-h-screen flex justify-center items-center pt-10'>
            <div className='wrapper flex flex-col items-center justify-center gap-6 z-10'>
                <div className='relative flex flex-col gap-2 items-center'>
                    <h1 className='font-bold text-[24px] md:text-[32px] tracking-wide'>
                        Tech Stacks
                    </h1>
                    <p className='text-gray-400 max-w-md sm:max-w-xl md:max-w-4xl text-center max-md:text-[16px]'>
                        From coding languages to website, these resources drive our innovation and efficiency, ensuring we deliver top-quality solutions for our clients while keeping pace with industry advancements.
                    </p>
                    <Image
                        src="/icons/code.png"
                        alt=''
                        width={30}
                        height={30}
                        className='absolute top-0 translate-x-[110px] md:translate-x-[140px] -translate-y-3' />
                </div>

                <div className='flex items-center justify-center lg:px-10'>
                    <CarouselTechStacks />
                </div>

                <div className='border-2 border-gray-800 md:translate-y-10 p-6 flex md:justify-between md:items-center gap-6 rounded-[12px] w-full max-md:flex-col max-md:mt-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium text-[20px]'>Ready to Elevate Your Online Presence?</h1>
                        <p className='lg:max-w-2xl max-w-xl text-gray-500 max-md:text-[14px]'>
                            Let's transform your digital landscape. Our complimentary consultation service awaits. Drop us a line and let's craft your next success story together!
                        </p>
                    </div>

                    <Button className='h-[54px] bg-transparent border-2 border-gray-800 text-gray-800 rounded-[12px] hover:text-gray-300'>
                        <Link href="/contact">Connect with us</Link>
                    </Button>
                </div>
            </div>

            <Image src="/icons/monitor.png" alt='' width={600} height={600} className='absolute opacity-20 right-0 translate-x-[300px] md:-translate-y-4 -translate-y-20 md:block hidden'/>
            <Image src="/icons/binary.png" alt='' width={300} height={300} className='absolute opacity-20 left-0 lg:translate-x-12 -translate-x-32 translate-y-10 md:block hidden'/>
        </section>
    )
}

export default TechStacks