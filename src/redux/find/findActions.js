import {
  FETCH_FINDS_REQUEST,
  FETCH_FINDS_SUCCESS,
  FETCH_FINDS_FAILURE,
  FETCH_FIND_REQUEST,
  FETCH_FIND_SUCCESS,
  FETCH_FIND_FAILURE,
  CREATE_FIND_REQUEST,
  CREATE_FIND_SUCCESS,
  CREATE_FIND_FAILURE,
  UPDATE_FIND_REQUEST,
  UPDATE_FIND_SUCCESS,
  UPDATE_FIND_FAILURE,
  DELETE_FINDS_REQUEST,
  DELETE_FINDS_SUCCESS,
  DELETE_FINDS_FAILURE,
} from "./findTypes";
import axios from "../../plugins/axios";

export const fetchFindsRequest = () => {
  return {
    type: FETCH_FINDS_REQUEST,
  };
};

export const fetchFindsSuccess = (finds) => {
  return {
    type: FETCH_FINDS_SUCCESS,
    payload: finds,
  };
};

export const fetchFindsFailure = (error) => {
  return {
    type: FETCH_FINDS_FAILURE,
    payload: error,
  };
};

export const fetchFindRequest = () => {
  return {
    type: FETCH_FIND_REQUEST,
  };
};

export const fetchFindSuccess = (find) => {
  return {
    type: FETCH_FIND_SUCCESS,
    payload: find,
  };
};

export const fetchFindFailure = (error) => {
  return {
    type: FETCH_FIND_FAILURE,
    payload: error,
  };
};

export const createFindRequest = () => {
  return {
    type: CREATE_FIND_REQUEST,
  };
};

export const createFindSuccess = (find) => {
  return {
    type: CREATE_FIND_SUCCESS,
    payload: find,
  };
};

export const createFindFailure = (error) => {
  return {
    type: CREATE_FIND_FAILURE,
    payload: error,
  };
};

export const updateFindRequest = () => {
  return {
    type: UPDATE_FIND_REQUEST,
  };
};

export const updateFindSuccess = (find) => {
  return {
    type: UPDATE_FIND_SUCCESS,
    payload: find,
  };
};

export const updateFindFailure = (error) => {
  return {
    type: UPDATE_FIND_FAILURE,
    payload: error,
  };
};

export const deleteFindsRequest = () => {
  return {
    type: DELETE_FINDS_REQUEST,
  };
};

export const deleteFindsSuccess = (finds) => {
  return {
    type: DELETE_FINDS_SUCCESS,
    payload: finds,
  };
};

export const deleteFindsFailure = (error) => {
  return {
    type: DELETE_FINDS_FAILURE,
    payload: error,
  };
};

export const fetchFinds = () => {
    return (dispatch) => {
      dispatch(fetchFindsRequest);
      axios.get(`/api/`)
                  .then(response => {
                    const finds = response.data;
                    dispatch(fetchFindsSuccess(finds))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchFindsFailure(errorMsg))
              })
      };
};

export const fetchFind = () => {
  return (dispatch) => {
    dispatch(fetchFindRequest);
    axios.get(`/api/`)
                .then(response => {
                  const find = response.data;
                  dispatch(fetchFindSuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchFindFailure(errorMsg))
            })
    };
};

export const createFind = () => {
  return (dispatch) => {
    dispatch(createFindRequest);
    axios.get(`/api/`)
                .then(response => {
                  const find = response.data;
                  dispatch(createFindSuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createFindFailure(errorMsg))
            })
    };
};

export const updateFind = () => {
  return (dispatch) => {
    dispatch(updateFindRequest);
    axios.get(`/api/`)
                .then(response => {
                  const find = response.data;
                  dispatch(updateFindSuccess(find))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateFindFailure(errorMsg))
            })
    };
};

export const deleteFinds = () => {
  return (dispatch) => {
    dispatch(deleteFindsRequest);
    axios.get(`/api/`)
                .then(response => {
                  const finds = response.data;
                  dispatch(deleteFindsSuccess(finds))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteFindsFailure(errorMsg))
            })
    };
};

