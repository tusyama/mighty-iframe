import { getTheme } from "../auth";

class MightyPage extends HTMLElement {
  constructor() {
    super();
    this.partnerId = this.getAttribute("partnerid") || null;
    this.targetUrl = this.getAttribute("targeturl") || null;
    this.theme = this.getAttribute("theme") || getTheme();
    this.iframe = null;
    this.baseUrl = "https://test.mighty.study";
    this.partnerKey =
      "099d94c60458dd7429e95eaca9cb622c9246a17a7e35d8859284051c48b3fd11";
    this.sidebarInstance = window.mightySidebar;
  }

  static get observedAttributes() {
    return ["partnerid", "targeturl", "theme"];
  }

  connectedCallback() {
    this.renderIframe();

    this.style.width = "100%";
    this.style.height = "100vh";
    this.style.display = "block";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.renderIframe();
    }
  }

  renderIframe() {
    if (this.iframe) {
      this.removeChild(this.iframe);
    }

    const partnerId = this.getAttribute("partnerid");
    const targetUrl = this.getAttribute("targeturl");
    if (!partnerId) {
      console.error("partnerId is not defined");
      return;
    }

    const theme = this.getAttribute("theme") || getTheme();
    const themeParams = theme ? `&theme=${theme}` : "&";

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";

    let src = `${this.baseUrl}/space/${partnerId}?partnerID=${partnerId}&partnerToken=${this.partnerKey}${themeParams}`;
    if (targetUrl && targetUrl.includes(this.baseUrl)) {
      let newTarget = targetUrl;
      if (targetUrl[targetUrl.length - 1] === '/') {
        newTarget = targetUrl.slice(0, -1);
      }
      src = `${newTarget}?partnerID=${partnerId}&partnerToken=${this.partnerKey}${themeParams}`;
    }

    iframe.src = src;

    this.appendChild(iframe);
    this.iframe = iframe;
  }
}

export function registerMightyPage() {
  if (!customElements.get("mighty-page")) {
    customElements.define("mighty-page", MightyPage);
  }
}
