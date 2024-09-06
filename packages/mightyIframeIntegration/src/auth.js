import { registerMightyWidget } from "./web/migtyWidget";
import { Sidebar } from "./sidebar";
import { registerMightyPage } from "./web/mightyPage";

let isAuthorized = true;
// let partnerId = null;
let themeMighty = 'dark';

function authorizePackage(theme = 'dark') {
  isAuthorized = true;
  themeMighty = theme;

  const sidebar = new Sidebar();
  const initSidebar = ({ selector, partnerId, course, theme, percent }) => sidebar.initSidebar(selector, partnerId, course, theme, percent);
  
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