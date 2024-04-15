import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'


const AccordionHero = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className='wrapper relative md:hidden flex flex-1 items-center justify-center overflow-hidden'>
            <Accordion type="single" collapsible className='z-10'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-start font-medium'>{title}</AccordionTrigger>
                    <AccordionContent className='text-gray-500 text-[14px]'>
                        {desc}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Image src="/icons/quoteblack.png" alt='' width={200} height={200} className='absolute opacity-15 top-0 translate-x-[100px]'/>
        </div>
    )
}

export default AccordionHero