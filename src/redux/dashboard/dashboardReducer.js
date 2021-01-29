import {
  FETCH_DASHBOARDS_REQUEST,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
} from "./dashboardTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_DASHBOARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DASHBOARDS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DASHBOARDS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
