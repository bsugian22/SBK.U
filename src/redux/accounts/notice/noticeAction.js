import * as types from "./noticeTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
import { setLogout } from "../../user/userActions";
export const setNoticesRequest = () => {
  return {
    type: types.FETCH_NOTICES_REQUEST,
  };
};

export const setNoticesSuccess = (notices) => {
  return {
    type: types.FETCH_NOTICES_SUCCESS,
    payload: notices,
  };
};

export const setNoticesFailure = (error) => {
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

export const setNoticesuccess = (Notice) => {
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
    dispatch(setNoticesRequest(0));
    axios
      .get(`/api/notices`, { params: params })
      .then((response) => {
        const notices = camelize(response.data);
        dispatch(setNoticesSuccess(notices));
        dispatch(setPagesOfNotice());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(setNoticesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const setPagesOfNotice = () => {
  return (dispatch) => {
    dispatch(setPageNotice());
  };
};

export const setPageNotice = () => {
  return {
    type: types.SET_NOTICE_PAGE,
  };
};

export const onClickPageNotice = (data) => {
  return (dispatch) => {
    dispatch(setNotices(data));
  };
};

export const nextNoticePage = (page) => {
  return {
    type: types.NEXT_PAGE_NOTICE,
    payload: page,
  };
};

export const nextPageNotice = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextNoticePage(page));
      dispatch(setNotices({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevNoticePage = (page) => {
  return {
    type: types.PREV_PAGE_NOTICE,
    payload: page,
  };
};

export const prevPageNotice = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevNoticePage(page));
      dispatch(setNotices({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchNotice = (id) => {
  return (dispatch) => {
    dispatch(fetchNoticeRequest);
    axios
      .get(`/api/notices/`+id)
      .then((response) => {
        const notice = camelize( response.data);
        // dispatch(setNoticesuccess(notice));
        dispatch(viewNotice(notice.data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchNoticeFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
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
        let noticeErrorNotice = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.title
              ? errorMsg?.errors?.title[0] + " <br /> "
              : ""
          }
            ${errorMsg?.errors?.content ? errorMsg?.errors?.content[0] : ""}`,

          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createNoticeFailure(noticeErrorNotice));
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
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const deleteNotices = (list) => {
  return (dispatch) => {
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
        dispatch(deleteNoticesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
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
