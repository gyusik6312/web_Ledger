import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ledger from './Ledger/Ledger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Ledger></Ledger>
);

reportWebVitals();
