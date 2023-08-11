import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { Footer, Sidebar } from '@/components/organisms';
import { useToggle } from '@/hooks';

export const About = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <React.Fragment>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

      <div className="bg-myWhite mx-auto h-[100dvh] max-w-lg">
        <div className="flex h-full flex-col">
          <div className="flex-1 p-4">
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

              <div className="space-y-2">
                <h1 className="pb-2 text-4xl font-bold">About</h1>
                <p>
                  This site is the 4th version of the portfolio site that I
                  developed. And this fourth version is currently a refined
                  version of the previous version 4. So this site is version 2
                  of version 4 😃
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
