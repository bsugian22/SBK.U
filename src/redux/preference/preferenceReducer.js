import {
  SET_PREFERENCES,
  SET_DARKMODE,
  FETCH_PREFERENCES_REQUEST,
  FETCH_PREFERENCES_SUCCESS,
  FETCH_PREFERENCES_FAILURE,
  FETCH_PREFERENCE_REQUEST,
  FETCH_PREFERENCE_SUCCESS,
  FETCH_PREFERENCE_FAILURE,
  CREATE_PREFERENCE_REQUEST,
  CREATE_PREFERENCE_SUCCESS,
  CREATE_PREFERENCE_FAILURE,
  UPDATE_PREFERENCE_REQUEST,
  UPDATE_PREFERENCE_SUCCESS,
  UPDATE_PREFERENCE_FAILURE,
  DELETE_PREFERENCES_REQUEST,
  DELETE_PREFERENCES_SUCCESS,
  DELETE_PREFERENCES_FAILURE,
} from "./preferenceTypes";

const initialState = {
  preferences: {
    darkmode: false,
    data: [],
  },
};

const preferenceReducer = (state = initialState, action) => {
  
  const { preferences } = state;

  switch (action.type) {
    case SET_PREFERENCES:
      return {
        preferences: {
          ...preferences,
          data: action.payload,
        },
      };

    case SET_DARKMODE:
      return {
        preferences: {
          ...preferences,
          darkmode: action.toggle,
        },
      };

    // case FETCH_PREFERENCES_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case FETCH_PREFERENCES_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case FETCH_PREFERENCES_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case FETCH_PREFERENCE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case FETCH_PREFERENCE_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case FETCH_PREFERENCE_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case CREATE_PREFERENCE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case CREATE_PREFERENCE_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case CREATE_PREFERENCE_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case UPDATE_PREFERENCE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case UPDATE_PREFERENCE_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case UPDATE_PREFERENCE_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case DELETE_PREFERENCES_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case DELETE_PREFERENCES_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case DELETE_PREFERENCES_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default preferenceReducer;
