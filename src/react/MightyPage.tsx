import React from 'react';
import { MightyPageProps } from 'mighty-academy-widget';

const MightyPage: React.FC<MightyPageProps> = ({
  partnerId,
  targetUrl,
  theme = 'dark',
}) => {
  return (
    <mighty-page
      partnerId={partnerId}
      targetUrl={targetUrl}
      theme={theme}
    ></mighty-page>
  );
};

export default MightyPage;
