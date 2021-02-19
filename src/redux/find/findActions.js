import * as types from "./findTypes";
import axios from "axios";

export const fetchFindsRequest = () => {
  return {
    type:  types.FETCH_FINDS_REQUEST,
  };
};

export const fetchFindsSuccess = (finds) => {
  return {
    type:  types.FETCH_FINDS_SUCCESS,
    payload: finds,
  };
};

export const fetchFindsFailure = (error) => {
  return {
    type:  types.FETCH_FINDS_FAILURE,
    payload: error,
  };
};

export const fetchFindRequest = () => {
  return {
    type:  types.FETCH_FIND_REQUEST,
  };
};

export const fetchFindSuccess = (find) => {
  return {
    type:  types.FETCH_FIND_SUCCESS,
    payload: find,
  };
};

export const fetchFindFailure = (error) => {
  return {
    type:  types.FETCH_FIND_FAILURE,
    payload: error,
  };
};

export const createFindRequest = () => {
  return {
    type:  types.CREATE_FIND_REQUEST,
  };
};

export const createFindSuccess = (find) => {
  return {
    type:  types.CREATE_FIND_SUCCESS,
    payload: find,
  };
};

export const createFindFailure = (error) => {
  return {
    type:  types.CREATE_FIND_FAILURE,
    payload: error,
  };
};

export const updateFindRequest = () => {
  return {
    type:  types.UPDATE_FIND_REQUEST,
  };
};

export const updateFindSuccess = (find) => {
  return {
    type:  types.UPDATE_FIND_SUCCESS,
    payload: find,
  };
};

export const updateFindFailure = (error) => {
  return {
    type:  types.UPDATE_FIND_FAILURE,
    payload: error,
  };
};

export const deleteFindsRequest = () => {
  return {
    type:  types.DELETE_FINDS_REQUEST,
  };
};

export const deleteFindsSuccess = (finds) => {
  return {
    type:  types.DELETE_FINDS_SUCCESS,
    payload: finds,
  };
};

export const deleteFindsFailure = (error) => {
  return {
    type:  types.DELETE_FINDS_FAILURE,
    payload: error,
  };
};

export const fetchFinds = () => {
    return (dispatch) => {
      dispatch(fetchFindsRequest);
      await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
                .then(response => {
                  const finds = response.data;
                  dispatch(deleteFindsSuccess(finds))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteFindsFailure(errorMsg))
            })
    };
};

