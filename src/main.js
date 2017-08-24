import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

const MAIN = (
  <Provider store={store}>
    {routes}
  </Provider>
);

ReactDOM.render(MAIN, document.getElementById('react-ethereal-boilerplate'));
