import {
  FETCH_POINTS_REQUEST,
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE,
} from "./pointTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const pointReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_POINTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POINTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_POINTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default pointReducer;
