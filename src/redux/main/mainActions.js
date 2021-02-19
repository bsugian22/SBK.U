import * as types from "./mainTypes";
import axios from "axios";

export const fetchMainsRequest = () => {
  return {
    type: types.FETCH_MAINS_REQUEST,
  };
};

export const fetchMainsSuccess = (mains) => {
  return {
    type: types.FETCH_MAINS_SUCCESS,
    payload: mains,
  };
};

export const fetchMainsFailure = (error) => {
  return {
    type: types.FETCH_MAINS_FAILURE,
    payload: error,
  };
};

export const fetchMainRequest = () => {
  return {
    type: types.FETCH_MAIN_REQUEST,
  };
};

export const fetchMainSuccess = (main) => {
  return {
    type: types.FETCH_MAIN_SUCCESS,
    payload: main,
  };
};

export const fetchMainFailure = (error) => {
  return {
    type: types.FETCH_MAIN_FAILURE,
    payload: error,
  };
};

export const createMainRequest = () => {
  return {
    type: types.CREATE_MAIN_REQUEST,
  };
};

export const createMainSuccess = (main) => {
  return {
    type: types.CREATE_MAIN_SUCCESS,
    payload: main,
  };
};

export const createMainFailure = (error) => {
  return {
    type: types.CREATE_MAIN_FAILURE,
    payload: error,
  };
};

export const updateMainRequest = () => {
  return {
    type: types.UPDATE_MAIN_REQUEST,
  };
};

export const updateMainSuccess = (main) => {
  return {
    type: types.UPDATE_MAIN_SUCCESS,
    payload: main,
  };
};

export const updateMainFailure = (error) => {
  return {
    type: types.UPDATE_MAIN_FAILURE,
    payload: error,
  };
};

export const deleteMainsRequest = () => {
  return {
    type: types.DELETE_MAINS_REQUEST,
  };
};

export const deleteMainsSuccess = (mains) => {
  return {
    type: types.DELETE_MAINS_SUCCESS,
    payload: mains,
  };
};

export const deleteMainsFailure = (error) => {
  return {
    type: types.DELETE_MAINS_FAILURE,
    payload: error,
  };
};

export const fetchMains = () => {
    return (dispatch) => {
      dispatch(fetchMainsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const mains = response.data;
                    dispatch(fetchMainsSuccess(mains))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchMainsFailure(errorMsg))
              })
      };
};

export const fetchMain = () => {
  return (dispatch) => {
    dispatch(fetchMainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const main = response.data;
                  dispatch(fetchMainSuccess(main))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchMainFailure(errorMsg))
            })
    };
};

export const createMain = () => {
  return (dispatch) => {
    dispatch(createMainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const main = response.data;
                  dispatch(createMainSuccess(main))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createMainFailure(errorMsg))
            })
    };
};

export const updateMain = () => {
  return (dispatch) => {
    dispatch(updateMainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const main = response.data;
                  dispatch(updateMainSuccess(main))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateMainFailure(errorMsg))
            })
    };
};

export const deleteMains = () => {
  return (dispatch) => {
    dispatch(deleteMainsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const mains = response.data;
                  dispatch(deleteMainsSuccess(mains))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteMainsFailure(errorMsg))
            })
    };
};