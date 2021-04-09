import * as types from "./accountSummaryTypes";
import axios from "../../../plugins/axios";
import { chain } from "lodash";
import moment from "moment";
import { connect, useDispatch, useSelector } from "react-redux";

export const fetchSummariesRequest = () => {
  return {
    type: types.FETCH_SUMMARIES_REQUEST,
  };
};

export const fetchSummariesSuccess = (summaries) => {
  return {
    type: types.FETCH_SUMMARIES_SUCCESS,
    payload: summaries,
  };
};

export const fetchSummariesFailure = (error) => {
  return {
    type: types.FETCH_SUMMARIES_FAILURE,
    payload: error,
  };
};

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

export const createSummaryRequest = () => {
  return {
    type: types.CREATE_SUMMARY_REQUEST,
  };
};

export const createSummarySuccess = (summary) => {
  return {
    type: types.CREATE_SUMMARY_SUCCESS,
    payload: summary,
  };
};

export const createSummaryFailure = (error) => {
  return {
    type: types.CREATE_SUMMARY_FAILURE,
    payload: error,
  };
};

export const updateSummaryRequest = () => {
  return {
    type: types.UPDATE_SUMMARY_REQUEST,
  };
};

export const updateSummarySuccess = (summary) => {
  return {
    type: types.UPDATE_SUMMARY_SUCCESS,
    payload: summary,
  };
};

export const updateSummaryFailure = (error) => {
  return {
    type: types.UPDATE_SUMMARY_FAILURE,
    payload: error,
  };
};

export const deleteSummariesRequest = () => {
  return {
    type: types.DELETE_SUMMARIES_REQUEST,
  };
};

export const deleteSummariesSuccess = (summaries) => {
  return {
    type: types.DELETE_SUMMARIES_SUCCESS,
    payload: summaries,
  };
};

export const deleteSummariesFailure = (error) => {
  return {
    type: types.DELETE_SUMMARIES_FAILURE,
    payload: error,
  };
};

export const fetchSummaries = () => {
    return (dispatch) => {
      dispatch(fetchSummariesRequest);
      axios.get(`/api/summary`)
                  .then(response => {
                    const summaries = response.data;
                    dispatch(fetchSummariesSuccess(summaries))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchSummariesFailure(errorMsg))
              })
      };
};

export const fetchSummary = () => {
  return (dispatch) => {
    dispatch(fetchSummaryRequest);
    axios.get(`/api/summary`)
                .then(response => {
                  const summary = response.data;
                  dispatch(fetchSummarySuccess(summary))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchSummaryFailure(errorMsg))
            })
    };
};

export const createSummary = () => {
  return (dispatch) => {
    dispatch(createSummaryRequest);
    axios.get(`/api/summary`)
                .then(response => {
                  const summary = response.data;
                  dispatch(createSummarySuccess(summary))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createSummaryFailure(errorMsg))
            })
    };
};

export const updateSummary = () => {
  return (dispatch) => {
    dispatch(updateSummaryRequest);
    axios.get(`/api/summary`)
                .then(response => {
                  const summary = response.data;
                  dispatch(updateSummarySuccess(summary))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateSummaryFailure(errorMsg))
            })
    };
};

export const deleteSummaries = () => {
  return (dispatch) => {
    dispatch(deleteSummariesRequest);
    axios.get(`/api/summary`)
                .then(response => {
                  const summaries = response.data;
                  dispatch(deleteSummariesSuccess(summaries))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSummariesFailure(errorMsg))
            })
    };
};