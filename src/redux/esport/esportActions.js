import * as types from "./esportTypes";
import axios from "axios";

export const fetchEsportsRequest = () => {
  return {
    type: types.FETCH_ESPORTS_REQUEST,
  };
};

export const fetchEsportsSuccess = (esports) => {
  return {
    type: types.FETCH_ESPORTS_SUCCESS,
    payload: esports,
  };
};

export const fetchEsportsFailure = (error) => {
  return {
    type: types.FETCH_ESPORTS_FAILURE,
    payload: error,
  };
};

export const fetchEsportRequest = () => {
  return {
    type: types.FETCH_ESPORT_REQUEST,
  };
};

export const fetchEsportSuccess = (esport) => {
  return {
    type: types.FETCH_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const fetchEsportFailure = (error) => {
  return {
    type: types.FETCH_ESPORT_FAILURE,
    payload: error,
  };
};

export const createEsportRequest = () => {
  return {
    type: types.CREATE_ESPORT_REQUEST,
  };
};

export const createEsportSuccess = (esport) => {
  return {
    type: types.CREATE_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const createEsportFailure = (error) => {
  return {
    type: types.CREATE_ESPORT_FAILURE,
    payload: error,
  };
};

export const createEsportRequest = () => {
  return {
    type: types.UPDATE_ESPORT_REQUEST,
  };
};

export const createEsportSuccess = (esport) => {
  return {
    type: types.UPDATE_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const createEsportFailure = (error) => {
  return {
    type: types.UPDATE_ESPORT_FAILURE,
    payload: error,
  };
};

export const deleteEsportsRequest = () => {
  return {
    type: types.DELETE_ESPORTS_REQUEST,
  };
};

export const deleteEsportsSuccess = (esports) => {
  return {
    type: types.DELETE_ESPORTS_SUCCESS,
    payload: esports,
  };
};

export const deleteEsportsFailure = (error) => {
  return {
    type: types.DELETE_ESPORTS_FAILURE,
    payload: error,
  };
};

export const fetchEsports = () => {
    return (dispatch) => {
      dispatch(fetchEsportsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const branches = response.data;
                    dispatch(fetchEsportsSuccess(branches))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchEsportsFailure(errorMsg))
              })
      };
};

export const fetchEsport = () => {
  return (dispatch) => {
    dispatch(fetchEsportRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const branches = response.data;
                  dispatch(fetchEsportSuccess(branches))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchEsportFailure(errorMsg))
            })
    };
};

export const createEsport = () => {
  return (dispatch) => {
    dispatch(createEsportRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const branches = response.data;
                  dispatch(createEsportSuccess(branches))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createEsportFailure(errorMsg))
            })
    };
};

export const updateEsport = () => {
  return (dispatch) => {
    dispatch(updateEsportRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const branches = response.data;
                  dispatch(updateEsportSuccess(branches))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateEsportFailure(errorMsg))
            })
    };
};

export const deleteEsports = () => {
  return (dispatch) => {
    dispatch(deleteEsportsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const branches = response.data;
                  dispatch(deleteEsportsSuccess(branches))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteEsportsFailure(errorMsg))
            })
    };
};