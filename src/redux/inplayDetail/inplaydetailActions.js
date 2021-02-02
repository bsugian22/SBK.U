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
import axios from "axios";

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

export const createInplayRequest = () => {
  return {
    type: CREATE_INPLAY_REQUEST,
  };
};

export const createInplaySuccess = (inplay) => {
  return {
    type: CREATE_INPLAY_SUCCESS,
    payload: inplay,
  };
};

export const createInplayFailure = (error) => {
  return {
    type: CREATE_INPLAY_FAILURE,
    payload: error,
  };
};

export const updateInplayRequest = () => {
  return {
    type: UPDATE_INPLAY_REQUEST,
  };
};

export const updateInplaySuccess = (inplay) => {
  return {
    type: UPDATE_INPLAY_SUCCESS,
    payload: inplay,
  };
};

export const updateInplayFailure = (error) => {
  return {
    type: UPDATE_INPLAY_FAILURE,
    payload: error,
  };
};

export const deleteInplaysRequest = () => {
  return {
    type: DELETE_INPLAYS_REQUEST,
  };
};

export const deleteInplaysSuccess = (inplays) => {
  return {
    type: DELETE_INPLAYS_SUCCESS,
    payload: inplays,
  };
};

export const deleteInplaysFailure = (error) => {
  return {
    type: DELETE_INPLAYS_FAILURE,
    payload: error,
  };
};

export const fetchInplays = () => {
    return (dispatch) => {
      dispatch(fetchInplaysRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const finds = response.data;
                    dispatch(fetchInplaysSuccess(finds))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchInplaysFailure(errorMsg))
              })
      };
};

export const fetchInplay = () => {
  return (dispatch) => {
    dispatch(fetchInplayRequest);
    await axios.get(`/api/admin/deposit`)
                .then(response => {
                  const find = response.data;
                  dispatch(fetchInplaySuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchInplayFailure(errorMsg))
            })
    };
};

export const createInplay = () => {
  return (dispatch) => {
    dispatch(createInplayRequest);
    await axios.get(`/api/admin/deposit`)
                .then(response => {
                  const find = response.data;
                  dispatch(createInplaySuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createInplayFailure(errorMsg))
            })
    };
};

export const updateInplay = () => {
  return (dispatch) => {
    dispatch(updateInplayRequest);
    await axios.get(`/api/admin/deposit`)
                .then(response => {
                  const find = response.data;
                  dispatch(updateInplaySuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateInplayFailure(errorMsg))
            })
    };
};

export const deleteInplays = () => {
  return (dispatch) => {
    dispatch(deleteInplaysRequest);
    await axios.get(`/api/admin/deposit`)
                .then(response => {
                  const finds = response.data;
                  dispatch(deleteInplaysSuccess(finds))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteInplaysFailure(errorMsg))
            })
    };
};

