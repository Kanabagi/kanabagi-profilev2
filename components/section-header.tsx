import Image from 'next/image';

export default function SectionHeader({
  name,
  desc,
  position,
}: {
  name: string;
  desc: string;
  position: string;
}) {
  return (
    <>
      <div className="wrapper relative flex flex-col items-center lg:gap-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[48px] tracking-wide">
          {name}
        </h1>
        <p className="text-[#6B7280] max-w-[600px] text-center text-sm md:text-base lg:text-[20px]">
          {desc}
        </p>

        <Image
          src="/icons/code.png"
          alt="..."
          width={40}
          height={40}
          className={`absolute h-[20px] w-[20px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] ${position}`}
        />
      </div>
    </>
  );
}
