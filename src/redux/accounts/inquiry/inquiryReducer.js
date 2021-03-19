import * as types from "./inquiryTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  error: "",
  createInquiry: {
    title: "",
    content: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  inquiryMainList: { data: [] },
  newInquiryToDeleteList: {
    inquiries: [],
  },
  createInquiryStatus: "cash",
  inquiries: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
  },
  isViewing: false,
};

const inquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INQUIRIES_REQUEST:
      return {
        ...state,
        loading: true,
        createInquiry: {
          title: "",
          content: "",
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createInquiryStatus: "cash",
      };
    case types.FETCH_INQUIRIES_SUCCESS:
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
        inquiries: newData,
        inquiryMainList: action.payload,
        list: "ALL",
        error: "",
        newInquiryToDeleteList: {
          inquiries: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createInquiry: {
          title: "",
          content: "",
        },
      };
    case types.FETCH_INQUIRIES_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
        newInquiryToDeleteList: {
          inquiries: [],
        },
        createInquiryStatus: "cash",
        createInquiry: {
          agreed: true,
          amount: "0",
          from: "cash",
          to: "casino_cash",
        },
      };

    case types.FETCH_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INQUIRY_SUCCESS:
      return {
        ...state,
        loading: false,
        isViewing: true,
        viewingId:action.payload.data.id
      };
    case types.FETCH_INQUIRY_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
        createInquiry: {
          ...state.createInquiry,
          from: state.createInquiry.from,
          to: state.createInquiry.to,
        },
      };
    case types.CREATE_INQUIRY_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_INQUIRY_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_INQUIRY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_INQUIRY_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_INQUIRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_INQUIRIES_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newInquiryToDeleteList: {
          inquiries: [],
        },
      };
    case types.DELETE_INQUIRIES_FAILURE:
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
    case types.CHANGE_INQUIRY_AMOUNT:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, amount: action.payload },
      };

    case types.CHANGE_INQUIRY_CATEGORY:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, category: action.payload },
      };
    case types.CHANGE_INQUIRY_IDS:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, outcomes: action.payload },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.inquiryMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        inquiries: { ...state.inquiries, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_INQUIRY:
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiryMainList.data },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.inquiryMainList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        inquiries: { ...state.inquiries, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.inquiryMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        inquiries: { ...state.inquiries, data: defeated },
        list: "DEFEATED",
      };
    case types.CHECK_INQUIRY_CERTAIN_ITEM:
      state.inquiries.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
      };
    case types.LIST_OF_TODELETE_INQUIRIES:
      let newList = {
        inquiry: [],
      };

      state.inquiries.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.inquiry.push(item);
        }
      });

      state.newInquiryToDeleteList = {
        ...state.newInquiryToDeleteList,
        inquiries: [...newList.inquiry],
      };

      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
        newInquiryToDeleteList: {
          ...state.newInquiryToDeleteList,
          inquiries: [...state.newInquiryToDeleteList.inquiries],
        },
      };
    case types.SELECT_INQUIRY_METHOD:
      return {
        ...state,
        createInquiryStatus: action.payload,
      };
    case types.CHANGE_CREATE_INQUIRY_AMOUNT:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: action.payload.toString(),
        },
      };
    case types.INCREMENT_INQUIRY_AMOUNT:
      let inc = Number(state.createInquiry.amount) + 1000;
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: inc.toString(),
        },
      };
    case types.DECREMENT_INQUIRY_AMOUNT:
      let dec = Number(state.createInquiry.amount) - 1000;
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: dec.toString(),
        },
      };
    case types.FROM_CASH_TO_CASINO_INQUIRY:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          from: "cash",
          to: "casino_cash",
        },
      };
    case types.FROM_CASINO_TO_CASH_INQUIRY:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          from: "casino_cash",
          to: "cash",
        },
      };
    case types.RESET_CREATE_INQUIRY:
      return {
        ...state,
        isViewing : false,
        createInquiry: {
          title: "",
          content: "",
        },
      };
    case types.CHECK_ALL_INQUIRY:
      state.inquiries.data.map((i) => {
        i.isChecked = !i.isChecked;
      });
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
      };
    case types.CHANGE_INQUIRY_TITLE:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, title: action.payload },
      };
    case types.CHANGE_INQUIRY_CONTENT:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, content: action.payload },
      };

    case types.SET_INQUIRY_PAGE:
      var total = state.inquiries.total;
      state.inquiries.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 15) + 1; index++) {
          state.inquiries.list_pages.push(index);
        }
      }
      return {
        ...state,
        inquiries: {
          ...state.inquiries,
          list_pages: state.inquiries.list_pages,
          pages: state.inquiries.pages,
        },
      };

    case types.NEXT_PAGE_INQUIRY:
      return {
        ...state,
        loading: true,
        inquiries: {
          ...state.inquiries,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_INQUIRY:
      return {
        ...state,
        loading: true,
        inquiries: {
          ...state.inquiries,
          page: action.payload,
        },
      };
    case types.CHANGE_INQUIRY_PAGE:
      return {
        ...state,
        inquiries: { ...state.inquiries, page: action.payload },
      };

    default:
      return state;
  }
};

export default inquiryReducer;
