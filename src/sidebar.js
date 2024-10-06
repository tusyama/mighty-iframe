import { checkAuthorization, getTheme } from './auth';

export class Sidebar {
  constructor() {
    this.currentSidebar = null;
    this.initializedTriggers = new Map();
    this.setTriggers = new Set();
    this.mightySidebarId = 'mighty-course-sidebar';
    this.mightyStyleId = 'mighty-sidebar-styles';
    this.baseUrl = 'https://test.mighty.study';
    this.partnerKey = '099d94c60458dd7429e95eaca9cb622c9246a17a7e35d8859284051c48b3fd11';
    this.sidebarMapTriggers = {};
    this.addStyles();
    this.initObserverWhenReady();

    console.log(getTheme());
  }

  addStyles() {
    if (document.querySelector(`#${this.mightyStyleId}`)) {
      return;
    }
    console.log(getTheme());
    const style = document.createElement('style');
    style.id = this.mightyStyleId;
    style.textContent = `
      #${this.mightySidebarId} {
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(100%);
        width: var(--mighty-expanded-width);
        height: 100%;
        color: #AFB4B8;
        background: radial-gradient(100% 60% at 100% 100%, rgba(98, 126, 234, 0.2) 0%, rgba(0, 0, 0, 0.02) 97.05%), rgb(28, 29, 38);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
      }

      #${this.mightySidebarId}.light {
        background: radial-gradient(73.04% 270.4% at 142.59% 81.5%, rgba(98, 126, 234, 0.2) 0%, rgba(0, 0, 0, 0.02) 97.05%), rgb(255, 255, 255);;
        color: #111111;
      }


      #${this.mightySidebarId}.light div {
        color: #111111;
      }

      #${this.mightySidebarId}.mighty-sidebar-expanded {
        width: 100%;
      }

      #${this.mightySidebarId}.mighty-sidebar-expanded .mighty-button-close {
        opacity: 0;
        pointer-events: none;
      }

      #${this.mightySidebarId}.mighty-sidebar-open {
        transform: translateX(0);
      }

      #${this.mightySidebarId} .mighty-header-sidebar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
      }
      #${this.mightySidebarId} .mighty-sidebar-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        color: rgba(255, 255, 255, 0.4);
        transition: all 0.3s ease;
        cursor: pointer;
        background: transparent;
      }
      #${this.mightySidebarId} .mighty-sidebar-button:hover {
        background: rgba(255, 255, 255, 0.15);
      }
      #${this.mightySidebarId} .frame-box {
        position: relative;
        width: 100%;
        height: 100%;
      }
      #${this.mightySidebarId} iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
     @media (max-width: 992px) {
        #${this.mightySidebarId} {
          top: auto;
          bottom: 0;
          transform: translateY(100%);
          width: 100%;
          height: 80%;
          right: 0;
          border-radius: 20px 20px 0 0;
        }
        #${this.mightySidebarId}.mighty-sidebar-open {
          transform: translateY(0);
        }
        #${this.mightySidebarId}.mighty-sidebar-expanded {
          height: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  createSidebar(percent) {
    document.documentElement.style.setProperty('--mighty-expanded-width', this.percent);
    const sidebar = document.createElement('div');
    sidebar.id = this.mightySidebarId;
    // if (percent) {
      // sidebar.classList.add('c');
    // }

    const header = document.createElement('div');
    const frameBox = document.createElement('div');
    header.classList.add('mighty-header-sidebar');
    header.style.display = 'flex';
    header.style.justifyContent = 'flex-start';
    header.style.alignItems = 'center';
    header.style.padding = '10px';
    frameBox.classList.add('frame-box');
    frameBox.setAttribute("id", 'frame-box');
    // Создание кнопки
    const createButton = (svgContent, onClick, additionalClass) => {
      const button = document.createElement('div');
      button.innerHTML = svgContent;
      button.classList.add('mighty-sidebar-button');
      if (additionalClass) {
        button.classList.add(additionalClass);
      }
      button.onclick = onClick;
      return button;
    };

    // Кнопка закрытия
    const closeButton = createButton(
      '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.6654L7.66667 7.9987L1 1.33203M10.3333 14.6654L17 7.9987L10.3333 1.33203" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      () => {
        this.closeSidebar(sidebar);
      },
      'mighty-button-close'
    );

    // Кнопка изменения ширины
    let expanded = false;
    const expandButton = createButton(
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7852 15.3131L8.71817 9.24609M8.71817 9.24609L8.71817 15.3131M8.71817 9.24609L14.7852 9.24609" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.2148 17.7383L23.2818 23.8053M23.2818 23.8053V17.7383M23.2818 23.8053H17.2148" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      () => {
        expanded = !expanded;
        sidebar.classList.toggle('mighty-sidebar-expanded');
      }
    );

    header.appendChild(expandButton);
    header.appendChild(closeButton);
    sidebar.appendChild(header);

    const iframe = document.createElement('iframe');
    frameBox.appendChild(iframe);
    sidebar.appendChild(frameBox);

    return { sidebar, iframe };
  }

  closeSidebar(sidebar) {
    return new Promise((resolve) => {
      if (sidebar.classList.contains('mighty-sidebar-expanded')) {
        // If sidebar is in fullscreen mode, revert it first
        sidebar.classList.remove('mighty-sidebar-expanded');
        setTimeout(() => {
          sidebar.classList.remove('mighty-sidebar-open'); // Sliding animation
          setTimeout(() => {
            if (document.querySelector(`#${this.mightySidebarId}`)) {
              document.body.removeChild(document.querySelector(`#${this.mightySidebarId}`));
            }
            this.currentSidebar = null; // Reset global variable
            resolve();
          }, 300); // Wait for the sliding animation to complete
        }, 300); // Wait for the width change animation to complete
      } else {
        sidebar.classList.remove('mighty-sidebar-open'); // Sliding animation
        setTimeout(() => {
          if (document.querySelector(`#${this.mightySidebarId}`)) {
            document.body.removeChild(document.querySelector(`#${this.mightySidebarId}`));
          }
          this.currentSidebar = null; // Reset global variable
          resolve();
        }, 300); // Wait for the sliding animation to complete
      }
    });
  }

  openSidebar(partnerId, course, theme, percent) {
    if (this.currentSidebar) {
      this.closeSidebar(this.currentSidebar).then(() => {
        this.createAndOpenSidebar(partnerId, course, theme, percent);
      });
    } else {
      this.createAndOpenSidebar(partnerId, course, theme, percent);
    }
  }

  createAndOpenSidebar(partnerId, course = null, theme = null, percent) {
    this.percent = percent ? percent : '40%';
    const { sidebar, iframe } = this.createSidebar(percent);
    const haveACourse = course !== null && course?.courseId !== null;
    const currentTheme = theme == null ? getTheme() : theme;
    const themeParams = currentTheme ? `&theme=${currentTheme}` : '&'

    let src = `${this.baseUrl}/space/${partnerId}?partnerID=${partnerId}&partnerToken=${this.partnerKey}${themeParams}`;

    if (haveACourse) {
      src = `${this.baseUrl}/courses/${course.courseId}`;
    
      if (course.chapterId !== null) {
        src += `/${course.chapterId}`;
      }
    
      if (course.lessonId !== null) {
        src += `/${course.lessonId}`;
      }
      
      src += `?partnerID=${partnerId}&partnerToken=${this.partnerKey}${themeParams}`;
    }

    iframe.src = src;
    document.body.appendChild(sidebar);
    setTimeout(() => {
      sidebar.classList.add('mighty-sidebar-open'); // Animation for new sidebar
      if (theme) {
        sidebar.classList.add(theme)
      }
    }, 10); // Small delay to apply initial state
    this.currentSidebar = sidebar;
  }

  parseCourseFromUrl(url) {
    if (!url) {
      return null;
    }

    const courseIndex = url.indexOf('/courses/');
    if (courseIndex === -1) {
      return null;
    }

    const coursePart = url.slice(courseIndex + 9);
    const parts = coursePart.split('/').filter(Boolean);

    const course = {
      courseId: null,
      chapterId: null,
      lessonId: null
    };

    if (parts.length >= 3) {
      course.lessonId = parts[parts.length - 1];
      course.chapterId = parts[parts.length - 2];
      course.courseId = parts[parts.length - 3];
    } else if (parts.length === 2) {
      course.chapterId = parts[parts.length - 1];
      course.courseId = parts[parts.length - 2];
    } else if (parts.length === 1) {
      course.courseId = parts[parts.length - 1];
    }

    if (!course.courseId && !course.chapterId && !course.lessonId) {
      return null;
    }

    return course;
  }

  initSidebar(selector, partnerId, course, theme, percentW) {
    if (!checkAuthorization()) {
      console.error('Package not authorized. Please provide a valid partnerId.');
      return;
    }
    console.log({ selector, percentW })
    console.log(this.sidebarMapTriggers[selector])
    const percent = percentW ? percentW : null;

    const element = document.querySelector(selector);
    this.setTriggers.add(selector);
    this.sidebarMapTriggers[selector] = { course, theme, partnerId, percent }
    if (element) {
      if (this.initializedTriggers.has(selector)) {
        const { handler } = this.initializedTriggers.get(selector);
        element.removeEventListener("click", handler);
      }

      const handler = () => {
        this.openSidebar(partnerId, course, theme, percent);
      };

      element.addEventListener("click", handler);
      this.initializedTriggers.set(selector, { element, handler, partnerId, course, theme, percent });
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  }

  initObserverWhenReady() {
    if (document.body) {
      this.observeDOM();
    } else {
      document.addEventListener('DOMContentLoaded', () => this.observeDOM());
    }
  }

  observeDOM() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Node.ELEMENT_NODE
              this.removeTrigger(node);
            }
          });
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Node.ELEMENT_NODE
              this.reinitializeTriggers(node);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  removeTrigger(element) {
    this.initializedTriggers.forEach((trigger, selector) => {
      if (trigger.element === element || element.contains(trigger.element)) {
        trigger.element.removeEventListener("click", trigger.handler);
        this.initializedTriggers.delete(selector);
      }
    });
  }

  reinitializeTriggers(element) {
    this.setTriggers.forEach((trigger, selector) => {
      if (element.matches(selector) || element.querySelector(selector)) {
        this.initSidebar(selector, this.sidebarMapTriggers[selector].partnerId, this.sidebarMapTriggers[selector].course, this.sidebarMapTriggers[selector].theme, this.sidebarMapTriggers[selector].percent);
      }
    });
  }
}