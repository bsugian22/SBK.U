import {
  FETCH_ESPORTS_REQUEST,
  FETCH_ESPORTS_SUCCESS,
  FETCH_ESPORTS_FAILURE,
  FETCH_ESPORT_REQUEST,
  FETCH_ESPORT_SUCCESS,
  FETCH_ESPORT_FAILURE,
  CREATE_ESPORT_REQUEST,
  CREATE_ESPORT_SUCCESS,
  CREATE_ESPORT_FAILURE,
  UPDATE_ESPORT_REQUEST,
  UPDATE_ESPORT_SUCCESS,
  UPDATE_ESPORT_FAILURE,
  DELETE_ESPORTS_REQUEST,
  DELETE_ESPORTS_SUCCESS,
  DELETE_ESPORTS_FAILURE,
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
