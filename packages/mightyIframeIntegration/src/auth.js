import { initSidebar } from "./sidebar";
let isAuthorized = true;
// let partnerId = null;
let themeMighty = 'dark';

function authorizePackage(theme = 'dark') {
  isAuthorized = true;
  themeMighty = theme;
  window.initSidebar = initSidebar;
}

function checkAuthorization() {
  return isAuthorized;
}

function getTheme() {
  return themeMighty;
}

export { authorizePackage, checkAuthorization, getTheme};