import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Illustration } from '@/components/atoms';
import { cn } from '@/utils';
import { palette } from '@/theme.config';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const navOptions = [
  { label: 'Home', value: '/' },
  { label: 'About', value: '/about' },
];

const Sidebar: React.FC<Props> = ({ isOpen, toggle }) => {
  const [path, setPath] = useState('');
  useEffect(() => setPath(location.pathname), []);

  return (
    <React.Fragment>
      <div
        className={cn(
          'bg-bunker/50 fixed z-10 h-full w-full',
          isOpen ? 'right-0' : '-right-full'
        )}
        onClick={toggle}
      ></div>

      <nav
        className={cn(
          'bg-portage border-bunker',
          'fixed z-20 h-full w-4/5 max-w-lg border-l-4 duration-500 ease-out',
          isOpen ? 'right-0' : '-right-full'
        )}
      >
        <ul className="space-y-8 pr-8 pt-8">
          {navOptions.map((item, i) => (
            <li key={i} className="text-right">
              <Link href={item.value} passHref>
                <p
                  className={cn(
                    'text-myWhite inline-block cursor-pointer text-3xl font-semibold',
                    item.value === path
                      ? 'text-chalky'
                      : 'text-myWhite hover:text-chalky'
                  )}
                >
                  {item.label}
                </p>
              </Link>
              {item.value === path && (
                <>
                  <br />
                  <Illustration.Vector218
                    className="float-right -mt-1 h-5 w-40"
                    palette={palette.daisyBush}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
