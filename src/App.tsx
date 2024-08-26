import { useEffect, useState, version } from 'react'
// import reactLogo from './assets/react.svg'
import wirexLogo from './assets/wirex.png'
import superChainLogo from './assets/superchain.png';
// import viteLogo from '/vite.svg'

import './App.css'
import { SizedBox } from './sizedBox'
import { NewPage } from './newPage';

function App() {
  const [count, setCount] = useState(0);
  const [changedPage, setChangedPage] = useState(false);

  useEffect(() => {
    if (window.initSidebar) {
      window.initSidebar({selector: '#learnButton', partnerId: 'Magic_Ball', course: {courseId: '646ceccd9d546b90065bcac0', chapterId: '646cedd19d546b90065bcad8', lessonId: '646cee099d546b90065bcadf'}, percent: "80%"});
      window.initSidebar({selector: '#errorButton', partnerId: 'Magic_Ball12', percent: "70%"});
      window.initSidebar({selector: '#wirex', partnerId:'Wirex', percent: "90%"});
      window.initSidebar({selector: '#superchain', partnerId: 'Superchain',percent: "70%"});
      window.initSidebar({selector: '#harvestButton', partnerId: 'Harvest_Labs', percent: "60%"});
      window.initSidebar({selector: '#mindButton', partnerId:'Mintpad', percent: "65%"});
      window.initSidebar({selector: '#mindButtonDark', partnerId:'Mintpad', theme: 'dark'});
      window.initSidebar({selector: '#mindButtonLight', partnerId:'Mintpad', theme: 'light'});
      window.initSidebar({selector: '#mindButtonLightTest', partnerId:'Mintpad', theme: 'light'});
    }
  }, []);

  if (changedPage) {
    return <>
    <button onClick={() => setChangedPage(false)}>Change page</button>
    <NewPage/></>
  }

  return (
    <>
      <div>
          <span className='logo wirex' id='wirex'><img src={wirexLogo} className="logo" alt="wirex logo" /></span>
          <span className='logo superchain' id='superchain'><img src={superChainLogo} className="logo react" alt="superchain logo" /></span>
      </div>
      <h1>Vite + React {version}</h1>
      <button onClick={() => setChangedPage(true)}>Change page</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SizedBox heigth={10} />
        <button id="learnButton">
          Learn react from Mighty
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="errorButton">
          error button
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="harvestButton">
          Harvest Labs
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButton">
          Mintpad
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButtonDark">
          Mintpad dark theme
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButtonLight">
          Mintpad light theme
        </button>
      </div>
    </>
  )
}

export default App
