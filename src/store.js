import { applyMiddleware, createStore, compose as reduxCompose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

let compose = reduxCompose;

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
if (process.env.NODE_ENV === 'development') {
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;
}

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;

export const { dispatch, getState, subscribe } = store;
