import {
  FETCH_PROMOPOSTS_REQUEST,
  FETCH_PROMOPOSTS_SUCCESS,
  FETCH_PROMOPOSTS_FAILURE,
  FETCH_PROMOPOST_REQUEST,
  FETCH_PROMOPOST_SUCCESS,
  FETCH_PROMOPOST_FAILURE,
  CREATE_PROMOPOST_REQUEST,
  CREATE_PROMOPOST_SUCCESS,
  CREATE_PROMOPOST_FAILURE,
  UPDATE_PROMOPOST_REQUEST,
  UPDATE_PROMOPOST_SUCCESS,
  UPDATE_PROMOPOST_FAILURE,
  DELETE_PROMOPOSTS_REQUEST,
  DELETE_PROMOPOSTS_SUCCESS,
  DELETE_PROMOPOSTS_FAILURE,
} from "./promopostTypes";
import axios from "../../plugins/axios";

export const fetchPromopostsRequest = () => {
  return {
    type: FETCH_PROMOPOSTS_REQUEST,
  };
};

export const fetchPromopostsSuccess = (promoposts) => {
  return {
    type: FETCH_PROMOPOSTS_SUCCESS,
    payload: promoposts,
  };
};

export const fetchPromopostsFailure = (error) => {
  return {
    type: FETCH_PROMOPOSTS_FAILURE,
    payload: error,
  };
};

export const fetchPromopostRequest = () => {
  return {
    type: FETCH_PROMOPOST_REQUEST,
  };
};

export const fetchPromopostSuccess = (promopost) => {
  return {
    type: FETCH_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const fetchPromopostFailure = (error) => {
  return {
    type: FETCH_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const createPromopostRequest = () => {
  return {
    type: CREATE_PROMOPOST_REQUEST,
  };
};

export const createPromopostSuccess = (promopost) => {
  return {
    type: CREATE_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const createPromopostFailure = (error) => {
  return {
    type: CREATE_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const updatePromopostRequest = () => {
  return {
    type: UPDATE_PROMOPOST_REQUEST,
  };
};

export const updatePromopostSuccess = (promopost) => {
  return {
    type: UPDATE_PROMOPOST_SUCCESS,
    payload: promopost,
  };
};

export const updatePromopostFailure = (error) => {
  return {
    type: UPDATE_PROMOPOST_FAILURE,
    payload: error,
  };
};

export const deletePromopostsRequest = () => {
  return {
    type: DELETE_PROMOPOSTS_REQUEST,
  };
};

export const deletePromopostsSuccess = (promoposts) => {
  return {
    type: DELETE_PROMOPOSTS_SUCCESS,
    payload: promoposts,
  };
};

export const deletePromopostsFailure = (error) => {
  return {
    type: DELETE_PROMOPOSTS_FAILURE,
    payload: error,
  };
};

export const fetchPromoposts = () => {
    return (dispatch) => {
      dispatch(fetchPromopostsRequest);
      axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
                .then(response => {
                  const promoposts = response.data;
                  dispatch(deletePromopostsSuccess(promoposts))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deletePromopostsFailure(errorMsg))
            })
    };
};