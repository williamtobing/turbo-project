import React from 'react';
import { Icon } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { palette } from '@/theme.config';

const Footer: React.FC = () => (
  <>
    <div className="bg-darkGunmetal">
      <div className="space-y-2 p-4">
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
            <a
              href="https://www.linkedin.com/in/williamtobing/"
              aria-label="Take a look at my LinkedIn account"
              target="_blank"
              rel="noreferrer"
            >
              <NeuBox
                variant="sm"
                className="border-portage shadow-neu-chalky-4"
              >
                <Icon.IcoLinkedinBox variant="fill" palette={palette.chalky} />
              </NeuBox>
            </a>
            <a
              href="https://github.com/williamtobing"
              aria-label="Take a look at my GitHub account"
              target="_blank"
              rel="noreferrer"
            >
              <NeuBox
                variant="sm"
                className="border-portage shadow-neu-chalky-4"
              >
                <Icon.IcoGithub variant="fill" palette={palette.chalky} />
              </NeuBox>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-bunker flex items-center justify-center px-4">
        <p className="text-myWhite py-2 text-center text-xs font-semibold italic">
          Built by{' '}
          <span className="text-portage">William Suarez Lumbantobing</span>. The
          source code is available on{' '}
          <a
            href="https://github.com/williamtobing/turbo-project"
            className="text-chalky underline"
            aria-label="Take a look at the code on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  </>
);

export default Footer;
