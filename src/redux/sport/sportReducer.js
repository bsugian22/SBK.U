import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILURE,
} from "./saleTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SALES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SALES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default saleReducer;
