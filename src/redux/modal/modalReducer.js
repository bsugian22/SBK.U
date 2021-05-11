import * as types from "./modalTypes";
const initialState = {
  modal: {
    display: "none",
    title: "",
    text: "",
    confirm: null,
    cancel: null,
  }
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODAL_DATA:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload
        }
      };

    case types.SHOW_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          display: "flex",
          class: "modal-show",
          ...action.payload
        }
      };

    case types.FADE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          class: "modal-hide",
          confirm : null,
          cancel : null,
        }
      };

    case types.HIDE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          display: "none",
          class: "",
          title: "",
          text: "",
          confirm : null,
          cancel: null,
        }
      };

    default:
      return state;
  }
};

export default modalReducer;