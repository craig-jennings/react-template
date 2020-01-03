import { createAction } from '@reduxjs/toolkit';

const NotificationActionType = {
  ADD_NOTIFICATION: 'notification:add',
  CLEAR_NOTIFICATIONS: 'notification:clear',
  REMOVE_NOTIFICATION: 'notification:remove',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const addNotification = createAction(
  NotificationActionType.ADD_NOTIFICATION,
  (Component, props, isError = false) => ({
    payload: {
      Component,
      isError,
      props,
      type: NotificationActionType.ADD_NOTIFICATION,
    },
  }),
);

const addSimpleNotification = createAction(
  NotificationActionType.ADD_NOTIFICATION,
  (text, isError) => addNotification(null, { text }, isError),
);

const clearNotifications = createAction(NotificationActionType.CLEAR_NOTIFICATIONS);
const removeNotification = createAction(NotificationActionType.REMOVE_NOTIFICATION);

export {
  addNotification,
  addSimpleNotification,
  clearNotifications,
  NotificationActionType,
  removeNotification,
};
