import * as types from "./registerTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_REGISTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_REGISTERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_REGISTERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_REGISTER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      
    case types.DELETE_REGISTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_REGISTERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_REGISTERS_FAILURE:
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
