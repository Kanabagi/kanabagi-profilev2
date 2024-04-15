import { footer, nav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#2E3192] flex flex-col pt-4">
      <div className="wrapper flex flex-col gap-4 md:flex-row md:justify-between pb-10">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="relative h-[80px] w-[215px] md:h-[60px] md:w-[195px]"
          >
            <Image
              src={'/images/logo-white.png'}
              alt="Kanabagi"
              fill
              sizes="100vw 100vh"
              className="object-contain"
            />
          </Link>
          <p className="max-w-xs md:max-w-56 lg:max-w-xs text-gray-400 text-sm md:text-xs leading-relaxed">
            Kanabagi is a leading website development company committed to
            creating exceptional online experiences. They specialize in crafting
            dynamic and user-friendly websites customized for each client.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-[#F8FAFC] text-xl md:text-base lg:text-xl xl:text-2xl mb-2">
            Contact Us
          </div>
          {footer[0].contact.map((item, index) => (
            <div
              key={index}
              className="text-gray-400 text-sm md:text-xs lg:text-sm flex flex-col gap-2 w-max md:max-w-40"
            >
              <Link
                href={item.url}
                className="hover:text-white hover:underline"
                target="_blank"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-[#F8FAFC] text-xl md:text-base lg:text-xl xl:text-2xl mb-2">
            Quick Links
          </div>
          {nav[0].navMenu?.map((item, index) => (
            <div
              key={index}
              className="text-gray-400 text-sm md:text-xs lg:text-sm flex flex-col gap-2 w-max"
            >
              <Link
                href={item.path}
                className="hover:text-white hover:underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-[#F8FAFC] text-xl md:text-base lg:text-xl xl:text-2xl mb-2">
            Connect With Us
          </div>
          <div className="text-[#D1D5DB] text-sm flex gap-6 items-center">
            {nav[1].navSocial?.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="relative h-[35px] w-[35px] md:h-[25px] md:w-[25px] lg:h-[35px] lg:w-[35px] group hover:scale-95 transition-transform duration-300 ease-in-out"
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
      </div>
      <div className="wrapper border-t text-[#F8FAFC] flex justify-center items-center">
        © 2024&nbsp;
        <span className="font-semibold">Kanabagi</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
