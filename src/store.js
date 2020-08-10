import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({ reducer });

const { dispatch, getState, subscribe } = store;

export default store;
export { dispatch, getState, subscribe };
