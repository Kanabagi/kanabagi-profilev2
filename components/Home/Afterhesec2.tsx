import Image from 'next/image'
import React from 'react'

const Afterhesec2 = () => {
    return (
        <div className='wrapper flex items-center lg:gap-[100px] md:gap-[40px] max-md:flex-col'>
            <div className='text-gray-50 flex flex-col gap-2 z-10 items-end'>
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
                <h2 className='font-bold text-[24px] lg:text-[32px] max-w-md text-end'>
                    Your satisfaction is our
                    main goal
                </h2>
                <p className='text-[14px] lg:text-[18px] text-gray-300 leading-relaxed text-end'>
                    Our top priority is your satisfaction. We're dedicated to meeting your needs and surpassing your expectations every step of the way. Your happiness is what motivates us to continually improve and deliver exceptional results.
                </p>
            </div>

            <Image src="/images/devgirl2.png" alt='' height={400} width={400} className='lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] max-md:hidden z-10' />

            {/* <Image src="/icons/quoteblack.png" alt='' height={300} width={300}
                className='absolute lg:translate-x-[80px] opacity-20 hidden md:flex' /> */}

            <Image src="/icons/target.png" alt='' width={400} height={400} className='absolute opacity-20 top-8 lg:top-16 -left-44 hidden md:block lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]' />
        </div>
    )
}

export default Afterhesec2