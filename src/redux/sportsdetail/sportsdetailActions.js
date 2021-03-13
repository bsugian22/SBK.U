import * as types from "./sportsdetailTypes";
import axios from "../../plugins/axios";
import { camelize, snakelize } from "../../helpers/object";
import { chain } from "lodash";
import moment from "moment";

export const fetchSportsdetailsRequest = () => {
  return {
    type: types.FETCH_SPORTSDETAILS_REQUEST,
  };
};

export const fetchSportsdetailsSuccess = (sportsdetails) => {
  return {
    type: types.FETCH_SPORTSDETAILS_SUCCESS,
    payload: sportsdetails,
  };
};

export const fetchSportsdetailsFailure = (error) => {
  return {
    type: types.FETCH_SPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchSportsdetailRequest = () => {
  return {
    type: types.FETCH_SPORTSDETAIL_REQUEST,
  };
};

export const fetchSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.FETCH_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const fetchSportsdetailFailure = (error) => {
  return {
    type: types.FETCH_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};
export const sportDetailReset = () => {
  return {
    type: types.SPORTSDETAIL_RESET,
  };
};

export const createSportsdetailRequest = () => {
  return {
    type: types.CREATE_SPORTSDETAIL_REQUEST,
  };
};

export const createSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.CREATE_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const createSportsdetailFailure = (error) => {
  return {
    type: types.CREATE_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const updateSportsdetailRequest = () => {
  return {
    type: types.UPDATE_SPORTSDETAIL_REQUEST,
  };
};

export const updateSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.UPDATE_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const updateSportsdetailFailure = (error) => {
  return {
    type: types.UPDATE_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteSportsdetailsRequest = () => {
  return {
    type: types.DELETE_SPORTSDETAILS_REQUEST,
  };
};

export const deleteSportsdetailsSuccess = (sportsdetails) => {
  return {
    type: types.DELETE_SPORTSDETAILS_SUCCESS,
    payload: sportsdetails,
  };
};

export const deleteSportsdetailsFailure = (error) => {
  return {
    type: types.DELETE_SPORTSDETAILS_FAILURE,
    payload: error,
  };
};


export const fetchSportsdetails = (params) => {
  return (dispatch) => {
    dispatch(fetchSportsdetailsRequest);
    axios.get(`/api/feed/sports`, {
      params: snakelize(params)
    })
      .then(response => {
        const sportsdetails = camelize(response.data);

        // console.log(sportsdetails)

        var data = chain(sportsdetails.data)
          .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
          .map((matches, startAt) => ({ startAt, matches }))
          .orderBy("startAt")
          .value();
        sportsdetails.data = data
        sportsdetails.detail = null
        sportsdetails.detail_data= null
        console.log(sportsdetails)

        dispatch(fetchSportsdetailsSuccess(sportsdetails))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsdetailsFailure(errorMsg))
      })
  };
};

export const fetchSportsdetail = (matchId) => {
  return (dispatch) => {
    dispatch(fetchSportsdetailRequest);
    axios.get(`/api/feed/matches/${matchId}`)
      .then(response => {
        const sportsdetail = camelize (response.data) ;
        // console.log(sportsdetail);

        dispatch(fetchSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsdetailFailure(errorMsg))
      })
  };
};

export const createSportsdetail = () => {
  return (dispatch) => {
    dispatch(createSportsdetailRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetail = response.data;
        dispatch(createSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(createSportsdetailFailure(errorMsg))
      })
  };
};

export const updateSportsdetail = () => {
  return (dispatch) => {
    dispatch(updateSportsdetailRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetail = response.data;
        dispatch(updateSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(updateSportsdetailFailure(errorMsg))
      })
  };
};

export const deleteSportsdetails = () => {
  return (dispatch) => {
    dispatch(deleteSportsdetailsRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetails = response.data;
        dispatch(deleteSportsdetailsSuccess(sportsdetails))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(deleteSportsdetailsFailure(errorMsg))
      })
  };
};