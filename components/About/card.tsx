import { about } from '@/constants';
import Image from 'next/image';

export default function AboutCard() {
  return (
    <>
      <div className="wrapper flex justify-center items-center gap-8 mb-[125px]">
        {about[0].cardData.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col border border-black/20 rounded-lg px-8 py-14 h-[460px] w-[560px] gap-4 text-black/20 cursor-pointer hover:border-[#00A2DF] hover:bg-[#00A2DF] hover:scale-95 transition-all duration-300 ease-in-out"
          >
            <div className="text-[30px] font-medium group-hover:text-white">
              {item.name}
            </div>
            <div className="text-[16px] group-hover:text-white/90">
              {item.desc}
            </div>
            <Image
              src="/icons/quotefillblack.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-5 right-[52px] opacity-20 group-hover:opacity-0"
            />
            <Image
              src="/icons/quotefillwhite.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-5 right-[52px] opacity-0 group-hover:opacity-40"
            />
            <Image
              src={item.image}
              alt="..."
              width={150}
              height={150}
              className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
            />
            <Image
              src={item.hover}
              alt="..."
              width={150}
              height={150}
              className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </>
  );
}
