"use client"

import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='wrapper flex gap-4 items-center'>
      <h1 className='font-bold text-lg'>Kanabagi</h1>

      <ul className='flex gap-2'>
        {navLinks.map((navItem) => {
          const isActive = pathname === navItem.href
          return (
            <li key={navItem.name}>
              <Link href={navItem.href} className={`${isActive && '!text-black'} font-medium text-gray-400`}>{navItem.name}</Link>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default Navbar