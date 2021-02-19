import * as types from "./esportsliveTypes";
import axios from "axios";

export const fetchEsportslivesRequest = () => {
  return {
    type: types.FETCH_ESPORTSLIVES_REQUEST,
  };
};

export const fetchEsportslivesSuccess = (esportslives) => {
  return {
    type: types.FETCH_ESPORTSLIVES_SUCCESS,
    payload: esportslives,
  };
};

export const fetchEsportslivesFailure = (error) => {
  return {
    type: types.FETCH_ESPORTSLIVES_FAILURE,
    payload: error,
  };
};

export const fetchEsportsliveRequest = () => {
  return {
    type: types.FETCH_ESPORTSLIVE_REQUEST,
  };
};

export const fetchEsportsliveSuccess = (esportslive) => {
  return {
    type: types.FETCH_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const fetchEsportsliveFailure = (error) => {
  return {
    type: types.FETCH_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const createEsportsliveRequest = () => {
  return {
    type: types.CREATE_ESPORTSLIVE_REQUEST,
  };
};

export const createEsportsliveSuccess = (esportslive) => {
  return {
    type: types.CREATE_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const createEsportsliveFailure = (error) => {
  return {
    type: types.CREATE_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const updateEsportsliveRequest = () => {
  return {
    type: types.UPDATE_ESPORTSLIVE_REQUEST,
  };
};

export const updateEsportsliveSuccess = (esportslive) => {
  return {
    type: types.UPDATE_ESPORTSLIVE_SUCCESS,
    payload: esportslive,
  };
};

export const updateEsportsliveFailure = (error) => {
  return {
    type: types.UPDATE_ESPORTSLIVE_FAILURE,
    payload: error,
  };
};

export const deleteEsportslivesRequest = () => {
  return {
    type: types.DELETE_ESPORTSLIVES_REQUEST,
  };
};

export const deleteEsportslivesSuccess = (esportslives) => {
  return {
    type: types.DELETE_ESPORTSLIVES_SUCCESS,
    payload: esportslives,
  };
};

export const deleteEsportslivesFailure = (error) => {
  return {
    type: types.DELETE_ESPORTSLIVES_FAILURE,
    payload: error,
  };
};

export const fetchEsportslives = () => {
    return (dispatch) => {
      dispatch(fetchEsportslivesRequest);
      await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
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
    await axios.get(`/api/`)
                .then(response => {
                  const esportslives = response.data;
                  dispatch(deleteEsportslivesSuccess(esportslives))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteEsportslivesFailure(errorMsg))
            })
    };
};