import Image from 'next/image'
import React from 'react'
import OurGoals from './OurGoals'
import OurProcess from './OurProcess'
import { Separator } from "@/components/ui/separator"
import Afterhesec2 from './Afterhesec2'
import Tatamlainan from './Tatamlainan'


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
                        <Image src="/icons/quote.png" alt='' width={50} height={50} className='absolute top-[50px] translate-x-[300px] hidden md:block' />
                        <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
                    </div>
                </div>
                <div className='bg-white flex justify-center items-center relative flex-col overflow-hidden md:py-14'>
                    <Tatamlainan />
                </div>
            </section>

            <div className='relative wrapper flex justify-center items-center max-md:flex-col py-20'>
                <span className='z-10 max-w-xl text-center text-[20px] sm:text-[24px] font-medium'>
                    Your happiness, our achievement
                    Your joy, our Inspiration

                </span>
                <Image src="/icons/quote.png" alt='' width={50} height={50} className='absolute top-[65px] translate-x-[320px] hidden md:block' />
                <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
            </div>
        </>
    )
}

export default AfterHesec