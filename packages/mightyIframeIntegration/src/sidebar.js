import { checkAuthorization, getTheme, partnerId } from './auth';

class Sidebar {
  constructor() {
    this.currentSidebar = null;
    this.initializedTriggers = new Set();
    this.mightySidebarId = 'mighty-course-sidebar';
    this.mightyStyleId = 'mighty-sidebar-styles';
    this.baseUrl = 'https://test.mighty.study';

    this.addStyles();
  }

  addStyles() {
    if (document.querySelector(this.mightyStyleId)) {
      return;
    }

    const style = document.createElement('style');
    style.id = this.mightyStyleId;
    style.textContent = `
      #${this.mightySidebarId} {
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(100%);
        width: 400px;
        height: 100%;
        color: #AFB4B8;
        background: radial-gradient(100% 60% at 100% 100%, rgba(98, 126, 234, 0.2) 0%, rgba(0, 0, 0, 0.02) 97.05%), rgb(28, 29, 38);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
      }

      #${this.mightySidebarId}.mighty-sidebar-expanded {
        width: 100%;
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

  createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = this.mightySidebarId;

    const header = document.createElement('div');
    header.classList.add('mighty-header-sidebar');
    header.style.display = 'flex';
    header.style.justifyContent = 'flex-start';
    header.style.alignItems = 'center';
    header.style.padding = '10px';

    // Создание кнопки
    const createButton = (svgContent, onClick) => {
      const button = document.createElement('div');
      button.innerHTML = svgContent;
      button.classList.add('mighty-sidebar-button');
      button.onclick = onClick;
      return button;
    };

    // Кнопка закрытия
    const closeButton = createButton(
      '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.6654L7.66667 7.9987L1 1.33203M10.3333 14.6654L17 7.9987L10.3333 1.33203" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      () => {
        this.closeSidebar(sidebar);
      }
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
    sidebar.appendChild(iframe);

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

  openSidebar(partnerId, course, theme) {
    if (this.currentSidebar) {
      this.closeSidebar(this.currentSidebar).then(() => {
        this.createAndOpenSidebar(partnerId, course, theme);
      });
    } else {
      this.createAndOpenSidebar(partnerId, course, theme);
    }
  }

  createAndOpenSidebar(partnerId, course = null, theme = null) {
    const { sidebar, iframe } = this.createSidebar();
    const haveACourse = course !== null && course?.courseId !== null && course?.chapterId !== null && course?.lessonId !== null;
    const currentTheme = theme == null ? getTheme() : theme;
    const themeParams = currentTheme ? `&theme=${currentTheme}` : '&'
    let src = `${this.baseUrl}/space/${partnerId}?partnerID=${partnerId}${themeParams}`;
    if (haveACourse) {
      src = `${this.baseUrl}/courses/${course.courseId}/${course.chapterId}/${course.lessonId}?partnerID=${partnerId}${themeParams}`;
    }
    iframe.src = src;
    document.body.appendChild(sidebar);
    setTimeout(() => {
      sidebar.classList.add('mighty-sidebar-open'); // Animation for new sidebar
    }, 10); // Small delay to apply initial state
    this.currentSidebar = sidebar;
  }

  initSidebar(selector, partnerId, course, theme) {
    if (!checkAuthorization()) {
      console.error('Package not authorized. Please provide a valid partnerId.');
      return;
    }

    if (this.initializedTriggers.has(selector)) {
      return; // Кнопка уже инициализирована
    }

    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("click", () => {
        this.openSidebar(partnerId, course, theme);
      });
      this.initializedTriggers.add(selector);
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  }
}

const sidebar = new Sidebar();

export const initSidebar = ({selector, partnerId, course, theme}) => sidebar.initSidebar(selector, partnerId, course, theme);
