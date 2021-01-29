import {
  FETCH_BETTINGS_REQUEST,
  FETCH_BETTINGS_SUCCESS,
  FETCH_BETTINGS_FAILURE,
} from "./bettingTypes";
import axios from "axios";

export const fetchBettingsRequest = () => {
  return {
    type: FETCH_BETTINGS_REQUEST,
  };
};

export const fetchBettingsSuccess = (bettings) => {
  return {
    type: FETCH_BETTINGS_SUCCESS,
    payload: bettings,
  };
};

export const fetchBettingsFailure = (error) => {
  return {
    type: FETCH_BETTINGS_FAILURE,
    payload: error,
  };
  };

export const fetchBettings = () => {
    return (dispatch) => {
      dispatch(fetchBettingsRequest);
      await axios.get(`/api/admin/betting`)
                  .then(response => {
                    const bettings = response.data;
                    dispatch(fetchBettingsSuccess(bettings))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchBettingsFailure(errorMsg))
              })
      };
};
