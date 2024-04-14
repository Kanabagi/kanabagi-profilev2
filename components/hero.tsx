import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Hero({
  bgImg,
  image,
  name,
  children,
  button,
  linkTo,
}: {
  bgImg: string;
  image: string;
  name: string;
  children: React.ReactNode;
  button: string;
  linkTo: string;
}) {
  return (
    <div className={`flex min-h-screen ${bgImg} bg-cover bg-center relative`}>
      <div className="absolute bg-[#2e3192]/60 w-full h-screen" />
      <div className="absolute bg-[#F8FAFC]/60 w-full h-[40px] bottom-0" />
      <div className="wrapper flex flex-col items-start justify-center gap-4 z-20 w-[720px]">
        <div className="flex gap-4 items-center">
          <Image src={image} alt="..." width={40} height={40} />
          <div className="text-[24px] text-gray-300 font-semibold">{name}</div>
        </div>
        <div className="text-[64px] font-semibold text-white text-center">
          {children}
        </div>
        <div className="mx-auto">
          <Link
            href={linkTo}
            className="scroll-smooth group relative flex items-center gap-2 text-white font-semibold border-2 hover:bg-[#00A2DF] border-[#00A2DF] rounded-full px-8 py-2 transition-colors duration-300 ease-in-out"
          >
            <div className="text-[24px] group-hover:-translate-x-4 transition-transform duration-300 ease-in-out">
              {button}
            </div>
            <FaArrowRightLong
              size={25}
              className="absolute opacity-0 right-8 group-hover:right-3 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
