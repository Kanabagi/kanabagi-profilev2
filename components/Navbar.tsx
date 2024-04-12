'use client';

import { nav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="wrapper flex justify-between items-center">
      <div className="flex gap-8">
        <Link href="/" className="relative h-[80px] w-[215px]">
          <Image
            src={'/images/logo-white.png'}
            alt="Kanabagi"
            fill
            sizes="100vw 100vh"
            className="object-contain"
          />
        </Link>
        <div className="border-r border-[#F8FAFC]"></div>
        <div className="flex items-center gap-8">
          {nav[0].navMenu?.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="flex flex-col justify-center items-center group"
            >
              <div
                className={`border-2 rounded-full border-[#F8FAFC] ${
                  pathname === item.path ? 'bg-[#F8FAFC]' : ''
                } p-2 group-hover:-translate-y-3 transition-transform duration-300 ease-in-out`}
              >
                <item.Icon
                  size={30}
                  className={`${
                    pathname === item.path ? 'text-[#2E3192]' : 'text-[#F8FAFC]'
                  }`}
                />
              </div>
              <div className="absolute text-[#F8FAFC] opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-200 ease-in-out">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8">
        {nav[1].navSocial?.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group relative h-[45px] w-[45px] hover:scale-95 transition-transform duration-300 ease-in-out"
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
  );
}
