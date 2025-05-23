import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="mx-5 grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 sm:mx-10  md:grid-cols-6 ">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-cyan-600" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-4 md:pl-5">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
