import {
  FETCH_PROMOS_REQUEST,
  FETCH_PROMOS_SUCCESS,
  FETCH_PROMOS_FAILURE,
} from "./promoTypes";
import axios from "axios";

export const fetchPromosRequest = () => {
  return {
    type: FETCH_PROMOS_REQUEST,
  };
};

export const fetchPromosSuccess = (promos) => {
  return {
    type: FETCH_PROMOS_SUCCESS,
    payload: promos,
  };
};

export const fetchPromosFailure = (error) => {
  return {
    type: FETCH_PROMOS_FAILURE,
    payload: error,
  };
  };

export const fetchPromos = () => {
    return (dispatch) => {
      dispatch(fetchPromosRequest);
      await axios.get(`/api/admin/promos`)
                  .then(response => {
                    const promos = response.data;
                    dispatch(fetchPromosSuccess(promos))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPromosFailure(errorMsg))
              })
      };
};
