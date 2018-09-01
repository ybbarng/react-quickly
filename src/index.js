import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Chapter09 from './chapter09';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="route-wrapper">
      <Route exact path="/" component={App} />
      <Route exact path="/chapter09" component={Chapter09} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
