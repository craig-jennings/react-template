import { combineReducers } from 'redux';
import modal from './reducers/modal';
import notifications from './reducers/notifications';

export default combineReducers({
  modal,
  notifications,
});
