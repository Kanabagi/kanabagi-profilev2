import Image from 'next/image'
import React from 'react'

const OurGoals = () => {
    return (
        <div className='wrapper flex items-center lg:gap-[240px] md:gap-[200px] gap-20 max-md:flex-col'>
            <Image src="/icons/abstract.png" alt='' height={300} width={300} className='lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] max-md:hidden' />

            <Image src="/images/developer.png" alt='' height={400} width={400} className='absolute top-[80px] lg:top-10 translate-x-20 lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] max-md:hidden' />

            <div className='text-gray-50 flex flex-col gap-2 z-10 md:mt-20 lg:mt-0'>
                <div className='flex items-center gap-3'>
                    <div className='p-2 bg-white rounded-full'>
                        <Image src="/icons/coding-system-blue.png" alt='' height={30} width={30} />
                    </div>
                    <p className='font-semibold text-[20px]'>
                        Our {" "}
                        <span className='text-[#00a2df]'>
                            Process
                        </span>
                    </p>
                </div>
                <h2 className='font-bold text-[24px] lg:text-[32px] max-w-md'>
                    Tell your goals and we give what you need
                </h2>
                <p className='text-[14px] lg:text-[18px] text-gray-300 leading-relaxed'>
                    We provide website development with best UI/UX Design for your business needs. Tell us the business idea you want to put into digital form and we'll work towards your goals. Together, let's define your path to success and exceed your expectations."
                </p>
            </div>

            {/* <Image src="/icons/quoteblack.png" alt='' height={300} width={300}
            className='absolute right-0 -translate-x-4 lg:-translate-x-24 opacity-20 hidden md:flex'/> */}
            {/* <Image src="/icons/quoteblack.png" alt='' height={300} width={300}
            className='absolute md:translate-x-[600px] lg:translate-x-[900px] opacity-20 hidden md:flex'/> */}
            <Image src="/icons/coding-systsem.png" alt='' width={500} height={500} className='absolute opacity-20 top-4 -right-44 hidden md:block lg:w-[500px] lg:h-[500px] w-[400px] h-[400px]' />
        </div>
    )
}

export default OurGoals