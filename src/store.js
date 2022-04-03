import { applyMiddleware, createStore , compose } from 'redux';
import { createLogger } from 'redux-logger'
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import rootReducer from './modules';
import thunk from "redux-thunk";

import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, thunk);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger(), thunk)
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer, composeEnhancers(getMiddleware()));