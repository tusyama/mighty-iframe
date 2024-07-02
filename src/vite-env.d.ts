/// <reference types="vite/client" />

declare module 'mightyiframeintegrator' {
    export function initSidebar(selector: string, courseId: string, lessonId: string): void;
  }

  declare global {
    interface Window {
      initSidebar: (selector: string, courseId: string, lessonId: string) => void;
    }
  }
  
  export {};