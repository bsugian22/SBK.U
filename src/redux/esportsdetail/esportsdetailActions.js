import * as types from "./esportsdetailTypes";
import axios from "axios";

export const fetchEsportsdetailsRequest = () => {
  return {
    type: types.FETCH_ESPORTSDETAILS_REQUEST,
  };
};

export const fetchEsportsdetailsSuccess = (esportsdetails) => {
  return {
    type: types.FETCH_ESPORTSDETAILS_SUCCESS,
    payload: esportsdetails,
  };
};

export const fetchEsportsdetailsFailure = (error) => {
  return {
    type: types.FETCH_ESPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchEsportsdetailRequest = () => {
  return {
    type: types.FETCH_ESPORTSDETAIL_REQUEST,
  };
};

export const fetchEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: types.FETCH_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const fetchEsportsdetailFailure = (error) => {
  return {
    type: types.FETCH_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const createEsportsdetailRequest = () => {
  return {
    type: types.CREATE_ESPORTSDETAIL_REQUEST,
  };
};

export const createEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: types.CREATE_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const createEsportsdetailFailure = (error) => {
  return {
    type: types.CREATE_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const updateEsportsdetailRequest = () => {
  return {
    type: types.UPDATE_ESPORTSDETAIL_REQUEST,
  };
};

export const updateEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: types.UPDATE_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const updateEsportsdetailFailure = (error) => {
  return {
    type: types.UPDATE_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteEsportsdetailsRequest = () => {
  return {
    type: types.DELETE_ESPORTSDETAILS_REQUEST,
  };
};

export const deleteEsportsdetailsSuccess = (esportsdetails) => {
  return {
    type: types.DELETE_ESPORTSDETAILS_SUCCESS,
    payload: esportsdetails,
  };
};

export const deleteEsportsdetailsFailure = (error) => {
  return {
    type: types.DELETE_ESPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchEsportsdetails = () => {
    return (dispatch) => {
      dispatch(fetchEsportsdetailsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const esportsdetails = response.data;
                    dispatch(fetchEsportsdetailsSuccess(esportsdetails))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchEsportsdetailsFailure(errorMsg))
              })
      };
};

export const fetchEsportsdetail = () => {
  return (dispatch) => {
    dispatch(fetchEsportsdetailRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const esportsdetail = response.data;
                  dispatch(fetchEsportsdetailSuccess(esportsdetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchEsportsdetailFailure(errorMsg))
            })
    };
};

export const createEsportsdetail = () => {
  return (dispatch) => {
    dispatch(createEsportsdetailRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const esportsdetail = response.data;
                  dispatch(createEsportsdetailSuccess(esportsdetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createEsportsdetailFailure(errorMsg))
            })
    };
};

export const updateEsportsdetail = () => {
  return (dispatch) => {
    dispatch(updateEsportsdetailRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const esportsdetail = response.data;
                  dispatch(updateEsportsdetailSuccess(esportsdetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateEsportsdetailFailure(errorMsg))
            })
    };
};

export const deleteEsportsdetails = () => {
  return (dispatch) => {
    dispatch(deleteEsportsdetailsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const esportsdetails = response.data;
                  dispatch(deleteEsportsdetailsSuccess(esportsdetails))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteEsportsdetailsFailure(errorMsg))
            })
    };
};