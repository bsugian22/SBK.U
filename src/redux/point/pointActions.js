import {
  FETCH_POINTS_REQUEST,
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE,
} from "./pointTypes";
import axios from "axios";

export const fetchPointsRequest = () => {
  return {
    type: FETCH_POINTS_REQUEST,
  };
};

export const fetchPointsSuccess = (points) => {
  return {
    type: FETCH_POINTS_SUCCESS,
    payload: points,
  };
};

export const fetchPointsFailure = (error) => {
  return {
    type: FETCH_POINTS_FAILURE,
    payload: error,
  };
  };

export const fetchPoints = () => {
    return (dispatch) => {
      dispatch(fetchPointsRequest);
      await axios.get(`/api/admin/point`)
                  .then(response => {
                    const points = response.data;
                    dispatch(fetchPointsSuccess(points))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPointsFailure(errorMsg))
              })
      };
};
