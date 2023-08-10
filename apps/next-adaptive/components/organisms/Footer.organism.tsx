import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { palette } from '@/theme.config';
import { cn } from '@/utils';

const Footer: React.FC = () => (
  <>
    <div className="bg-darkGunmetal">
      <div className="space-y-2 p-5">
        <p className="text-myWhite text-xs font-semibold">
          This website is a site that I developed myself for personal
          publication purposes. Thank you for visiting my website. May we all be
          well and always in good health.
        </p>
        <br />
        <div className="flex justify-between">
          <div className="space-y-2">
            <p className="text-myWhite text-xs font-semibold">Best regards,</p>
            <p className="text-myWhite text-xs font-semibold">William S L</p>
          </div>

          <div className="flex items-end space-x-2">
            <NeuBox className={cn('border-portage shadow-neu-chalky-4')}>
              <Icon.IcoLinkedinBox variant="fill" palette={palette.chalky} />
            </NeuBox>
            <NeuBox className={cn('border-portage shadow-neu-chalky-4')}>
              <Icon.IcoGithub variant="fill" palette={palette.chalky} />
            </NeuBox>
          </div>
        </div>
      </div>

      <div className="bg-bunker flex items-center justify-center">
        <p className="text-myWhite py-2 text-center text-xs font-semibold">
          Copyright © 2023 | William Suarez Lumbantobing
        </p>
      </div>
    </div>
  </>
);

export default Footer;
