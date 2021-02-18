import {
  FETCH_INQUIRIES_REQUEST,
  FETCH_INQUIRIES_SUCCESS,
  FETCH_INQUIRIES_FAILURE,
  FETCH_INQUIRY_REQUEST,
  FETCH_INQUIRY_SUCCESS,
  FETCH_INQUIRY_FAILURE,
  CREATE_INQUIRY_REQUEST,
  CREATE_INQUIRY_SUCCESS,
  CREATE_INQUIRY_FAILURE,
  UPDATE_INQUIRY_REQUEST,
  UPDATE_INQUIRY_SUCCESS,
  UPDATE_INQUIRY_FAILURE,
  DELETE_INQUIRIES_REQUEST,
  DELETE_INQUIRIES_SUCCESS,
  DELETE_INQUIRIES_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_INQUIRY_AMOUNT,
  CHANGE_INQUIRY_CATEGORY,
  CHANGE_INQUIRY_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_INQUIRY,
  CHECK_INQUIRY_CERTAIN_ITEM,
  LIST_OF_TODELETE_INQUIRIES,
  SELECT_INQUIRY_METHOD,
  CHANGE_CREATE_INQUIRY_AMOUNT,
  INCREMENT_INQUIRY_AMOUNT,
  DECREMENT_INQUIRY_AMOUNT,
  FROM_CASINO_TO_CASH_INQUIRY,
  FROM_CASH_TO_CASINO_INQUIRY,
  RESET_CREATE_INQUIRY,
  CHECK_ALL_INQUIRY,
  CHANGE_INQUIRY_CONTENT,
  CHANGE_INQUIRY_TITLE,
} from "./inquiryTypes";
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
};

const inquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INQUIRIES_REQUEST:
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
    case FETCH_INQUIRIES_SUCCESS:
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
      console.log(action.payload);
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
    case FETCH_INQUIRIES_FAILURE:
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

    case FETCH_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INQUIRY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_INQUIRY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
        createInquiry: {
          ...state.createInquiry,
          from: state.createInquiry.from,
          to: state.createInquiry.to,
        },
      };
    case CREATE_INQUIRY_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CREATE_INQUIRY_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_INQUIRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INQUIRY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_INQUIRY_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_INQUIRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INQUIRIES_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newInquiryToDeleteList: {
          inquiries: [],
        },
      };
    case DELETE_INQUIRIES_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OPEN_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: true,
      };
    case CLOSE_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CHANGE_INQUIRY_AMOUNT:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, amount: action.payload },
      };

    case CHANGE_INQUIRY_CATEGORY:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, category: action.payload },
      };
    case CHANGE_INQUIRY_IDS:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, outcomes: action.payload },
      };
    case FILTERED_PROCEEDING_LIST:
      let data = state.inquiryMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        inquiries: { ...state.inquiries, data: data },
        list: "WAITING",
      };
    case LIST_OF_INQUIRY:
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiryMainList.data },
        list: "ALL",
      };
    case FILTERED_HIT_LIST:
      let hit = state.inquiryMainList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        inquiries: { ...state.inquiries, data: hit },
        list: "WINNING",
      };
    case FILTERED_AESTHETIC_LIST:
      let defeated = state.inquiryMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        inquiries: { ...state.inquiries, data: defeated },
        list: "DEFEATED",
      };
    case CHECK_INQUIRY_CERTAIN_ITEM:
      state.inquiries.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      console.log(state.inquiries.data);
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
      };
    case LIST_OF_TODELETE_INQUIRIES:
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

      console.log("list" + newList.inquiry);
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
        newInquiryToDeleteList: {
          ...state.newInquiryToDeleteList,
          inquiries: [...state.newInquiryToDeleteList.inquiries],
        },
      };
    case SELECT_INQUIRY_METHOD:
      return {
        ...state,
        createInquiryStatus: action.payload,
      };
    case CHANGE_CREATE_INQUIRY_AMOUNT:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: action.payload.toString(),
        },
      };
    case INCREMENT_INQUIRY_AMOUNT:
      let inc = Number(state.createInquiry.amount) + 1000;
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: inc.toString(),
        },
      };
    case DECREMENT_INQUIRY_AMOUNT:
      let dec = Number(state.createInquiry.amount) - 1000;
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          amount: dec.toString(),
        },
      };
    case FROM_CASH_TO_CASINO_INQUIRY:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          from: "cash",
          to: "casino_cash",
        },
      };
    case FROM_CASINO_TO_CASH_INQUIRY:
      return {
        ...state,
        createInquiry: {
          ...state.createInquiry,
          from: "casino_cash",
          to: "cash",
        },
      };
    case RESET_CREATE_INQUIRY:
      return {
        ...state,
        createInquiry: {
          title: "",
          content: "",
        },
      };
    case CHECK_ALL_INQUIRY:
      state.inquiries.data.map((i) => {
        i.isChecked = true;
      });
      return {
        ...state,
        inquiries: { ...state.inquiries, data: state.inquiries.data },
      };
    case CHANGE_INQUIRY_TITLE:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, title: action.payload },
      };
    case CHANGE_INQUIRY_CONTENT:
      return {
        ...state,
        createInquiry: { ...state.createInquiry, content: action.payload },
      };

    default:
      return state;
  }
};

export default inquiryReducer;
