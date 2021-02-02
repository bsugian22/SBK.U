import {
  FETCH_CASINOS_REQUEST,
  FETCH_CASINOS_SUCCESS,
  FETCH_CASINOS_FAILURE,
  FETCH_CASINO_REQUEST,
  FETCH_CASINO_SUCCESS,
  FETCH_CASINO_FAILURE,
  CREATE_CASINO_REQUEST,
  CREATE_CASINO_SUCCESS,
  CREATE_CASINO_FAILURE,
  UPDATE_CASINO_REQUEST,
  UPDATE_CASINO_SUCCESS,
  UPDATE_CASINO_FAILURE,
  DELETE_CASINOS_REQUEST,
  DELETE_CASINOS_SUCCESS,
  DELETE_CASINOS_FAILURE,
} from "./bettingTypes";
import axios from "axios";

export const fetchCasinosRequest = () => {
  return {
    type: FETCH_CASINOS_REQUEST,
  };
};

export const fetchCasinosSuccess = (casinos) => {
  return {
    type: FETCH_CASINOS_SUCCESS,
    payload: casinos,
  };
};

export const fetchCasinosFailure = (error) => {
  return {
    type: FETCH_CASINOS_FAILURE,
    payload: error,
  };
};

export const fetchCasinoRequest = () => {
  return {
    type: FETCH_CASINO_REQUEST,
  };
};

export const fetchCasinoSuccess = (casino) => {
  return {
    type: FETCH_CASINO_SUCCESS,
    payload: casino,
  };
};

export const fetchCasinoFailure = (error) => {
  return {
    type: FETCH_CASINO_FAILURE,
    payload: error,
  };
};

export const createCasinoRequest = () => {
  return {
    type: CREATE_CASINO_REQUEST,
  };
};

export const createCasinoSuccess = (casino) => {
  return {
    type: CREATE_CASINO_SUCCESS,
    payload: casino,
  };
};

export const createCasinoFailure = (error) => {
  return {
    type: CREATE_CASINO_FAILURE,
    payload: error,
  };
};

export const updateCasinoRequest = () => {
  return {
    type: UPDATE_CASINO_REQUEST,
  };
};

export const updateCasinoSuccess = (casino) => {
  return {
    type: UPDATE_CASINO_SUCCESS,
    payload: casino,
  };
};

export const updateCasinoFailure = (error) => {
  return {
    type: UPDATE_CASINO_FAILURE,
    payload: error,
  };
};

export const deleteCasinosRequest = () => {
  return {
    type: DELETE_CASINOS_REQUEST,
  };
};

export const deleteCasinosSuccess = (casinos) => {
  return {
    type: DELETE_CASINOS_SUCCESS,
    payload: casinos,
  };
};

export const deleteCasinosFailure = (error) => {
  return {
    type: DELETE_CASINOS_FAILURE,
    payload: error,
  };
};

export const fetchCasinos = () => {
    return (dispatch) => {
      dispatch(fetchCasinosRequest);
      await axios.get(`/api/casino`)
                  .then(response => {
                    const casinos = response.data;
                    dispatch(fetchCasinosSuccess(casinos))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchCasinosFailure(errorMsg))
              })
      };
};
