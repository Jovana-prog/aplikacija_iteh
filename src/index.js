import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//render moze da primi smao jednu "komponentu", npr ne moze h1 vis eputa 
//zato sve treba ubaciti u jedan div kooji se prodledjuej
//ubacili smo App komponentu i preko nje se pristupa drugim komponentama


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


