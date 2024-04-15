import { servicesHome } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ServicesCard = ({ style, cardStyle }: { style?: string, cardStyle?: string }) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4 lg:w-full ${style}`}>
            {servicesHome.map((services) => (
                <div className={`group relative overflow-hidden flex bg-gray-50 hover:bg-[#00a2df] rounded-[12px] hover:border-white p-4 border-l-8 border-[#00a2df] py-10 items-center justify-center transition-all duration-200 ease-in-out hover:-translate-y-2 ${cardStyle}`} key={services.name}>
                    <div className='flex gap-6'>
                        <div className='max-sm:hidden flex'>
                            <div className='bg-[#00a2df] p-4 w-max h-max rounded-full block group-hover:hidden opacity-100 group-hover:opacity-0 transition-all duration-1000'>
                                <Image src={services.imgUrl} alt='' width={60} height={60} className='' />
                            </div>
                            <div className='bg-gray-50 p-4 w-max h-max rounded-full hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                                <Image src={services.imgUrlBlue} alt='' width={60} height={60} className='' />
                            </div>
                        </div>

                        {/* max-sm */}
                        <div className='max-sm:flex hidden absolute top-0 left-0 opacity-50 -translate-y-10 -translate-x-10'>
                            <div className='bg-[#00a2df] p-4 w-max h-max rounded-full block group-hover:hidden opacity-100 group-hover:opacity-0 transition-all duration-1000'>
                                <Image src={services.imgUrl} alt='' width={100} height={100} className='' />
                            </div>
                            <div className='bg-gray-50 p-4 w-max h-max rounded-full hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                                <Image src={services.imgUrlBlue} alt='' width={100} height={100} className='' />
                            </div>
                        </div>
                        {/* max-sm */}

                        <div className='flex flex-col gap-2 z-10'>
                            <h1 className='font-semibold text-[18px] md:text-[20px] group-hover:text-white transition-all duration-200 ease-in-out'>{services.name}</h1>
                            <p className='lg:max-w-md max-w-xs sm:max-w-lg text-[14px] leading-relaxed text-gray-500 group-hover:text-gray-200 transition-all duration-200 ease-in-out'>{services.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesCard