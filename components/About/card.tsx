"use client"

import { about } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutCard() {
  return (
    <>
      <div className="wrapper flex flex-col lg:flex-row justify-center items-center gap-8 mb-[125px]">
        {about[0].cardData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale:0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.8,
                duration: 0.5,
                ease: 'easeInOut'
              }
            }} viewport={{ once: true }}
            key={index}
            className="group relative flex flex-col border border-black/20 rounded-lg px-8 py-14 h-[420px] w-full md:w-1/2  lg:h-[560px] lg:w-[460px] gap-4 text-black/20 cursor-pointer hover:border-[#00A2DF] hover:bg-[#00A2DF] hover:scale-95 transition-all duration-300 ease-in-out"
          >
            <div className="text-xl md:text-[24px] font-medium group-hover:text-white">
              {item.name}
            </div>
            <div className="text-[16px] lg:text-[18px] group-hover:text-white/90 leading-relaxed max-md:max-w-md">
              {item.desc}
            </div>
            <Image
              src="/icons/quotefillblack.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-8 right-[88px] lg:top-5 lg:right-[52px] h-[20px] w-[20px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] opacity-20 group-hover:opacity-0"
            />
            <Image
              src="/icons/quotefillwhite.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-8 right-[88px] lg:top-5 lg:right-[52px] h-[20px] w-[20px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] opacity-0 group-hover:opacity-40"
            />
            <Image
              src={item.image}
              alt="..."
              width={150}
              height={150}
              className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]"
            />
            <Image
              src={item.hover}
              alt="..."
              width={150}
              height={150}
              className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
