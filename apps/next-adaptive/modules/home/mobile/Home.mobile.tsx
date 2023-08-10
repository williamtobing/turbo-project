import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';

export const Home: React.FC = () => (
  <div className="bg-myWhite mx-auto h-screen max-w-lg">
    <div className="space-y-4 py-4">
      <div className="space-y-2 px-4">
        <div className="relative">
          <NeuBox className="absolute right-0 cursor-pointer p-1">
            <Icon.IcoSoundModule variant="fill" />
          </NeuBox>

          <p className="text-4xl font-bold">Hi there,</p>
          <p className="text-5xl font-extrabold">
            I am <span className="text-daisyBush">William</span>
          </p>
          <p className="text-2xl font-medium italic">Software Engineer</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <NeuBox>
            <div className="flex space-x-2">
              <div className="bg-chalky border-bunker border-r-2 p-1.5">
                <Icon.IcoCodeSSlash className="h-5 w-5" variant="line" />
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold">Frontend Engineer</p>
              </div>
            </div>
          </NeuBox>
          <NeuBox>
            <div className="flex space-x-2">
              <div className="bg-chalky border-bunker border-r-2 p-1.5">
                <Icon.IcoGlobal className="h-5 w-5" variant="line" />
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold">Web Developer</p>
              </div>
            </div>
          </NeuBox>
          <NeuBox>
            <div className="flex space-x-2">
              <div className="bg-chalky border-bunker border-r-2 p-1.5">
                <Icon.IcoPages className="h-5 w-5" variant="line" />
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold">UI Designer</p>
              </div>
            </div>
          </NeuBox>
          <NeuBox>
            <div className="flex space-x-2">
              <div className="bg-chalky border-bunker border-r-2 p-1.5">
                <Icon.IcoMacbook className="h-5 w-5" variant="line" />
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold">Web Designer</p>
              </div>
            </div>
          </NeuBox>
        </div>
      </div>

      {/* <div className="px-4">
        <p className="text-2xl font-bold underline">Timeline</p>
      </div> */}
    </div>
  </div>
);
