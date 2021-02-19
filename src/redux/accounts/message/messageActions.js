import * as types from "./messageTypes";
  
  import axios from "../../plugins/axios";
  import { camelize, snakelize } from "../../helpers/object";
  
  import * as userTypes from "../user/userTypes";
  
  export const setLogout = () => ({
    type: userTypes.SET_LOGOUT,
  });
  
  export const fetchMessagesRequest = (id) => {
    return {
      type: types.FETCH_MESSAGES_REQUEST,
      id,
    };
  };
  
  export const fetchMessagesSuccess = (messages) => {
    return {
      type: types.FETCH_MESSAGES_SUCCESS,
      payload: messages,
    };
  };
  
  export const fetchMessagesFailure = (error) => {
    return {
      type: types.FETCH_MESSAGES_FAILURE,
      payload: error,
    };
  };
  
  export const fetchMessageRequest = () => {
    return {
      type: types.FETCH_MESSAGE_REQUEST,
    };
  };
  export const fetchMessageSuccess = (message) => {
    return {
      type: types.FETCH_MESSAGE_SUCCESS,
      payload: message,
    };
  };
  export const fetchMessageFailure = (error) => {
    return {
      type: types.FETCH_MESSAGE_FAILURE,
      payload: error,
    };
  };
  
  export const createMessageRequest = () => {
    return {
      type: types.CREATE_MESSAGE_REQUEST,
    };
  };
  export const createMessageSuccess = (message) => {
    return {
      type: types.CREATE_MESSAGE_SUCCESS,
      payload: message,
    };
  };
  export const createMessageFailure = (error) => {
    return {
      type: types.CREATE_MESSAGE_FAILURE,
      payload: error,
    };
  };
  
  export const updateMessageRequest = () => {
    return {
      type: types.UPDATE_MESSAGE_REQUEST,
    };
  };
  export const updateMessageSuccess = (message) => {
    return {
      type: types.UPDATE_MESSAGE_SUCCESS,
      payload: message,
    };
  };
  export const updateMessageFailure = (error) => {
    return {
      type: types.UPDATE_MESSAGE_FAILURE,
      payload: error,
    };
  };
  
  export const deleteMessagesRequest = () => {
    return {
      type: types.DELETE_MESSAGES_REQUEST,
    };
  };
  export const deleteMessagesSuccess = (messages) => {
    return {
      type: types.DELETE_MESSAGES_SUCCESS,
      payload: messages,
    };
  };
  export const deleteMessagesFailure = (error) => {
    return {
      type: types.DELETE_MESSAGES_FAILURE,
      payload: error,
    };
  };
  
  export const markreadMessageRequest = () => {
    return {
      type: types.MARKREAD_MESSAGE_REQUEST,
    };
  };
  export const markreadMessageSuccess = (message) => {
    return {
      type: types.MARKREAD_MESSAGE_SUCCESS,
      payload: message,
    };
  };
  export const markreadMessageFailure = (error) => {
    return {
      type: types.MARKREAD_MESSAGE_FAILURE,
      payload: error,
    };
  };
  
  
  export const fetchMessages = (params) => {
    return (dispatch) => {
      dispatch(fetchMessagesRequest(0));
      axios.get(`/api/admin/messages`, {params:params})
        .then(response => {
          const messages = response.data;
          messages.data.map((el, index) => {
            messages.data[index].isChecked = false;
          });
          dispatch(fetchMessagesSuccess(camelize(messages)));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchMessagesFailure(errorMsg));
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        });
    };
  };
  
  export const fetchMessage = () => {
    return (dispatch) => {
      dispatch(fetchMessageRequest);
      axios
        .get(`/api/admin/message`)
        .then((response) => {
          const message = response.data;
          dispatch(fetchMessageSuccess(message));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchMessageFailure(errorMsg));
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        });
    };
  };
  
  export const createMessage = (params) => {
    return (dispatch) => {
      dispatch(createMessageRequest);
      axios
        .post(`/api/admin/messages`, snakelize(params))
        .then((response) => {
          const message = response.data;
          dispatch(createMessageSuccess(message));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(createMessageFailure(errorMsg));
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        });
    };
  };
  
  export const updateMessage = () => {
    return (dispatch) => {
      dispatch(updateMessageRequest);
      axios
        .get(`/api/admin/messages`)
        .then((response) => {
          const message = response.data;
          dispatch(updateMessageSuccess(message));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(updateMessageFailure(errorMsg));
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        });
    };
  };
  
  export const deleteMessages = (params,pagination) => {
    return (dispatch) => {
      dispatch(deleteMessagesRequest);
      axios
        .delete(`/api/admin/messages`, { data: params })
        .then((response) => {
          const messages = response.data;
          dispatch(deleteMessagesSuccess(messages))
          dispatch(fetchMessages(pagination));
        }).catch(error => {
          const errorMsg = error.message;
          dispatch(deleteMessagesFailure(errorMsg)) 
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        })
    };
  };
  
  export const markreadMessage = () => {
    return (dispatch) => {
      dispatch(markreadMessageRequest);
      axios
        .get(`/api/admin/messages`)
        .then((response) => {
          const message = response.data;
          dispatch(markreadMessageSuccess(message));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(markreadMessageFailure(errorMsg));
          if (error.response.status == 401) {
            dispatch(setLogout());
          }
        });
    };
  };
  
  //SEARCH
  export const searchAnyWordMessage = () => {
    return { type: types.SEARCH_ANY_WORD_MESSAGE };
  };
  
  export const searchHandleChangeMessage = (word) => {
    return { type: types.SEARCH_HANDLE_CHANGE_MESSAGE, payload: word };
  };
  
  export const switchToMessageList = () => {
    return {
      type: types.SWITCH_TO_MESSAGELIST,
    };
  };
  
  export const displayBannedMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_BANNED_LIST,
    };
  };
  
  export const displayDebuggingMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_DEBUGGING_LIST,
    };
  };
  
  export const displayWaitingMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_WAITING_LIST,
    };
  };
  
  export const displayWarningMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_WARNING_LIST,
    };
  };
  export const displayAllMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_ALL_LIST,
    };
  };
  
  export const displayNormalMessage = () => {
    return {
      type: types.DISPLAY_MESSAGE_NORMAL_LIST,
    };
  };
  
  export const byIdMessage = () => {
    return {
      type: types.SORT_BY_MESSAGE_ID,
    };
  };
  
  export const byNameMessage = () => {
    return {
      type: types.SORT_BY_MESSAGE_NAME,
    };
  };
  
  export const byNickNameMessage = () => {
    return {
      type: types.SORT_BY_MESSAGE_NICKNAME,
    };
  };
  
  export const byContentMessage = () => {
    return {
      type: types.SORT_BY_MESSAGE_CONTENT,
    };
  };
  export const byTitleMessage = () => {
    return {
      type: types.SORT_BY_MESSAGE_TITLE,
    };
  };
  