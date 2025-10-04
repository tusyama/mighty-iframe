# mighty-academy-widget

The `mighty-academy-widget` package allows you to integrate an iframe-based sidebar into your web application. This sidebar can be triggered by any element on your page and supports both desktop and mobile views.

## Installation

To use the `mighty-academy-widget` package, include the following script in your HTML file:

## 1. Installation via npm (for React)

If you are using React, you can install the package via npm:

```bash
npm install mighty-academy-widget
```

Once installed, you can use React components like MightyWidget and MightyPage. Note: All widgets must be wrapped in MightyWrapper for proper initialization.

## Usage in React

### Step 1: Wrap your application with MightyWrapper

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { MightyWrapper } from 'mighty-academy-widget';

ReactDOM.render(
  <React.StrictMode>
    <MightyWrapper>
      <App />
    </MightyWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
```

MightyWrapper ensures proper initialization of all widgets in your application.

## 1. MightyWidget

MightyWidget is a React component that allows embedding a sidebar widget, which opens when a button or another element is clicked.

Example usage:

```JSX
import React from 'react';
import { MightyWidget } from 'mighty-academy-widget';

const App = () => {
  return (
    <div>
      <MightyWidget partnerId="Magic_Ball" targetUrl="https://mighty.study/courses/123/456/789" theme="light">
        <button>Click to Learn</button>
      </MightyWidget>
    </div>
  );
};

export default App;
```

Parameters:

- partnerId (required): The partner ID for displaying content.
- targetUrl (optional): The URL of the course to display.
- percent (optional): The width percentage for displaying the sidebar.
- theme (optional): The theme for displaying the widget (dark or light).

### 2. MightyPage

MightyPage is a React component that allows embedding a page with an iframe to display content from the Mighty platform based on parameters.

Example usage:

```JSX
import React from 'react';
import { MightyPage } from 'mighty-academy-widget';

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MightyPage partnerId="Magic_Ball" targetUrl="https://mighty.study/courses/123/456/789" theme="dark"/>
    </div>
  );
};

export default App;
```

Parameters:

- partnerId (required): The partner ID for displaying content.
- targetUrl (optional): The URL of the course to display.
- theme (optional): The theme for displaying the widget (dark or light).

## 2. Installation via CDN (for web components)

If you are not using React and want to use web components directly in HTML, you can load the package via CDN using unpkg in head tag:

```html
<head>
  <script src="https://unpkg.com/mighty-academy-widget@latest/dist/mightyIframeIntegration.js"></script>
</head>
```

This will load the web components mighty-widget and mighty-page, which you can use in your HTML code.

### Step 1: Initialize the package

You must call the authorizePackage function to initialize the package:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    mightyIframeIntegration.authorizePackage("dark"); // Initialize the package with a theme
  });
</script>
```

## Usage in HTML

### 1. mighty-widget

<mighty-widget> is a web component similar to the React version. It allows adding a sidebar widget, which opens when elements inside it are clicked.

Example usage:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/mighty-academy-widget@latest/dist/mightyIframeIntegration.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        mightyIframeIntegration.authorizePackage("dark");
      });
    </script>
  </head>
  <body>
    <mighty-widget
      partnerid="Magic_Ball"
      targeturl="https://mighty.study/courses/123/456/789"
      theme="light"
    >
      <button>Click to Learn</button>
    </mighty-widget>
  </body>
</html>
```

### Attributes:

- partnerid (required): The partner ID for displaying content.
- targeturl (optional): The URL of the course to display.
- percent (optional): The width percentage for displaying the sidebar.
- theme (optional): The theme for displaying the widget (dark or light).

### 2. mighty-page

<mighty-page> is a web component that allows displaying content via an iframe.

Example usage:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/mighty-academy-widget@latest/dist/mightyIframeIntegration.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        mightyIframeIntegration.authorizePackage("dark");
      });
    </script>
  </head>
  <body>
    <mighty-page
      partnerid="Magic_Ball"
      targeturl="https://mighty.study/courses/123/456/789"
      theme="dark"
      style="width: 100%; height: 100vh;"
    >
    </mighty-page>
  </body>
</html>
```

### Attributes

- partnerid (required): The partner ID for displaying content.
- targeturl (optional): The URL of the course to display.
- theme (optional): The theme for displaying the widget (dark or light).

### Features

- MightyWidget: Used for creating clickable widgets that open a sidebar with content.
- MightyPage: Used for displaying a page with content in an iframe.
