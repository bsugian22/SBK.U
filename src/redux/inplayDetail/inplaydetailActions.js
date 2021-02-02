import {
  FETCH_MAINS_REQUEST,
  FETCH_MAINS_SUCCESS,
  FETCH_MAINS_FAILURE,
} from "./mainTypes";
import axios from "axios";

export const fetchMainsRequest = () => {
  return {
    type: FETCH_MAINS_REQUEST,
  };
};

export const fetchMainsSuccess = (mains) => {
  return {
    type: FETCH_MAINS_SUCCESS,
    payload: mains,
  };
};

export const fetchMainsFailure = (error) => {
  return {
    type: FETCH_MAINS_FAILURE,
    payload: error,
  };
  };

export const fetchMains = () => {
    return (dispatch) => {
      dispatch(fetchMainsRequest);
      await axios.get(`/api/admin/main`)
                  .then(response => {
                    const mains = response.data;
                    dispatch(fetchMainsSuccess(mains))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchMainsFailure(errorMsg))
              })
      };
};
