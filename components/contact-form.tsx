import Link from 'next/link';

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-4 scroll-mt-28" id="contact">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-semibold">Contact Us</div>
        <p className="text-gray-600 text-sm">
          Fill out our online contact form, and we'll respond promptly to
          discuss your needs. Let's create exceptional digital experiences
          together.
        </p>
      </div>
      <input
        type="text"
        placeholder="Name"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />
      <input
        type="text"
        placeholder="Email"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />
      <input
        type="text"
        placeholder="Phone"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />
      <input
        type="text"
        placeholder="Company"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />
      <textarea
        rows={5}
        placeholder="Message"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />
      <button className="bg-[#2e3192] py-2 rounded-lg text-[#F8FAFC] hover:bg-[#4346b1] transition-colors duration-300 ease-in-out">
        Send
      </button>
      <div className="flex justify-between">
        <div className="flex flex-col max-w-48 group">
          <div className="font-semibold text-lg text-gray-950">Address:</div>
          <Link
            href="https://maps.app.goo.gl/21LCzdjhva1SnKzt8"
            className="text-gray-600 group-hover:text-black group-hover:underline"
          >
            Jl. Jiwa Besar No. 27, Kota tasikmalaya
          </Link>
        </div>
        <div className="flex flex-col group">
          <div className="font-semibold text-lg text-gray-950">Phone:</div>
          <Link
            href="https://api.whatsapp.com/send/?phone=6289518706845&text&type=phone_number&app_absent=0"
            className="text-gray-600 group-hover:text-black group-hover:underline"
          >
            +6289518706845
          </Link>
        </div>
        <div className="flex flex-col group">
          <div className="font-semibold text-lg text-gray-950">Email:</div>
          <Link
            href="mailto:kanabagigroup@gmail.com"
            className="text-gray-600 group-hover:text-black group-hover:underline"
          >
            kanabagigroup@gmail.com
          </Link>
        </div>
      </div>
    </form>
  );
}
