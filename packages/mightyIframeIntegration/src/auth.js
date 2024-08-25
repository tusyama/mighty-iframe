import { Sidebar } from "./sidebar";

let isAuthorized = true;
// let partnerId = null;
let themeMighty = 'dark';
let expandedPecent = '100%'

function authorizePackage(theme = 'dark', percent = '100%') {
  isAuthorized = true;
  themeMighty = theme;
  expandedPecent = percent;

  const sidebar = new Sidebar();
  const initSidebar = ({ selector, partnerId, course, theme }) => sidebar.initSidebar(selector, partnerId, course, theme);
  
  window.initSidebar = initSidebar;
}

function checkAuthorization() {
  return isAuthorized;
}

function getTheme() {
  return themeMighty;
}

function getExpanded() {
  return expandedPecent;
}

export { authorizePackage, checkAuthorization, getTheme, getExpanded};