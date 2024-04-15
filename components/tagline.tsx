import Image from 'next/image';

export default function Tagline() {
  return (
    <>
      <div className="relative wrapper flex flex-col justify-center items-center py-20">
        <span className="z-10 max-w-[860px] text-center text-[32px] font-semibold pb-2">
          Your Dream, Our Digital Canvas Painting Your Vision with Innovative
          Web Solutions.
        </span>
        <p className="max-w-[1080px] text-center text-[#6B7280] text-[24px] border-t border-[#4B5563] pt-2">
          Embrace the art of digital innovation with us. We transform your ideas
          into dynamic web realities, ensuring your vision shines online.
        </p>
        <Image
          src="/icons/quote.png"
          alt=""
          width={75}
          height={75}
          className="absolute top-[50px] translate-x-[490px] hidden md:block"
        />
        <Image
          src="/icons/quote.png"
          alt=""
          width={40}
          height={40}
          className="block md:hidden"
        />
      </div>
    </>
  );
}
