import { ReactElement } from 'react';

import { css } from '../../styled-system/css';

interface ContainerProps {
  className?: string;
  children?: ReactElement | ReactElement[];
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`${css({ width: 'container', position: 'relative', padding: '0 15px', margin: '0 auto' })} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
