import {
  FETCH_PREFERENCES_REQUEST,
  FETCH_PREFERENCES_SUCCESS,
  FETCH_PREFERENCES_FAILURE,
} from "./preferenceTypes";
import axios from "axios";

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

export const fetchPreferences = () => {
    return (dispatch) => {
      dispatch(fetchPreferencesRequest);
      await axios.get(`/api/admin/preferences`)
                  .then(response => {
                    const preferences = response.data;
                    dispatch(fetchPreferencesSuccess(preferences))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPreferencesFailure(errorMsg))
              })
      };
};
