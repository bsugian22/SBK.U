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

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_REGISTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REGISTERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_REGISTERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      
    case DELETE_REGISTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REGISTERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_REGISTERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    default:
      return state;
  }
};

export default registerReducer;
