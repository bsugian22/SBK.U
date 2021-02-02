import {
  FETCH_NOTICES_REQUEST,
  FETCH_NOTICES_SUCCESS,
  FETCH_NOTICES_FAILURE,
} from "./noticeTypes";
import axios from "axios";

export const fetchNoticesRequest = () => {
  return {
    type: FETCH_NOTICES_REQUEST,
  };
};

export const fetchNoticesSuccess = (notices) => {
  return {
    type: FETCH_NOTICES_SUCCESS,
    payload: notices,
  };
};

export const fetchNoticesFailure = (error) => {
  return {
    type: FETCH_NOTICES_FAILURE,
    payload: error,
  };
  };

export const fetchNotices = () => {
    return (dispatch) => {
      dispatch(fetchNoticesRequest);
      await axios.get(`/api/admin/notices`)
                  .then(response => {
                    const notices = response.data;
                    dispatch(fetchNoticesSuccess(notices))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchNoticesFailure(errorMsg))
              })
      };
};
