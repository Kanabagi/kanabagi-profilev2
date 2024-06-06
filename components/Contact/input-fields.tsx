import { InputFieldProps, TextAreaFieldProps } from '@/types';

export function InputFields({
  id,
  type,
  placeholder,
  name,
  register,
  validation,
  error,
  ariaInvalid,
}: InputFieldProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        {...register(name, validation)}
        name={name}
        placeholder={placeholder}
        className={`py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out ${
          error && 'ring-red-500 focus:ring-red-500'
        }`}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}

export function TextAreaFields({
  id,
  placeholder,
  name,
  register,
  validation,
  error,
}: TextAreaFieldProps) {
  return (
    <>
      <textarea
        rows={4}
        id={id}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`py-2 px-4 outline-none ring-1 ring-gray-300 focus:ring-gray-800 rounded-lg transition-all duration-300 ease-in-out ${
          error && 'ring-red-500 focus:ring-red-500'
        }`}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}
