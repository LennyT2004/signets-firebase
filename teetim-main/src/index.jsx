import React from 'react';
import ReactDOM from 'react-dom/client';
import Appli from './composants/Appli.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('racine')).render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>,
);
