"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SectionHeader({
  name,
  desc,
  position,
  style,
}: {
  name: string;
  desc: string;
  position: string;
  style?: string
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: 'easeInOut'
          }
        }} viewport={{ once: true }}
        className={`wrapper relative flex flex-col items-center gap-2 ${style}`}>
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1, x: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: 'linear'
            }
          }} viewport={{ once: true }}
          className="font-bold text-[24px] md:text-[32px] tracking-wide">
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1, x: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: 'linear'
            }
          }} viewport={{ once: true }}
          className="text-[#6B7280] md:max-w-3xl max-w-2xl text-center max-md:text-[16px]">
          {desc}
        </motion.p>

        <Image
          src="/icons/code.png"
          alt="..."
          width={40}
          height={40}
          className={`absolute h-[20px] w-[20px] md:h-[30px] md:w-[30px] ${position}`}
        />
      </motion.div>
    </>
  );
}
