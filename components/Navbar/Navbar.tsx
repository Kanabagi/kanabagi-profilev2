'use client';

import { nav } from '@/constants';
import { useScrollPosition } from '@/hooks/use-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from './hamburger';

export default function Navbar() {
  const pathname = usePathname();
  const showNavbar = useScrollPosition('target-section');

  return (
    <div
      className={`fixed top-0 z-[99] w-full transition-colors duration-1000 ease-in-out ${
        showNavbar && 'bg-[#2e3192]'
      }`}
    >
      <div
        className={`wrapper flex justify-between items-center ${
          showNavbar && 'py-4'
        }`}
      >
        <div className="flex gap-8">
          <Link
            href="/"
            className={`font-medium flex items-center text-gray-50 ${
              showNavbar ? 'text-[24px]' : 'text-[32px]'
            }`}
          >
            Kanabagi.
          </Link>
          <div className="border-r border-[#F8FAFC] md:flex hidden" />
          <div className="lg:flex items-center gap-8 hidden">
            {nav[0].navMenu?.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="flex flex-col justify-center items-center group"
              >
                {showNavbar ? (
                  <div
                    className={`${
                      pathname === item.path && 'text-white font-medium'
                    } text-gray-400 hover:text-white transition-all duration-200 ease-in-out`}
                  >
                    {item.name}
                  </div>
                ) : (
                  <>
                    <div
                      className={`border-2 rounded-full border-[#F8FAFC] ${
                        pathname === item.path && 'bg-[#F8FAFC]'
                      } p-2 group-hover:-translate-y-3 transition-transform duration-300 ease-in-out`}
                    >
                      <item.Icon
                        size={25}
                        className={`${
                          pathname === item.path
                            ? 'text-[#2E3192]'
                            : 'text-[#F8FAFC]'
                        }`}
                      />
                    </div>
                    <div className="absolute text-[#F8FAFC] opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-200 ease-in-out">
                      {item.name}
                    </div>
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-8">
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
        <Hamburger />
      </div>
    </div>
  );
}
