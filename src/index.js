import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Chapter09 from './chapter09';
import Chapter10 from './chapter10';
import Chapter11 from './chapter11';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="route-wrapper">
      <Route exact path="/" component={App} />
      <Route path="/chapter09" component={Chapter09} />
      <Route path="/chapter10" component={Chapter10} />
      <Route path="/chapter11" component={Chapter11} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
