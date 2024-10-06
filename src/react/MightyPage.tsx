import React from 'react';

interface MightyPageProps {
  partnerId: string;
  targetUrl?: string;
  theme?: string;
}

const MightyPage: React.FC<MightyPageProps> = ({ partnerId, targetUrl, theme = 'dark' }) => {
  return <mighty-page partnerId={partnerId} targetUrl={targetUrl} theme={theme}></mighty-page>;
};

export default MightyPage;
