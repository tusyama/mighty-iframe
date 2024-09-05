import { getTheme } from "../auth";
import { Sidebar } from "../sidebar";

class MightyWidget extends HTMLElement {
    constructor() {
      super();
      this.partnerId = this.getAttribute('partnerId') || null;
      this.targetUrl = this.getAttribute('targetUrl') || null;
      this.percent = this.getAttribute('percent') || '40%';
      this.theme = this.getAttribute('theme') || getTheme();
      this.sidebarInstance = window.mightySidebar;


      console.log('render mighty widget');
    }
  
    connectedCallback() {
      const child = this.firstElementChild;
  
      if (child) {
        child.addEventListener('click', this.handleClick.bind(this));
      }
    }
  
    handleClick() {
      if (!this.partnerId) {
        console.error('partnerId is not defined');
        return;
      }
  
      if (!this.sidebarInstance) {
        this.sidebarInstance = new Sidebar();
      }
  
      const course = this.sidebarInstance.parseCourseFromUrl(this.targetUrl);
      this.sidebarInstance.openSidebar(this.partnerId, course, this.theme, this.percent);
    }
  }
  
export function registerMightyWidget() {
  if (!customElements.get('mighty-widget')) {
    customElements.define('mighty-widget', MightyWidget);
  }
}
  