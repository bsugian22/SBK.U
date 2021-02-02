import {
  FETCH_EXCHANGES_REQUEST,
  FETCH_EXCHANGES_SUCCESS,
  FETCH_EXCHANGES_FAILURE,
} from "./exchangeTypes";
import axios from "axios";

export const fetchExchangesRequest = () => {
  return {
    type: FETCH_EXCHANGES_REQUEST,
  };
};

export const fetchExchangesSuccess = (exchanges) => {
  return {
    type: FETCH_EXCHANGES_SUCCESS,
    payload: exchanges,
  };
};

export const fetcExchangesFailure = (error) => {
  return {
    type: FETCH_EXCHANGES_FAILURE,
    payload: error,
  };
  };

export const fetcExchanges = () => {
    return (dispatch) => {
      dispatch(fetchExchangesRequest);
      await axios.get(`/api/admin/exchange`)
                  .then(response => {
                    const exchanges = response.data;
                    dispatch(fetchExchangesSuccess(exchanges))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchExchangesFailure(errorMsg))
              })
      };
};
