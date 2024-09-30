import React from 'react';

interface MightyPageProps {
  partnerId: string;
  targetUrl?: string;
  theme?: string;
  logoSrc?: string;
}

const MightyPage: React.FC<MightyPageProps> = ({ partnerId, targetUrl, theme = 'dark', logoSrc = '' }) => {
  return <mighty-page partnerId={partnerId} targetUrl={targetUrl} theme={theme} logoSrc={logoSrc}></mighty-page>;
};

export default MightyPage;
