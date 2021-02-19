import * as types from "./promopostTypes";
import axios from "axios";

export const fetchPromopostsRequest = () => {
  return {
    type: types.FETCH_PROMOPOSTS_REQUEST,
  };
};

export const fetchPromopostsSuccess = (promoposts) => {
  return {
    type: types.FETCH_PROMOPOSTS_SUCCESS,
    payload: promoposts,
  };
};

export const fetchPromopostsFailure = (error) => {
  return {
    type: types.FETCH_PROMOPOSTS_FAILURE,
    payload: error,
  };
};

export const fetchPromopostRequest = () => {
  return {
    type: types.FETCH_PROMOPOST_REQUEST,
  };
};

export const fetchPromopostSuccess = (promopost) => {
  return {
    type: types.FETCH_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const fetchPromopostFailure = (error) => {
  return {
    type: types.FETCH_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const createPromopostRequest = () => {
  return {
    type: types.CREATE_PROMOPOST_REQUEST,
  };
};

export const createPromopostSuccess = (promopost) => {
  return {
    type: types.CREATE_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const createPromopostFailure = (error) => {
  return {
    type: types.CREATE_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const updatePromopostRequest = () => {
  return {
    type: types.UPDATE_PROMOPOST_REQUEST,
  };
};

export const updatePromopostSuccess = (promopost) => {
  return {
    type: types.UPDATE_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const updatePromopostFailure = (error) => {
  return {
    type: types.UPDATE_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const deletePromopostsRequest = () => {
  return {
    type: types.DELETE_PROMOPOSTS_REQUEST,
  };
};

export const deletePromopostsSuccess = (promoposts) => {
  return {
    type: types.DELETE_PROMOPOSTS_SUCCESS,
    payload: promoposts,
  };
};

export const deletePromopostsFailure = (error) => {
  return {
    type: types.DELETE_PROMOPOSTS_FAILURE,
    payload: error,
  };
};

export const fetchPromoposts = () => {
    return (dispatch) => {
      dispatch(fetchPromopostsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const promoposts = response.data;
                    dispatch(fetchPromopostsSuccess(promoposts))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchPromopostsFailure(errorMsg))
              })
      };
};

export const fetchPromopost = () => {
  return (dispatch) => {
    dispatch(fetchPromopostRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const promopost = response.data;
                  dispatch(fetchPromopostSuccess(promopost))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchPromopostFailure(errorMsg))
            })
    };
};

export const createPromopost = () => {
  return (dispatch) => {
    dispatch(createPromopostRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const promopost = response.data;
                  dispatch(createPromopostSuccess(promopost))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createPromopostFailure(errorMsg))
            })
    };
};

export const updatePromopost = () => {
  return (dispatch) => {
    dispatch(updatePromopostRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const promopost = response.data;
                  dispatch(updatePromopostSuccess(promopost))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updatePromopostFailure(errorMsg))
            })
    };
};

export const deletePromoposts = () => {
  return (dispatch) => {
    dispatch(deletePromopostsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const promoposts = response.data;
                  dispatch(deletePromopostsSuccess(promoposts))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deletePromopostsFailure(errorMsg))
            })
    };
};