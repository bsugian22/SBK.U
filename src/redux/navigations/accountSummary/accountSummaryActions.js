import * as types from "./accountSummaryTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";

export const fetchSummaryRequest = () => {
  return {
    type: types.FETCH_SUMMARY_REQUEST,
  };
};

export const fetchSummarySuccess = (summary) => {
  return {
    type: types.FETCH_SUMMARY_SUCCESS,
    payload: summary,
  };
};

export const fetchSummaryFailure = (error) => {
  return {
    type: types.FETCH_SUMMARY_FAILURE,
    payload: error,
  };
};

export const fetchSummary = () => {
  return (dispatch) => {
    dispatch(fetchSummaryRequest);
    axios
      .get(`/api/summary`)
      .then((response) => {
        const summary = camelize(response.data) ;
        dispatch(fetchSummarySuccess(summary));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchSummaryFailure(errorMsg));
      });
  };
};
