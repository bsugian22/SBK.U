import * as types from "./inplaydetailTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const inplaydetailReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_INPLAYDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAYDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAYDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_INPLAYDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_INPLAYDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_INPLAYDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplaydetailReducer;
