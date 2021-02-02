import {
  FETCH_DEPOSITS_REQUEST,
  FETCH_DEPOSITS_SUCCESS,
  FETCH_DEPOSITS_FAILURE,
} from "./depositTypes";
import axios from "axios";

export const fetchDepositsRequest = () => {
  return {
    type: FETCH_DEPOSITS_REQUEST,
  };
};

export const fetchDepositsSuccess = (deposits) => {
  return {
    type: FETCH_DEPOSITS_SUCCESS,
    payload: deposits,
  };
};

export const fetchDepositsFailure = (error) => {
  return {
    type: FETCH_DEPOSITS_FAILURE,
    payload: error,
  };
  };

export const fetchDeposits = () => {
    return (dispatch) => {
      dispatch(fetchDepositsRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const users = response.data;
                    dispatch(fetchDepositsSuccess(deposits))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchDepositsFailure(errorMsg))
              })
      };
};
