import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const HeroContact = () => {
    return (
        <div className='relative w-full h-[450px] bg-heroContact bg-cover bg-center flex items-center justify-center'>
            <div className='w-full h-full bg-[#2e3192] opacity-60 absolute' />
            <div className='w-full h-[30px] bg-gray-50 opacity-50 absolute bottom-0' />

            <div className='wrapper w-full flex flex-col justify-center items-center gap-4 z-10 mt-10'>
                <div className='relative flex flex-col items-center'>
                    <div className="flex gap-4 items-center absolute left-0 md:-translate-y-5 -translate-y-6 md:translate-x-6 sm:translate-x-0 translate-x-4">
                        <Image src="/icons/chat.png" alt='' width={30} height={30} />
                        <span className='text-gray-300 text-[18px] md:text-[20px] font-medium'>
                            Contact
                        </span>
                    </div>
                    <h1 className='text-gray-50 text-[28px] sm:text-[32px] md:text-[48px] font-semibold max-w-md md:max-w-xl text-center'>
                        Your Web <span className='text-[#00a2df]'>Visionaries</span> Here
                    </h1>
                </div>

                <Button className="relative z-10 group bg-transparent px-10 h-[54px] border-2 border-[#00a2df] rounded-full hover:bg-[#00a2df]" size="lg">
                    <Link href="#contact" className='group-hover:-translate-x-4 transition-all duration-500'>
                        Contact us
                    </Link>

                    <FaArrowRight className='absolute right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500' />
                </Button>
            </div>
        </div>
    )
}

export default HeroContact