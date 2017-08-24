import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const containersReducer = {
  containers: combineReducers({
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () => (
  combineReducers({
    // ...containersReducer,
    route: routerReducer,
  })
);

export default createGlobalReducer;
