import { registerMightyWidget } from "./web/mightyWidget";
import { Sidebar } from "./sidebar";
import { registerMightyPage } from "./web/mightyPage";

let isAuthorized = true;
// let partnerId = null;
let themeMighty = 'dark';

function authorizePackage(theme = 'dark') {
  isAuthorized = true;
  themeMighty = theme;

  const sidebar = new Sidebar();
  const initSidebar = ({ selector, partnerId, theme, percent }) => sidebar.initSidebar(selector, partnerId, theme, percent);
  
  window.initSidebar = initSidebar;
  window.mightySidebar = sidebar;

  registerMightyWidget();
  registerMightyPage();
}

function checkAuthorization() {
  return isAuthorized;
}

function getTheme() {
  return themeMighty;
}

export { authorizePackage, checkAuthorization, getTheme};