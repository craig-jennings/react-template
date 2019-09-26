import { ModalActionType } from '../actions/modal';
import createReducer from '../utils/createReducer';

const INITIAL_STATE = {
  Component: null,
  isEntering: false,
  isExiting: false,
};

const reducers = {
  [ModalActionType.CLEAR_MODAL]: () => ({ ...INITIAL_STATE }),

  [ModalActionType.MODAL_EXIT]: (state) => ({
    ...state,
    isEntering: false,
    isExiting: true,
  }),

  [ModalActionType.SET_MODAL]: (state, { Component }) => ({
    Component,
    isEntering: true,
  }),
};

const modalReducer = createReducer(reducers, INITIAL_STATE);

export default modalReducer;
