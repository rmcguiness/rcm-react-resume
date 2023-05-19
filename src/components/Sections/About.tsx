import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData,aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const {actions} = heroData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex flex-col  gap-y-4 justify-center md:justify-start">
            <div className="relative self-center h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
            <div className='self-center'>
              <div className="flex gap-x-4 text-neutral-100">
                <Socials />
              </div>
            </div>
            <div className="flex self-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-cyan-600 ring-cyan-600' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
          
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-7 pl-20', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
