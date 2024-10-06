import React from "react";

interface MightyWidgetProps {
    partnerId: string;
    targetUrl?: string;
    percent?: string;
    theme?: string;
    children?: React.ReactNode;
  }

const MightyWidget: React.FC<MightyWidgetProps> = ({ partnerId, targetUrl, percent = '40%', theme = 'dark', children }) => {

    return <mighty-widget
        partnerId={partnerId}
        targetUrl={targetUrl}
        percent={percent}
        theme={theme}
    >
        {children}
    </mighty-widget>
};

export default MightyWidget;
