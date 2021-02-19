import * as types from "./esportTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ESPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_ESPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_ESPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_ESPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default esportReducer;
