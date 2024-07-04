import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ImprimirImagem from './components/imprimirimagem/ImprimirImagem';
import GerarImagem from './components/gerarimagem/GerarImagem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <GerarImagem />
  // </React.StrictMode>
);
