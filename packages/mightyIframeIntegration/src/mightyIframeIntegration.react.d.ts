declare module 'mightyiframeintegration' {
  export interface MightyWidgetProps {
    partnerId: string;
    targetUrl?: string;
    percent?: string;
    theme?: string;
    children?: React.ReactNode;
  }

  export const MightyWidget: React.FC<MightyWidgetProps>;

  export interface MightyWrapperProps {
    theme?: string;
    children?: React.ReactNode;
  }

  export const MightyWrapper: React.FC<MightyWrapperProps>;
}

declare namespace JSX {
  interface IntrinsicElements {
    'mighty-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      partnerId?: string;
      targetUrl?: string;
      percent?: string;
      theme?: string;
    };
  }
}