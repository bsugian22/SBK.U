import * as types from "./preferenceTypes";

export const setPreferences = (payload) => ({
  type: types.SET_PREFERENCES,
  payload,
});

export const setDarkmode = (toggle) => ({
  type: types.SET_DARKMODE,
  toggle,
});
