'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory } from 'react-router';

import APP from './app';
import { Language } from 'Utils';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" breadcrumbName="" component={APP}>
        <IndexRoute
          getComponent={function(nexState, callback) {
            import('./controllers/home').then(m => {
              callback(null, m['Home']);
            });
          }}
        />
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
