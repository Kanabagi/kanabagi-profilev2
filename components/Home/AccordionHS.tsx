import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

const AccordionHS = () => {
    return (
        <Accordion type="single" collapsible className='md:hidden block'>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-white hover:no-underline'>
                    <div className="gap-4 items-center flex">
                        <Image src="/icons/chat.png" alt="" width={30} height={30} />
                        <h2 className="font-medium text-[20px] text-white">What we do?</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='text-gray-300 tracking-wide leading-relaxed'>
                    Experience seamless web development tailored to your vision.
                    Let us handle the complexities while you focus on your business.
                    Welcome to innovation, reliability, and digital empowerment.s
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionHS