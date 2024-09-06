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

// declare namespace JSX {
//   interface IntrinsicElements {
//     'mighty-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//       partnerId?: string;
//       targetUrl?: string;
//       percent?: string;
//       theme?: string;
//     };
//   }
// }