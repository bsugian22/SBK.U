import {
  FETCH_DASHBOARDS_REQUEST,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
} from "./dashboardTypes";
import axios from "axios";

export const fetchDashboardsRequest = () => {
  return {
    type: FETCH_DASHBOARDS_REQUEST,
  };
};

export const fetchDashboardsSuccess = (users) => {
  return {
    type: FETCH_DASHBOARDS_SUCCESS,
    payload: dashboards,
  };
};

export const fetchDashboardsFailure = (error) => {
  return {
    type: FETCH_DASHBOARDS_FAILURE,
    payload: error,
  };
  };

export const fetchDashboards = () => {
    return (dispatch) => {
      dispatch(fetchDashboardsRequest);
      await axios.get(`/api/admin/dashboard`)
                  .then(response => {
                    const users = response.data;
                    dispatch(fetchDashboardsSuccess(users))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchDashboardsFailure(errorMsg))
              })
      };
};
