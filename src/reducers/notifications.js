import { createReducer } from '@reduxjs/toolkit';
import { NotificationActionType } from '../actions/notifications';

const initialState = [];
const MAX_NOTIFICATIONS = 3;
let keyCounter = 0;

export default createReducer(initialState, {
  [NotificationActionType.ADD_NOTIFICATION]: (
    state,
    { payload: { Component, isError, props } },
  ) => {
    if (state.length === MAX_NOTIFICATIONS) {
      state = state.pop();
    }

    state.unshift({
      Component,
      isError,
      key: ++keyCounter,
      props,
    });
  },

  [NotificationActionType.CLEAR_NOTIFICATIONS]: () => [],

  [NotificationActionType.REMOVE_NOTIFICATION]: (state, { payload: { key } }) =>
    state.filter((n) => n.key !== key),
});
