import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILURE,
} from "./saleTypes";
import axios from "axios";

export const fetchSalesRequest = () => {
  return {
    type: FETCH_SALES_REQUEST,
  };
};

export const fetchSalesSuccess = (sales) => {
  return {
    type: FETCH_SALES_SUCCESS,
    payload: sales,
  };
};

export const fetchSalesFailure = (error) => {
  return {
    type: FETCH_SALES_FAILURE,
    payload: error,
  };
  };

export const fetchSales = () => {
    return (dispatch) => {
      dispatch(fetchSalesRequest);
      await axios.get(`/api/admin/sales`)
                  .then(response => {
                    const sales = response.data;
                    dispatch(fetchSalesSuccess(sales))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchSalesFailure(errorMsg))
              })
      };
};
