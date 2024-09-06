import { useState, version } from 'react'
import wirexLogo from './assets/wirex.png'
import superChainLogo from './assets/superchain.png';

import './App.css'
import { SizedBox } from './sizedBox'
import { NewPage } from './newPage';

import { MightyWidget, MightyPage } from 'mightyiframeintegration';

function App() {
  const [count, setCount] = useState(0);
  const [changedPage, setChangedPage] = useState(false);

  // useEffect(() => {
  //   if (window.initSidebar) {
  //     window.initSidebar({selector: '#learnButton', partnerId: 'Magic_Ball', course: {courseId: '646ceccd9d546b90065bcac0', chapterId: '646cedd19d546b90065bcad8', lessonId: '646cee099d546b90065bcadf'}, percent: "80%"});
  //     window.initSidebar({selector: '#errorButton', partnerId: 'Magic_Ball12', percent: "70%"});
  //     window.initSidebar({selector: '#wirex', partnerId:'Wirex', percent: "90%"});
  //     window.initSidebar({selector: '#wirexSmall', partnerId:'Wirex'});
  //     window.initSidebar({selector: '#superchain', partnerId: 'Superchain',percent: "70%"});
  //     window.initSidebar({selector: '#superchainSmall', partnerId: 'Superchain',});
  //     window.initSidebar({selector: '#harvestButton', partnerId: 'Harvest_Labs', percent: "60%"});
  //     window.initSidebar({selector: '#mindButton', partnerId:'Mintpad', percent: "65%"});
  //     window.initSidebar({selector: '#mindButtonDark', partnerId:'Mintpad', theme: 'dark'});
  //     window.initSidebar({selector: '#mindButtonLight', partnerId:'Mintpad', theme: 'light'});
  //     window.initSidebar({selector: '#mindButtonLightTest', partnerId:'Mintpad', theme: 'light'});
  //   }
  // }, []);

  if (changedPage) {
    return <>
      <button onClick={() => setChangedPage(false)}>Change page</button>
      <MightyPage partnerId="Wirex"/>
      </>
  }

  return (
    <>
      <div>
        <span className='logo wirex' id='wirexSmall'>
          <MightyWidget partnerId="Wirex" percent="90%"><img src={wirexLogo} className="logo" alt="wirex logo" /></MightyWidget>
        </span>
        <span className='logo wirex' id='wirex'>
          <MightyWidget partnerId='Wirex'>
            <img src={wirexLogo} className="logo" alt="wirex logo" />
          </MightyWidget>
        </span>
        <span className='logo superchain' id='superchain'>
          <MightyWidget partnerId='Superchain' percent="70%">
            <img src={superChainLogo} className="logo react" alt="superchain logo" />
          </MightyWidget>
        </span>
        <span className='logo superchain' id='superchainSmall'>
          <MightyWidget partnerId='Superchain'>
            <img src={superChainLogo} className="logo react" alt="superchain logo" />
          </MightyWidget>
        </span>
      </div>
      <h1>Vite + React {version}</h1>
      <button onClick={() => setChangedPage(true)}>Change page</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SizedBox heigth={10} />
        <MightyWidget partnerId='Magic_Ball' targetUrl='https://test.mighty.app/stydy/646ceccd9d546b90065bcac0/646cedd19d546b90065bcad8/646cee099d546b90065bcadf' percent='80%'>
          <button id="learnButton">
            Learn react from Mighty
          </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Magic_Ball12" percent="70%"><button id="errorButton">
          error button
        </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Harvest_Labs' percent='80%'>
          <button id="harvestButton">
            Harvest Labs
          </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Mintpad' percent='65%'>
          <button id="mindButton">
            Mintpad
          </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Mintpad' theme='dark'>
          <button id="mindButtonDark">
            Mintpad dark theme
          </button>
        </MightyWidget>

        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Mintpad' theme='light'>
          <button id="mindButtonLight">
            Mintpad light theme
          </button>
        </MightyWidget>

        <mighty-widget 
        partnerId="Superchain"
        targetUrl="https://test.mighty.study/courses/669a8e515007186b0e7aff9c"
        theme="dark"
        percent="50%"
    >
        <button>learn</button>
    </mighty-widget>
      </div>
    </>
  )
}

export default App
