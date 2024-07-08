# MightyIframeIntegration

The `MightyIframeIntegration` package allows you to integrate an iframe-based sidebar into your web application. This sidebar can be triggered by any element on your page and supports both desktop and mobile views.

## Installation
To use the `MightyIframeIntegration` package, include the following script in your HTML file:
```html
<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
```

## Usage

### Step 1
added this script in head 
```html
<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
```

### Step 2
register method
```html
<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    mightyIframeIntegration.authorizePackage();
  });
</script>
```

### Step 3

register triggers
```html
<script>
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
</script>
```

react example useEffect

useEffect(() => {
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
  }, []);


## Example
  ```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mighty Iframe Integration Example</title>
  <script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      mightyIframeIntegration.authorizePackage();
    });
  </script>
</head>
<body>
  <button id="learnButton">Learn More</button>

  <script>
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
  </script>
</body>
</html>
```

## React Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        mightyIframeIntegration.authorizePackage()
      });
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

```JSX
import { useEffect, useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SizedBox } from './sizedBox'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
      window.initSidebar('#errorButton', 'Magic_Ball12');
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
```
