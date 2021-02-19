import * as types from "./registerTypes";
import axios from "axios";

export const fetchRegistersRequest = () => {
  return {
    type: types.FETCH_REGISTERS_REQUEST,
  };
};

export const fetchRegistersSuccess = (registers) => {
  return {
    type: types.FETCH_REGISTERS_SUCCESS,
    payload: registers,
  };
};

export const fetchRegistersFailure = (error) => {
  return {
    type: types.FETCH_REGISTERS_FAILURE,
    payload: error,
  };
};

export const fetchRegisterRequest = () => {
  return {
    type: types.FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (register) => {
  return {
    type: types.FETCH_REGISTER_SUCCESS,
    payload: register,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: types.FETCH_REGISTER_FAILURE,
    payload: error,
  };
};

export const createRegisterRequest = () => {
  return {
    type: types.CREATE_REGISTER_REQUEST,
  };
};

export const createRegisterSuccess = (register) => {
  return {
    type: types.CREATE_REGISTER_SUCCESS,
    payload: register,
  };
};

export const createRegisterFailure = (error) => {
  return {
    type: types.CREATE_REGISTER_FAILURE,
    payload: error,
  };
};

export const updateRegisterRequest = () => {
  return {
    type: types.UPDATE_REGISTER_REQUEST,
  };
};

export const updateRegisterSuccess = (register) => {
  return {
    type: types.UPDATE_REGISTER_SUCCESS,
    payload: register,
  };
};

export const updateRegisterFailure = (error) => {
  return {
    type: types.UPDATE_REGISTER_FAILURE,
    payload: error,
  };
};

export const deleteRegistersRequest = () => {
  return {
    type: types.DELETE_REGISTERS_REQUEST,
  };
};

export const deleteRegistersSuccess = (registers) => {
  return {
    type: types.DELETE_REGISTERS_SUCCESS,
    payload: registers,
  };
};

export const deleteRegistersFailure = (error) => {
  return {
    type: types.DELETE_REGISTERS_FAILURE,
    payload: error,
  };
};

export const fetchRegisters = () => {
    return (dispatch) => {
      dispatch(fetchRegistersRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const registers = response.data;
                    dispatch(fetchRegistersSuccess(registers))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchRegistersFailure(errorMsg))
              })
      };
};

export const fetchRegister = () => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const register = response.data;
                  dispatch(fetchRegisterSuccess(register))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchRegisterFailure(errorMsg))
            })
    };
};

export const createRegister = () => {
  return (dispatch) => {
    dispatch(createRegisterRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const register = response.data;
                  dispatch(createRegisterSuccess(register))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createRegisterFailure(errorMsg))
            })
    };
};

export const updateRegister = () => {
  return (dispatch) => {
    dispatch(updateRegisterRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const register = response.data;
                  dispatch(updateRegisterSuccess(register))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateRegisterFailure(errorMsg))
            })
    };
};

export const deleteRegisters = () => {
  return (dispatch) => {
    dispatch(deleteRegistersRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const registers = response.data;
                  dispatch(deleteRegistersSuccess(registers))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteRegistersFailure(errorMsg))
            })
    };
};