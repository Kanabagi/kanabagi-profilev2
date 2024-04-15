import { heroProps } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import AccordionHero from '../AccordionHero'
import { Separator } from '../ui/separator'



const HeroServices = ({ bgUrl, linkTo, pageName, title, buttonName, chatPosition, buttonSize, blueWord, subTitle, subDesc, quotePosition, titleStyle }: heroProps) => {
    const specialWordStyle = {
        color: '#00a2df',
    };

    return (
        <>
            <div className={`${bgUrl} relative flex flex-col w-full justify-center items-center bg-center bg-cover h-[450px]`}>
                <div className='w-full h-full bg-[#2e3192] absolute opacity-60' />
                <div className='w-full h-[30px] bg-gray-50 absolute opacity-50 bottom-0' />

                <div className='wrapper w-full flex flex-col justify-center items-center gap-4 z-10 mt-10'>
                    <div className='relative flex flex-col items-center'>
                        <div className={`flex gap-4 items-center absolute left-0 ${chatPosition}`}>
                            <Image src="/icons/chat.png" alt='' width={30} height={30} />
                            <span className='text-gray-300 text-[18px] md:text-[20px] font-medium'>{pageName}</span>
                        </div>
                        <h1 className={`text-gray-50 text-[28px] sm:text-[32px] md:text-[48px] font-semibold max-w-md md:max-w-lg text-center ${titleStyle}`}>
                            {title.split(" ").map((word, index) => {
                                if (word.toLowerCase() === blueWord) {
                                    return (
                                        <span
                                            key={index}
                                            style={specialWordStyle}>
                                            {" "} {word} {" "}
                                        </span>
                                    )
                                }
                                return (
                                    <span key={index}>
                                        {word} {" "}
                                    </span>
                                )
                            })}
                        </h1>
                    </div>

                    <Button className={`relative z-10 group bg-transparent h-[54px] border-2 border-[#00a2df] rounded-full hover:bg-[#00a2df] ${buttonSize}`} size="lg">
                        <Link href={linkTo} className='group-hover:-translate-x-4 transition-all duration-500'>
                            {buttonName}
                        </Link>

                        <FaArrowRight className='absolute right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500' />
                    </Button>
                </div>
            </div>

            <div className='wrapper hidden md:flex flex-1 justify-center items-center max-md:flex-col'>
                <div className='relative flex flex-col gap-6 items-center'>
                    <span className='z-10 max-w-xl text-center text-[20px] sm:text-[24px] font-medium'>
                        {subTitle}
                    </span>

                    <Separator className='border border-gray-400' />

                    <p className='text-gray-500 text-center max-w-2xl lg:max-w-4xl'>
                        {subDesc}
                    </p>
                    <Image src="/icons/quote.png" alt='' width={40} height={40} className={`absolute top-0 hidden md:block ${quotePosition}`} />
                </div>
                <Image src="/icons/quote.png" alt='' width={40} height={40} className='block md:hidden' />
            </div>

            <AccordionHero title={subTitle} desc={subDesc}/>
        </>
    )
}

export default HeroServices