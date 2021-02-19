import * as types from "./swipermainTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const swipermainReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_SWIPERMAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SWIPERMAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SWIPERMAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SWIPERMAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SWIPERMAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SWIPERMAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default swipermainReducer;
