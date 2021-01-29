import {
  FETCH_PRESETS_REQUEST,
  FETCH_PRESETS_SUCCESS,
  FETCH_PRESETS_FAILURE,
} from "./presetTypes";
import axios from "axios";

export const fetchPresetsRequest = () => {
  return {
    type: FETCH_PRESETS_REQUEST,
  };
};

export const fetchPresetsSuccess = (presets) => {
  return {
    type: FETCH_PRESETS_SUCCESS,
    payload: presets,
  };
};

export const fetchPresetsFailure = (error) => {
  return {
    type: FETCH_PRESETS_FAILURE,
    payload: error,
  };
  };

export const fetchPresets = () => {
    return (dispatch) => {
      dispatch(fetchPresetsRequest);
      await axios.get(`/api/admin/presets`)
                  .then(response => {
                    const presets = response.data;
                    dispatch(fetchPresetsSuccess(presets))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPresetsFailure(errorMsg))
              })
      };
};
