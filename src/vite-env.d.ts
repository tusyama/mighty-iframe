/// <reference types="vite/client" />

export interface InitSidebarParams {
  selector: string;
  partnerId: string;
  course?: MightyStudyCourse;
  theme?: 'dark' | 'light';
  percent?: string;
}

export interface MightyStudyCourse {
  courseId: string;
  chapterId: string;
  lessonId: string;
}

declare module 'mightyiframeintegrator' {
    export function initSidebar(params: InitSidebarParams): void;
  }

  declare global {
    interface Window {
      initSidebar: (params: InitSidebarParams) => void;
    }
  }
  
  export {};