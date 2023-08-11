import React, { ReactNode, ReactElement } from 'react';
import { cn } from '@/utils';

type Props = {
  children: ReactNode;
  variant: 'sm' | 'md' | 'lg';
  className?: string;
};

const NeuBox: React.FC<Props> = ({
  children,
  variant,
  className,
}): ReactElement => (
  <>
    {variant === 'sm' && (
      <div
        className={cn(
          'overflow-hidden rounded border-2',
          'bg-portage border-bunker shadow-neu-bunker-4',
          className
        )}
      >
        {children}
      </div>
    )}

    {variant === 'md' && (
      <div
        className={cn(
          'overflow-hidden rounded border-[2.5px]',
          'bg-portage border-bunker shadow-neu-bunker-5',
          className
        )}
      >
        {children}
      </div>
    )}

    {variant === 'lg' && (
      <div
        className={cn(
          'overflow-hidden rounded border-[3px]',
          'bg-portage border-bunker shadow-neu-bunker-6',
          className
        )}
      >
        {children}
      </div>
    )}
  </>
);

export default NeuBox;
