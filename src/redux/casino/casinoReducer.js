import * as types from "./casinoTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const casinoReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_CASINOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CASINOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_CASINOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_CASINOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_CASINOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_CASINOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default casinoReducer;
