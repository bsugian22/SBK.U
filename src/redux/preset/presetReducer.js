import {
  FETCH_PRESETS_REQUEST,
  FETCH_PRESETS_SUCCESS,
  FETCH_PRESETS_FAILURE,
} from "./presetTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const presetReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PRESETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRESETS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PRESETS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default presetReducer;
