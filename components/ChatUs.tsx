import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ChatUs = () => {
    return (
        <div className='fixed md:bottom-8 md:right-[50px] right-4 bottom-4 md:hidden z-20'>
            <Link href="https://wa.link/hhvxf2" target='blank'>
                <div className='p-2 bg-gray-50 rounded-[12px] shadow-xl'>
                    <Image src="/icons/wa1.png" alt='' width={30} height={30} className='' />
                </div>
            </Link>
        </div>
    )
}

export default ChatUs