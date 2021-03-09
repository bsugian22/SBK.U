import * as types from "./depositTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
import { setLogout } from "../../user/userActions";
export const fetchDepositsRequest = () => {
  return {
    type: types.FETCH_DEPOSITS_REQUEST,
  };
};

export const fetchDepositsSuccess = (Deposits) => {
  return {
    type: types.FETCH_DEPOSITS_SUCCESS,
    payload: Deposits,
  };
};

export const fetchDepositsFailure = (error) => {
  return {
    type: types.FETCH_DEPOSITS_FAILURE,
    payload: error,
  };
};

export const fetchDepositRequest = () => {
  return {
    type: types.FETCH_DEPOSIT_REQUEST,
  };
};

export const fetchDepositsuccess = (Deposit) => {
  return {
    type: types.FETCH_DEPOSIT_SUCCESS,
    payload: Deposit,
  };
};

export const fetchDepositFailure = (error) => {
  return {
    type: types.FETCH_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const createDepositRequest = () => {
  return {
    type: types.CREATE_DEPOSIT_REQUEST,
  };
};

export const createDepositsuccess = (message) => {
  return {
    type: types.CREATE_DEPOSIT_SUCCESS,
    payload: message,
  };
};

export const createDepositFailure = (error) => {
  return {
    type: types.CREATE_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const updateDepositRequest = () => {
  return {
    type: types.UPDATE_DEPOSIT_REQUEST,
  };
};

export const updateDepositsuccess = (Deposit) => {
  return {
    type: types.UPDATE_DEPOSIT_SUCCESS,
    payload: Deposit,
  };
};

export const updateDepositFailure = (error) => {
  return {
    type: types.UPDATE_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const deleteDepositsRequest = () => {
  return {
    type: types.DELETE_DEPOSITS_REQUEST,
  };
};

export const deleteDepositsSuccess = (Deposits) => {
  return {
    type: types.DELETE_DEPOSITS_SUCCESS,
    payload: Deposits,
  };
};

export const deleteDepositsFailure = (error) => {
  return {
    type: types.DELETE_DEPOSITS_FAILURE,
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

export const changeDepositCategory = (category) => {
  return {
    type: types.CHANGE_DEPOSIT_CATEGORY,
    payload: category,
  };
};

export const changeDepositAmount = (amount) => {
  return {
    type: types.CHANGE_DEPOSIT_AMOUNT,
    payload: amount,
  };
};

export const changeDepositIds = (ids) => {
  return {
    type: types.CHANGE_DEPOSIT_IDS,
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

export const allDeposits = () => {
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
    type: types.LIST_OF_DEPOSIT,
  };
};
export const setDeposits = (params) => {
  return (dispatch) => {
    dispatch(fetchDepositsRequest(0));
    axios
      .get(`/api/deposit`, {
        params: params,
      })
      .then((response) => {
        const deposits = camelize(response.data);
        dispatch(fetchDepositsSuccess(deposits));
        dispatch(setPagesOfDeposit());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDepositsFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const onClickPageDeposit = (data) => {
  return (dispatch) => {
    dispatch(setDeposits(data));
  };
};

export const nextDeptPage = (page) => {
  return {
    type: types.NEXT_PAGE_DEPOSIT,
    payload: page,
  };
};

export const nextPageDeposit = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextDeptPage(page));
      // dispatch(setDeposits({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevDeptPage = (page) => {
  return {
    type: types.PREV_PAGE_DEPOSIT,
    payload: page,
  };
};

export const prevPageDeposit = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevDeptPage(page));
      dispatch(setDeposits({ page: page, per_page: data.per_page }));
    };
  }
};

export const paginationRequestData = () => {
  return {
    type: types.PAGINATION_REQUEST_DEPOSIT,
  };
};

export const paginationSuccessData = (deposits) => {
  return {
    type: types.PAGINATION_SUCCESS_DEPOSIT,
    payload: deposits,
  };
};
export const paginationFailureData = () => {
  return {
    type: types.PAGINATION_FAILURE_DEPOSIT,
  };
};

export const requestData = (params) => {
  return (dispatch) => {
    dispatch(paginationRequestData(0));
    axios
      .get(`/api/deposit`, {
        params: params,
      })
      .then((response) => {
        const deposits = camelize(response.data);
        dispatch(paginationSuccessData(deposits));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(paginationFailureData(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const setPagesOfDeposit = () => {
  return (dispatch) => {
    dispatch(setPageDeposit());
  };
};

export const setPageDeposit = () => {
  return {
    type: types.SET_DEPOSIT_PAGE,
  };
};

export const fetchDeposit = () => {
  return (dispatch) => {
    dispatch(fetchDepositRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Deposit = response.data;
        dispatch(fetchDepositsuccess(Deposit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDepositFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const createDepositAction = (deposit) => {
  return (dispatch) => {
    dispatch(createDepositRequest());
    axios
      .post(`/api/deposit`, deposit)
      .then((response) => {
        dispatch(setDeposits());
        dispatch(createDepositsuccess(response.data.message));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let inquiryErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.method
              ? errorMsg?.errors?.method[0] + " <br /> "
              : ""
          } ${errorMsg?.errors?.amount ? errorMsg?.errors?.amount[0] : ""}`,
          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createDepositFailure(inquiryErrorMessage));
      });
  };
};

export const updateDeposit = () => {
  return (dispatch) => {
    dispatch(updateDepositRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Deposit = response.data;
        dispatch(updateDepositsuccess(Deposit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateDepositFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const deleteDeposits = (list) => {
  return (dispatch) => {
    console.table(list);
    axios
      .delete(`/api/deposit`, { data: list })
      .then((response) => {
        const deposits = response.data;
        dispatch(deleteDepositsSuccess(deposits));
        dispatch(setDeposits());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteDepositsFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const checkDepositCertainItem = (data) => {
  return {
    type: types.CHECK_DEPOSIT_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteDeposits = () => {
  return {
    type: types.LIST_OF_TODELETE_DEPOSITS,
  };
};

export const selectDepositMethod = (status) => {
  return {
    type: types.SELECT_DEPOSIT_METHOD,
    payload: status,
  };
};

export const changeCreateDepositAmount = (amount) => {
  return {
    type: types.CHANGE_CREATE_DEPOSIT_AMOUNT,
    payload: amount,
  };
};

export const incrementDeposit = () => {
  return {
    type: types.INCREMENT_DEPOSIT_AMOUNT,
  };
};

export const decrementDeposit = () => {
  return {
    type: types.DECREMENT_DEPOSIT_AMOUNT,
  };
};

export const resetCreateDeposit = () => {
  return {
    type: types.RESET_CREATE_DEPOSIT,
  };
};
export const checkAllDeposit = () => {
  return {
    type: types.CHECK_ALL_DEPOSIT,
  };
};

export const changePage = (data) => {
  return (dispatch) => {
    dispatch(setDeposits({ page: data.page, per_page: data.per_page }));
  };
};
