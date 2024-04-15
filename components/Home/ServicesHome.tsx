import { servicesHome } from '@/constants'
import Image from 'next/image'
import React from 'react'

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

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4 lg:w-full'>
                        {servicesHome.map((services) => (
                            <div className='group flex bg-gray-50 hover:bg-[#00a2df] rounded-[12px] hover:border-white p-4 border-l-8 border-[#00a2df] py-10 items-center justify-center transition-all duration-200 ease-in-out hover:-translate-y-2' key={services.name}>
                                <div className='flex gap-6'>
                                    <div className='bg-[#00a2df] p-4 w-max h-max rounded-full block group-hover:hidden opacity-100 group-hover:opacity-0 transition-all duration-1000'>
                                        <Image src={services.imgUrl} alt='' width={60} height={60} className='' />
                                    </div>
                                    <div className='bg-gray-50 p-4 w-max h-max rounded-full hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                                        <Image src={services.imgUrlBlue} alt='' width={60} height={60} className='' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h1 className='font-semibold text-[18px] md:text-[20px] group-hover:text-white transition-all duration-200 ease-in-out'>{services.name}</h1>
                                        <p className='lg:max-w-md max-w-xs sm:max-w-lg text-[14px] leading-relaxed text-gray-400 group-hover:text-gray-200 transition-all duration-200 ease-in-out'>{services.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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