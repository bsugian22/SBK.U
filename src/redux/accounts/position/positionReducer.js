import * as types from "./positionTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  positions: { data: [] },
  error: "",
  createPosition: {
    category: "",
    amount: "",
    outcomes: "",
  },
  selectedPosition: null,
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "ALL",
  originalList: { data: [] },
  status: false,
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_POSITION:
      return {
        ...state,
        selectedPosition: action.payload
      };
    case types.FETCH_POSITIONS_REQUEST:
      return {
        ...state,
        loading: true,
        createPosition: {
          category: "",
          amount: "",
          outcomes: "",
        },
        selectedPosition: null,
        showModal: false,
        openModal: false,
        closeModal: false,
        list: "ALL",
        status: false,
      };
    case types.FETCH_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        positions: action.payload,
        originalList: action.payload,
        list: "ALL",
        error: "",
        createPosition: {
          category: "",
          amount: "",
          outcomes: "",
        },
        showModal: false,
        openModal: false,
        closeModal: false,
      };
    case types.FETCH_POSITIONS_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
      };

    case types.FETCH_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POSITION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_POSITION_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_POSITION_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_POSITION_FAILURE:
      swal.showError(action.payload.message);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        createPosition: {
          ...state.createPosition,
          outcomes: action.payload.outcomes,
        },
      };

    case types.UPDATE_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_POSITION_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_POSITIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_POSITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case types.OPEN_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: true,
      };
    case types.CLOSE_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CHANGE_POSITION_AMOUNT:
      return {
        ...state,
        createPosition: { ...state.createPosition, amount: action.payload },
      };

    case types.CHANGE_POSITION_CATEGORY:
      return {
        ...state,
        createPosition: { ...state.createPosition, category: action.payload },
      };
    case types.CHANGE_POSITION_IDS:
      return {
        ...state,
        createPosition: { ...state.createPosition, outcomes: action.payload },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.originalList.data.filter((o) => o.status == "WAITING");
      return {
        ...state,
        positions: { ...state.positions, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_POSITION:
      return {
        ...state,
        positions: { ...state.positions, data: state.originalList.data },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.originalList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        positions: { ...state.positions, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.originalList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        positions: { ...state.positions, data: defeated },
        list: "DEFEATED",
      };

    case types.SELECT_ALL_POSITION:
      let newList = { data: [] };
      state.positions.data.map((i) => {
        i.createdAt == null || i.createdAt == undefined
          ? (i.createdAt = "")
          : i.createdAt;
        i.createdAt = i.createdAt;
        i.isChecked = state.status;
        newList.data.push(i);
      });

      return {
        ...state,
        positions: { ...state.positions, data: newList.data },
      };

    case types.SET_POSITION_PAGE:
      var total = state.positions.total;
      state.positions.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 5) + 1; index++) {
          state.positions.list_pages.push(index);
        }
      }
      return {
        ...state,
        positions: {
          ...state.positions,
          list_pages: state.positions.list_pages,
          pages: state.positions.pages,
        },
      };

    case types.NEXT_PAGE_POSITION:
      return {
        ...state,
        loading: true,
        positions: {
          ...state.positions,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_POSITION:
      return {
        ...state,
        loading: true,
        positions: {
          ...state.positions,
          page: action.payload,
        },
      };
    case types.CHANGE_POSITION_PAGE:
      return {
        ...state,
        positions: { ...state.positions, page: action.payload },
      };
    case types.CHANGE_POSITION_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    case types.CHECK_POSITION_CERTAIN_ITEM:
      state.positions.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      return {
        ...state,
        positions: { ...state.positions, data: state.positions.data },
      };
    default:
      return state;
  }
};

export default positionReducer;
