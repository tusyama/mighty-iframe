declare module 'mighty-academy-widget' {
  export interface MightyWidgetProps {
    partnerId: string;
    targetUrl?: string;
    percent?: string;
    theme?: string;
    children?: React.ReactNode;
  }

  export interface MightyWrapperProps {
    theme?: string;
    children?: React.ReactNode;
  }

  export interface MightyPageProps {
    partnerId: string;
    targetUrl?: string;
    theme?: string;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'mighty-widget': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      partnerId?: string;
      targetUrl?: string;
      percent?: string;
      theme?: string;
    };
    'mighty-page': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      partnerId?: string;
      targetUrl?: string;
      theme?: string;
    };
  }
}
