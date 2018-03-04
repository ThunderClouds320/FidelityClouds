import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import Container from './Container.jsx';

/**
 * Mounts the entry point to our React.js application
 */
ReactDOM.render((
    <BrowserRouter>
      <Route path="/" component={Container} >
      </Route>
    </BrowserRouter>
), document.getElementById('app'));