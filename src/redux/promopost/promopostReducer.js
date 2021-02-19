import * as types from "./promopostTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const promopostReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_PROMOPOSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PROMOPOSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_PROMOPOSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_PROMOPOSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_PROMOPOSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_PROMOPOSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    default:
      return state;
  }
};

export default promopostReducer;
