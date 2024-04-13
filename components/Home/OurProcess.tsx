import Image from 'next/image'
import React from 'react'

const OurProcess = () => {
  return (
    <div className='wrapper flex md:hidden items-center lg:gap-[240px] md:gap-[200px] gap-20 max-md:flex-col'>
      <div className='text-gray-50 flex items-end flex-col gap-2 z-10'>
        <div className='flex items-center gap-3'>
          <p className='font-semibold text-[20px]'>
            Our {" "}
            <span className='text-[#00a2df]'>
              Goals
            </span>
          </p>
          <div className='p-2 bg-white rounded-full'>
            <Image src="/icons/targetblue.png" alt='' height={30} width={30} />
          </div>
        </div>
        <h2 className='font-bold text-[24px] lg:text-[32px] max-w-xs text-end'>
          Your satisfaction is our main goal
        </h2>
        <p className='text-[14px] lg:text-[18px] text-gray-300 leading-relaxed text-end'>
          Our top priority is your satisfaction. We're dedicated to meeting your needs and surpassing your expectations every step of the way. Your happiness is what motivates us to continually improve and deliver exceptional results.
        </p>
      </div>
    </div>
  )
}

export default OurProcess