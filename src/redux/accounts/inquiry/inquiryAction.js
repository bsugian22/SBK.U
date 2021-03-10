import * as types from "./inquiryTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
import { setLogout } from "../../user/userActions";
export const fetchInquiriesRequest = () => {
  return {
    type: types.FETCH_INQUIRIES_REQUEST,
  };
};

export const fetchInquiriesSuccess = (inquiries) => {
  return {
    type: types.FETCH_INQUIRIES_SUCCESS,
    payload: inquiries,
  };
};

export const fetchInquiriesFailure = (error) => {
  return {
    type: types.FETCH_INQUIRIES_FAILURE,
    payload: error,
  };
};

export const fetchInquiryRequest = () => {
  return {
    type: types.FETCH_INQUIRY_REQUEST,
  };
};

export const fetchInquiriesuccess = (Inquiry) => {
  return {
    type: types.FETCH_INQUIRY_SUCCESS,
    payload: Inquiry,
  };
};

export const fetchInquiryFailure = (error) => {
  return {
    type: types.FETCH_INQUIRY_FAILURE,
    payload: error,
  };
};

export const createInquiryRequest = () => {
  return {
    type: types.CREATE_INQUIRY_REQUEST,
  };
};

export const createInquiriesuccess = (message) => {
  return {
    type: types.CREATE_INQUIRY_SUCCESS,
    payload: message,
  };
};

export const createInquiryFailure = (error) => {
  return {
    type: types.CREATE_INQUIRY_FAILURE,
    payload: error,
  };
};

export const updateInquiryRequest = () => {
  return {
    type: types.UPDATE_INQUIRY_REQUEST,
  };
};

export const updateInquiriesuccess = (Inquiry) => {
  return {
    type: types.UPDATE_INQUIRY_SUCCESS,
    payload: Inquiry,
  };
};

export const updateInquiryFailure = (error) => {
  return {
    type: types.UPDATE_INQUIRY_FAILURE,
    payload: error,
  };
};

export const deleteInquiriesRequest = () => {
  return {
    type: types.DELETE_INQUIRIES_REQUEST,
  };
};

export const deleteInquiriesSuccess = (inquiries) => {
  return {
    type: types.DELETE_INQUIRIES_SUCCESS,
    payload: inquiries,
  };
};

export const deleteInquiriesFailure = (error) => {
  return {
    type: types.DELETE_INQUIRIES_FAILURE,
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

export const changeInquiryCategory = (category) => {
  return {
    type: types.CHANGE_INQUIRY_CATEGORY,
    payload: category,
  };
};

export const changeInquiryAmount = (amount) => {
  return {
    type: types.CHANGE_INQUIRY_AMOUNT,
    payload: amount,
  };
};

export const changeInquiryIds = (ids) => {
  return {
    type: types.CHANGE_INQUIRY_IDS,
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

export const allInquiries = () => {
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
    type: types.LIST_OF_INQUIRY,
  };
};
export const setInquiries = (params) => {
  return (dispatch) => {
    dispatch(fetchInquiriesRequest(0));
    axios
      .get(`/api/inquiries`, { params: params })
      .then((response) => {
        const inquiries = camelize(response.data);
        console.table(response);
        dispatch(fetchInquiriesSuccess(inquiries));
        dispatch(setPagesOfInquiry())
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchInquiriesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const setPagesOfInquiry = () => {
  return (dispatch) => {
    dispatch(setPageInquiry());
  };
};

export const setPageInquiry = () => {
  return {
    type: types.SET_INQUIRY_PAGE,
  };
};

export const onClickPageInquiry = (data) => {
  return (dispatch) => {
    dispatch(setInquiries(data));
  };
};

export const nextInquiryPage = (page) => {
  return {
    type: types.NEXT_PAGE_INQUIRY,
    payload: page,
  };
};

export const nextPageInquiry = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextInquiryPage(page));
      dispatch(setInquiries({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevInquiryPage = (page) => {
  return {
    type: types.PREV_PAGE_INQUIRY,
    payload: page,
  };
};

export const prevPageInquiry = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevInquiryPage(page));
      dispatch(setInquiries({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchInquiry = () => {
  return (dispatch) => {
    dispatch(fetchInquiryRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Inquiry = response.data;
        dispatch(fetchInquiriesuccess(Inquiry));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchInquiryFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const createInquiryAction = (inquiry) => {
  return (dispatch) => {
    dispatch(createInquiryRequest());
    axios
      .post(`/api/inquiries`, inquiry)
      .then((response) => {
        dispatch(setInquiries());
        dispatch(createInquiriesuccess(response.data.message));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let inquiryErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.title
              ? errorMsg?.errors?.title[0] + " <br /> "
              : ""
          }
            ${errorMsg?.errors?.content ? errorMsg?.errors?.content[0] : ""}`,

          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createInquiryFailure(inquiryErrorMessage));
      });
  };
};

export const updateInquiry = () => {
  return (dispatch) => {
    dispatch(updateInquiryRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Inquiry = response.data;
        dispatch(updateInquiriesuccess(Inquiry));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateInquiryFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const deleteInquiries = (list) => {
  return (dispatch) => {
    axios
      .delete(`/api/inquiries`, { data: list })
      .then((response) => {
        const inquiries = response.data;
        console.table(response);
        dispatch(deleteInquiriesSuccess(inquiries));
        dispatch(setInquiries());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteInquiriesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const checkInquiryCertainItem = (data) => {
  return {
    type: types.CHECK_INQUIRY_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteInquiries = () => {
  return {
    type: types.LIST_OF_TODELETE_INQUIRIES,
  };
};

export const selectInquiryMethod = (status) => {
  return {
    type: types.SELECT_INQUIRY_METHOD,
    payload: status,
  };
};

export const changeCreateInquiryAmount = (amount) => {
  return {
    type: types.CHANGE_CREATE_INQUIRY_AMOUNT,
    payload: amount,
  };
};

export const incrementInquiry = () => {
  return {
    type: types.INCREMENT_INQUIRY_AMOUNT,
  };
};

export const decrementInquiry = (message) => {
  return {
    type: types.DECREMENT_INQUIRY_AMOUNT,
    payload: message,
  };
};

export const fromCashToCasinoInquiry = () => {
  return {
    type: types.FROM_CASH_TO_CASINO_INQUIRY,
  };
};

export const fromCasinoToCashInquiry = () => {
  return {
    type: types.FROM_CASINO_TO_CASH_INQUIRY,
  };
};

export const resetCreateInquiry = () => {
  return {
    type: types.RESET_CREATE_INQUIRY,
  };
};

export const selectAllInquiry = () => {
  return {
    type: types.CHECK_ALL_INQUIRY,
  };
};

export const changeInquiryTitle = (title) => {
  return {
    type: types.CHANGE_INQUIRY_TITLE,
    payload: title,
  };
};

export const changeInquiryContent = (content) => {
  return {
    type: types.CHANGE_INQUIRY_CONTENT,
    payload: content,
  };
};
