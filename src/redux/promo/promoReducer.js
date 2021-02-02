import {
  FETCH_PROMOS_REQUEST,
  FETCH_PROMOS_SUCCESS,
  FETCH_PROMOS_FAILURE,
} from "./promoTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PROMOS_FAILURE:
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
