import * as types from "./messageTypes";

import axios from "../../../plugins/axios";
import { camelize, snakelize } from "../../../helpers/object";

import * as userTypes from "../../user/userTypes";

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
    axios
      .get(`/api/messages`, { params: params })
      .then((response) => {
        const messages = response.data;
        messages.data.map((el, index) => {
          messages.data[index].isChecked = false;
        });
        dispatch(fetchMessagesSuccess(camelize(messages)));
        dispatch(setPagesOfMessage());
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

export const setPagesOfMessage = () => {
  return (dispatch) => {
    dispatch(setPageMessage());
  };
};

export const setPageMessage = () => {
  return {
    type: types.SET_MESSAGE_PAGE,
  };
};

export const onClickPageMessage = (data) => {
  return (dispatch) => {
    dispatch(fetchMessages(data));
  };
};

export const nextMessagePage = (page) => {
  return {
    type: types.NEXT_PAGE_MESSAGE,
    payload: page,
  };
};

export const nextPageMessage = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextMessagePage(page));
      dispatch(fetchMessages({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevMessagePage = (page) => {
  return {
    type: types.PREV_PAGE_MESSAGE,
    payload: page,
  };
};

export const prevPageMessage = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevMessagePage(page));
      dispatch(fetchMessages({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchMessage = (id) => {
  return (dispatch) => {
    dispatch(fetchMessageRequest);
    axios
      .get(`/api/messages/`+id)
      .then((response) => {
        const message = response.data;
        dispatch(fetchMessageSuccess(message));
        dispatch(readMessageReceived(message.data));
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

export const deleteMessages = (params) => {
  return (dispatch) => {
    dispatch(deleteMessagesRequest());
    axios
      .delete(`/api/messages`, { data: params })
      .then((response) => {
        const messages = response.data;
        dispatch(deleteMessagesSuccess(messages));
        dispatch(fetchMessages());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteMessagesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
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

export const readMessageReceived = (item) => {
  return {
    type: types.READ_MESSAGE_RECEIVED,
    payload: item,
  };
};

export const checkMessageCertainItem = (data) => {
  return {
    type: types.CHECK_MESSAGE_CERTAIN_ITEM,
    payload: data,
  };
};

export const selectAllMessage = () => {
  return {
    type: types.SELECT_ALL_MESSAGE,
  };
};
export const listOfToDeleteMessages = () => {
  return {
    type: types.LIST_OF_TODELETE_MESSAGES,
  };
};
