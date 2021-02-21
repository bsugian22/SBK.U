import * as types from "./noticeTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchNoticesRequest = () => {
  return {
    type: types.FETCH_NOTICES_REQUEST,
  };
};

export const fetchNoticesSuccess = (notices) => {
  return {
    type: types.FETCH_NOTICES_SUCCESS,
    payload: notices,
  };
};

export const fetchNoticesFailure = (error) => {
  return {
    type: types.FETCH_NOTICES_FAILURE,
    payload: error,
  };
};

export const fetchNoticeRequest = () => {
  return {
    type: types.FETCH_NOTICE_REQUEST,
  };
};

export const fetchNoticesuccess = (Notice) => {
  return {
    type: types.FETCH_NOTICE_SUCCESS,
    payload: Notice,
  };
};

export const fetchNoticeFailure = (error) => {
  return {
    type: types.FETCH_NOTICE_FAILURE,
    payload: error,
  };
};

export const createNoticeRequest = () => {
  return {
    type: types.CREATE_NOTICE_REQUEST,
  };
};

export const createNoticesuccess = (message) => {
  return {
    type: types.CREATE_NOTICE_SUCCESS,
    payload: message,
  };
};

export const createNoticeFailure = (error) => {
  return {
    type: types.CREATE_NOTICE_FAILURE,
    payload: error,
  };
};

export const updateNoticeRequest = () => {
  return {
    type: types.UPDATE_NOTICE_REQUEST,
  };
};

export const updateNoticesuccess = (Notice) => {
  return {
    type: types.UPDATE_NOTICE_SUCCESS,
    payload: Notice,
  };
};

export const updateNoticeFailure = (error) => {
  return {
    type: types.UPDATE_NOTICE_FAILURE,
    payload: error,
  };
};

export const deleteNoticesRequest = () => {
  return {
    type: types.DELETE_NOTICES_REQUEST,
  };
};

export const deleteNoticesSuccess = (notices) => {
  return {
    type: types.DELETE_NOTICES_SUCCESS,
    payload: notices,
  };
};

export const deleteNoticesFailure = (error) => {
  return {
    type: types.DELETE_NOTICES_FAILURE,
    payload: error,
  };
};
export const openModal = () => {
  return {
    type: types.OPEN_CREATE_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: types.CLOSE_CREATE_MODAL,
  };
};

export const changeNoticeCategory = (category) => {
  return {
    type: types.CHANGE_NOTICE_CATEGORY,
    payload: category,
  };
};

export const changeNoticeAmount = (amount) => {
  return {
    type: types.CHANGE_NOTICE_AMOUNT,
    payload: amount,
  };
};

export const changeNoticeIds = (ids) => {
  return {
    type: types.CHANGE_NOTICE_IDS,
    payload: ids,
  };
};
export const filteredProceeding = () => {
  return {
    type: types.FILTERED_PROCEEDING_LIST,
  };
};

export const proceedingList = () => {
  return (dispatch) => {
    dispatch(filteredProceeding());
  };
};

export const allNotices = () => {
  return (dispatch) => {
    dispatch(unfilteredAll());
  };
};

export const filteredHit = () => {
  return {
    type: types.FILTERED_HIT_LIST,
  };
};

export const filteredAesthetic = () => {
  return {
    type: types.FILTERED_AESTHETIC_LIST,
  };
};
export const aetheticList = () => {
  return (dispatch) => {
    dispatch(filteredAesthetic());
  };
};

export const hitList = () => {
  return (dispatch) => {
    dispatch(filteredHit());
  };
};

export const unfilteredAll = () => {
  return {
    type: types.LIST_OF_NOTICE,
  };
};
export const setNotices = (params) => {
  return (dispatch) => {
    dispatch(fetchNoticesRequest(0));
    axios
      .get(`/api/notices`, { params: params })
      .then((response) => {
        const notices = camelize(response.data);
        console.log(response);
        dispatch(fetchNoticesSuccess(notices));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchNoticesFailure(errorMsg));
      });
  };
};

export const fetchNotice = () => {
  return (dispatch) => {
    dispatch(fetchNoticeRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Notice = response.data;
        dispatch(fetchNoticesuccess(Notice));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchNoticeFailure(errorMsg));
      });
  };
};

export const createNoticeAction = (notice) => {
  return (dispatch) => {
    dispatch(createNoticeRequest());
    axios
      .post(`/api/notices`, notice)
      .then((response) => {
        dispatch(setNotices());
        dispatch(createNoticesuccess(response.data.message));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let noticeErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.title
              ? errorMsg?.errors?.title[0] + " <br /> "
              : ""
          }
            ${errorMsg?.errors?.content ? errorMsg?.errors?.content[0] : ""}`,

          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createNoticeFailure(noticeErrorMessage));
      });
  };
};

export const updateNotice = () => {
  return (dispatch) => {
    dispatch(updateNoticeRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Notice = response.data;
        dispatch(updateNoticesuccess(Notice));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateNoticeFailure(errorMsg));
      });
  };
};

export const deleteNotices = (list) => {
  return (dispatch) => {
    console.log(list);
    axios
      .delete(`/api/notices`, { data: list })
      .then((response) => {
        const notices = response.data;
        console.table(response);
        dispatch(deleteNoticesSuccess(notices));
        dispatch(setNotices());
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(deleteNoticesFailure(errorMsg));
      });
  };
};

export const checkNoticeCertainItem = (data) => {
  return {
    type: types.CHECK_NOTICE_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteNotices = () => {
  return {
    type: types.LIST_OF_TODELETE_NOTICES,
  };
};

export const selectNoticeMethod = (status) => {
  return {
    type: types.SELECT_NOTICE_METHOD,
    payload: status,
  };
};

export const changeCreateNoticeAmount = (amount) => {
  return {
    type: types.CHANGE_CREATE_NOTICE_AMOUNT,
    payload: amount,
  };
};

export const incrementNotice = () => {
  return {
    type: types.INCREMENT_NOTICE_AMOUNT,
  };
};

export const decrementNotice = (message) => {
  return {
    type: types.DECREMENT_NOTICE_AMOUNT,
    payload: message,
  };
};

export const fromCashToCasinoNotice = () => {
  return {
    type: types.FROM_CASH_TO_CASINO_NOTICE,
  };
};

export const fromCasinoToCashNotice = () => {
  return {
    type: types.FROM_CASINO_TO_CASH_NOTICE,
  };
};

export const resetCreateNotice = () => {
  return {
    type: types.RESET_CREATE_NOTICE,
  };
};

export const selectAllNotice = () => {
  return {
    type: types.CHECK_ALL_NOTICE,
  };
};

export const changeNoticeTitle = (title) => {
  return {
    type: types.CHANGE_NOTICE_TITLE,
    payload: title,
  };
};

export const changeNoticeContent = (content) => {
  return {
    type: types.CHANGE_NOTICE_CONTENT,
    payload: content,
  };
};

export const viewNotice = (item) => {
  return {
    type: types.VIEW_NOTICE_ITEM,
    payload: item,
  };
};
