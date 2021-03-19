import * as types from "./noticeTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  error: "",
  viewNotice: {
    id: 0,
    category: "",
    title: "",
    content: "",
    fixed: 0,
    hits: 0,
    createdAt: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  noticeMainList: { data: [] },
  newInquiryToDeleteList: {
    notices: [],
  },
  viewNoticeStatus: "cash",
  notices: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
  },
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NOTICES_REQUEST:
      return {
        ...state,
        loading: true,
        viewNotice: {
          id: 0,
          category: "",
          title: "",
          content: "",
          fixed: 0,
          hits: 0,
          createdAt: "",
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        viewNoticeStatus: "cash",
      };
    case types.FETCH_NOTICES_SUCCESS:
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
        notices: newData,
        noticeMainList: action.payload,
        list: "ALL",
        error: "",
        newInquiryToDeleteList: {
          notices: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        viewNotice: {
          title: "",
          content: "",
        },
      };
    case types.FETCH_NOTICES_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
        newInquiryToDeleteList: {
          notices: [],
        },
        viewNoticeStatus: "cash",
        viewNotice: {
          agreed: true,
          amount: "0",
          from: "cash",
          to: "casino_cash",
        },
      };

    case types.FETCH_NOTICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_NOTICE_SUCCESS:
      return {
        loading: false,
        error: "",
      };
    case types.FETCH_NOTICE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case types.CREATE_NOTICE_REQUEST:
      return {
        ...state,
        loading: true,
        viewNotice: {
          ...state.viewNotice,
          from: state.viewNotice.from,
          to: state.viewNotice.to,
        },
      };
    case types.CREATE_NOTICE_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_NOTICE_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_NOTICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_NOTICE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_NOTICE_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_NOTICES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_NOTICES_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newInquiryToDeleteList: {
          notices: [],
        },
      };
    case types.DELETE_NOTICES_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
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
    case types.CHANGE_NOTICE_AMOUNT:
      return {
        ...state,
        viewNotice: { ...state.viewNotice, amount: action.payload },
      };

    case types.CHANGE_NOTICE_CATEGORY:
      return {
        ...state,
        viewNotice: { ...state.viewNotice, category: action.payload },
      };
    case types.CHANGE_NOTICE_IDS:
      return {
        ...state,
        viewNotice: { ...state.viewNotice, outcomes: action.payload },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.noticeMainList.data.filter((o) => o.status == "WAITING");
      return {
        ...state,
        notices: { ...state.notices, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_NOTICE:
      return {
        ...state,
        notices: { ...state.notices, data: state.noticeMainList.data },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.noticeMainList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        notices: { ...state.notices, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.noticeMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        notices: { ...state.notices, data: defeated },
        list: "DEFEATED",
      };
    case types.CHECK_NOTICE_CERTAIN_ITEM:
      state.notices.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      return {
        ...state,
        notices: { ...state.notices, data: state.notices.data },
      };
    case types.LIST_OF_TODELETE_NOTICES:
      let newList = {
        notice: [],
      };

      state.notices.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.notice.push(item);
        }
      });

      state.newInquiryToDeleteList = {
        ...state.newInquiryToDeleteList,
        notices: [...newList.notice],
      };

      return {
        ...state,
        notices: { ...state.notices, data: state.notices.data },
        newInquiryToDeleteList: {
          ...state.newInquiryToDeleteList,
          notices: [...state.newInquiryToDeleteList.notices],
        },
      };
    case types.SELECT_NOTICE_METHOD:
      return {
        ...state,
        viewNoticeStatus: action.payload,
      };
    case types.CHANGE_CREATE_NOTICE_AMOUNT:
      return {
        ...state,
        viewNotice: {
          ...state.viewNotice,
          amount: action.payload.toString(),
        },
      };
    case types.INCREMENT_NOTICE_AMOUNT:
      let inc = Number(state.viewNotice.amount) + 1000;
      return {
        ...state,
        viewNotice: {
          ...state.viewNotice,
          amount: inc.toString(),
        },
      };
    case types.DECREMENT_NOTICE_AMOUNT:
      let dec = Number(state.viewNotice.amount) - 1000;
      return {
        ...state,
        viewNotice: {
          ...state.viewNotice,
          amount: dec.toString(),
        },
      };
    case types.FROM_CASH_TO_CASINO_NOTICE:
      return {
        ...state,
        viewNotice: {
          ...state.viewNotice,
          from: "cash",
          to: "casino_cash",
        },
      };
    case types.FROM_CASINO_TO_CASH_NOTICE:
      return {
        ...state,
        viewNotice: {
          ...state.viewNotice,
          from: "casino_cash",
          to: "cash",
        },
      };
    case types.RESET_CREATE_NOTICE:
      return {
        ...state,
        viewNotice: {
          title: "",
          content: "",
        },
      };
    case types.CHECK_ALL_NOTICE:
      state.notices.data.map((i) => {
        i.isChecked = true;
      });
      return {
        ...state,
        notices: { ...state.notices, data: state.notices.data },
      };
    case types.CHANGE_NOTICE_TITLE:
      return {
        ...state,
        viewNotice: { ...state.viewNotice, title: action.payload },
      };
    case types.CHANGE_NOTICE_CONTENT:
      return {
        ...state,
        viewNotice: { ...state.viewNotice, content: action.payload },
      };
    case types.VIEW_NOTICE_ITEM:
      return {
        ...state,
        viewNotice: action.payload,
      };
    case types.SET_NOTICE_PAGE:
      var lastPage = state.notices.lastPage;
      state.notices.list_pages = [];
      if (lastPage != null) {
        for (let index = 1; index <= lastPage; index++) {
          state.notices.list_pages.push(index);
        }
      }
      return {
        ...state,
        notices: {
          ...state.notices,
          list_pages: state.notices.list_pages,
          pages: state.notices.pages,
        },
      };

    case types.NEXT_PAGE_NOTICE:
      return {
        ...state,
        loading: true,
        notices: {
          ...state.notices,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_NOTICE:
      return {
        ...state,
        loading: true,
        notices: {
          ...state.notices,
          page: action.payload,
        },
      };
    case types.CHANGE_NOTICE_PAGE:
      return {
        ...state,
        notices: { ...state.notices, page: action.payload },
      };
    default:
      return state;
  }
};

export default noticeReducer;
