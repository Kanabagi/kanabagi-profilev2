import Image from 'next/image';
import React from 'react'
import { BsFillTerminalFill } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Tatamlainan = () => {
    return (
        <VerticalTimeline animate={true} lineColor='gray'>
            <VerticalTimelineElement visible={true}
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgb(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                }}
                date="Our Process"
                icon={React.createElement(BsFillTerminalFill)}
                iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                }}>

                <div className='flex flex-col'>
                    <div className='flex gap-4 max-sm:flex-col'>
                        <div className='mt-1'>
                            <Image src="/icons/chat.png" alt='' height={25} width={25} />
                        </div>
                        <h3 className='font-medium capitalize text-[18px]'>
                            Tell your goals and we give what you need
                        </h3>
                    </div>
                    <p className='text-gray-400 leading-relaxed'>
                        We provide website development with best UI/UX Design for your business needs. Tell us the business idea you want to put into digital form and we'll work towards your goals. Together, let's define your path to success and exceed your expectations.
                    </p>
                </div>

            </VerticalTimelineElement>
            <VerticalTimelineElement visible={true}
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgb(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem"
                }} contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                }} date="Our Goals"
                icon={React.createElement(TbTargetArrow)}
                iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                }}>

                <div className='flex flex-col'>
                    <div className='flex gap-4 max-sm:flex-col'>
                        <div className='mt-1'>
                            <Image src="/icons/chat.png" alt='' height={25} width={25} />
                        </div>
                        <h3 className='font-medium capitalize text-[18px]'>
                            Your satisfaction is our main goal
                        </h3>
                    </div>
                    <p className='text-gray-400 leading-relaxed'>
                        Our top priority is your satisfaction. We're dedicated to meeting your needs and surpassing your expectations every step of the way. Your happiness is what motivates us to continually improve and deliver exceptional results.
                    </p>
                </div>

            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Tatamlainan