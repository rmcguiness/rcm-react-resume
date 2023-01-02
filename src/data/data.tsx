import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  // SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import HackerRankIcon from '../components/Icon/HackerRankIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ryan McGuiness\' Resume ',
  description: "Personal Website used to desplay my resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ryan McGuiness.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Perficient</strong> helping build modern B2C and B2B ecommerce websites.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can expect me to be <strong className="text-stone-100">Traveling</strong>,
        trying out different <strong className="text-stone-100">Hobbies</strong>, or spending time with my <strong className="text-stone-100">Family</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Ryan_McGuiness_Resume_2022.docx.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'New Jersey, US', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Education', text: 'Lehigh University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Perficient, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name:'JavaScript',
        level: 8,
      },
      {
        name:'TypeScript',
        level: 6,
      },
      {
        name: 'HTML',
        level: 10,
      },
      {
        name: 'CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'C/C++',
        level: 6,
      },
      {
        name: 'Dart',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
      {
        name: 'French',
        level: 0,
      },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MKR Rugstore',
    description: 'A commerce website built using React and handles payments with Stripe. Connected to a Sanity database,  making it easy to add and edit products.',
    url: 'https://mkr-ecommerce-v465.vercel.app/',
    image: portfolioImage1,
  },
  {
    title: 'How-To Generator',
    description: 'A React input form connected to OpenAi’s language model text-davinci-003. Inputting a subject returns a detailed list of how to do said subject.',
    url: 'https://howtogenerator.netlify.app/',
    image: portfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2018 - May 2021',
    location: 'Lehigh University',
    title: 'BA in Computer Science and Economics',
    content: <p className='md:pl-8'>GPA: 3.4/4.0</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2021 - Present',
    location: 'Perficient, Inc.',
    title: 'Software Engineer Consultant',
    content: (
      <div className='md:pl-8'>
        <p>
          Utilized PHP, HTML, CSS, and JS on the Magento Framework to design, build, test, and deploy business and customer-facing webpages.
        </p>
        <br/>
        <p>
          Collaborated with large teams for different companies that had millions of users, to improve speed, UX, and security.
        </p>
        <br/>
        <p>
          Worked on issues with minimal oversight. Received much praise for the code I contributed and received a promotion in less than a year.        
        </p>
        
      </div>
      
    ),
  },
  {
    date: 'September 2020 - January 2021',
    location: 'Lapis Health',
    title: 'Mobile Developer Intern',
    content: (
      <div className='md:pl-8'>
        <p>
          Responsible for the design, implementation, and deployment of a global light/dark theme using Flutter and Dart.
        </p>
        <br/>
        <p>
          Created Dev, Staging, and Prod build configurations using Flutter Flavors connected to their own firebase database.
        </p>
        <br/>
        <p>
          Further developed my multitasking, time-management, and problem-solving abilities by taking this internship during the first semester of my senior year of college.
        </p>
      </div>

    ),
  },
  {
    date: 'May 2020 - September 2020',
    location: 'Hayek.ai',
    title: 'Software Engineer Intern',
    content: (
      <div className='md:pl-8'>
        <p>
          Assisted in building a production-grade React application using Redux, Stripe, Slate.js, and the Material-UI library. 
        </p>
        <br/>
        <p>
          Built a RESTful Python backend using Flask complete with a PostgreSQL database for persistent storage and a complete test suite.
        </p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Technical Advisor',
      text: 'Ryan has consistently been one of our star team members during his time at Perficient. He tackles any challenge given to him and is always seeking to grow.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/129.jpg',
    },
    {
      name: 'Lead Project Engineer',
      text: '9/10 Great progress. Requires very litttle to no supervision. Soon Ryan will be able to handle everything on his own, including bypassing uncertainty and setting up various systems at play.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/12.jpg',
    },
    {
      name: 'Project Manager',
      text: 'I\'ve enjoyed working with Ryan over the past 14 months. He\'s really come into his own and watching him grow has been a pleasure. He\'s done a GREAT job at asking thoughtful questions and finding ways to move forward with his work. He\'s very smart and intuitive and has done an excellent job on the project.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'ryanmcguiness123@gmail.com',
      href: 'mailto:ryanmcguiness123@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New Jersey, US',
      href: 'https://www.google.ca/maps/place/Monmouth+County,+NJ/@40.3025208,-74.5294862,10z',
    },
    {
      type: ContactType.Github,
      text: 'rmcguiness',
      href: 'https://github.com/rmcguiness',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rymcguin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ryan-mcguiness-733265191/'},
  {label: 'HackerRank', Icon: HackerRankIcon, href: 'https://www.hackerrank.com/ryanmcguiness123'}
];
