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
    link: 'https://rifky-portfolio.vercel.app/'
  },
  {
    name: 'Kanabagi Chat',
    imgUrl: '/images/ahmad2.png',
    link: '/works'
  },
  {
    name: 'Kanabagi Drive',
    imgUrl: '/images/ahmad1.png',
    link: 'https://kanabagi-drive.vercel.app/'
  },
]

export const servicesHome = [
  {
    name: "Web Development",
    desc: "We provide custom website design and development, whenever you need a personal website, corporate website, product catalog or online store we here to help.",
    imgUrl: '/icons/website-white.png',
    imgUrlBlue: '/icons/website-blue.png',
  },
  {
    name: "UI/UX Development",
    desc: "Crafting exceptional digital experiences. Our UI/UX developers meticulously blend aesthetics with functionality to create captivating interfaces that resonate with users.",
    imgUrl: '/icons/uiux-w.png',
    imgUrlBlue: '/icons/uiux-blue.png',
  }
]
