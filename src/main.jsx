//styles
import './index.css';
//components
import App from './App.jsx';
//hooks
import ReactDOM from 'react-dom/client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
