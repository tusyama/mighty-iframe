/// <reference types="vite/client" />

declare module 'mightyiframeintegrator' {
    export function initSidebar(selector: string, partnerID: string): void;
  }

  declare global {
    interface Window {
      initSidebar: (selector: string, partnerID: string) => void;
    }
  }
  
  export {};