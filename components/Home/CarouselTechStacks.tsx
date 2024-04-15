"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { techStacks } from '@/constants'
import Autoplay from "embla-carousel-autoplay"
import { Separator } from '../ui/separator'
import Image from 'next/image'

const CarouselTechStacks = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset} className=''>
            <CarouselContent className='flex gap-6 pt-4 px-4 pr-12'>
                {techStacks.map((tech) => (
                    <CarouselItem className='relative sm:basis-1/2 lg:basis-1/3 bg-[#292929] flex flex-col items-center justify-center py-16 md:px-12 rounded-[12px]' key={tech.name}>
                        <span className='text-[#9CA3AF] absolute top-2 right-4'>{tech.name}</span>

                        <Image src={tech.imgUrl} alt='' width={100} height={100} className='translate-y-4' />

                        <div className='flex gap-2 absolute top-4 left-4'>
                            <div className='w-4 h-4 rounded-full bg-[#FF5F56]' />
                            <div className='w-4 h-4 rounded-full bg-[#FFBD2E]' />
                            <div className='w-4 h-4 rounded-full bg-[#27C93F]' />
                        </div>

                        <div className='absolute top-10 w-full px-4 max-md:-translate-x-'>
                            <Separator className=' border-2 border-[#00a2df]' />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='lg:flex items-center hidden bg-[#00a2df]' variant="default" />
            <CarouselNext className='lg:flex items-center hidden bg-[#00a2df]' variant="default"/>
        </Carousel>
    )
}

export default CarouselTechStacks