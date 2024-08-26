import { Sidebar } from "./sidebar";

let isAuthorized = true;
// let partnerId = null;
let themeMighty = 'dark';

function authorizePackage(theme = 'dark') {
  isAuthorized = true;
  themeMighty = theme;

  const sidebar = new Sidebar();
  const initSidebar = ({ selector, partnerId, course, theme, percent }) => sidebar.initSidebar(selector, partnerId, course, theme, percent);
  
  window.initSidebar = initSidebar;
}

function checkAuthorization() {
  return isAuthorized;
}

function getTheme() {
  return themeMighty;
}

export { authorizePackage, checkAuthorization, getTheme};