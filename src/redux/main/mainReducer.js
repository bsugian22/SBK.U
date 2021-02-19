import * as types from "./mainTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_MAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_MAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      
    case types.FETCH_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_MAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_MAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_MAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
