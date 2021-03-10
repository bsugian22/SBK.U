import * as types from "./promoTypes";
import sweetalert from "../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  promos: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
    amount: 0,
    list_pages: [],
    pages: [],
    totalPages: [],
  },
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
      let newData = {
        data: [],
        total: 0,
        count: 0,
        perPage: 0,
        page: 0,
        lastPage: 0,
      };
      newData.data = action.payload.data.map((o) => {
        return {
          isChecked: false,
          ...o,
        };
      });
      newData.total = action.payload.total;
      newData.count = action.payload.count;
      newData.perPage = action.payload.perPage;
      newData.page = action.payload.page;
      newData.lastPage = action.payload.lastPage;
      return {
        ...state,
        loading: false,
        promos: {
          ...state.promos,
          total: newData.total,
          data: newData.data,
          count: newData.count,
          perPage: newData.perPage,
          page: newData.page,
          lastPage: newData.lastPage,
        },
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
    case types.SET_PROMO_PAGE:
      var total = state.promos.total;
      state.promos.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 15) + 1; index++) {
          state.promos.list_pages.push(index);
        }
      }
      return {
        ...state,
        promos: {
          ...state.promos,
          list_pages: state.promos.list_pages,
          pages: state.promos.pages,
        },
      };

    case types.NEXT_PAGE_PROMO:
      return {
        ...state,
        loading: true,
        promos: {
          ...state.promos,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_PROMO:
      return {
        ...state,
        loading: true,
        promos: {
          ...state.promos,
          page: action.payload,
        },
      };
    case types.CHANGE_PROMO_PAGE:
      return {
        ...state,
        promos: { ...state.promos, page: action.payload },
      };
    default:
      return state;
  }
};

export default promoReducer;
