import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './containers/App/reducer';

const createGlobalReducer = () => (
  combineReducers({
    // NOTE: put other app reducers here

    route: routerReducer,
    welcome: appReducer,
  })
);

export default createGlobalReducer;
