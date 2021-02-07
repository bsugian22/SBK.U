import * as types from "./preferenceActions";

const initialState = {
  preferences: [],
};

function preferencesStore(state = initialState, action) {
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

export default preferencesStore;
