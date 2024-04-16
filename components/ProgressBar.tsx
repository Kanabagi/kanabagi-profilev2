"use client"

import React from 'react'
import { motion, useScroll } from 'framer-motion';

const Progressbar = () => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className='fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-100 via-sky-200 to-sky-400 z-[99] origin-left max-md:hidden'
            style={{ scaleX: scrollYProgress }}>
        </motion.div>
    )
}

export default Progressbar