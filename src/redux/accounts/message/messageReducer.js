import * as types from "./messageTypes";

import sweetalert from "../../../plugins/sweetalert";

const swal = new sweetalert();

const initialState = {
  loading: false,
  messages: {
    count: null,
    data: [],
    lastPage: null,
    page: null,
    perPage: null,
    total: null,
  },
  search: "",
  status: "",
  messageMainCopy: { data: [] },
  error: "",
  message: {
    id: 0,
    category: "",
    title: "",
    content: "",
    readAt: "",
    createdAt: "",
    isChecked: false,
  },
  newMessageToDeleteList: {
    messages: [],
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        search: "",
        status: "",
        messageMainCopy: { data: [] },
        messages: {
          count: null,
          data: [],
          lastPage: null,
          page: null,
          perPage: null,
          total: null,
        },
        newMessageToDeleteList: {
          messages: [],
        },
        message: {
          id: 0,
          category: "",
          title: "",
          content: "",
          readAt: "",
          createdAt: "",
          isChecked: false,
        },
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
        search: "",
        status: "",
        messageMainCopy: action.payload,
        error: "",
        message: {
          id: 0,
          category: "",
          title: "",
          content: "",
          readAt: "",
          createdAt: "",
          isChecked: false,
        },
      };
    case types.FETCH_MESSAGES_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        search: "",
        status: "",
        message: {
          id: 0,
          category: "",
          title: "",
          content: "",
          readAt: "",
          createdAt: "",
          isChecked: false,
        },
      };

    case types.FETCH_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case types.FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CREATE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_MESSAGE_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        message: action.payload,
      };
    case types.CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.UPDATE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_MESSAGES_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        message: action.payload,
        messages: [],
      };
    case types.DELETE_MESSAGES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case types.MARKREAD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.MARKREAD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case types.MARKREAD_MESSAGE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case types.SEARCH_HANDLE_CHANGE_MESSAGE:
      let word = action.payload;
      return {
        ...state,
        search: word,
      };
    case types.SEARCH_ANY_WORD_MESSAGE:
      let filteredMessage = state.messageMainCopy.data.filter(
        (o) =>
          o.id
            .toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase()) ||
          o.user.level
            .toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase()) ||
          o.user.nickname
            .toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase()) ||
          o.createdAt
            .toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase()) ||
          o.readAt
            ?.toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase()) ||
          o.title
            .toString()
            .toLowerCase()
            .includes(state.search.toString().toLowerCase())
      );

      return {
        ...state,
        data: { ...state.data, data: filteredMessage },
      };
    case types.SWITCH_TO_MESSAGELIST:
      return {
        ...state,
        data: { ...state, data: state.messageMainCopy.data },
      };
    case types.DISPLAY_MESSAGE_NORMAL_LIST:
      let normalListMessage = state.messageMainCopy.data.filter(
        (o) => o.user.status == "NORMAL"
      );
      return {
        ...state,
        data: { ...state.data, data: normalListMessage },
      };
    case types.DISPLAY_MESSAGE_ALL_LIST:
      let allMessage = state.messageMainCopy.data;
      return {
        ...state,
        data: { ...state.data, data: allMessage },
      };
    case types.DISPLAY_MESSAGE_WAITING_LIST:
      let waitingMessage = state.messageMainCopy.data.filter(
        (o) => o.user.status == "WAITING"
      );
      return {
        ...state,
        data: { ...state.data, data: waitingMessage },
      };

    case types.DISPLAY_MESSAGE_BANNED_LIST:
      let bannedListMessage = state.messageMainCopy.data.filter(
        (o) => o.user.status == "BANNED"
      );
      return {
        ...state,
        data: { ...state.data, data: bannedListMessage },
      };
    case types.DISPLAY_MESSAGE_WARNING_LIST:
      let warningListMessage = state.messageMainCopy.data.filter(
        (o) => o.user.status == "WARNING"
      );
      return {
        ...state,
        data: { ...state.data, data: warningListMessage },
      };
    case types.DISPLAY_MESSAGE_DEBUGGING_LIST:
      let debuggingListMessage = state.messageMainCopy.data.filter(
        (o) => o.user.status == "DEBUGGING"
      );
      return {
        ...state,
        data: { ...state.data, data: debuggingListMessage },
      };

    case types.SORT_BY_MESSAGE_ID:
      let sortid = state.messageMainCopy.data.sort((a, b) => {
        return a.user.id - b.user.id;
      });
      return {
        ...state,
        data: { ...state.data, data: sortid },
      };

    case types.SORT_BY_MESSAGE_NAME:
      let filteredbyNameMessage = state.messageMainCopy.data.sort((a, b) => {
        if (a.user.username < b.user.username) {
          return -1;
        }
      });
      return {
        ...state,
        data: { ...state.data, data: filteredbyNameMessage },
      };

    case types.SORT_BY_MESSAGE_CONTENT:
      let filteredbyContentMessage = state.messageMainCopy.data.sort((a, b) => {
        if (a.content < b.content) {
          return -1;
        }
      });
      return {
        ...state,
        data: { ...state.data, data: filteredbyContentMessage },
      };
    case types.SORT_BY_MESSAGE_NICKNAME:
      let nicknameMessage = state.messageMainCopy.data.sort((a, b) => {
        if (a.user.nickname < b.user.nickname) {
          return -1;
        }
      });
      return {
        ...state,
        data: { ...state.data, data: nicknameMessage },
      };

    case types.SORT_BY_MESSAGE_TITLE:
      let titleMessage = state.messageMainCopy.data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
      });
      return {
        ...state,
        data: { ...state.data, data: titleMessage },
      };
    case types.READ_MESSAGE_RECEIVED:
      state.message.id = Number(action.payload.id);
      state.message.category = action.payload.category;
      state.message.content = action.payload.content;
      state.message.title = action.payload.title;
      state.message.readAt = action.payload.readAt;
      state.message.createdAt = action.payload.createdAt;
      state.message.isChecked = action.payload.isChecked;
      return {
        ...state,
        message: {
          id: state.message.id,
          category: state.message.category,
          title: state.message.title,
          content: state.message.content,
          readAt: state.message.readAt,
          createdAt: state.message.createdAt,
          isChecked: state.message.isChecked,
        },
      };
    case types.CHECK_MESSAGE_CERTAIN_ITEM:
      state.messages.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      state.message = {
        id: 0,
        category: "",
        title: "",
        content: "",
        readAt: "",
        createdAt: "",
        isChecked: action.payload,
      };
      return {
        ...state,
        messages: { ...state.messages, data: state.messages.data },
        message: state.message,
      };
    case types.SELECT_ALL_MESSAGE:
      state.messages.data.map((i) => {
        i.isChecked = !i.isChecked;
      });
      return {
        ...state,
        messages: { ...state.messages, data: state.messages.data },
      };
    case types.LIST_OF_TODELETE_MESSAGES:
      let newList = {
        messages: [],
      };

      state.messages.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.messages.push(item);
        }
      });

      state.newMessageToDeleteList = {
        ...state.newMessageToDeleteList,
        messages: [...newList.messages],
      };

      return {
        ...state,
        messages: { ...state.messages, data: state.messages.data },
        newMessageToDeleteList: {
          ...state.newMessageToDeleteList,
          messages: [...state.newMessageToDeleteList.messages],
        },
      };
    case types.SET_MESSAGE_PAGE:
      var total = state.messages.total;
      state.messages.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 15) + 1; index++) {
          state.messages.list_pages.push(index);
        }
      }
      return {
        ...state,
        messages: {
          ...state.messages,
          list_pages: state.messages.list_pages,
          pages: state.messages.pages,
        },
      };

    case types.NEXT_PAGE_MESSAGE:
      return {
        ...state,
        loading: true,
        messages: {
          ...state.messages,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_MESSAGE:
      return {
        ...state,
        loading: true,
        messages: {
          ...state.messages,
          page: action.payload,
        },
      };
    case types.CHANGE_MESSAGE_PAGE:
      return {
        ...state,
        messages: { ...state.messages, page: action.payload },
      };
    default:
      return state;
  }
};

export default messageReducer;
