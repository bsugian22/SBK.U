import {
  FETCH_REGISTERS_REQUEST,
  FETCH_REGISTERS_SUCCESS,
  FETCH_REGISTERS_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  CREATE_REGISTER_REQUEST,
  CREATE_REGISTER_SUCCESS,
  CREATE_REGISTER_FAILURE,
  UPDATE_REGISTER_REQUEST,
  UPDATE_REGISTER_SUCCESS,
  UPDATE_REGISTER_FAILURE,
  DELETE_REGISTERS_REQUEST,
  DELETE_REGISTERS_SUCCESS,
  DELETE_REGISTERS_FAILURE,
} from "./registerTypes";
import axios from "../../plugins/axios";

export const fetchRegistersRequest = () => {
  return {
    type: FETCH_REGISTERS_REQUEST,
  };
};

export const fetchRegistersSuccess = (registers) => {
  return {
    type: FETCH_REGISTERS_SUCCESS,
    payload: registers,
  };
};

export const fetchRegistersFailure = (error) => {
  return {
    type: FETCH_REGISTERS_FAILURE,
    payload: error,
  };
};

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (register) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: register,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    payload: error,
  };
};

export const createRegisterRequest = () => {
  return {
    type: CREATE_REGISTER_REQUEST,
  };
};

export const createRegisterSuccess = (register) => {
  return {
    type: CREATE_REGISTER_SUCCESS,
    payload: register,
  };
};

export const createRegisterFailure = (error) => {
  return {
    type: CREATE_REGISTER_FAILURE,
    payload: error,
  };
};

export const updateRegisterRequest = () => {
  return {
    type: UPDATE_REGISTER_REQUEST,
  };
};

export const updateRegisterSuccess = (register) => {
  return {
    type: UPDATE_REGISTER_SUCCESS,
    payload: register,
  };
};

export const updateRegisterFailure = (error) => {
  return {
    type: UPDATE_REGISTER_FAILURE,
    payload: error,
  };
};

export const deleteRegistersRequest = () => {
  return {
    type: DELETE_REGISTERS_REQUEST,
  };
};

export const deleteRegistersSuccess = (registers) => {
  return {
    type: DELETE_REGISTERS_SUCCESS,
    payload: registers,
  };
};

export const deleteRegistersFailure = (error) => {
  return {
    type: DELETE_REGISTERS_FAILURE,
    payload: error,
  };
};

export const fetchRegisters = () => {
    return (dispatch) => {
      dispatch(fetchRegistersRequest);
      axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
                .then(response => {
                  const registers = response.data;
                  dispatch(deleteRegistersSuccess(registers))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteRegistersFailure(errorMsg))
            })
    };
};