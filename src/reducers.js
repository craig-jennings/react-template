import { combineReducers } from 'redux';
import modal from './reducers/modal';
import notifications from './reducers/notifications';
import spinner from './reducers/spinner';

export default combineReducers({
  isSpinnerVisible: spinner,
  modal,
  notifications,
});
