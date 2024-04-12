import React from 'react'
import { Mouse } from "lucide-react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const HeroSection = () => {
    return (
        <section className="flex min-h-screen bg-hero bg-cover bg-center relative">
            <div className="absolute bg-[#2e3192]/30 w-full h-screen" />
            <div className="wrapper flex items-center max-md:justify-center z-10">
                <div className="flex flex-col gap-4">
                    <div className="md:max-w-4xl" id="target-section">
                        <h1 className="text-[42px] sm:text-[56px] max-md:text-center md:text-[72px] lg:text-[84px] text-white font-semibold">
                            Your Digital Frontier {" "}
                            <span className="bg-[#00a2df] px-2">P</span>
                            <span className='text-[#00a2df] tracking-wide'>artner</span>
                        </h1>
                    </div>

                    <div className="gap-6 items-center md:flex hidden">
                        <Image src="/icons/chat.png" alt="" width={40} height={40} />
                        <h2 className="font-medium text-[24px] text-white">What we do?</h2>
                    </div>

                    <p className="text-[18px] text-gray-300 max-w-[750px] tracking-wide leading-relaxed md:flex hidden">Experience seamless web development tailored to your vision.
                        Let us handle the complexities while you focus on your business.
                        Welcome to innovation, reliability, and digital empowerment.</p>

                    {/* ITS ON SMALL DEVICES */}
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

                </div>
            </div>

            <div className="absolute bottom-6 flex justify-center w-full">
                <div className="flex flex-col gap-2 items-center text-white animate-bounce">
                    <Mouse className="animate-pulse" />
                    <span className="font-medium md:text-[18px] animate-pulse">Scroll down</span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection