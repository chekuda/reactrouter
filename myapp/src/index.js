import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Login from './pages/Login';
import Projects from './pages/Projects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
  	<Switch>
      <Route exact path='/' component={ App }/>
      <Route path='/login' component={ Login }/>
      <Route path='/projects/:project' component={ Projects }/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
