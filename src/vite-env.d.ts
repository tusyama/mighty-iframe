/// <reference types="vite/client" />

export interface InitSidebarParams {
  selector: string;
  partnerId: string;
  course?: MightyStudyCourse;
}

export interface MightyStudyCourse {
  courseId: string;
  chapterId: string;
  lessonId: string;
}

declare module 'mightyiframeintegrator' {
    export function initSidebar(selector: string, partnerID: string, course?: MightyStudyCourse): void;
  }

  declare global {
    interface Window {
      initSidebar: (selector: string, partnerID: string, course?: MightyStudyCourse) => void;
    }
  }
  
  export {};