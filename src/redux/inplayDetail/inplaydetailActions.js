import * as types from "./inplaydetailTypes";
import axios from "axios";

export const fetchInplaydetailsRequest = () => {
  return {
    type: types.FETCH_INPLAYDETAILS_REQUEST,
  };
};

export const fetchInplaydetailsSuccess = (inplays) => {
  return {
    type: types.FETCH_INPLAYDETAILS_SUCCESS,
    payload: inplays,
  };
};

export const fetchInplaydetailsFailure = (error) => {
  return {
    type: types.FETCH_INPLAYDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchInplaydetailRequest = () => {
  return {
    type: types.FETCH_INPLAYDETAIL_REQUEST,
  };
};

export const fetchInplaydetailSuccess = (inplay) => {
  return {
    type: types.FETCH_INPLAYDETAIL_SUCCESS,
    payload: inplay,
  };
};

export const fetchInplaydetailFailure = (error) => {
  return {
    type: types.FETCH_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const createInplaydetailRequest = () => {
  return {
    type: types.CREATE_INPLAYDETAIL_REQUEST,
  };
};

export const createInplaydetailSuccess = (inplaydetail) => {
  return {
    type: types.CREATE_INPLAYDETAIL_SUCCESS,
    payload: inplaydetail,
  };
};

export const createInplaydetailFailure = (error) => {
  return {
    type: types.CREATE_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const updateInplaydetailRequest = () => {
  return {
    type: types.UPDATE_INPLAYDETAIL_REQUEST,
  };
};

export const updateInplaydetailSuccess = (inplaydetail) => {
  return {
    type: types.UPDATE_INPLAYDETAIL_SUCCESS,
    payload: inplaydetail,
  };
};

export const updateInplaydetailFailure = (error) => {
  return {
    type: types.UPDATE_INPLAYDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteInplaydetailsRequest = () => {
  return {
    type: types.DELETE_INPLAYDETAILS_REQUEST,
  };
};

export const deleteInplaydetailsSuccess = (inplaysdetails) => {
  return {
    type: types.DELETE_INPLAYDETAILS_SUCCESS,
    payload: inplaydetails,
  };
};

export const deleteInplaydetailsFailure = (error) => {
  return {
    type: types.DELETE_INPLAYDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchInplaydetails = () => {
    return (dispatch) => {
      dispatch(fetchInplaydetailsRequest);
      await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
                .then(response => {
                  const inplaydetails = response.data;
                  dispatch(deleteInplaydetailsSuccess(inplaydetails))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteInplaydetailsFailure(errorMsg))
            })
    };
};

