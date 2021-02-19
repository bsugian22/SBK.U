import * as types from "./gamesviewTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const gamesviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GAMESVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GAMESVIEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_GAMESVIEWS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_GAMESVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_GAMESVIEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_GAMESVIEWS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default gamesviewReducer;
