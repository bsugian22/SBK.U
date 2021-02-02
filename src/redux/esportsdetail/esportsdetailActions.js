import {
  FETCH_CASHES_REQUEST,
  FETCH_CASHES_SUCCESS,
  FETCH_CASHES_FAILURE,
} from "./cashTypes";
import axios from "axios";

export const fetchCashesRequest = () => {
  return {
    type: FETCH_CASHES_REQUEST,
  };
};

export const fetchCashesSuccess = (cashes) => {
  return {
    type: FETCH_CASHES_SUCCESS,
    payload: cashes,
  };
};

export const fetchCashesFailure = (error) => {
  return {
    type: FETCH_CASHES_FAILURE,
    payload: error,
  };
  };

export const fetchCashes = () => {
    return (dispatch) => {
      dispatch(fetchCashesRequest);
      await axios.get(`/api/admin/cash`)
                  .then(response => {
                    const cashes = response.data;
                    dispatch(fetchCashesSuccess(cashes))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchCashesFailure(errorMsg))
              })
      };
};
