import {
  FETCH_INQUIRIES_REQUEST,
  FETCH_INQUIRIES_SUCCESS,
  FETCH_INQUIRIES_FAILURE,
  FETCH_INQUIRY_REQUEST,
  FETCH_INQUIRY_SUCCESS,
  FETCH_INQUIRY_FAILURE,
  CREATE_INQUIRY_REQUEST,
  CREATE_INQUIRY_SUCCESS,
  CREATE_INQUIRY_FAILURE,
  UPDATE_INQUIRY_REQUEST,
  UPDATE_INQUIRY_SUCCESS,
  UPDATE_INQUIRY_FAILURE,
  DELETE_INQUIRIES_REQUEST,
  DELETE_INQUIRIES_SUCCESS,
  DELETE_INQUIRIES_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_INQUIRY_AMOUNT,
  CHANGE_INQUIRY_CATEGORY,
  CHANGE_INQUIRY_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_INQUIRY,
  CHECK_INQUIRY_CERTAIN_ITEM,
  LIST_OF_TODELETE_INQUIRIES,
  SELECT_INQUIRY_METHOD,
  CHANGE_CREATE_INQUIRY_AMOUNT,
  INCREMENT_INQUIRY_AMOUNT,
  DECREMENT_INQUIRY_AMOUNT,
  FROM_CASH_TO_CASINO_INQUIRY,
  FROM_CASINO_TO_CASH_INQUIRY,
  RESET_CREATE_INQUIRY,
  CHECK_ALL_INQUIRY,
  CHANGE_INQUIRY_TITLE,
  CHANGE_INQUIRY_CONTENT,
} from "./inquiryTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchInquiriesRequest = () => {
  return {
    type: FETCH_INQUIRIES_REQUEST,
  };
};

export const fetchInquiriesSuccess = (inquiries) => {
  return {
    type: FETCH_INQUIRIES_SUCCESS,
    payload: inquiries,
  };
};

export const fetchInquiriesFailure = (error) => {
  return {
    type: FETCH_INQUIRIES_FAILURE,
    payload: error,
  };
};

export const fetchInquiryRequest = () => {
  return {
    type: FETCH_INQUIRY_REQUEST,
  };
};

export const fetchInquiriesuccess = (Inquiry) => {
  return {
    type: FETCH_INQUIRY_SUCCESS,
    payload: Inquiry,
  };
};

export const fetchInquiryFailure = (error) => {
  return {
    type: FETCH_INQUIRY_FAILURE,
    payload: error,
  };
};

export const createInquiryRequest = () => {
  return {
    type: CREATE_INQUIRY_REQUEST,
  };
};

export const createInquiriesuccess = (message) => {
  return {
    type: CREATE_INQUIRY_SUCCESS,
    payload: message,
  };
};

export const createInquiryFailure = (error) => {
  return {
    type: CREATE_INQUIRY_FAILURE,
    payload: error,
  };
};

export const updateInquiryRequest = () => {
  return {
    type: UPDATE_INQUIRY_REQUEST,
  };
};

export const updateInquiriesuccess = (Inquiry) => {
  return {
    type: UPDATE_INQUIRY_SUCCESS,
    payload: Inquiry,
  };
};

export const updateInquiryFailure = (error) => {
  return {
    type: UPDATE_INQUIRY_FAILURE,
    payload: error,
  };
};

export const deleteInquiriesRequest = () => {
  return {
    type: DELETE_INQUIRIES_REQUEST,
  };
};

export const deleteInquiriesSuccess = (inquiries) => {
  return {
    type: DELETE_INQUIRIES_SUCCESS,
    payload: inquiries,
  };
};

export const deleteInquiriesFailure = (error) => {
  return {
    type: DELETE_INQUIRIES_FAILURE,
    payload: error,
  };
};
export const openModal = () => {
  return {
    type: OPEN_CREATE_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_CREATE_MODAL,
  };
};

export const changeInquiryCategory = (category) => {
  return {
    type: CHANGE_INQUIRY_CATEGORY,
    payload: category,
  };
};

export const changeInquiryAmount = (amount) => {
  return {
    type: CHANGE_INQUIRY_AMOUNT,
    payload: amount,
  };
};

export const changeInquiryIds = (ids) => {
  return {
    type: CHANGE_INQUIRY_IDS,
    payload: ids,
  };
};
export const filteredProceeding = () => {
  return {
    type: FILTERED_PROCEEDING_LIST,
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
    type: FILTERED_HIT_LIST,
  };
};

export const filteredAesthetic = () => {
  return {
    type: FILTERED_AESTHETIC_LIST,
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
    type: LIST_OF_INQUIRY,
  };
};
export const setInquiries = (params) => {
  return (dispatch) => {
    dispatch(fetchInquiriesRequest(0));
    axios
      .get(`/api/inquiries`)
      .then((response) => {
        const inquiries = camelize(response.data);
        console.table(response);
        dispatch(fetchInquiriesSuccess(inquiries));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchInquiriesFailure(errorMsg));
      });
  };
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
      });
  };
};

export const deleteInquiries = (list) => {
  return (dispatch) => {
    console.log(list);
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
        console.log(error);
        dispatch(deleteInquiriesFailure(errorMsg));
      });
  };
};

export const checkInquiryCertainItem = (data) => {
  return {
    type: CHECK_INQUIRY_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteInquiries = () => {
  return {
    type: LIST_OF_TODELETE_INQUIRIES,
  };
};

export const selectInquiryMethod = (status) => {
  return {
    type: SELECT_INQUIRY_METHOD,
    payload: status,
  };
};

export const changeCreateInquiryAmount = (amount) => {
  return {
    type: CHANGE_CREATE_INQUIRY_AMOUNT,
    payload: amount,
  };
};

export const incrementInquiry = () => {
  return {
    type: INCREMENT_INQUIRY_AMOUNT,
  };
};

export const decrementInquiry = (message) => {
  return {
    type: DECREMENT_INQUIRY_AMOUNT,
    payload: message,
  };
};

export const fromCashToCasinoInquiry = () => {
  return {
    type: FROM_CASH_TO_CASINO_INQUIRY,
  };
};

export const fromCasinoToCashInquiry = () => {
  return {
    type: FROM_CASINO_TO_CASH_INQUIRY,
  };
};

export const resetCreateInquiry = () => {
  return {
    type: RESET_CREATE_INQUIRY,
  };
};

export const selectAllInquiry = () => {
  return {
    type: CHECK_ALL_INQUIRY,
  };
};

export const changeInquiryTitle = (title) => {
  return {
    type: CHANGE_INQUIRY_TITLE,
    payload: title,
  };
};

export const changeInquiryContent = (content) => {
  return {
    type: CHANGE_INQUIRY_CONTENT,
    payload: content,
  };
};
