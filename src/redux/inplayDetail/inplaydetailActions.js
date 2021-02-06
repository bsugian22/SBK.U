import {
  FETCH_INPLAYDETAILS_REQUEST,
  FETCH_INPLAYDETAILS_SUCCESS,
  FETCH_INPLAYDETAILS_FAILURE,
  FETCH_INPLAYDETAIL_REQUEST,
  FETCH_INPLAYDETAIL_SUCCESS,
  FETCH_INPLAYDETAIL_FAILURE,
  CREATE_INPLAYDETAIL_REQUEST,
  CREATE_INPLAYDETAIL_SUCCESS,
  CREATE_INPLAYDETAIL_FAILURE,
  UPDATE_INPLAYDETAIL_REQUEST,
  UPDATE_INPLAYDETAIL_SUCCESS,
  UPDATE_INPLAYDETAIL_FAILURE,
  DELETE_INPLAYDETAILS_REQUEST,
  DELETE_INPLAYDETAILS_SUCCESS,
  DELETE_INPLAYDETAILS_FAILURE,
} from "./inplaydetailTypes";
import axios from "../../plugins/axios";

export const fetchInplaydetailsRequest = () => {
  return {
    type: FETCH_INPLAYDETAILS_REQUEST,
  };
};

export const fetchInplaydetailsSuccess = (inplays) => {
  return {
    type: FETCH_INPLAYDETAILS_SUCCESS,
    payload: inplays,
  };
};

export const fetchInplaydetailsFailure = (error) => {
  return {
    type: FETCH_INPLAYDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchInplaydetailRequest = () => {
  return {
    type: FETCH_INPLAYDETAIL_REQUEST,
  };
};

export const fetchInplaydetailSuccess = (inplay) => {
  return {
    type: FETCH_INPLAYDETAIL_SUCCESS,
    payload: inplay,
  };
};

export const fetchInplaydetailFailure = (error) => {
  return {
    type: FETCH_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const createInplaydetailRequest = () => {
  return {
    type: CREATE_INPLAYDETAIL_REQUEST,
  };
};

export const createInplaydetailSuccess = (inplaydetail) => {
  return {
    type: CREATE_INPLAYDETAIL_SUCCESS,
    payload: inplaydetail,
  };
};

export const createInplaydetailFailure = (error) => {
  return {
    type: CREATE_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const updateInplaydetailRequest = () => {
  return {
    type: UPDATE_INPLAYDETAIL_REQUEST,
  };
};

export const updateInplaydetailSuccess = (inplaydetail) => {
  return {
    type: UPDATE_INPLAYDETAIL_SUCCESS,
    payload: inplaydetail,
  };
};

export const updateInplaydetailFailure = (error) => {
  return {
    type: UPDATE_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteInplaydetailsRequest = () => {
  return {
    type: DELETE_INPLAYDETAILS_REQUEST,
  };
};

export const deleteInplaydetailsSuccess = (inplaysdetails) => {
  return {
    type: DELETE_INPLAYDETAILS_SUCCESS,
    payload: inplaydetails,
  };
};

export const deleteInplaydetailsFailure = (error) => {
  return {
    type: DELETE_INPLAYDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchInplaydetails = () => {
    return (dispatch) => {
      dispatch(fetchInplaydetailsRequest);
      axios.get(`/api/`)
                  .then(response => {
                    const inplaydetails = response.data;
                    dispatch(fetchInplaydetailsSuccess(inplaydetails))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchInplaydetailsFailure(errorMsg))
              })
      };
};

export const fetchInplaydetail = () => {
  return (dispatch) => {
    dispatch(fetchInplaydetailRequest);
    axios.get(`/api/`)
                .then(response => {
                  const inplaydetail = response.data;
                  dispatch(fetchInplaydetailSuccess(inplaydetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchInplaydetailFailure(errorMsg))
            })
    };
};

export const createInplaydetail = () => {
  return (dispatch) => {
    dispatch(createInplaydetailRequest);
    axios.get(`/api/`)
                .then(response => {
                  const inplaydetail = response.data;
                  dispatch(createInplaydetailSuccess(inplaydetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createInplaydetailFailure(errorMsg))
            })
    };
};

export const updateInplaydetail = () => {
  return (dispatch) => {
    dispatch(updateInplaydetailRequest);
    axios.get(`/api/`)
                .then(response => {
                  const inplaydetail = response.data;
                  dispatch(updateInplaydetailSuccess(inplaydetail))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateInplaydetailFailure(errorMsg))
            })
    };
};

export const deleteInplaydetails = () => {
  return (dispatch) => {
    dispatch(deleteInplaydetailsRequest);
    axios.get(`/api/`)
                .then(response => {
                  const inplaydetails = response.data;
                  dispatch(deleteInplaydetailsSuccess(inplaydetails))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteInplaydetailsFailure(errorMsg))
            })
    };
};

