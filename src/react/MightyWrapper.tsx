import React, { useEffect } from 'react';
import { authorizePackage } from '../auth';
import { MightyWrapperProps } from 'mighty-academy-widget';

const MightyWrapper: React.FC<MightyWrapperProps> = ({
  theme = 'dark',
  children,
}) => {
  useEffect(() => {
    authorizePackage(theme);
  }, [theme]);

  return <div>{children}</div>;
};

export default MightyWrapper;
