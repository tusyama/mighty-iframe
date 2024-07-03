import { initSidebar } from "./sidebar";
let isAuthorized = true;
let partnerId = null;

function authorizePackage(partnerId) {
//   try {
    // const response = await fetch(`https://test.mighty.study/authorize?partnerId=${partnerId}`);
    // const data = await response.json();
    // if (data.authorized) {
      isAuthorized = true;
      console.log('Authorization successful 2');
      // Добавляем методы в window объект
      window.initSidebar = initSidebar;
    // } else {
    //   console.error('Invalid partnerId. Authorization failed.');
    // }
//   } catch (error) {
    // console.error('Error authorizing package:', error);
//   }
}

function checkAuthorization() {
  return isAuthorized;
}

function getPartnerId() {
  return partnerId;
}

export { authorizePackage, checkAuthorization, partnerId };