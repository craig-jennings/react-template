import { SpinnerActionType } from '../actions/spinner';
import createReducer from '../utils/createReducer';

const INITIAL_STATE = false;

const reducers = {
  [SpinnerActionType.SET_SPINNER_VISIBILITY]: (state, { visibility }) => visibility,
};

const spinnerReducer = createReducer(reducers, INITIAL_STATE);

export default spinnerReducer;
