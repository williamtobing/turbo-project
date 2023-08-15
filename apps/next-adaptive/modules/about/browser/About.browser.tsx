import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { cn } from '@/utils';
import { palette } from '@/theme.config';

export const siteData = [
  {
    version: 'V1',
    text: 'The Version One (V1)',
    linkText: 'williamtobing.github.io/1st',
    url: 'https://williamtobing.github.io/1st',
  },
  {
    version: 'V2',
    text: 'The Version Two (V2)',
    linkText: 'williamtobing.github.io',
    url: 'https://williamtobing.github.io',
  },
  {
    version: 'V3',
    text: 'The Version Three (V3)',
    linkText: 'old.williams.pages.dev',
    url: 'https://old.williams.pages.dev',
  },
  {
    version: 'V4',
    text: 'The Version Four (V4)',
    linkText: 'williams.pages.dev',
    url: 'https://williams.pages.dev',
  },
  {
    version: 'V4.1',
    text: 'The Latest V4 Refinement (V4.1)',
    linkText: 'williamtobing.com',
    url: 'https://www.williamtobing.com',
  },
];

const Folder: React.FC<{
  name: string;
  onDoubleClick: () => void;
}> = ({ name, onDoubleClick }) => {
  const eRef = useRef<HTMLDivElement | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (eRef.current && !eRef.current.contains(event.target as Node))
        setIsHighlighted(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={eRef}
      role="button"
      className="cursor-default"
      aria-label={`Folder ${name}`}
      onClick={() => setIsHighlighted(true)}
      onDoubleClick={onDoubleClick}
      onKeyDown={(e) => e.key === 'Enter' && onDoubleClick()}
      tabIndex={0}
    >
      <div className="flex justify-center">
        <Icon.IcoFolder5
          className="h-10 w-10"
          variant="fill"
          palette={isHighlighted ? palette.daisyBush : palette.brightGray}
        />
      </div>
      <div className="flex items-center justify-center">
        <div
          className={cn(
            'flex w-min space-x-0.5',
            isHighlighted ? 'bg-daisyBush/90' : ''
          )}
        >
          <p
            className={cn(
              'text-center text-sm font-medium',
              isHighlighted ? 'text-pureWhite' : ''
            )}
          >
            {name}
          </p>
          <div className="flex items-center">
            <Icon.IcoExternalLink
              className="h-3.5 w-3.5"
              variant="line"
              palette={isHighlighted ? palette.myWhite : palette.bunker}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About: React.FC = () => (
  <React.Fragment>
    <main className="bg-myWhite flex min-h-[100dvh] flex-col p-4">
      <NeuBox
        className={cn(
          'mx-auto w-full max-w-screen-xl flex-1',
          'border-bunker flex flex-col border-2'
        )}
        variant="xl"
      >
        <header>
          <div className="border-bunker flex justify-between border-b-2">
            <div className="flex items-center">
              <h1 className="pl-1.5 text-lg font-medium">About</h1>
            </div>

            <div className="flex space-x-1 p-1">
              <div className="border-bunker flex h-6 w-6 items-center justify-center rounded border-2">
                <Icon.IcoSubtract variant="line" />
              </div>
              <div className="border-bunker flex h-6 w-6 items-center justify-center rounded border-2">
                <Icon.IcoSquare variant="line" />
              </div>
              <div className="border-bunker flex h-6 w-6 items-center justify-center rounded border-2">
                <Icon.IcoClose variant="line" />
              </div>
            </div>
          </div>

          <div className="border-bunker flex space-x-1 border-b-2 p-1">
            <Link href="/" className="cursor-default" aria-label="Go back">
              <div className="border-bunker hover:bg-daisyBush/50 rounded border-2">
                <Icon.IcoArrowLeft variant="line" />
              </div>
            </Link>

            <div className="border-bunker w-full rounded border-2">
              <div className="flex space-x-0.5 pl-0.5">
                <Icon.IcoFolder3 variant="line" />
                <Icon.IcoArrowRightS variant="line" />
                <p className="font-medium">About</p>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-chalky flex flex-1">
          <section className="border-bunker w-1/5 min-w-[8rem] space-y-1 border-r-2 p-1">
            <Link href="/">
              <div className="hover:border-bunker flex cursor-default items-center space-x-1 rounded border-2 border-transparent">
                <Icon.IcoHome4 variant="line" />
                <p className="font-medium">Home</p>
              </div>
            </Link>

            <div
              className={cn(
                'hover:border-bunker flex cursor-default items-center space-x-1 rounded border-2 border-transparent',
                location.pathname === '/about' ? 'border-bunker' : ''
              )}
            >
              <Icon.IcoProfile variant="line" />
              <p className="font-medium">About</p>
            </div>
          </section>

          <div className="flex flex-col p-1">
            <section className="space-y-2">
              <p className="font-medium">
                This website is the 4th version of the portfolio site that I
                developed myself. And this fourth version is currently a refined
                version of the previous version 4. So this website is the second
                version of version 4 😃
              </p>
              <p className="font-medium">
                Let&apos;s have a look at the history
              </p>

              <div className="flex space-x-4">
                {siteData.map((item, i) => (
                  <Folder
                    key={i}
                    name={item.version}
                    onDoubleClick={() => open(item.url, '_blank')}
                  />
                ))}
              </div>
            </section>

            <footer className="flex flex-1 items-end">
              <p className="text-bunker text-xs font-semibold italic">
                Built by{' '}
                <span className="text-daisyBush">
                  William Suarez Lumbantobing
                </span>
                . The source code is available on{' '}
                <a
                  href="https://github.com/williamtobing/turbo-project"
                  className="text-daisyBush underline"
                  aria-label="Take a look at the code on GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </footer>
          </div>
        </div>
      </NeuBox>
    </main>
  </React.Fragment>
);
