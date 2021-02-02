import {
  FETCH_ESPORTS_REQUEST,
  FETCH_ESPORTS_SUCCESS,
  FETCH_ESPORTS_FAILURE,
  FETCH_ESPORT_REQUEST,
  FETCH_ESPORT_SUCCESS,
  FETCH_ESPORT_FAILURE,
  CREATE_ESPORT_REQUEST,
  CREATE_ESPORT_SUCCESS,
  CREATE_ESPORT_FAILURE,
  UPDATE_ESPORT_REQUEST,
  UPDATE_ESPORT_SUCCESS,
  UPDATE_ESPORT_FAILURE,
  DELETE_ESPORTS_REQUEST,
  DELETE_ESPORTS_SUCCESS,
  DELETE_ESPORTS_FAILURE,
} from "./esportTypes";
import axios from "axios";

export const fetchEsportsRequest = () => {
  return {
    type: FETCH_ESPORTS_REQUEST,
  };
};

export const fetchEsportsSuccess = (esports) => {
  return {
    type: FETCH_ESPORTS_SUCCESS,
    payload: esports,
  };
};

export const fetchEsportsFailure = (error) => {
  return {
    type: FETCH_ESPORTS_FAILURE,
    payload: error,
  };
};

export const fetchEsportRequest = () => {
  return {
    type: FETCH_ESPORT_REQUEST,
  };
};

export const fetchEsportSuccess = (esport) => {
  return {
    type: FETCH_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const fetchEsportFailure = (error) => {
  return {
    type: FETCH_ESPORT_FAILURE,
    payload: error,
  };
};

export const createEsportRequest = () => {
  return {
    type: CREATE_ESPORT_REQUEST,
  };
};

export const createEsportSuccess = (esport) => {
  return {
    type: CREATE_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const createEsportFailure = (error) => {
  return {
    type: CREATE_ESPORT_FAILURE,
    payload: error,
  };
};

export const createEsportRequest = () => {
  return {
    type: UPDATE_ESPORT_REQUEST,
  };
};

export const createEsportSuccess = (esport) => {
  return {
    type: UPDATE_ESPORT_SUCCESS,
    payload: esport,
  };
};

export const createEsportFailure = (error) => {
  return {
    type: UPDATE_ESPORT_FAILURE,
    payload: error,
  };
};

export const deleteEsportsRequest = () => {
  return {
    type: DELETE_ESPORTS_REQUEST,
  };
};

export const deleteEsportsSuccess = (esports) => {
  return {
    type: DELETE_ESPORTS_SUCCESS,
    payload: esports,
  };
};

export const deleteEsportsFailure = (error) => {
  return {
    type: DELETE_ESPORTS_FAILURE,
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