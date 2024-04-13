'use client';

import { nav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Hamburger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="flex flex-col gap-1 z-50 lg:hidden"
        onClick={handleClick}
      >
        <div
          className={`h-[2px] w-6 bg-[#F8FAFC] ${
            isOpen && '-rotate-45 translate-y-[6px]'
          } transition-all duration-300 ease-in-out`}
        ></div>
        <div
          className={`h-[2px] w-6 bg-[#F8FAFC]  ${
            isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
          } transition-all duration-300 ease-in-out`}
        ></div>
        <div
          className={`h-[2px] w-6 bg-[#F8FAFC] ${
            isOpen && 'rotate-45 -translate-y-[6px]'
          } transition-all duration-300 ease-in-out`}
        ></div>
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#2E3192] z-40 flex flex-col justify-between items-center py-10 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          className={`text-[#F8FAFC] text-3xl font-medium flex items-center justify-center`}
        >
          Kanabagi.
        </div>
        <div className="flex flex-col items-center gap-4">
          {nav[0].navMenu?.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={` text-base ${
                pathname === item.path
                  ? 'font-medium text-white'
                  : 'text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {nav[1].navSocial?.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="group relative h-[35px] w-[35px] hover:scale-95 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="100vw 100vh"
                className="object-contain group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
                title={item.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
