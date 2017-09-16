import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nasa from './Nasa';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <Nasa />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
