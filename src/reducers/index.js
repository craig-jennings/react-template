import { combineReducers } from '@reduxjs/toolkit';
import modal from './modal';
import notifications from './notifications';

export default combineReducers({
  modal,
  notifications,
});
