import Link from 'next/link';

export default function OfficeIdentity() {
  return (
    <div className="hidden lg:flex flex-col lg:gap-0 lg:flex-row lg:justify-between">
      <div className="flex flex-col max-w-48 group">
        <div className="font-semibold text-base xl:text-lg text-gray-950">
          Address:
        </div>
        <Link
          href="https://maps.app.goo.gl/bTXdJVdVkGGhEVFW6"
          className="text-gray-600 text-xs xl:text-base group-hover:text-black group-hover:underline"
          target="blank"
        >
          Jl. Jiwa Besar No. 27, Kota tasikmalaya
        </Link>
      </div>
      <div className="flex flex-col group">
        <div className="font-semibold text-base xl:text-lg text-gray-950">
          Phone:
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=6289518706845&text&type=phone_number&app_absent=0"
          className="text-gray-600 text-xs xl:text-base group-hover:text-black group-hover:underline"
          target="blank"
        >
          +6289518706845
        </Link>
      </div>
      <div className="flex flex-col group">
        <div className="font-semibold text-base xl:text-lg text-gray-950">
          Email:
        </div>
        <Link
          href="mailto:kanabagigroup@gmail.com"
          className="text-gray-600 text-xs xl:text-base group-hover:text-black group-hover:underline"
          target="blank"
        >
          kanabagigroup@gmail.com
        </Link>
      </div>
    </div>
  );
}
