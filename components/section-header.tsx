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
      <div className="wrapper relative flex flex-col items-center">
        <h1 className="font-bold text-[48px] tracking-wide">{name}</h1>
        <p className="text-[#6B7280] max-w-[600px] text-center text-[20px]">
          {desc}
        </p>

        <Image
          src="/icons/code.png"
          alt="..."
          width={40}
          height={40}
          className={`absolute ${position}`}
        />
      </div>
    </>
  );
}
