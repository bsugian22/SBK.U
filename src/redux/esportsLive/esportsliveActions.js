import {
  FETCH_ESPORTSLIVES_REQUEST,
  FETCH_ESPORTSLIVES_SUCCESS,
  FETCH_ESPORTSLIVES_FAILURE,
  FETCH_ESPORTSLIVE_REQUEST,
  FETCH_ESPORTSLIVE_SUCCESS,
  FETCH_ESPORTSLIVE_FAILURE,
  CREATE_ESPORTSLIVE_REQUEST,
  CREATE_ESPORTSLIVE_SUCCESS,
  CREATE_ESPORTSLIVE_FAILURE,
  UPDATE_ESPORTSLIVE_REQUEST,
  UPDATE_ESPORTSLIVE_SUCCESS,
  UPDATE_ESPORTSLIVE_FAILURE,
  DELETE_ESPORTSLIVES_REQUEST,
  DELETE_ESPORTSLIVES_SUCCESS,
  DELETE_ESPORTSLIVES_FAILURE,
} from "./esportsliveTypes";
import axios from "../../plugins/axios";

export const fetchEsportslivesRequest = () => {
  return {
    type: FETCH_ESPORTSLIVES_REQUEST,
  };
};

export const fetchEsportslivesSuccess = (esportslives) => {
  return {
    type: FETCH_ESPORTSLIVES_SUCCESS,
    payload: esportslives,
  };
};

export const fetchEsportslivesFailure = (error) => {
  return {
    type: FETCH_ESPORTSLIVES_FAILURE,
    payload: error,
  };
};

export const fetchEsportsliveRequest = () => {
  return {
    type: FETCH_ESPORTSLIVE_REQUEST,
  };
};

export const fetchEsportsliveSuccess = (esportslive) => {
  return {
    type: FETCH_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const fetchEsportsliveFailure = (error) => {
  return {
    type: FETCH_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const createEsportsliveRequest = () => {
  return {
    type: CREATE_ESPORTSLIVE_REQUEST,
  };
};

export const createEsportsliveSuccess = (esportslive) => {
  return {
    type: CREATE_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const createEsportsliveFailure = (error) => {
  return {
    type: CREATE_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const updateEsportsliveRequest = () => {
  return {
    type: UPDATE_ESPORTSLIVE_REQUEST,
  };
};

export const updateEsportsliveSuccess = (esportslive) => {
  return {
    type: UPDATE_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const updateEsportsliveFailure = (error) => {
  return {
    type: UPDATE_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const deleteEsportslivesRequest = () => {
  return {
    type: DELETE_ESPORTSLIVES_REQUEST,
  };
};

export const deleteEsportslivesSuccess = (esportslives) => {
  return {
    type: DELETE_ESPORTSLIVES_SUCCESS,
    payload: esportslives,
  };
};

export const deleteEsportslivesFailure = (error) => {
  return {
    type: DELETE_ESPORTSLIVES_FAILURE,
    payload: error,
  };
};

export const fetchEsportslives = () => {
    return (dispatch) => {
      dispatch(fetchEsportslivesRequest);
      axios.get(`/api/`)
                  .then(response => {
                    const esportslives = response.data;
                    dispatch(fetchEsportslivesSuccess(esportslives))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchEsportslivesFailure(errorMsg))
              })
      };
};

export const fetchEsportslive = () => {
  return (dispatch) => {
    dispatch(fetchEsportsliveRequest);
    axios.get(`/api/`)
                .then(response => {
                  const esportslive = response.data;
                  dispatch(fetchEsportsliveSuccess(esportslive))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchEsportsliveFailure(errorMsg))
            })
    };
};

export const createEsportslive = () => {
  return (dispatch) => {
    dispatch(createEsportsliveRequest);
    axios.get(`/api/`)
                .then(response => {
                  const esportslive = response.data;
                  dispatch(createEsportsliveSuccess(esportslive))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createEsportsliveFailure(errorMsg))
            })
    };
};

export const updateEsportslive = () => {
  return (dispatch) => {
    dispatch(updateEsportsliveRequest);
    axios.get(`/api/`)
                .then(response => {
                  const esportslive = response.data;
                  dispatch(updateEsportsliveSuccess(esportslive))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateEsportsliveFailure(errorMsg))
            })
    };
};

export const deleteEsportslives = () => {
  return (dispatch) => {
    dispatch(deleteEsportslivesRequest);
    axios.get(`/api/`)
                .then(response => {
                  const esportslives = response.data;
                  dispatch(deleteEsportslivesSuccess(esportslives))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteEsportslivesFailure(errorMsg))
            })
    };
};