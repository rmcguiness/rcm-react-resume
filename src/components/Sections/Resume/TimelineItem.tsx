import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItem }> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-semibold text-cyan-700 sm:flex-none">{location}</span>
          <span className="text-neutral-400">•</span>
          <span className="flex-1 text-sm text-neutral-600 sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="text-neutral-700">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
