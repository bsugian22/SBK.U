import * as types from "./promoTypes";
import sweetalert from "../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  promos: { data: [] },
  error: "",
  promo: {
    id: 0,
    category: "",
    title: "",
    content: "",
    photo: "",
    fixed: 0,
    hits: 0,
    created_at: "",
  },
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
        promos: { data: [] },
        promo: {
          id: 0,
          category: "",
          title: "",
          content: "",
          photo: "",
          fixed: 0,
          hits: 0,
          created_at: "",
        },
      };
    case types.FETCH_PROMOS_SUCCESS:
      return {
        ...state,
        loading: false,
        promos: action.payload,
        error: "",
        promo: {
          id: 0,
          category: "",
          title: "",
          content: "",
          photo: "",
          fixed: 0,
          hits: 0,
          created_at: "",
        },
      };
    case types.FETCH_PROMOS_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_PROMO_FAILURE:
      return {
        loading: false,
        promos: { data: [] },
        error: action.payload,
      };

    case types.UPDATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_PROMOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case types.VIEW_PROMO_DATA:
      console.log(action.payload);
      return {
        ...state,
        promo: {
          id: action.payload.id,
          category: action.payload.category,
          title: action.payload.title,
          content: action.payload.content,
          photo: action.payload.fixed,
          hits: action.payload.hits,
          created_at: action.payload.created_at,
        },
      };

    default:
      return state;
  }
};

export default promoReducer;
