import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const createGlobalReducer = () => (
  combineReducers({
    // NOTE: put other app reducers here

    route: routerReducer,
  })
);

export default createGlobalReducer;
