const ModalActionType = {
  CLEAR_MODAL: 'modal:CLEAR',
  MODAL_EXIT: 'modal:EXIT',
  SET_MODAL: 'modal:SET',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearModal = () => (dispatch) => {
  dispatch({ type: ModalActionType.MODAL_EXIT });

  setTimeout(() => dispatch({ type: ModalActionType.CLEAR_MODAL }), 300);
};

const setModal = (Component) => ({ Component, type: ModalActionType.SET_MODAL });

export { clearModal, ModalActionType, setModal };
