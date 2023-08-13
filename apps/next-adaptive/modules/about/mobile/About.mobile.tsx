import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { Footer, Sidebar } from '@/components/organisms';
import { useToggle } from '@/hooks';

const siteData = [
  {
    text: 'The Version One (V1)',
    linkText: 'williamtobing.github.io/1st',
    url: 'https://williamtobing.github.io/1st',
  },
  {
    text: 'The Version Two (V2)',
    linkText: 'williamtobing.github.io',
    url: 'https://williamtobing.github.io',
  },
  {
    text: 'The Version Three (V3)',
    linkText: 'old.williams.pages.dev',
    url: 'https://old.williams.pages.dev',
  },
  {
    text: 'The Version Four (V4)',
    linkText: 'williams.pages.dev',
    url: 'https://williams.pages.dev',
  },
  {
    text: 'The Latest V4 Refinement (V4.1)',
    linkText: 'williamtobing.com',
    url: 'https://www.williamtobing.com',
  },
];

export const About = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <React.Fragment>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

      <main className="bg-myWhite mx-auto h-[100dvh] max-w-lg">
        <div className="flex h-full flex-col pt-4">
          <header className="px-4">
            <div className="relative">
              <NeuBox
                variant="sm"
                className="absolute right-0 cursor-pointer p-1"
                role="button"
                aria-label="Main Menu"
                onClick={toggleSidebar}
                onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
                tabIndex={0}
              >
                <Icon.IcoMenuUnfold className="h-5 w-5" variant="fill" />
              </NeuBox>
            </div>
            <h1 className="pb-2 text-4xl font-bold">About</h1>
          </header>

          <section className="flex-1 px-4">
            <div className="space-y-2">
              <p>
                This website is the 4th version of the portfolio site that I
                developed. And this fourth version is currently a refined
                version of the previous version 4. So this website is the second
                version of version 4 😃
              </p>

              <p>Let&apos;s have a look at the history</p>

              <ul className="ml-5 space-y-2">
                {siteData.map((item, i) => (
                  <li key={i} className="list-disc">
                    <p>{item.text}</p>
                    <a
                      href={item.url}
                      className="text-daisyBush italic underline"
                      aria-label="Take a look at my first website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};
