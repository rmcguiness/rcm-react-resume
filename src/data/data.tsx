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
import HackerRankIcon from '../components/Icon/HackerRankIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
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
  title: "Ryan McGuiness' Resume ",
  description: 'Personal Website used to desplay my resume',
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ryan McGuiness.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Perficient</strong> helping build modern B2C and B2B ecommerce websites.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can expect me to be <strong className="text-stone-100">Traveling</strong>, trying out
        different <strong className="text-stone-100">Hobbies</strong>, or spending time with my{' '}
        <strong className="text-stone-100">Family</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Ryan-McGuiness-Resume.docx',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Software Engineer with 5 years of professional experience building enterprise-level, scalable web applications. Specializes in modern JavaScript frameworks including React, Next.js, and TypeScript. Proven track record of delivering high-quality code across multiple client engagements, improving test coverage and code quality, and collaborating effectively with cross-functional teams. Passionate about frontend development, performance optimization, and creating exceptional user experiences.`,
  aboutItems: [
    { label: 'Location', text: 'Orlando, FL', Icon: MapIcon },
    { label: 'Age', text: '26', Icon: CalendarIcon },
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    { label: 'Education', text: 'Lehigh University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Perficient, inc.', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      {
        name: 'TypeScript',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'React.js',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 9,
      },
      {
        name: 'HTML/CSS',
        level: 10,
      },
      {
        name: 'Tailwind CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Practices',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Jest',
        level: 8,
      },
      {
        name: 'CI/CD',
        level: 7,
      },
      {
        name: 'Figma',
        level: 8,
      },
      {
        name: 'TDD',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Basic Social Media Platform',
    description: 'A full-stack social media application built with Next.js frontend connected to a Node.js backend. Features include user authentication, post creation and management, and real-time updates. Currently developing a backend API to handle authentication, user profiles, and post interactions.',
    url: 'https://social-media-desktop.vercel.app/',
  },
  {
    title: 'MKR E-commerce',
    description:
      'A fully functional e-commerce storefront with shopping cart state management and integrated payment processing. Built to practice designing modern e-commerce interfaces and handling secure transactions using React, Next.js, Stripe API, and Sanity CMS.',
    url: 'https://mkr-ecommerce.vercel.app/',
  },
  {
    title: 'NextPlayground',
    description: 'An experimental application built to implement and explore advanced concepts from Next.js official documentation. Serves as a testing ground for new features including server components, routing patterns, and optimization techniques.',
    url: 'https://next-playground-rcm.vercel.app/',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2018 - May 2021',
    location: 'Lehigh University',
    title: 'B.A. Computer Science',
    content: (
      <p className="md:pl-8">
        <strong>Relevant Coursework:</strong> Design and Analysis of Algorithms, Programming Languages, Software Engineering, Systems Software
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '(4+ years) June 2021 - Present',
    location: 'Perficient, Inc.',
    title: 'Software Engineer',
    content: (
      <div className="md:pl-6">
        <p>
          Built enterprise-level, scalable, high-performing applications utilizing <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>React.js</strong>, HTML, and CSS for clients across diverse industries including telecommunications, sports media, and manufacturing.
        </p>
        <br />
        <p>
          Spearheaded testing initiative that increased code coverage from 40% to over 90% by implementing comprehensive <strong>Jest</strong> test suite, significantly enhancing code reliability and quality.
        </p>
        <br />
        <p>
          Collaborated with cross-functional teams of 2-8 developers alongside Project Managers, Business Analysts, and QA teams to plan, design, build, test, and deploy technical solutions that fulfill and exceed project requirements.
        </p>
        <br />
        <p>
          Designed and developed applications using test-driven development and best practices, translating <strong>Figma</strong> designs into production-ready code with <strong>Tailwind CSS</strong> and custom styling.
        </p>
        <br />
        <p>
          Proactively identified and resolved existing and potential bugs arising from new features, maintaining high code quality standards across multiple client projects.
        </p>
        <br />
        <p>
          Successfully delivered features across 4 major client engagements, consistently meeting deadlines and project requirements.
        </p>
      </div>
    ),
  },
  {
    date: 'September 2020 - January 2021',
    location: 'Lapis Health',
    title: 'Mobile Developer Intern',
    content: (
      <div className="md:pl-8">
        <p>
          Assisted in the design and development of a production-grade mobile application using <strong>Flutter</strong>, <strong>Dart</strong>, and <strong>Firebase</strong>.
        </p>
        <br />
        <p>
          Implemented mobile-first design principles and UI/UX best practices to create responsive applications that work seamlessly across all screen sizes.
        </p>
        <br />
        <p>
          Contributed to building features for a healthcare-focused mobile platform, gaining experience in the intersection of technology and healthcare.
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
      text: "I've enjoyed working with Ryan over the past 14 months. He's really come into his own and watching him grow has been a pleasure. He's done a GREAT job at asking thoughtful questions and finding ways to move forward with his work. He's very smart and intuitive and has done an excellent job on the project.",
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
      text: 'Orlando, FL',
      href: 'https://maps.app.goo.gl/FD7ASfDa5ELJ6KTs6',
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
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/rmcguiness' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ryan-mcguiness-733265191/' },
  { label: 'HackerRank', Icon: HackerRankIcon, href: 'https://www.hackerrank.com/ryanmcguiness123' },
];
