export class Loader {
  constructor(logoSrc, theme, pageMode) {
    this.theme = theme || 'dark';
    this.logoSrc = logoSrc || "";
    this.loaderStyleId = "partner-loader-style";
    this.loaderId = 'partner-loader';
    this.pageMode = pageMode || false;
  }

  addStyles() {
    if (document.querySelector(`#${this.loaderStyleId}`)) {
      return;
    }
    const style = document.createElement("style");
    style.id = this.loaderStyleId;
    style.textContent = `
           #${this.loaderId}.container {
  position: ${this.pageMode ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  overflow: hidden;

  background: radial-gradient(
        134.84% 202.54% at 99.3% 0%,
        rgba(98, 126, 234, 0.3) 3%,
        rgba(0, 0, 0, 0.02) 130%), #1c1d26;
}

#${this.loaderId}.container.light {
  background: #fff;
}

#${this.loaderId}.container * {
  box-sizing: border-box;
}

#${this.loaderId}.container.closing {
    opacity: 0; 
    animation: closing 0.3s;
}

#${this.loaderId} .center-positioned {
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  position: absolute;
}

#${this.loaderId} .animation {
  position: absolute;
  border-radius: 50%;
  z-index: 2022;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
}

#${this.loaderId} .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
}

#${this.loaderId} .logo-container.playing {
  animation: logoBoxAnim 2s ease-in-out infinite;
}

@keyframes logoBoxAnim {
  0% {
    scale: 1;
  }
  35%,
  50% {
    scale: 0.8;
  }
  75% {
    scale: 1.15;
  }
  85%,
  100% {
    transition-timing-function: ease-in;
    scale: 1;
  }
}

#${this.loaderId} .partner-logo {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
  padding: none !important;
}

#${this.loaderId} .bg-round {
  border-radius: 50%;
  border: solid #ffffff10;
  z-index: 2002;
  width: 240px;
  height: 240px;
  border-width: 34px;
}

#${this.loaderId} .bg-round.playing {
  animation: borderBoxAnim 2s ease infinite;
}

@keyframes borderBoxAnim {
  0% {
    scale: 1;
  }
  40%,
  50% {
    scale: 1.2;
  }
  80% {
    scale: 0.9;
  }
  87% {
    scale: 1.08;
  }
  100% {
    scale: 1;
  }
}

@property --fill-rad {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

#${this.loaderId} .arc {
  --b: 10px; /* the boder thickness */
  --fill-rad: 0deg; /* control the progression */
  opacity: 0.3;
  width: 200px;
  aspect-ratio: 1;
  padding: var(--b);
  box-sizing: border-box;
  border-radius: 50%;
  background: linear-gradient(#ffffff4d, #ffffff4d);
  --_g: /var(--b) var(--b) no-repeat radial-gradient(50% 50%, #000
        calc(100% - 1px), #0000);
  mask: top var(--_g),
    calc(50% + 50% * sin(var(--fill-rad)))
      calc(50% - 50% * cos(var(--fill-rad))) var(--_g),
    linear-gradient(#0000 0 0) content-box intersect,
    conic-gradient(#000 var(--fill-rad), #0000 0);
}

#${this.loaderId} .arc-white {
  --b: 4px; /* the boder thickness */
  background: linear-gradient(#fff, #fff) !important;
}

#${this.loaderId} .arc.light {
  background: linear-gradient(#1111114d, #1111114d);
}

#${this.loaderId} .arc-white.light {
  background: linear-gradient(#111, #111) !important;
}

#${this.loaderId} .border-box {
  width: 145%;
  height: 145%;
}

#${this.loaderId} .border-thick {
  width: 100%;
  height: 100%;
  opacity: 0;
}

#${this.loaderId} .border-thin {
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2003;
}

#${this.loaderId} .border-thin.playing {
  animation: borderAnimation 2s ease infinite;
  scale: -0.98 0.98;
}

#${this.loaderId} .border-thick.playing {
  animation: borderAnimation 2s ease infinite;
  scale: -1 1;
}

#${this.loaderId} .second.playing {
  animation-name: secondBorderAnimation !important;
}

#${this.loaderId} .third.playing {
  animation-name: thirdBorderAnimation  !important ;
}

@keyframes borderAnimation {
  0% {
    --fill-rad: 0deg;
    rotate: 0deg;
    opacity: 1;
  }
  50% {
    --fill-rad: 240deg;
  }
  
  70% {
    transition-timing-function: ease;
    --fill-rad: 0deg;
    opacity: 1;


  }
  80% {
    rotate: 745deg;
  }
  82%,
  100% {
    opacity: 0;
  }
}

@keyframes secondBorderAnimation {
  0% {
    --fill-rad: 0deg;
    rotate: 0deg;
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    --fill-rad: 220deg;
  }
  70% {
    opacity: 1;

    transition-timing-function: ease;
    --fill-rad: 0deg;

  }
  80% {
    rotate: 725deg;
  }
  82%,
  100% {
    opacity: 0;
  }
}

@keyframes thirdBorderAnimation {
  0% {
    --fill-rad: 0deg;
    rotate: 0deg;
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    --fill-rad: 200deg;
  }
  70% {
    opacity: 1;

    transition-timing-function: ease;
    --fill-rad: 0deg;

  }
  80% {
    rotate: 705deg;
  }
  82%,
  100% {
    opacity: 0;
  }
}

@keyframes closing {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
`;
    document.head.appendChild(style);
  }

