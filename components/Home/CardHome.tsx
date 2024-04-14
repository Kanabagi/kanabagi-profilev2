import { homeCardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CardHome = ({ works }: { works: homeCardProps }) => {
    return (
        <div className='group relative flex items-center justify-items-center shadow-md rounded-[12px] overflow-hidden' key={works.name}>
            <Image
                src={works.imgUrl}
                alt=''
                width={800}
                height={600}
                className='rounded-[12px] ' />

            <div className='w-full h-full bg-gray-700 absolute opacity-0 group-hover:opacity-80 transition-all duration-400 rounded-[12px]' />

            <div className='w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4 flex-col z-10 text-white group'>
                <div className='flex flex-col items-center -mt-12 gap-3'>
                    <span className='font-medium text-gray-200 -translate-y-10 group-hover:translate-y-0 transition duration-700 opacity-20 ease-in-out group-hover:opacity-100 max-md:text-[14px]'>Website</span>
                    <h1 className='font-semibold text-[24px] lg:text-[32px] tracking-wide opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-1000 ease-in-out border-t-2 border-b-2'>{works.name}</h1>
                </div>
                {/* <Button className='bg-transparent border-2 translate-y-10 group-hover:translate-y-0 transition duration-700 opacity-20 ease-in-out group-hover:opacity-100 hover:bg-gray-50 hover:text-black p-0' size="lg">
                  <Link href="/works" className='px-6 h-full flex items-center justify-center gap-2'>
                    Details
                    <FaArrowRightLong className=''/>
                  </Link>
                </Button> */}
            </div>

            <div className='w-full bottom-0 flex items-center justify-center absolute bg-gray-50 opacity-0 group-hover:opacity-100 translate-y-14 group-hover:translate-y-0 transition-all duration-700 z-10'>
                <Link href={works.link} className='text-gray-400 font-medium hover:text-gray-700 transition duration-200 w-full py-2 md:py-4 flex items-center justify-center gap-3' target='blank'>
                    Click for details
                    <FaArrowRightLong className='' />
                </Link>
            </div>

            {/* <Image
                src="/icons/ff.png"
                alt=''
                width={100}
                height={100}
                className='absolute opacity-0 group-hover:opacity-50 -translate-x-40 group-hover:-translate-x-10 transition-all duration-700 lg:w-[100px] lg:h-[100px] w-[80px] h-[80px]' /> */}
        </div>
    )
}

export default CardHome