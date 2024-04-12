import { FaHouseChimney, FaLaptopCode } from 'react-icons/fa6';
import { IoIosBriefcase } from 'react-icons/io';
import { RiContactsBook2Fill, RiCustomerService2Fill } from 'react-icons/ri';

export const nav = [
  {
    navMenu: [
      { name: 'Home', path: '/', Icon: FaHouseChimney },
      { name: 'About', path: '/about', Icon: RiContactsBook2Fill },
      { name: 'Services', path: '/services', Icon: FaLaptopCode },
      { name: 'Works', path: '/works', Icon: IoIosBriefcase },
      { name: 'Contact', path: '/contact', Icon: RiCustomerService2Fill },
    ],
  },
  {
    navSocial: [
      { name: 'Facebook', path: '/', img: '/icons/facebook.png' },
      { name: 'Instagram', path: '/', img: '/icons/instagram.png' },
      { name: 'Linkedin', path: '/', img: '/icons/linkedin.png' },
    ],
  },
];

export const footer = [
  {
    contact: [
      {
        name: 'Jl. Jiwa Besar No.6, Kota Tasikmalaya',
        url: 'https://maps.app.goo.gl/6RjgyyNbSw3yKeZD8',
      },
      {
        name: 'kanabagigroup@gmail.com',
        url: 'mailto:kanabagigroup@gmail.com',
      },
      {
        name: '+6289518706845',
        url: 'https://api.whatsapp.com/send/?phone=6289518706845&text&type=phone_number&app_absent=0',
      },
    ],
  },
];
