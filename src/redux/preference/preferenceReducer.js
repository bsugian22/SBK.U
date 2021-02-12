import * as types from "./preferenceTypes";

const initialState = {
  preferences: [],
};

function preferencesReducer(state = initialState, action) {
  const { preferences } = state;

  switch (action.type) {
    case types.SET_PREFERENCES:
      return {
        preferences: action.payload,
      };
    default:
      return state;
  }
}

export default preferencesReducer;
