import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { MightyWrapper } from 'mightyiframeintegration';

ReactDOM.render(
  <React.StrictMode>
    <MightyWrapper theme='dark'>
      <App />
    </MightyWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
