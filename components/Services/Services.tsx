import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='w-full md:flex flex-col items-center hidden gap-4'>
            <div className='flex w-full'>
                <div
                    className='flex-1 h-[250px] bg-cover bg-center'
                    style={{ backgroundImage: 'url(/images/bg-services3.jpg)' }}
                />
                <div className='flex-1 flex'>
                    <div className='px-10 flex flex-col gap-2'>
                        <div className='flex items-center gap-4'>
                            <Image src="/icons/quote.png" alt='' width={30} height={30} />
                            <h1 className='text-[20px] font-semibold'>
                                Web Development
                            </h1>
                        </div>
                        <p className='max-w-lg leading-relaxed max-md:text-[16px] text-gray-500'>
                            We provide custom website design and development, whenever you need a personal website, corporate website, product catalog or online store we here to help.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex w-full'>
                <div className='flex-1 flex justify-end'>
                    <div className='px-10 flex flex-col gap-2'>
                        <div className='flex items-center gap-4 justify-end'>
                            <h1 className='md:text-[20px] font-semibold'>
                                UI/UX Development
                            </h1>
                            <Image src="/icons/quote.png" alt='' width={30} height={30} />
                        </div>
                        <p className='max-w-lg text-end max-md:text-[16px] text-gray-500 leading-relaxed'>
                            Crafting exceptional digital experiences. Our UI/UX developers meticulously blend aesthetics with functionality to create captivating interfaces that resonate with users.
                        </p>
                    </div>
                </div>

                <div className='flex-1 h-[250px] bg-cover bg-center' style={{ backgroundImage: 'url(/images/bg-services2.jpg)' }} />
            </div>
        </div>
    )
}

export default Services