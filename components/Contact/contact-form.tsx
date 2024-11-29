'use client';

import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { FormInput } from '@/types';
import { ToastError, ToastSuccess } from '../Toast';
import ContactHeader from './contact-header';
import OfficeIdentity from './office-identity';
import { InputFields, TextAreaFields } from './input-fields';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const onSubmit = async (data: FormInput) => {
    try {
      setLoading(true);
      setShowButton(false);
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nMessage: ${data.message}`,
        }
      );
      ToastSuccess({ message: 'Message sent successfully!' });
      reset();
    } catch (error) {
      ToastError({ message: 'Failed to send message' });
    } finally {
      setLoading(false);
      setShowButton(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 scroll-mt-28"
      id="contact"
      noValidate
    >
      <ContactHeader />
      <InputFields
        id="name"
        type="text"
        placeholder="Name*"
        name="name"
        register={register}
        validation={{ required: 'Please enter your name' }}
        error={errors.name}
        ariaInvalid={!!errors.name}
      />
      <InputFields
        id="email"
        type="email"
        placeholder="Email*"
        name="email"
        register={register}
        validation={{
          required: 'Please enter your email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:
              'Invalid email address. Please use example@example.com format',
          },
        }}
        error={errors.email}
        ariaInvalid={!!errors.email}
      />
      <InputFields
        id="phone"
        type="text"
        placeholder="Phone*"
        name="phone"
        register={register}
        validation={{
          required: 'Please enter your phone number',
          pattern: {
            value: /^.{9,15}$/,
            message: 'phone number should be 9 to 15 characters long.',
          },
        }}
        error={errors.phone}
        ariaInvalid={!!errors.phone}
      />
      <InputFields
        id="company"
        type="text"
        placeholder="Company"
        name="company"
        register={register}
        validation={{}}
        error={errors.company}
      />
      <TextAreaFields
        id="message"
        placeholder="Message*"
        name="message"
        register={register}
        validation={{ required: 'Please enter your message' }}
        error={errors.message}
      />
      {showButton && (
        <button
          type="submit"
          className="bg-[#2e3192] py-2 rounded-lg text-[#F8FAFC] hover:bg-[#4346b1] transition-colors duration-300 ease-in-out"
        >
          Send
        </button>
      )}
      {loading && (
        <div className="flex justify-center">
          <PulseLoader size={15} color={`#2e3192`} speedMultiplier={0.5} />
        </div>
      )}
      <OfficeIdentity />
    </form>
  );
}
