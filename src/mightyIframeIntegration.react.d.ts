declare module 'mightyiframeintegration' {
  export interface MightyWidgetProps {
    partnerId: string;
    targetUrl?: string;
    percent?: string;
    theme?: string;
    children?: React.ReactNode;
    logoSrc?: string;
  }

  export const MightyWidget: React.FC<MightyWidgetProps>;

  export interface MightyWrapperProps {
    theme?: string;
    children?: React.ReactNode;
  }

  export const MightyWrapper: React.FC<MightyWrapperProps>;

  export interface MightyPageProps {
    partnerId: string;
    targetUrl?: string;
    theme?: string;
  }

  export const MightyPage: React.FC<MightyPageProps>
  
}

declare namespace JSX {
  interface IntrinsicElements {
    'mighty-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      partnerId?: string;
      targetUrl?: string;
      percent?: string;
      theme?: string;
      logoSrc?: string;
    };
    'mighty-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      partnerId?: string;
      targetUrl?: string;
      theme?: string;
      logoSrc?: string;
    };
  }
}