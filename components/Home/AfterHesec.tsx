import Image from 'next/image'
import React from 'react'
import OurGoals from './OurGoals'
import OurProcess from './OurProcess'
import { Separator } from "@/components/ui/separator"
import Afterhesec2 from './Afterhesec2'


const AfterHesec = () => {
    return (
        <>
            <section className='lg:min-h-screen flex flex-col md:h-[650px]'>
                <div className='bg-gray-50 h-[250px] flex justify-center items-center relative overflow-hidden'>
                    <div className='wrapper flex justify-center items-center max-md:flex-col'>
                        <span className='z-10 max-w-xl text-center text-[20px] sm:text-[24px] font-medium'>
                            We offer optimization of your business idea
                            Where the idea becomes a digital form.
                        </span>
                        <Image src="/icons/quote.png" alt='' width={50} height={50} className='absolute top-[70px] translate-x-[300px] hidden md:block' />
                        <Image src="/icons/quoteblack.png" alt='' width={250} height={250} className='absolute top-0 -left-16 block md:hidden opacity-15' />
                        <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
                    </div>
                </div>
                <div className='bg-[#2e3192] max-md:py-10 flex-1 flex justify-center items-center relative flex-col overflow-hidden'>
                    <OurGoals />
                    <div className='wrapper'>
                        <Separator className='md:hidden flex' />
                    </div>
                    <OurProcess />

                    <Image src="/icons/coding-systsem.png" alt='' width={300} height={300} className='absolute opacity-20 top-4 sm:top-0 -right-32 block md:hidden'/>
                    <Image src="/icons/target.png" alt='' width={240} height={240} className='absolute opacity-20 bottom-0 -left-32 block md:hidden'/>
                </div>
            </section>

            <div className='wrapper bg-[#2e3192] md:block hidden'>
                <Separator className='lg:h-1' />
            </div>

            <section className='lg:min-h-screen md:flex flex-col hidden h-[650px]'>
                <div className='bg-[#2e3192] max-md:py-10 flex-1 flex justify-center items-center relative flex-col overflow-hidden'>
                    <Afterhesec2 />
                </div>
                <div className='bg-gray-50 h-[250px] flex justify-center items-center relative overflow-hidden'>
                    <div className='wrapper flex justify-center items-center max-md:flex-col'>
                        <span className='z-10 max-w-md text-center text-[20px] sm:text-[24px] font-medium'>
                            Your happiness, our achievement
                            Your joy, our Inspiration
                        </span>
                        <Image src="/icons/quote.png" alt='' width={50} height={50} className='absolute top-[70px] translate-x-[245px] hidden md:block' />
                        {/* <Image src="/icons/quoteblack.png" alt='' width={250} height={250} className='absolute top-0 -left-16 block md:hidden opacity-15' /> */}
                        <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default AfterHesec