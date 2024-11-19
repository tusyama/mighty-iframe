import { getTheme } from "../auth";
import { Sidebar } from "../sidebar";

class MightyWidget extends HTMLElement {
  static get observedAttributes() {
    return ['partnerid', 'targeturl', 'percent', 'theme'];
  }
    constructor() {
      super();
      this.partnerId = this.getAttribute('partnerid') || null;
      this.targetUrl = this.getAttribute('targeturl') || null;
      this.percent = this.getAttribute('percent') || '40%';
      this.theme = this.getAttribute('theme') || getTheme();
      this.sidebarInstance = window.mightySidebar;


      console.log('render mighty widget');
    }
  
    connectedCallback() {
      this.updateAttributes();
      const child = this.firstElementChild;
  
      if (child) {
        child.addEventListener('click', this.handleClick.bind(this));
      }
    }

    disconnectedCallback() {
      const child = this.firstElementChild;
      if (child) {
        child.removeEventListener('click', this.handleClick.bind(this));
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.updateAttributes();
      }
    }

    updateAttributes() {
      this.partnerId = this.getAttribute('partnerid') || null;
      this.targetUrl = this.getAttribute('targeturl') || null;
      this.percent = this.getAttribute('percent') || '40%';
      this.theme = this.getAttribute('theme') || getTheme();
    }
  
    handleClick() {
      this.updateAttributes();
      
      if (!this.partnerId) {
        console.error('partnerId is not defined');
        return;
      }
  
      if (!this.sidebarInstance) {
        this.sidebarInstance = new Sidebar();
      }
  
      this.sidebarInstance.openSidebar(this.partnerId, this.targetUrl, this.theme, this.percent);
    }
  }
  
export function registerMightyWidget() {
  if (!customElements.get('mighty-widget')) {
    customElements.define('mighty-widget', MightyWidget);
  }
}
  