import {
  FETCH_BETTINGS_REQUEST,
  FETCH_BETTINGS_SUCCESS,
  FETCH_BETTINGS_FAILURE,
} from "./bettingTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const bettingReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_BETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BETTINGS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_BETTINGS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bettingReducer;
