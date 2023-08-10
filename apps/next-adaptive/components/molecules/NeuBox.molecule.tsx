import React, { ReactNode, ReactElement } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
};

const NeuBox: React.FC<Props> = ({ children, className }): ReactElement => (
  <div
    className={clsx(
      className,
      'border-bunker overflow-hidden border-2',
      'bg-portage shadow-neu-bunker rounded-sm'
    )}
  >
    {children}
  </div>
);

export default NeuBox;
