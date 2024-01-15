import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { navbar } from './component/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

export default navbar;