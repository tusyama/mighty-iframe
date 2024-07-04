import { checkAuthorization, partnerId } from './auth';

let currentSidebar = null; // Глобальная переменная для отслеживания текущего открытого сайдбара
const initializedTriggers = new Set();

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.id = 'course-sidebar';
  sidebar.style.position = 'fixed';
  sidebar.style.top = '0';
  sidebar.style.right = '-400px'; // Начальная позиция за пределами экрана
  sidebar.style.width = '400px';
  sidebar.style.height = '100%';
  sidebar.style.color = '#AFB4B8';
  sidebar.style.background = 'radial-gradient(100% 60% at 100% 100%, rgba(98, 126, 234, 0.2) 0%, rgba(0, 0, 0, 0.02) 97.05%), rgb(28, 29, 38)';
  sidebar.style.boxShadow = '-2px 0 5px rgba(0,0,0,0.5)';
  sidebar.style.zIndex = '1000';
  sidebar.style.display = 'flex';
  sidebar.style.flexDirection = 'column';
  sidebar.style.transition = 'right 0.3s ease, width 0.3s ease'; // Анимация выезжания и изменения ширины

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'flex-start';
  header.style.alignItems = 'center';
  header.style.padding = '10px';

  // Создание кнопки
  function createButton(svgContent, onClick) {
    const button = document.createElement('div');
    button.innerHTML = svgContent;
    button.style.cssText = `
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
    `;
    button.onmouseover = () => button.style.background = 'rgba(255, 255, 255, 0.15)';
    button.onmouseout = () => button.style.background = 'transparent';
    button.onclick = onClick;
    return button;
  }

  // Кнопка закрытия
  const closeButton = createButton(
    '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.6654L7.66667 7.9987L1 1.33203M10.3333 14.6654L17 7.9987L10.3333 1.33203" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    () => {
      closeSidebar(sidebar);
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
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  sidebar.appendChild(iframe);

  return { sidebar, iframe };
}

function closeSidebar(sidebar) {
  return new Promise((resolve) => {
    if (sidebar.style.width === '100%') {
      // Если сайдбар в полноэкранном режиме, сначала вернуть его в исходное положение
      sidebar.style.width = '400px';
      setTimeout(() => {
        sidebar.style.right = '-400px'; // Анимация заезжания
        setTimeout(() => {
          if (document.querySelector('#course-sidebar')) {
            document.body.removeChild(document.querySelector('#course-sidebar'));
          }
          currentSidebar = null; // Сброс глобальной переменной
          resolve();
        }, 300); // Дождитесь завершения анимации перед удалением
      }, 300); // Дождитесь завершения анимации изменения ширины
    } else {
      sidebar.style.right = '-400px'; // Анимация заезжания
      setTimeout(() => {
        if (document.querySelector('#course-sidebar')) {
          document.body.removeChild(document.querySelector('#course-sidebar'));
        }
        currentSidebar = null; // Сброс глобальной переменной
        resolve();
      }, 300); // Дождитесь завершения анимации перед удалением
    }
  });
}

function openSidebar(partnerId) {
  if (currentSidebar) {
    closeSidebar(currentSidebar).then(() => {
      createAndOpenSidebar(partnerId);
    });
  } else {
    createAndOpenSidebar(partnerId);
  }
}

function createAndOpenSidebar(partnerId) {
  const { sidebar, iframe } = createSidebar();
  iframe.src = `https://test.mighty.study/space/${partnerId}?partnerID=${partnerId}`;
  document.body.appendChild(sidebar);
  setTimeout(() => {
    sidebar.style.right = '0'; // Анимация выезжания нового сайдбара
  }, 10); // Небольшая задержка для применения начального состояния
  currentSidebar = sidebar;
}

function initSidebar(selector, partnerId) {
  if (!checkAuthorization()) {
    console.error('Package not authorized. Please provide a valid partnerId.');
    return;
  }

  if (initializedTriggers.has(selector)) {
    return; // Кнопка уже инициализирована
  }

  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", () => {
        console.log('cliked');
      openSidebar(partnerId);
    });
    initializedTriggers.add(selector);
  } else {
    console.error(`Element with selector "${selector}" not found.`);
  }
}

export { initSidebar };
