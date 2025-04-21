import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const {actions} = heroData;
  return (
    <Section className="bg-neutral-800 sm:mt-5" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex flex-col  justify-center gap-y-4 md:justify-start">
            <div className="relative h-24 w-24 self-center overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" fill objectFit='cover' src={profileImageSrc} />
            </div>
            <div className="self-center">
              <div className="flex gap-x-4 text-neutral-100">
                <Socials />
              </div>
            </div>
            <div className="flex gap-x-4 self-center">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
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
        <div
          className={classNames('col-span-1 flex flex-col gap-y-7 md:pl-20 ', {'md:col-span-3 ': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-center text-2xl font-bold text-white md:text-left">About me</h2>
            <p className="prose prose-sm text-center text-gray-300 sm:prose-base md:text-left">{description}</p>
          </div>
          <ul className="m-auto grid grid-cols-1 gap-6 justify-self-center sm:grid-cols-2 md:m-0">
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
