import React from 'react';
import { SkillCard } from '../components/SkillCard';

export default function InfoPage() {
  const skills = [
    {
      skill: 'UI/UX Design',
      level: 'novice',
      description: ''
    },
    {
      skill: 'Python',
      level: 'intermediate',
      description: ''
    },
    {
      skill: 'Pine Script',
      level: 'intermediate',
      description: ''
    },
    {
      skill: 'Trading (Forex/Crypto)',
      level: 'intermediate',
      description: ''
    },
    {
      skill: 'Online Business Management',
      level: 'novice',
      description: ''
    }
  ] as const;

  return (
    <div className="space-y-16 max-w-4xl">
      <section>
        <h2 className="text-2xl mb-4 text-neutral-900 dark:text-white">Grades</h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          SAT:1470 (Math:800, RW:670)
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          GPA: ~9.2/10
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-8 text-neutral-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.skill}
              skill={skill.skill}
              level={skill.level}
              description={skill.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-neutral-900 dark:text-white">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-normal mb-1 text-neutral-900 dark:text-white">Online Business</h3>
            <p className="text-neutral-600 dark:text-neutral-300 font-light">Summer 2023 + Summer 2024</p>
          </div>
          <div>
            <h3 className="font-normal mb-1 text-neutral-900 dark:text-white">Worked at my parents restaurant</h3>
            <p className="text-neutral-600 dark:text-neutral-300 font-light">Summer 2021 + Summer 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}
