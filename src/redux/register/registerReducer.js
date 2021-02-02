import {
  FETCH_PREFERENCES_REQUEST,
  FETCH_PREFERENCES_SUCCESS,
  FETCH_PREFERENCES_FAILURE,
} from "./registerTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const preferenceReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PREFERENCES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PREFERENCES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PREFERENCES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default preferenceReducer;
