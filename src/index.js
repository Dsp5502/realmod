import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './Redux/Store/store';
import AppRouters from './Routes/AppRouters';

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
);
