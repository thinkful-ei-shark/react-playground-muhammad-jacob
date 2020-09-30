import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouletteGun from './RouletteGun';

ReactDOM.render(
  <React.StrictMode>
    <RouletteGun  bulletInChamber={8}/>
  </React.StrictMode>,
  document.getElementById('root')
);
