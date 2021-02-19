import * as types from "./sportsdetailTypes";
import axios from "axios";

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


export const fetchSportsdetails = () => {
    return (dispatch) => {
      dispatch(fetchSportsdetailsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const sportsdetails = response.data;
                    dispatch(fetchSportsdetailsSuccess(sportsdetails))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchSportsdetailsFailure(errorMsg))
              })
      };
};

export const fetchSportsdetail = () => {
  return (dispatch) => {
    dispatch(fetchSportsdetailRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const sportsdetail = response.data;
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
                .then(response => {
                  const sportsdetails = response.data;
                  dispatch(deleteSportsdetailsSuccess(sportsdetails))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSportsdetailsFailure(errorMsg))
            })
    };
};