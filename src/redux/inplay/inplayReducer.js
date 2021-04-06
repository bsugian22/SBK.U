import * as types from "./inplayTypes";

const initialState = {
  loading: false,
  data: {
    data: [],
    total: null,
    count: null,
    per_page: null,
    page: 1,
    last_page: null,
    detail: null,
    detail_data: null,
    bet: {
      category: "SPORTS",
      amount: 0,
      outcomes: [],
      total_odds: 0,
    }
  },
  error: "",
};

const inplayReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplayReducer;
