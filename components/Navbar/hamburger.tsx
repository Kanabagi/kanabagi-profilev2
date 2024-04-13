'use client';

import { nav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Hamburger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const useEffectScroll = () => {
    useEffect(() => {
      const html = document.documentElement;
      const scrollBlocked = isOpen;

      if (scrollBlocked) {
        html.classList.add('overflow-hidden');
      } else {
        html.classList.remove('overflow-hidden');
      }
    }, [isOpen]);
  };
  useEffectScroll();

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button
        className="flex flex-col gap-1 z-50 md:hidden"
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
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div
          className={`text-[#F8FAFC] text-3xl font-medium flex items-center justify-center bg-blue-950 w-full h-[100px] -mt-10`}
        >
          Kanabagi.
        </div>
        <div className="flex flex-col items-center gap-4 z-10">
          {nav[0].navMenu?.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={` text-[20px] sm:text-[24px] ${
                pathname === item.path
                  ? 'font-medium text-white'
                  : 'text-gray-400'
              } ${
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-20'
              } transition-all duration-1000 `}
              onClick={handleClose}
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
              className={`group relative h-[35px] w-[35px] hover:scale-95 transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-20'
              } transition-all !duration-1000`}
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

        <Image
          src="/icons/binary.png"
          alt=""
          height={200}
          width={200}
          className={`absolute object-contain top-[150px] -left-[60px] ${
            isOpen ? 'opacity-15' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          src="/icons/coding.png"
          alt=""
          height={300}
          width={300}
          className={`absolute object-contain bottom-[50px] -right-[100px] ${
            isOpen ? 'opacity-15' : 'opacity-0'
          } transition-all duration-1000`}
        />
      </div>
    </>
  );
}
