import { getTheme } from "../auth";

class MightyPage extends HTMLElement {
  constructor() {
    super();
    this.partnerId = this.getAttribute("partnerid") || null;
    this.targetUrl = this.getAttribute("targeturl") || null;
    this.scrollOff = this.getAttribute("scrolloff") || false;
    this.studyHeadOff = this.getAttribute("studyheadoff") || false;
    this.studyScrollbarHidden =
      this.getAttribute("studyscrollbarhidden") || false;
    this.hideSidebards = this.getAttribute("hidesidebards") || false;
    this.hideBackButton = this.getAttribute("hidebackbutton") || false;
    this.hideNextLessonBtn = this.getAttribute("hidenextlessonbtn") || false;
    this.studyBottomMargin = this.getAttribute("studybottommargin") || 50;
    this.theme = this.getAttribute("theme") || getTheme();
    this.iframe = null;
    this.baseUrl = "https://app.mighty.study";
    this.partnerKey =
      "099d94c60458dd7429e95eaca9cb622c9246a17a7e35d8859284051c48b3fd11";
    this.sidebarInstance = window.mightySidebar;
  }

  static get observedAttributes() {
    return [
      "partnerid",
      "targeturl",
      "theme",
      "scrolloff",
      "studyheadoff",
      "studyscrollbarhidden",
      "hidesidebards",
      "hidebackbutton",
      "hidenextlessonbtn",
      "studybottommargin",
    ];
  }

  connectedCallback() {
    const style = this.getAttribute("style") || "";
    this.style.width = "100%";
    this.style.height = "100vh";
    this.style.display = "block";
    this.style.cssText += style;

    this.renderIframe();
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

    const partnerIdRaw = this.getAttribute("partnerid");

    if (!partnerIdRaw) {
      console.error("partnerId is not defined");
      return;
    }

    const partnerId = partnerIdRaw.replaceAll(" ", "_");

    const targetUrl = this.getAttribute("targeturl");
    const scrollOff = this.getAttribute("scrolloff") || "false";
    const studyHeadOff = this.getAttribute("studyheadoff") || "false";
    const studyScrollbarHidden =
      this.getAttribute("studyscrollbarhidden") || "false";
    const hideSidebards = this.getAttribute("hidesidebards") || "false";
    const hideBackButton = this.getAttribute("hidebackbutton") || "false";
    const hideNextLessonBtn = this.getAttribute("hidenextlessonbtn") || "false";
    const theme = this.getAttribute("theme") || getTheme();
    const studyBottomMargin = this.getAttribute("studybottommargin") || 50;

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.overflow = scrollOff === "true" ? "hidden" : "auto";

    const params = new URLSearchParams();
    params.set("partnerID", partnerId);
    params.set("partnerToken", this.partnerKey);
    params.set("theme", theme);
    params.set("scrollOff", scrollOff);
    params.set("studyHeadOff", studyHeadOff);
    params.set("studyScrollbarHidden", studyScrollbarHidden);
    params.set("hideSidebards", hideSidebards);
    params.set("hideBackButton", hideBackButton);
    params.set("hideNextLessonBtn", hideNextLessonBtn);
    params.set("studyBottomMargin", studyBottomMargin);

    let src = `${this.baseUrl}/space/${params.get(
      "partnerID"
    )}?${params.toString()}`;

    if (targetUrl && targetUrl.includes(this.baseUrl)) {
      let newTarget = targetUrl;
      if (targetUrl[targetUrl.length - 1] === "/") {
        newTarget = targetUrl.slice(0, -1);
      }
      src = `${newTarget}?${params.toString()}`;
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
