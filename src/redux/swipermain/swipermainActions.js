import {
  FETCH_WITHDRAWALS_REQUEST,
  FETCH_WITHDRAWALS_SUCCESS,
  FETCH_WITHDRAWALS_FAILURE,
} from "./swipermainTypes";
import axios from "axios";

export const fetchWithdrawalsRequest = () => {
  return {
    type: FETCH_WITHDRAWALS_REQUEST,
  };
};

export const fetchWithdrawalsSuccess = (withdrawals) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: withdrawals,
  };
};

export const fetchWithdrawalsFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
  };

export const fetchWithdrawals = () => {
    return (dispatch) => {
      dispatch(fetchWithdrawalsRequest);
      await axios.get(`/api/admin/withdrawal`)
                  .then(response => {
                    const withdrawals = response.data;
                    dispatch(fetchWithdrawalsSuccess(withdrawals))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchWithdrawalsFailure(errorMsg))
              })
      };
};
