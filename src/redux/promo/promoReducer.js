import * as types from "./promoTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_PROMOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_PROMOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default promoReducer;
