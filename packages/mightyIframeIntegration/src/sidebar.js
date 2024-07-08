import { checkAuthorization, partnerId } from './auth';

class Sidebar {
  constructor() {
    this.currentSidebar = null;
    this.initializedTriggers = new Set();
    this.mightySidebarId = 'mighty-course-sidebar';
    this.mightyStyleId = 'mighty-sidebar-styles';

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
        right: -400px; /* Initial position off-screen */
        width: 400px;
        height: 100%;
        color: #AFB4B8;
        background: radial-gradient(100% 60% at 100% 100%, rgba(98, 126, 234, 0.2) 0%, rgba(0, 0, 0, 0.02) 97.05%), rgb(28, 29, 38);
        box-shadow: -2px 0 5px rgba(0,0,0,0.5);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        transition: right 0.3s ease, width 0.3s ease; /* Animation for sliding out and width change */
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
      @media (max-width: 600px) {
        #${this.mightySidebarId} {
          width: 100%;
          right: -100%;
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
      // button.onmouseover = () => button.style.background = 'rgba(255, 255, 255, 0.15)';
      // button.onmouseout = () => button.style.background = 'transparent';
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
        sidebar.style.width = expanded ? '100%' : '400px';
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
      if (sidebar.style.width === '100%') {
        // Если сайдбар в полноэкранном режиме, сначала вернуть его в исходное положение
        sidebar.style.width = '400px';
        setTimeout(() => {
          sidebar.style.right = '-400px'; // Анимация заезжания
          setTimeout(() => {
            if (document.querySelector(`#${this.mightySidebarId}`)) {
              document.body.removeChild(document.querySelector(`#${this.mightySidebarId}`));
            }
            this.currentSidebar = null; // Сброс глобальной переменной
            resolve();
          }, 300); // Дождитесь завершения анимации перед удалением
        }, 300); // Дождитесь завершения анимации изменения ширины
      } else {
        sidebar.style.right = '-400px'; // Анимация заезжания
        setTimeout(() => {
          if (document.querySelector(`#${this.mightySidebarId}`)) {
            document.body.removeChild(document.querySelector(`#${this.mightySidebarId}`));
          }
          this.currentSidebar = null; // Сброс глобальной переменной
          resolve();
        }, 300); // Дождитесь завершения анимации перед удалением
      }
    });
  }

  openSidebar(partnerId) {
    if (this.currentSidebar) {
      this.closeSidebar(this.currentSidebar).then(() => {
        this.createAndOpenSidebar(partnerId);
      });
    } else {
      this.createAndOpenSidebar(partnerId);
    }
  }

  createAndOpenSidebar(partnerId) {
    const { sidebar, iframe } = this.createSidebar();
    iframe.src = `https://test.mighty.study/space/${partnerId}?partnerID=${partnerId}`;
    document.body.appendChild(sidebar);
    setTimeout(() => {
      sidebar.style.right = '0'; // Анимация выезжания нового сайдбара
    }, 10); // Небольшая задержка для применения начального состояния
    this.currentSidebar = sidebar;
  }

  initSidebar(selector, partnerId) {
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
        console.log('cliked');
        this.openSidebar(partnerId);
      });
      this.initializedTriggers.add(selector);
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  }
}

const sidebar = new Sidebar();

export const initSidebar = (selector, partnerId) => sidebar.initSidebar(selector, partnerId);
