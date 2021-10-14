import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@/router';
import { Provider } from 'react-redux';
import store from '@store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
