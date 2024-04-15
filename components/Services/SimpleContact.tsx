import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const SimpleContact = () => {
  return (
    <div className='relative w-full flex items-center justify-center md:h-[200px] h-[300px] bg-[#2e3192]'>
        <div className='wrapper flex max-md:flex-col md:justify-between md:gap-4 gap-6 md:items-center'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-medium text-[20px] text-gray-50'>Ready to Elevate Your Online Presence?</h1>
                <p className='lg:max-w-2xl max-w-xl text-gray-300 max-md:text-[14px]'>Let's transform your digital landscape. Our complimentary consultation service awaits. Drop us a line and let's craft your next success story together!</p>
            </div>

            <Button className='h-[54px] bg-gray-50 rounded-full text-gray-700 px-10 hover:bg-[#00a2df] hover:text-gray-50 max-md:w-full'>
                <Link href="/contact">Connect with us</Link>
            </Button>
        </div>
    </div>
  )
}

export default SimpleContact