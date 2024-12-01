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
      { name: 'Facebook', path: '', img: '/icons/facebook.png' },
      { name: 'Instagram', path: '', img: '/icons/instagram.png' },
      { name: 'Linkedin', path: '', img: '/icons/linkedin.png' },
    ],
  },
];

export const footer = [
  {
    contact: [
      {
        name: 'Jl. Jiwa Besar No.27, Kota Tasikmalaya',
        url: 'https://maps.app.goo.gl/bTXdJVdVkGGhEVFW6',
      },
      {
        name: 'kanabagigroup@gmail.com',
        url: 'mailto:kanabagigroup@gmail.com',
      },
      {
        name: '+6282118437032',
        url: 'https://wa.link/hhvxf2',
      },
    ],
  },
];

export const featuredWorksHome = [
  {
    name: 'Widi',
    imgUrl: '/images/widi1.png',
    link: 'http://widi.web.id',
  },
  {
    name: 'Portfolio',
    imgUrl: '/images/portfolio-iki.png',
    link: 'https://rifkyalfarez.vercel.app/',
  },
  {
    name: 'Kanasave',
    imgUrl: '/images/kanasave.png',
    link: 'https://kanasave.vercel.app/',
  },
];

export const servicesHome = [
  {
    name: 'Web Development',
    desc: 'We provide custom website design and development, whenever you need a personal website, corporate website, product catalog or online store we here to help.',
    imgUrl: '/icons/website-white.png',
    imgUrlBlue: '/icons/website-blue.png',
  },
  {
    name: 'UI/UX Development',
    desc: 'Crafting exceptional digital experiences. Our UI/UX developers meticulously blend aesthetics with functionality to create captivating interfaces that resonate with users.',
    imgUrl: '/icons/uiux-w.png',
    imgUrlBlue: '/icons/uiux-blue.png',
  },
];

export const techStacks = [
  {
    name: 'NextJS',
    imgUrl: '/images/nextjs.png',
  },
  {
    name: 'TypeScript',
    imgUrl: '/images/typescript.png',
  },
  {
    name: 'Tailwind CSS',
    imgUrl: '/images/Tailwind.png',
  },
  {
    name: 'Shadcn',
    imgUrl: '/images/shadcn.png',
  },
  {
    name: 'React',
    imgUrl: '/images/react.png',
  },
  {
    name: 'Bootstrap',
    imgUrl: '/images/bootstrap.png',
  },
];

export const featuredWorksDetail = [
  {
    name: 'Widi - Your Licensing Partner',
    imgUrl: '/images/widi1.png',
    link: 'http://widi.web.id',
    desc: 'Widi provides the right legal solutions for businesses in the digital era, with a focus on legal licensing and intellectual property protection.',
  },
  {
    name: 'Personal Portfolio',
    imgUrl: '/images/portfolio-iki.png',
    link: 'https://www.rifkyalfarez.my.id/',
    desc: 'Portfolio website that has a simple and elegant design. This website is made using NextJS and Tailwind CSS.',
  },
  {
    name: 'Kanasave - Click, save, enjoy',
    imgUrl: '/images/kanasave.png',
    link: 'https://kanasave.vercel.app/',
    desc: 'Kanasave is a website that provides downloader tools for social media platforms',
  },
];

export const ourTeam = [
  {
    name: 'Farid F Muharam',
    role: 'Meuli nasgor yuk',
    imgUrl: '/images/farid.png',
    imgUrlHover: '/images/farid-hover.png',
    link: 'https://www.foriio.com/akariku',
  },
  {
    name: 'Ahmad Bisry',
    role: 'Frontend Dev',
    imgUrl: '/images/bisry.png',
    imgUrlHover: '/images/bisry-hover.png',
    link: 'https://ahmadbisry.vercel.app/',
  },
  {
    name: 'Rifky Alfarez',
    role: 'Frontend Dev',
    imgUrl: '/images/rifky.png',
    imgUrlHover: '/images/rifky-hover.png',
    link: 'https://rifkyalfarez.vercel.app/',
  },
];

export const BASE_URL = process.env.BASE_URL || 'https://kanabagi.vercel.app';
