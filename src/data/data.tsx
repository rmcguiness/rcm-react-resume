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
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
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
      href: '/assets/Ryan_McGuiness_Resume_2022.pdf',
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
        level: 7,
      },
      {
        name:'TypeScript',
        level: 5,
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
        level: 6,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'C/C++',
        level: 7,
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
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
    title: 'Software Engineer',
    content: (
      <div className='md:pl-8'>
        <p>
          Implemented business and customer facing web pages to improve the UI/UX as well as improving loading times and increasing security.
        </p>
        <br/>
        <p>
          Participated in a 20 person team doing analysis, design, development, implementation, enhancements, and testing of a high profile ecommerce website utilizing Adobe Commerce, PHP, HTML, CSS, and JS.
        </p>
      </div>
      
    ),
  },
  {
    date: 'September 2020 - January 2021',
    location: 'Lapis Health • Internship',
    title: 'Mobile Developer',
    content: (
      <div className='md:pl-8'>
        <p>
          Utilized Flutter and Dart to implement features, fix bugs, and improve the overall UI/UX of the app. 
        </p>
        <br/>
        <p>
          Led two large feature requests which included creating a dark mode for the application and used Flutter Flavors to provide multiple testing environments each connected to their own Firebase.
        </p>
      </div>

    ),
  },
  {
    date: 'May 2020 - September 2020',
    location: 'Hayek.ai • Internship',
    title: 'Software Engineer',
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
      text: 'rymcguin',
      href: 'https://github.com/rymcguin',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rymcguin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ryan-mcguiness-733265191/'}
];
