import { FaHouseChimney, FaLaptopCode } from 'react-icons/fa6';
import { IoIosBriefcase } from 'react-icons/io';
import { RiContactsBook2Fill, RiCustomerService2Fill } from 'react-icons/ri';

export const about = [
  {
    cardData: [
      {
        name: 'Meticulously Planned',
        desc: 'Successful projects begin with meticulous planning. We tailor our services to align with your objectives and timeline, ensuring a seamless launch.',
        image: '/icons/about-card1.png',
        hover: '/icons/about-card1-hover.png',
      },
      {
        name: 'Exquisite Design',
        desc: 'With our mantra of "You envision, we deliver," we create applications that not only meet but exceed user expectations. Our designs are crafted to anticipate and fulfill user needs effortlessly.',
        image: '/icons/about-card2.png',
        hover: '/icons/about-card2-hover.png',
      },
      {
        name: 'Intelligently Executed',
        desc: 'Efficiency is key, and we pride ourselves on finding the smartest solutions. Our applications are user-friendly by design, ensuring ease of use without sacrificing functionality or complexity.',
        image: '/icons/about-card3.png',
        hover: '/icons/about-card3-hover.png',
      },
    ],
  },
];

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
        name: 'Jl. Jiwa Besar No.27, Kota Tasikmalaya',
        url: 'https://maps.app.goo.gl/21LCzdjhva1SnKzt8',
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

export const featuredWorksHome = [
  {
    name: 'Portofolio',
    imgUrl: '/images/iki.png',
    link: 'https://rifky-portfolio.vercel.app/',
  },
  {
    name: 'Kanabagi Chat',
    imgUrl: '/images/ahmad2.png',
    link: '/works',
  },
  {
    name: 'Kanabagi Drive',
    imgUrl: '/images/ahmad1.png',
    link: 'https://kanabagi-drive.vercel.app/',
  },
];
