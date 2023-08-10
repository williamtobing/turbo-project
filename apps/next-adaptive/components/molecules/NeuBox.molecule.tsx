import React, { ReactNode, ReactElement } from 'react';
import { cn } from '@/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

const NeuBox: React.FC<Props> = ({ children, className }): ReactElement => (
  <div
    className={cn(
      'border-bunker overflow-hidden border-2',
      'bg-portage shadow-neu-bunker-5 rounded-sm',
      className
    )}
  >
    {children}
  </div>
);

export default NeuBox;
