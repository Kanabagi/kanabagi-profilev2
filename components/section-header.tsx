import Image from 'next/image';

export default function SectionHeader({
  name,
  desc,
  position,
  style,
}: {
  name: string;
  desc: string;
  position: string;
  style?: string
}) {
  return (
    <>
      <div className={`wrapper relative flex flex-col items-center gap-2 ${style}`}>
        <h1 className="font-bold text-[24px] md:text-[32px] tracking-wide">
          {name}
        </h1>
        <p className="text-[#6B7280] md:max-w-3xl max-w-2xl text-center max-md:text-[16px]">
          {desc}
        </p>

        <Image
          src="/icons/code.png"
          alt="..."
          width={40}
          height={40}
          className={`absolute h-[20px] w-[20px] md:h-[30px] md:w-[30px] ${position}`}
        />
      </div>
    </>
  );
}
