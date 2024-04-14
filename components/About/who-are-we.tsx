import Image from 'next/image';

export default function WhoAreWe() {
  return (
    <>
      <div className="wrapper relative flex justify-center items-center gap-20 mb-20">
        <div>
          <Image
            src="/images/about-whoarewe.png"
            alt="..."
            width={510}
            height={510}
          />
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src="/icons/quote.png" alt="..." width={50} height={50} />
              <span className="text-[32px] font-medium text-[#6B7280]">
                Who Are We
              </span>
            </div>
            <div className="text-[48px] font-semibold text-[#020617]">
              Your Partners in Digital Evolution
            </div>
            <div className="flex flex-col gap-10 max-w-[860px] border-t border-[#6B7280] pt-8 text-[20px] text-[#6B7280]">
              <p>
                Your Partners in Digital Evolution" signifies our commitment to
                being more than just service providers; we're collaborators in
                your journey towards digital success. At Kanabagi, we believe in
                forging enduring partnerships that transcend mere transactions.
                With a blend of innovation, expertise, and personalized
                attention, we work alongside you to navigate the ever-evolving
                digital landscape.
              </p>
              <p>
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
          className="absolute opacity-15 top-32 right-0"
        />
      </div>
    </>
  );
}
