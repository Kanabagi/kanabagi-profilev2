'use client';

import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';
import { PulseLoader } from 'react-spinners';
import Alert from '../alert';
import ContactHeader from './contact-header';
import OfficeIdentity from './office-identity';

interface FormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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

  const removeAlert = () => {
    setSuccess(false);
    setError(false);
  };

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
      console.log('Message sent successfully:', response.data);
      setSuccess(true);
      reset();
    } catch (error) {
      setError(true);
      console.error('Failed to send message:', error);
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
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <input
        type="text"
        id="name"
        {...register('name', { required: 'Please enter your name' })}
        name="name"
        placeholder="Name*"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />

      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        type="email"
        id="email"
        {...register('email', {
          required: 'Please enter your email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:
              'Invalid email address. Please use example@example.com format',
          },
        })}
        aria-invalid={errors.email ? 'true' : 'false'}
        name="email"
        placeholder="Email*"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />

      {errors.phone && (
        <span className="text-red-500">{errors.phone.message}</span>
      )}
      <input
        type="text"
        id="phone"
        placeholder="Phone*"
        {...register('phone', {
          required: 'Please enter your phone number',
          pattern: {
            value: /^.{9,15}$/,
            message: 'phone number should be 9 to 15 characters long.',
          },
        })}
        name="phone"
        aria-invalid={errors.phone ? 'true' : 'false'}
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />

      <input
        type="text"
        id="company"
        {...register('company')}
        placeholder="Company"
        name="company"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      />

      {errors.message && (
        <span className="text-red-500">{errors.message.message}</span>
      )}
      <textarea
        rows={5}
        id="message"
        {...register('message', { required: 'Please enter your message' })}
        placeholder="Message*"
        name="message"
        className="py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out"
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
      {success && (
        <Alert
          status="Success!"
          message="Your message has been sent."
          Icon={FaCheckCircle}
          iconColor="text-green-500"
          borderColor="border-green-500"
          onClick={removeAlert}
        />
      )}
      {error && (
        <Alert
          status="Error!"
          message="Something went wrong, please try again later."
          Icon={FaCircleXmark}
          iconColor="text-red-500"
          borderColor="border-red-500"
          onClick={removeAlert}
        />
      )}
      <OfficeIdentity />
    </form>
  );
}
