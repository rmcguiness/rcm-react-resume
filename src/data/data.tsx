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
      href: '/assets/ryanMcGuinessResume.docx.pdf',
      text: 'Resume PDF',
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
  description: `Software Developer with over 3 years of professional experience developing full-stack software solutions, specializing in front-end technologies. Proven track record of being a reliable teammate and developer, capable of solving problems and delivering high-quality code.`,
  aboutItems: [
    {label: 'Location', text: 'Orlando, FL', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
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
        name: 'React Native',
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
        name: 'Python',
        level: 8,
      },
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MKR E-commerce',
    description:
      'Built a React e-commerce website connected to a Sanity database and integrated Stripe to handle transactions. I created this site as template to sell future products I make pursuing my hobbies.',
    url: 'https://mkr-ecommerce-v465.vercel.app/',
    image: portfolioImage1,
  },
  {
    title: 'How-To Generator',
    description:
      'Leveraged a React input form connected to OpenAi’s language model, text-DaVinci-003. I created this app to practice interacting with OpenAi’s APIs and integrating them into code.',
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
    content: <p className="md:pl-8"></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '(+3 years) June 2021 - Present',
    location: 'Perficient, Inc.',
    title: 'Software Engineer Consultant',
    content: (
      <div className="md:pl-8">
        <p>
          Developed and optimized headless e-commerce websites using <strong>Next.js</strong>, <strong>React.js</strong>
          , and <strong>JavaScript</strong>. Utilized Next.js’ client and server components to improve performance, SEO,
          and UI/UX.
        </p>
        <br />
        <p>
          Collaborated with management, developers, and quality assurance to create tasks, assign deadlines, and deliver
          software solutions on time in accordance with project goals and expectations.
        </p>
        <br />
        <p>
          Leveraged <strong>Figma</strong> blueprints, adeptly translating them into code, adhering to best coding
          practices for enhanced readability and performance optimization. Then, they were styled using clients'
          preferred styling language, whether <strong>CSS</strong>, <strong>Tailwind</strong>, or <strong>Sass</strong>.
        </p>
        <br />
        <p>
          Spearheaded multiple high-priority items for clients, such as implementing automatic email responses using
          <strong> SMTP</strong>, initializing <strong>Jest</strong> for robust testing, and setting up{' '}
          <strong>Mock Service Workers</strong> to simulate API responses.
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
          Assisted in building a production-grade <strong>React.js</strong> application using <strong>Redux</strong>, <strong>Stripe</strong>, <strong>Slate.js</strong>, and the <strong>Material-UI
          library</strong>.
        </p>
        <br />
        <p>
          Built a RESTful <strong>Python</strong> backend using <strong>Flask</strong> complete with a <strong>PostgreSQL</strong> database for persistent storage and a
          complete test suite.
        </p>
      </div>
    ),
  },
  // {
  //   date: 'May 2020 - September 2020',
  //   location: 'Hayek.ai',
  //   title: 'Software Engineer Intern',
  //   content: (
  //     <div className='md:pl-8'>

  //     </div>
  //   ),
  // },
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rmcguiness'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ryan-mcguiness-733265191/'},
  {label: 'HackerRank', Icon: HackerRankIcon, href: 'https://www.hackerrank.com/ryanmcguiness123'},
];
