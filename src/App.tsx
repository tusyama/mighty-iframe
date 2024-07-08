import { useEffect, useState, version } from 'react'
// import reactLogo from './assets/react.svg'
import wirexLogo from './assets/wirex.png'
import superChainLogo from './assets/superchain.png';
// import viteLogo from '/vite.svg'

import './App.css'
import { SizedBox } from './sizedBox'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
      window.initSidebar('#errorButton', 'Magic_Ball12');
      window.initSidebar('#wirex', 'Wirex');
      window.initSidebar('#superchain', 'Superchain');
    }
  }, []);

  return (
    <>
      <div>
          <span className='logo wirex' id='wirex'><img src={wirexLogo} className="logo" alt="wirex logo" /></span>
          <span className='logo superchain' id='superchain'><img src={superChainLogo} className="logo react" alt="superchain logo" /></span>
      </div>
      <h1>Vite + React {version}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SizedBox heigth={10} />
        <button id="learnButton">
          Learn react from Mighty
        </button>
        <button id="errorButton">
          error button
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
