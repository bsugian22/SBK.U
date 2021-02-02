import {
  FETCH_INQUIRIES_REQUEST,
  FETCH_INQUIRIES_SUCCESS,
  FETCH_INQUIRIES_FAILURE,
} from "./inquiryTypes";
import axios from "axios";

export const fetchInquiriesRequest = () => {
  return {
    type: FETCH_INQUIRIES_REQUEST,
  };
};

export const fetchInquiriesSuccess = (inquiries) => {
  return {
    type: FETCH_INQUIRIES_SUCCESS,
    payload: inquiries,
  };
};

export const fetchInquiriesFailure = (error) => {
  return {
    type: FETCH_INQUIRIES_FAILURE,
    payload: error,
  };
  };

export const fetchInquiries = () => {
    return (dispatch) => {
      dispatch(fetchInquiriesRequest);
      await axios.get(`/api/admin/inquiries`)
                  .then(response => {
                    const inquiries = response.data;
                    dispatch(fetchInquiriesSuccess(inquiries))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchInquiriesFailure(errorMsg))
              })
      };
};
