import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface workProps {
    name: string;
    imgUrl: string;
    link: string;
}

const Website = ({ works }: { works: workProps }) => {
    return (
        <div className='group flex items-center justify-center'>
            <div className='relative flex flex-col rounded-[12px] group-hover:shadow-md bg-gray-100 transtiion duration-200 overflow-hidden'>
                <div className='relative overflow-hidden flex items-center justify-center w-full'>
                    <Image src={works.imgUrl} alt='' width={800} height={800} className='rounded-[12px]' />
                    <Link
                        href={works.link}
                        target='blank'
                        className='w-full h-full bg-gray-700 absolute opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-[12px]' />
                    <Link href={works.link} className='absolute z-20 text-[48px] font-semibold text-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-700 tracking-wider scale-90 group-hover:scale-100 select-none'>
                        Visit
                    </Link>

                    <div className='absolute w-full h-[30px] bg-red-500 animate-spin'/>
                </div>

                <div className='flex flex-col p-4 py-6 z-10'>
                    <span className='text-gray-400 max-md:text-[16px]'>Website</span>
                    <h1 className='md:text-[24px] text-[20px] font-medium'>{works.name}</h1>
                    <p className='md:text-[16px] text-[14px] text-gray-500 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla corporis
                        placeat illum quas iure, repellat tempore eum fugit enim.
                    </p>
                    <div className='mt-10'>
                        <span className='text-gray-300'>Martabak ramayana</span>
                    </div>
                </div>

                <Image src="/icons/settings.png" alt='' width={200} height={200} className='absolute bottom-0 right-0 opacity-20 translate-x-10 translate-y-20' />
            </div>
        </div>
    )
}

export default Website