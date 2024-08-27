import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter> {/* Use BrowserRouter at the top-level */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
