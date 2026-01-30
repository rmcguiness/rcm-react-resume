import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <span className="text-center text-lg font-bold text-neutral-800 mb-3">{name}</span>
      <div className="flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-neutral-700">{name}</span>
        <span className="text-sm text-neutral-500">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-200">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 transition-all duration-500" 
          style={{width: `${percentage}%`}} 
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
