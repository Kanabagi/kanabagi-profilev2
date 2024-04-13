'use client';

import Map from '@/components/Map';

export default function Contact() {
  return (
    <div className="flex my-96 wrapper justify-center items-center gap-8 h-[700px]">
      <div className="w-1/2">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold">Contact Us</div>
            <p className="text-gray-600">
              Fill out our online contact form, and we'll respond promptly to
              discuss your needs. Let's create exceptional digital experiences
              together.
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-4 border border-gray-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-4 border border-gray-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone"
            className="py-2 px-4 border border-gray-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="Company"
            className="py-2 px-4 border border-gray-900 rounded-lg"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="py-2 px-4 border border-gray-900 rounded-lg"
          />
          <button className="bg-[#2e3192] py-2 rounded-lg text-[#F8FAFC]">
            Send
          </button>
          <div className="flex justify-between">
            <div className="flex flex-col max-w-48">
              <div className="font-semibold text-lg">Address</div>
              <p>Jl. Jiwa Besar No. 69, Kota tasikmalaya</p>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">Phone</div>
              <p>08971726732</p>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">Email</div>
              <p>kanabagigroup@gmail.com</p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 border bg-slate-300 h-full">
        <Map />
      </div>
    </div>
  );
}