  closeLoader(loaderContainer) {
    loaderContainer.addEventListener('animationend', () => {
        loaderContainer.remove();
    })
    loaderContainer.classList.add('closing');
  }

  showLoader() {
    const container = document.querySelector(this.pageMode ? 'mighty-page' : '#frame-box');
    if (document.getElementById(this.loaderId)) {
        return;
    }
    if (!container) {
        return;
    }
    // define animation elements
    const loaderContainer = document.createElement('div');
    const animationContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    const bgRound = document.createElement('div');
    const borderBox = document.createElement('div');
    const borderBox2 = document.createElement('div');
    const borderBox3 = document.createElement('div');
    const arcLarge1 = document.createElement('div');
    const arcLarge2 = document.createElement('div');
    const arcLarge3 = document.createElement('div');
    const arcSmaller1 = document.createElement('div');
    const arcSmaller2 = document.createElement('div');
    const arcSmaller3 = document.createElement('div');

    // add classnames to animation elements
    loaderContainer.classList.add(`container`, this.theme);
    loaderContainer.setAttribute('id', this.loaderId);
    animationContainer.classList.add('animation', 'center-positioned');
    logoContainer.classList.add('logo-container', 'playing');
    logoImg.classList.add('partner-logo');
    bgRound.classList.add('bg-round', 'center-positioned', 'playing');
    borderBox.classList.add('border-box','center-positioned')
    borderBox2.classList.add('border-box', 'center-positioned')
    borderBox3.classList.add('border-box', 'center-positioned')
    arcLarge1.classList.add('border-thick', 'center-positioned', 'arc', 'playing', this.theme);
    arcLarge2.classList.add('border-thick', 'center-positioned', 'arc', 'playing', this.theme, 'second');
    arcLarge3.classList.add('border-thick', 'center-positioned', 'arc', 'playing', this.theme, 'third');
    arcSmaller1.classList.add('border-thin', 'center-positioned', 'arc', 'arc-white', 'playing', this.theme);
    arcSmaller2.classList.add('border-thin', 'center-positioned', 'arc', 'arc-white', 'playing', this.theme, 'second');
    arcSmaller3.classList.add('border-thin', 'center-positioned', 'arc', 'arc-white', 'playing', this.theme, 'third');

    // combine elements

    borderBox.appendChild(arcLarge1);
    borderBox.appendChild(arcSmaller1);

    borderBox2.appendChild(arcLarge2);
    borderBox2.appendChild(arcSmaller2);

    borderBox3.appendChild(arcLarge3);
    borderBox3.appendChild(arcSmaller3);

    bgRound.appendChild(borderBox);
    bgRound.appendChild(borderBox2);
    bgRound.appendChild(borderBox3);

    logoImg.setAttribute('src', this.logoSrc);
    logoContainer.appendChild(logoImg);

    animationContainer.appendChild(logoContainer);

    loaderContainer.appendChild(bgRound);
    // loaderContainer.appendChild(logoContainer);
    loaderContainer.appendChild(animationContainer);

    this.addStyles();

    container.appendChild(loaderContainer);
    this.checkForLoadingEnd(loaderContainer);
  }
  checkForLoadingEnd(loaderContainer) {
    window.addEventListener('message', (e) => {
      if (e.data === 'loaded') {
        this.closeLoader(loaderContainer);
      } 
    })
  }
}
