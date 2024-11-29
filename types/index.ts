import { FieldError, UseFormRegister } from 'react-hook-form';

export interface homeCardProps {
  name: string;
  imgUrl: string;
  link: string;
}

export type heroProps = {
  bgUrl: string;
  linkTo: string;
  pageName: string;
  title: string;
  titleStyle?: string;
  blueWord: string;
  buttonName: string;
  chatPosition?: string;
  buttonSize?: string;
  subTitle: string;
  subDesc: string;
  quotePosition?: string;
};

export interface FormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  validation?: any;
  error?: FieldError;
  ariaInvalid?: boolean;
}

export interface TextAreaFieldProps {
  id: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  validation?: any;
  error?: FieldError;
}
