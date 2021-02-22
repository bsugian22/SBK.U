import * as types from "./promoTypes";
import axios from "../../plugins/axios";

export const fetchPromosRequest = () => {
  return {
    type: types.FETCH_PROMOS_REQUEST,
  };
};

export const fetchPromosSuccess = (promos) => {
  return {
    type: types.FETCH_PROMOS_SUCCESS,
    payload: promos,
  };
};

export const fetchPromosFailure = (error) => {
  return {
    type: types.FETCH_PROMOS_FAILURE,
    payload: error,
  };
};

export const fetchPromoRequest = () => {
  return {
    type: types.FETCH_PROMO_REQUEST,
  };
};

export const fetchPromoSuccess = (promo) => {
  return {
    type: types.FETCH_PROMO_SUCCESS,
    payload: promo,
  };
};

export const fetchPromoFailure = (error) => {
  return {
    type: types.FETCH_PROMO_FAILURE,
    payload: error,
  };
};

export const createPromoRequest = () => {
  return {
    type: types.CREATE_PROMO_REQUEST,
  };
};

export const createPromoSuccess = (promo) => {
  return {
    type: types.CREATE_PROMO_SUCCESS,
    payload: promo,
  };
};

export const createPromoFailure = (error) => {
  return {
    type: types.CREATE_PROMO_FAILURE,
    payload: error,
  };
};

export const updatePromoRequest = () => {
  return {
    type: types.UPDATE_PROMO_REQUEST,
  };
};

export const updatePromoSuccess = (promo) => {
  return {
    type: types.UPDATE_PROMO_SUCCESS,
    payload: promo,
  };
};

export const updatePromoFailure = (error) => {
  return {
    type: types.UPDATE_PROMO_FAILURE,
    payload: error,
  };
};

export const deletePromosRequest = () => {
  return {
    type: types.DELETE_PROMOS_REQUEST,
  };
};

export const deletePromosSuccess = (promos) => {
  return {
    type: types.DELETE_PROMOS_SUCCESS,
    payload: promos,
  };
};

export const deletePromosFailure = (error) => {
  return {
    type: types.DELETE_PROMOS_FAILURE,
    payload: error,
  };
};

export const fetchPromos = (params) => {
  return (dispatch) => {
    dispatch(fetchPromosRequest());
    axios
      .get(`/api/promos`, { params: params })
      .then((response) => {
        const promos = response.data;
        dispatch(fetchPromosSuccess(promos));
        dispatch(setPagesOfPromo());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPromosFailure(errorMsg));
      });
  };
};
export const setPagesOfPromo = () => {
  return (dispatch) => {
    dispatch(setPagePromo());
  };
};

export const setPagePromo = () => {
  return {
    type: types.SET_PROMO_PAGE,
  };
};

export const onClickPagePromo = (data) => {
  return (dispatch) => {
    dispatch(fetchPromos(data));
  };
};

export const nextPromoPage = (page) => {
  return {
    type: types.NEXT_PAGE_PROMO,
    payload: page,
  };
};

export const nextPagePromo = (data) => {
  console.log(data);
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextPromoPage(page));
      dispatch(fetchPromos({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevPromoPage = (page) => {
  return {
    type: types.PREV_PAGE_PROMO,
    payload: page,
  };
};

export const prevPagePromo = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevPromoPage(page));
      dispatch(fetchPromos({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchPromo = () => {
  return (dispatch) => {
    dispatch(fetchPromoRequest);
    axios
      .get(`/api/promos`)
      .then((response) => {
        const promo = response.data;
        dispatch(fetchPromoSuccess(promo));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPromoFailure(errorMsg));
      });
  };
};

export const createPromo = () => {
  return (dispatch) => {
    dispatch(createPromoRequest);
    axios
      .get(`/api/promos`)
      .then((response) => {
        const promo = response.data;
        dispatch(createPromoSuccess(promo));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createPromoFailure(errorMsg));
      });
  };
};

export const updatePromo = () => {
  return (dispatch) => {
    dispatch(updatePromoRequest);
    axios
      .get(`/api/promos`)
      .then((response) => {
        const promo = response.data;
        dispatch(updatePromoSuccess(promo));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updatePromoFailure(errorMsg));
      });
  };
};

export const deletePromos = () => {
  return (dispatch) => {
    dispatch(deletePromosRequest);
    axios
      .get(`/api/promos`)
      .then((response) => {
        const promos = response.data;
        dispatch(deletePromosSuccess(promos));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deletePromosFailure(errorMsg));
      });
  };
};

export const viewPromo = (promo) => {
  return {
    type: types.VIEW_PROMO_DATA,
    payload: promo,
  };
};
