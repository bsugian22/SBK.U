import * as types from "./withdrawalTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchWithdrawalsRequest = () => {
  return {
    type: types.FETCH_WITHDRAWALS_REQUEST,
  };
};

export const fetchWithdrawalsSuccess = (withdrawal) => {
  return {
    type: types.FETCH_WITHDRAWALS_SUCCESS,
    payload: withdrawal,
  };
};

export const fetchWithdrawalsFailure = (error) => {
  return {
    type: types.FETCH_WITHDRAWALS_FAILURE,
    payload: error,
  };
};

export const fetchWithdrawalRequest = () => {
  return {
    type: types.FETCH_WITHDRAWAL_REQUEST,
  };
};

export const fetchWithdrawaluccess = (withdrawal) => {
  return {
    type: types.FETCH_WITHDRAWAL_SUCCESS,
    payload: withdrawal,
  };
};

export const fetchWithdrawalFailure = (error) => {
  return {
    type: types.FETCH_WITHDRAWAL_FAILURE,
    payload: error,
  };
};

export const createWithdrawalRequest = () => {
  return {
    type: types.CREATE_WITHDRAWAL_REQUEST,
  };
};

export const createWithdrawaluccess = (message) => {
  return {
    type: types.CREATE_WITHDRAWAL_SUCCESS,
    payload: message,
  };
};

export const createWithdrawalFailure = (error) => {
  return {
    type: types.CREATE_WITHDRAWAL_FAILURE,
    payload: error,
  };
};

export const updateWithdrawalRequest = () => {
  return {
    type: types.UPDATE_WITHDRAWAL_REQUEST,
  };
};

export const updateWithdrawaluccess = (withdrawal) => {
  return {
    type: types.UPDATE_WITHDRAWAL_SUCCESS,
    payload: withdrawal,
  };
};

export const updateWithdrawalFailure = (error) => {
  return {
    type: types.UPDATE_WITHDRAWAL_FAILURE,
    payload: error,
  };
};

export const deleteWithdrawalRequest = () => {
  return {
    type: types.DELETE_WITHDRAWALS_REQUEST,
  };
};

export const deleteWithdrawalSuccess = (withdrawal) => {
  return {
    type: types.DELETE_WITHDRAWALS_SUCCESS,
    payload: withdrawal,
  };
};

export const deleteWithdrawalFailure = (error) => {
  return {
    type: types.DELETE_WITHDRAWALS_FAILURE,
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

export const changeWithdrawalCategory = (category) => {
  return {
    type: types.CHANGE_WITHDRAWAL_CATEGORY,
    payload: category,
  };
};

export const changeWithdrawalAmount = (amount) => {
  return {
    type: types.CHANGE_WITHDRAWAL_AMOUNT,
    payload: amount,
  };
};

export const changeWithdrawalIds = (ids) => {
  return {
    type: types.CHANGE_WITHDRAWAL_IDS,
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

export const allWithdrawal = () => {
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
export const setWithdrawals = (params) => {
  return (dispatch) => {
    dispatch(fetchWithdrawalsRequest(0));
    axios
      .get(`/api/withdrawal`, {
        params: params,
      })
      .then((response) => {
        const withdrawals = camelize(response.data);
        dispatch(fetchWithdrawalsSuccess(withdrawals));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWithdrawalsFailure(errorMsg));
      });
  };
};

export const fetchWithdrawal = () => {
  return (dispatch) => {
    dispatch(fetchWithdrawalRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const withdrawal = response.data;
        dispatch(fetchWithdrawaluccess(withdrawal));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWithdrawalFailure(errorMsg));
      });
  };
};

export const createWithdrawalAction = (withdrawal) => {
  return (dispatch) => {
    dispatch(createWithdrawalRequest());
    axios
      .post(`/api/withdrawal`, withdrawal)
      .then((response) => {
        dispatch(setWithdrawals());
        dispatch(createWithdrawaluccess(response.data.message));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let withdrawalErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.method
              ? errorMsg?.errors?.method[0] + " <br /> "
              : ""
          } ${errorMsg?.errors?.amount ? errorMsg?.errors?.amount[0] : ""} ${
            errorMsg?.errors?.password ? errorMsg?.errors?.password[0] : ""
          } `,

          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createWithdrawalFailure(withdrawalErrorMessage));
      });
  };
};

export const updateWithdrawal = () => {
  return (dispatch) => {
    dispatch(updateWithdrawalRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Withdrawal = response.data;
        dispatch(updateWithdrawaluccess(Withdrawal));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateWithdrawalFailure(errorMsg));
      });
  };
};

export const deleteWithdrawal = (list) => {
  return (dispatch) => {
    console.table(list);
    axios
      .delete(`/api/withdrawal`, { data: list })
      .then((response) => {
        const withdrawals = response.data;
        dispatch(deleteWithdrawalSuccess(withdrawals));
        dispatch(setWithdrawals());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteWithdrawalFailure(errorMsg));
      });
  };
};

export const checkWithdrawalCertainItem = (data) => {
  return {
    type: types.CHECK_WITHDRAWAL_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteWithdrawal = () => {
  return {
    type: types.LIST_OF_TODELETE_WITHDRAWALS,
  };
};

export const selectWithdrawalMethod = (status) => {
  return {
    type: types.SELECT_WITHDRAWAL_METHOD,
    payload: status,
  };
};

export const changeCreateWithdrawalAmount = (amount) => {
  return {
    type: types.CHANGE_CREATE_WITHDRAWAL_AMOUNT,
    payload: amount,
  };
};

export const incrementWithdrawal = () => {
  return {
    type: types.INCREMENT_WITHDRAWAL_AMOUNT,
  };
};

export const decrementWithdrawal = () => {
  return {
    type: types.DECREMENT_WITHDRAWAL_AMOUNT,
  };
};

export const withdrawalPassword = (pass) => {
  return {
    type: types.ENTER_WITHDRAWAL_PASSWORD,
    payload: pass,
  };
};

export const resetCreateWithdrawal = () => {
  return {
    type: types.RESET_CREATE_WITHDRAWAL,
  };
};

export const selectAllWithdrawal = () => {
  return {
    type: types.CHECK_ALL_WITHDRAWALS,
  };
};
