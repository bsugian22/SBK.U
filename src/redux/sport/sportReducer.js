import * as types from "./sportTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportReducer;
