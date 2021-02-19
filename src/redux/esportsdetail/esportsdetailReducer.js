import * as types from "./esportsdetailTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {

    case types. FETCH_ESPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types. FETCH_ESPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types. FETCH_ESPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types. FETCH_ESPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types. FETCH_ESPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types. FETCH_ESPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types. CREATE_ESPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types. CREATE_ESPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types. CREATE_ESPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types. UPDATE_ESPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types. UPDATE_ESPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types. UPDATE_ESPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types. DELETE_ESPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types. DELETE_ESPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types. DELETE_ESPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default esportsdetailReducer;
