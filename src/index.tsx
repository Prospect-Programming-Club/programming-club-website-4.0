import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let env = 'prod'

let url = window.location.href;


root.render(
  <React.StrictMode>
    <BrowserRouter basename = {url}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
