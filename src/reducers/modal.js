import { createReducer } from '@reduxjs/toolkit';
import { ModalActionType } from '../actions/modal';

const initialState = {
  Component: null,
  isEntering: false,
  isExiting: false,
};

export default createReducer(initialState, {
  [ModalActionType.CLEAR_MODAL]: () => ({ ...initialState }),

  [ModalActionType.MODAL_EXIT]: (state) => {
    state.isEntering = false;
    state.isExiting = true;
  },

  [ModalActionType.SET_MODAL]: (state, { Component }) => ({
    Component,
    isEntering: true,
  }),
});
