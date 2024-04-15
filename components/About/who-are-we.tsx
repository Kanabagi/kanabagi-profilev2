import Image from 'next/image';

export default function WhoAreWe() {
  return (
    <>
      <div
        id="about"
        className="wrapper min-h-screen relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 max-md:mb-20 max-md:scroll-mt-20"
      >
        <div>
          <Image
            src="/images/about-whoarewe.png"
            alt="..."
            width={510}
            height={510}
            className="w-[300px] h-[300px] md:w-auto md:h-auto"
          />
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/quote.png"
                alt="..."
                width={50}
                height={50}
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
              />
              <span className="text-base md:text-[20px] text-[32px] font-medium text-[#6B7280]">
                Who Are We
              </span>
            </div>
            <div className="text-[24px] md:text-[32px] font-semibold text-[#020617] tracking-wide max-w-sm md:max-w-lg">
              Your Partners in Digital Evolution
            </div>
            <div className="flex flex-col gap-10 max-w-[560px] lg:max-w-[860px] border-t border-[#6B7280] pt-8 text-sm md:text-base lg:text-[20px] text-[#6B7280]">
              <p className='leading-relaxed'>
                Your Partners in Digital Evolution" signifies our commitment to
                being more than just service providers; we're collaborators in
                your journey towards digital success. At Kanabagi, we believe in
                forging enduring partnerships that transcend mere transactions.
                With a blend of innovation, expertise, and personalized
                attention, we work alongside you to navigate the ever-evolving
                digital landscape.
              </p>
              <p className='leading-relaxed'>
                Whether it's website development or UI/UX design, we're here to
                turn your aspirations into achievements. Let's embark on this
                transformative journey together, as your dedicated partners in
                digital evolution.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/icons/quoteblack.png"
          alt="..."
          width={400}
          height={400}
          className="absolute opacity-15 top-[440px] md:top-24 lg:top-32 right-0 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
        />
      </div>
    </>
  );
}
