import * as types from "./findTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const findReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_FINDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_FINDS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_FINDS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_FINDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_FINDS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_FINDS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default findReducer;
