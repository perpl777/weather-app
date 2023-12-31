import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import '@mantine/core/styles.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
