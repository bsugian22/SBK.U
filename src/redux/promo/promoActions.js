import {
  FETCH_PROMOS_REQUEST,
  FETCH_PROMOS_SUCCESS,
  FETCH_PROMOS_FAILURE,
  FETCH_PROMO_REQUEST,
  FETCH_PROMO_SUCCESS,
  FETCH_PROMO_FAILURE,
  CREATE_PROMO_REQUEST,
  CREATE_PROMO_SUCCESS,
  CREATE_PROMO_FAILURE,
  UPDATE_PROMO_REQUEST,
  UPDATE_PROMO_SUCCESS,
  UPDATE_PROMO_FAILURE,
  DELETE_PROMOS_REQUEST,
  DELETE_PROMOS_SUCCESS,
  DELETE_PROMOS_FAILURE,
} from "./promoTypes";
import axios from "../../plugins/axios";

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

export const fetchPromoRequest = () => {
  return {
    type: FETCH_PROMO_REQUEST,
  };
};

export const fetchPromoSuccess = (promo) => {
  return {
    type: FETCH_PROMO_SUCCESS,
    payload: promo,
  };
};

export const fetchPromoFailure = (error) => {
  return {
    type: FETCH_PROMO_FAILURE,
    payload: error,
  };
};

export const createPromoRequest = () => {
  return {
    type: CREATE_PROMO_REQUEST,
  };
};

export const createPromoSuccess = (promo) => {
  return {
    type: CREATE_PROMO_SUCCESS,
    payload: promo,
  };
};

export const createPromoFailure = (error) => {
  return {
    type: CREATE_PROMO_FAILURE,
    payload: error,
  };
};

export const updatePromoRequest = () => {
  return {
    type: UPDATE_PROMO_REQUEST,
  };
};

export const updatePromoSuccess = (promo) => {
  return {
    type: UPDATE_PROMO_SUCCESS,
    payload: promo,
  };
};

export const updatePromoFailure = (error) => {
  return {
    type: UPDATE_PROMO_FAILURE,
    payload: error,
  };
};

export const deletePromosRequest = () => {
  return {
    type: DELETE_PROMOS_REQUEST,
  };
};

export const deletePromosSuccess = (promos) => {
  return {
    type: DELETE_PROMOS_SUCCESS,
    payload: promos,
  };
};

export const deletePromosFailure = (error) => {
  return {
    type: DELETE_PROMOS_FAILURE,
    payload: error,
  };
};


export const fetchPromos = () => {
    return (dispatch) => {
      dispatch(fetchPromosRequest);
      axios.get(`/api/promos`)
                  .then(response => {
                    const promos = response.data;
                    dispatch(fetchPromosSuccess(promos))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPromosFailure(errorMsg))
              })
      };
};

export const fetchPromo = () => {
  return (dispatch) => {
    dispatch(fetchPromoRequest);
    axios.get(`/api/promos`)
                .then(response => {
                  const promo = response.data;
                  dispatch(fetchPromoSuccess(promo))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchPromoFailure(errorMsg))
            })
    };
};

export const createPromo = () => {
  return (dispatch) => {
    dispatch(createPromoRequest);
    axios.get(`/api/promos`)
                .then(response => {
                  const promo = response.data;
                  dispatch(createPromoSuccess(promo))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createPromoFailure(errorMsg))
            })
    };
};

export const updatePromo = () => {
  return (dispatch) => {
    dispatch(updatePromoRequest);
    axios.get(`/api/promos`)
                .then(response => {
                  const promo = response.data;
                  dispatch(updatePromoSuccess(promo))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updatePromoFailure(errorMsg))
            })
    };
};

export const deletePromos = () => {
  return (dispatch) => {
    dispatch(deletePromosRequest);
    axios.get(`/api/promos`)
                .then(response => {
                  const promos = response.data;
                  dispatch(deletePromosSuccess(promos))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deletePromosFailure(errorMsg))
            })
    };
};