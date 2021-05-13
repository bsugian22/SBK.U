import * as types from "./modalTypes";
import { camelize } from "../../helpers/object";
import axios from "../../plugins/axios";

export const setModalData = (payload) => {
  return {
    type : types.SET_MODAL_DATA,
    payload : payload
  }
}

export const showModal = (payload) =>{
  return {
    type : types.SHOW_MODAL,
    payload : payload,
  }
}

export const fadeModal = () => {
  return {
    type : types.FADE_MODAL,
  }
}

export const hideModal = () => {
  return {
    type : types.HIDE_MODAL,
  }
}

export const closeModal = () => {
  return (dispatch) => {
    dispatch(fadeModal());
    setTimeout(()=>{
      dispatch(hideModal());
    }, 299);
  }
}
