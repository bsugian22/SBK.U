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
import axios from "../../plugins/axios";

export const setPreferences = (payload) => ({
  type: SET_PREFERENCES,
  payload,
});

export const setDarkmode = (toggle) => ({
  type: SET_DARKMODE,
  toggle,
});

export const fetchPreferencesRequest = () => {
  return {
    type: FETCH_PREFERENCES_REQUEST,
  };
};

export const fetchPreferencesSuccess = (preferences) => {
  return {
    type: FETCH_PREFERENCES_SUCCESS,
    payload: preferences,
  };
};

export const fetchPreferencesFailure = (error) => {
  return {
    type: FETCH_PREFERENCES_FAILURE,
    payload: error,
  };
};

export const fetchPreferenceRequest = () => {
  return {
    type: FETCH_PREFERENCE_REQUEST,
  };
};

export const fetchPreferenceSuccess = (preference) => {
  return {
    type: FETCH_PREFERENCE_SUCCESS,
    payload: preference,
  };
};

export const fetchPreferenceFailure = (error) => {
  return {
    type: FETCH_PREFERENCE_FAILURE,
    payload: error,
  };
};

export const createPreferenceRequest = () => {
  return {
    type: CREATE_PREFERENCE_REQUEST,
  };
};

export const createPreferenceSuccess = (preference) => {
  return {
    type: CREATE_PREFERENCE_SUCCESS,
    payload: preference,
  };
};

export const createPreferenceFailure = (error) => {
  return {
    type: CREATE_PREFERENCE_FAILURE,
    payload: error,
  };
};

export const updatePreferenceRequest = () => {
  return {
    type: UPDATE_PREFERENCE_REQUEST,
  };
};

export const updatePreferenceSuccess = (preference) => {
  return {
    type: UPDATE_PREFERENCE_SUCCESS,
    payload: preference,
  };
};

export const updatePreferenceFailure = (error) => {
  return {
    type: UPDATE_PREFERENCE_FAILURE,
    payload: error,
  };
};

export const deletePreferencesRequest = () => {
  return {
    type: DELETE_PREFERENCES_REQUEST,
  };
};

export const deletePreferencesSuccess = (preferences) => {
  return {
    type: DELETE_PREFERENCES_SUCCESS,
    payload: preferences,
  };
};

export const deletePreferencesFailure = (error) => {
  return {
    type: DELETE_PREFERENCES_FAILURE,
    payload: error,
  };
};

export const fetchPreferences = () => {
  return (dispatch) => {
    dispatch(fetchPreferencesRequest);
    axios
      .get(`/api/preferences`)
      .then((response) => {
        const preferences = response.data;
        dispatch(fetchPreferencesSuccess(preferences));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPreferencesFailure(errorMsg));
      });
  };
};

export const fetchPreference = () => {
  return (dispatch) => {
    dispatch(fetchPreferenceRequest);
    axios
      .get(`/api/preferences`)
      .then((response) => {
        const preference = response.data;
        dispatch(fetchPreferenceSuccess(preference));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPreferenceFailure(errorMsg));
      });
  };
};

export const createPreference = () => {
  return (dispatch) => {
    dispch(createPreferenceRequest);
    awaiaxios
      .get(`/api/preferences`)
      .then((response) => {
        const preference = response.data;
        dispatch(createPreferenceSuccess(preference));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createPreferenceFailure(errorMsg));
      });
  };
};

export const updatePreference = () => {
  return (dispatch) => {
    dispatch(updatePreferenceRequest);
    axios
      .get(`/api/preferences`)
      .then((response) => {
        const preference = response.data;
        dispatch(updatePreferenceSuccess(preference));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updatePreferenceFailure(errorMsg));
      });
  };
};

export const deletePreferences = () => {
  return (dispatch) => {
    dispatch(deletePreferencesRequest);
    axios
      .get(`/api/preferences`)
      .then((response) => {
        const preferences = response.data;
        dispatch(deletePreferencesSuccess(preferences));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deletePreferencesFailure(errorMsg));
      });
  };
};

