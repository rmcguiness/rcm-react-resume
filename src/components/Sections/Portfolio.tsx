import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to calculate appropriate scale based on container width
  const calculateScale = useCallback(() => {
    containerRefs.current.forEach(container => {
      if (container) {
        const containerWidth = container.clientWidth;
        // Calculate scale ratio based on container width and the desktop width (1440px)
        const newScale = containerWidth / 1440;

        // Apply the calculated scale to the iframe
        const iframe = container.querySelector('iframe');
        if (iframe) {
          iframe.style.transform = `scale(${newScale})`;
          iframe.style.height = `${900 / newScale}px`; // Adjust height to maintain aspect ratio
        }
      }
    });
  }, []);

  // Calculate scale on mount and whenever window is resized
  useEffect(() => {
    calculateScale();

    const handleResize = () => {
      calculateScale();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateScale]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Personal Projects</h2>
        <div className="w-full md:columns-2">
          {portfolioItems.map((item, index) => {
            const {title, url} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <a
                  className={classNames('block overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl')}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank">
                  <div className="relative h-64 w-full overflow-hidden" ref={el => (containerRefs.current[index] = el)}>
                    <iframe
                      allowFullScreen
                      className="absolute inset-0 border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      src={url}
                      style={{
                        pointerEvents: 'none',
                        width: '1440px',
                        height: '900px',
                        transformOrigin: '0 0',
                        maxWidth: 'none',
                      }}
                      title={title}
                    />
                    <ItemOverlay item={item} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(overlayRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        event.stopPropagation();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        showOverlay ? 'opacity-80' : 'opacity-0 hover:opacity-80',
      )}
      onClick={handleItemClick}
      ref={overlayRef}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-scroll">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </div>
  );
});
