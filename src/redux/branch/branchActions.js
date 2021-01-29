import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILURE,
} from "./branchTypes";
import axios from "axios";

export const fetchBranchesRequest = () => {
  return {
    type: FETCH_BRANCHES_REQUEST,
  };
};

export const fetchBranchesSuccess = (cashes) => {
  return {
    type: FETCH_BRANCHES_SUCCESS,
    payload: branches,
  };
};

export const fetchBranchesFailure = (error) => {
  return {
    type: FETCH_BRANCHES_FAILURE,
    payload: error,
  };
  };

export const fetchBranches = () => {
    return (dispatch) => {
      dispatch(fetchBranchesRequest);
      await axios.get(`/api/admin/branches`)
                  .then(response => {
                    const branches = response.data;
                    dispatch(fetchBranchesSuccess(branches))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchBranchesFailure(errorMsg))
              })
      };
};
