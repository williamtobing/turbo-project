import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { DateFormat, cn } from '@/utils';

const roleData = [
  'Frontend Engineer',
  'Web Developer',
  'UI Designer',
  'Web Designer',
];

const timelineData = [
  {
    company: 'Juragan Material',
    description: 'Frontend Engineer at Juragan Material',
    date: new Date('2023-02'),
    progress: 0.75,
    latest: true,
  },
  {
    company: 'Pintap',
    description: 'Frontend Engineer at Pintap',
    date: new Date('2022-02'),
    progress: 1,
  },
  {
    company: 'XL Axiata',
    description: 'Web Developer at XL Axiata',
    date: new Date('2021-03'),
    progress: 1,
  },
  {
    company: 'Wedocation',
    description: 'Freelance at Wedocation',
    date: new Date('2020-11'),
    progress: 1,
  },
  {
    company: 'Progate',
    description: 'Mentor at Progate',
    date: new Date('2020-09'),
    progress: 1,
  },
  {
    company: 'Super Indo',
    description: 'Intern at Super Indo',
    date: new Date('2019-06'),
    progress: 1,
  },
  {
    company: null,
    description: 'Start College',
    date: new Date('2017-08'),
    progress: 1,
  },
];

export const Home: React.FC = () => (
  <div className="bg-myWhite mx-auto h-screen max-w-lg">
    <div className="space-y-4 py-4">
      <div className="space-y-2 px-4">
        <div className="relative">
          <NeuBox className="absolute right-0 cursor-pointer p-1">
            <Icon.IcoSoundModule className="h-5 w-5" variant="fill" />
          </NeuBox>

          <p className="text-4xl font-bold">Hi there,</p>
          <p className="text-5xl font-extrabold">
            I am <span className="text-daisyBush">William</span>
          </p>
          <p className="text-2xl font-medium italic">Software Engineer</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {roleData.map((role, i) => (
            <NeuBox key={i}>
              <div className="flex">
                <div className="bg-chalky border-bunker flex items-center justify-center border-r-2 p-1.5">
                  <Icon.IcoCodeSSlash className="h-5 w-5" variant="line" />
                </div>
                <div className="mx-1.5 flex items-center overflow-hidden">
                  <p className="whitespace-nowrap text-sm font-semibold">
                    {role}
                  </p>
                </div>
              </div>
            </NeuBox>
          ))}
        </div>
      </div>

      <div className="space-y-2 px-4">
        <p className="text-2xl font-bold underline">Timeline</p>

        {timelineData.map((item, i) => (
          <NeuBox
            key={i}
            className={cn(
              'relative',
              item.latest ? 'bg-dullLavender animate-pulse' : ''
            )}
          >
            <div className="bg-chalky absolute right-0 mt-0.5 w-[4.75rem] px-2">
              <p className="text-right text-xs font-semibold">
                {DateFormat(item.date).toShortMonth()}
              </p>
            </div>

            <div className="p-3.5">
              <p className="text-myWhite font-bold">{item.description}</p>
            </div>
          </NeuBox>
        ))}
      </div>
    </div>
  </div>
);
