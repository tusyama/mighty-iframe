import { MightyWidgetProps } from 'mighty-academy-widget';
import React from 'react';

const MightyWidget: React.FC<MightyWidgetProps> = ({
  partnerId,
  targetUrl,
  percent = '40%',
  theme = 'dark',
  children,
}) => {
  return (
    <mighty-widget
      partnerId={partnerId}
      targetUrl={targetUrl}
      percent={percent}
      theme={theme}
    >
      {children}
    </mighty-widget>
  );
};

export default MightyWidget;
