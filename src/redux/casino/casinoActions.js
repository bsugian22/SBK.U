import * as types from "./casinoTypes";
import axios from "axios";

export const fetchCasinosRequest = () => {
  return {
    type: types.FETCH_CASINOS_REQUEST,
  };
};

export const fetchCasinosSuccess = (casinos) => {
  return {
    type: types.FETCH_CASINOS_SUCCESS,
    payload: casinos,
  };
};

export const fetchCasinosFailure = (error) => {
  return {
    type: types.FETCH_CASINOS_FAILURE,
    payload: error,
  };
};

export const fetchCasinoRequest = () => {
  return {
    type: types.FETCH_CASINO_REQUEST,
  };
};

export const fetchCasinoSuccess = (casino) => {
  return {
    type: types.FETCH_CASINO_SUCCESS,
    payload: casino,
  };
};

export const fetchCasinoFailure = (error) => {
  return {
    type: types.FETCH_CASINO_FAILURE,
    payload: error,
  };
};

export const createCasinoRequest = () => {
  return {
    type: types.CREATE_CASINO_REQUEST,
  };
};

export const createCasinoSuccess = (casino) => {
  return {
    type: types.CREATE_CASINO_SUCCESS,
    payload: casino,
  };
};

export const createCasinoFailure = (error) => {
  return {
    type: types.CREATE_CASINO_FAILURE,
    payload: error,
  };
};

export const updateCasinoRequest = () => {
  return {
    type: types.UPDATE_CASINO_REQUEST,
  };
};

export const updateCasinoSuccess = (casino) => {
  return {
    type: types.UPDATE_CASINO_SUCCESS,
    payload: casino,
  };
};

export const updateCasinoFailure = (error) => {
  return {
    type: types.UPDATE_CASINO_FAILURE,
    payload: error,
  };
};

export const deleteCasinosRequest = () => {
  return {
    type: types.DELETE_CASINOS_REQUEST,
  };
};

export const deleteCasinosSuccess = (casinos) => {
  return {
    type: types.DELETE_CASINOS_SUCCESS,
    payload: casinos,
  };
};

export const deleteCasinosFailure = (error) => {
  return {
    type: types.DELETE_CASINOS_FAILURE,
    payload: error,
  };
};

export const fetchCasinos = () => {
    return (dispatch) => {
      dispatch(fetchCasinosRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const casinos = response.data;
                    dispatch(fetchCasinosSuccess(casinos))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchCasinosFailure(errorMsg))
              })
      };
};

export const fetchCasino = () => {
  return (dispatch) => {
    dispatch(fetchCasinoRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const casino = response.data;
                  dispatch(fetchCasinoSuccess(casino))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchCasinoFailure(errorMsg))
            })
    };
};

export const createCasino = () => {
  return (dispatch) => {
    dispatch(createCasinoRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const casino = response.data;
                  dispatch(createCasinoSuccess(casino))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createCasinoFailure(errorMsg))
            })
    };
};

export const updateCasino = () => {
  return (dispatch) => {
    dispatch(updateCasinoRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const casino = response.data;
                  dispatch(updateCasinoSuccess(casino))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateCasinoFailure(errorMsg))
            })
    };
};

export const deleteCasinos = () => {
  return (dispatch) => {
    dispatch(deleteCasinosRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const casinos = response.data;
                  dispatch(deleteCasinosSuccess(casinos))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteCasinosFailure(errorMsg))
            })
    };
};