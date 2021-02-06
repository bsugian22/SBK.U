import {
  FETCH_ESPORTSDETAILS_REQUEST,
  FETCH_ESPORTSDETAILS_SUCCESS,
  FETCH_ESPORTSDETAILS_FAILURE,
  FETCH_ESPORTSDETAIL_REQUEST,
  FETCH_ESPORTSDETAIL_SUCCESS,
  FETCH_ESPORTSDETAIL_FAILURE,
  CREATE_ESPORTSDETAIL_REQUEST,
  CREATE_ESPORTSDETAIL_SUCCESS,
  CREATE_ESPORTSDETAIL_FAILURE,
  UPDATE_ESPORTSDETAIL_REQUEST,
  UPDATE_ESPORTSDETAIL_SUCCESS,
  UPDATE_ESPORTSDETAIL_FAILURE,
  DELETE_ESPORTSDETAILS_REQUEST,
  DELETE_ESPORTSDETAILS_SUCCESS,
  DELETE_ESPORTSDETAILS_FAILURE,
} from "./esportsdetailTypes";
import axios from "../../plugins/axios";

export const fetchEsportsdetailsRequest = () => {
  return {
    type: FETCH_ESPORTSDETAILS_REQUEST,
  };
};

export const fetchEsportsdetailsSuccess = (esportsdetails) => {
  return {
    type: FETCH_ESPORTSDETAILS_SUCCESS,
    payload: esportsdetails,
  };
};

export const fetchEsportsdetailsFailure = (error) => {
  return {
    type: FETCH_ESPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchEsportsdetailRequest = () => {
  return {
    type: FETCH_ESPORTSDETAIL_REQUEST,
  };
};

export const fetchEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: FETCH_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const fetchEsportsdetailFailure = (error) => {
  return {
    type: FETCH_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const createEsportsdetailRequest = () => {
  return {
    type: CREATE_ESPORTSDETAIL_REQUEST,
  };
};

export const createEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: CREATE_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const createEsportsdetailFailure = (error) => {
  return {
    type: CREATE_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const updateEsportsdetailRequest = () => {
  return {
    type: UPDATE_ESPORTSDETAIL_REQUEST,
  };
};

export const updateEsportsdetailSuccess = (esportsdetail) => {
  return {
    type: UPDATE_ESPORTSDETAIL_SUCCESS,
    payload: esportsdetail,
  };
};

export const updateEsportsdetailFailure = (error) => {
  return {
    type: UPDATE_ESPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteEsportsdetailsRequest = () => {
  return {
    type: DELETE_ESPORTSDETAILS_REQUEST,
  };
};

export const deleteEsportsdetailsSuccess = (esportsdetails) => {
  return {
    type: DELETE_ESPORTSDETAILS_SUCCESS,
    payload: esportsdetails,
  };
};

export const deleteEsportsdetailsFailure = (error) => {
  return {
    type: DELETE_ESPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchEsportsdetails = () => {
    return (dispatch) => {
      dispatch(fetchEsportsdetailsRequest);
      axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
                .then(response => {
                  const esportsdetails = response.data;
                  dispatch(deleteEsportsdetailsSuccess(esportsdetails))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteEsportsdetailsFailure(errorMsg))
            })
    };
};