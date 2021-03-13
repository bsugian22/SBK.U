import * as types from "./sportsdetailTypes";

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
  },
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case types.FETCH_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: action.payload.data,
          detail: action.payload.data.id,
        },
        error: "",
      };
    case types.FETCH_SPORTSDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SPORTSDETAIL_RESET:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: null,
          detail: null,
        },
        error: "",
      };

    case types.CREATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportsdetailReducer;
