import {
  SET_USER,
  SET_ACCESS_TOKEN,
  SET_LOGOUT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILURE,
} from "./userTypes";

const initialState = {
  user: {
    isAuth: false,
    access_token: "",
    expires_in: "",
    refresh_token: "",
    token_type: "",
    member: {
      id: 0,
      username: "",
      level: 0,
      cash: 0,
      point: 0,
      casino_cash: 0,
      nickname: "",
      country_code: "",
      languate: "",
      tel_number: "",
      account_bank: "",
      account_number: "",
      account_holder: "",
      deposit_bonus: 0,
      allows_deposit_bonus: 0,
      logged_by_ip: "",
      created_by_ip: "",
      logged_at: "",
      created_at: "",
      updated_at: "",
      unread_messages: 0,
    },
  },
};

const userReducer = (state = initialState, action) => {
  const { user } = state;

  switch (action.type) {
    case SET_USER:
      return {
        user: {
          ...user,
          member: action.payload,
        },
      };
    case SET_ACCESS_TOKEN:
      return {
        user: {
          ...user,
          access_token: action.payload.access_token,
          expires_in: action.payload.expires_in,
          refresh_token: action.payload.refresh_token,
          token_type: action.payload.token_type,
          isAuth: action.payload.isAuth,
        },
      };
    case SET_LOGOUT:
      return {
        user: {
          isAuth: false,
          access_token: "",
          expires_in: "",
          refresh_token: "",
          token_type: "",
          member: {
            id: 0,
            username: "",
            level: 0,
            cash: 0,
            point: 0,
            casino_cash: 0,
            nickname: "",
            country_code: "",
            languate: "",
            tel_number: "",
            account_bank: "",
            account_number: "",
            account_holder: "",
            deposit_bonus: 0,
            allows_deposit_bonus: 0,
            logged_by_ip: "",
            created_by_ip: "",
            logged_at: "",
            created_at: "",
            updated_at: "",
            unread_messages: 0,
          },
        },
      };

    // case LOGIN_USER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case LOGIN_USER_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case LOGIN_USER_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case FETCH_USERS_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case FETCH_USERS_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case FETCH_USERS_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case FETCH_USER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case FETCH_USER_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case FETCH_USER_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case CREATE_USER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case CREATE_USER_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case CREATE_USER_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case UPDATE_USER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case UPDATE_USER_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case UPDATE_USER_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    // case DELETE_USERS_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case DELETE_USERS_SUCCESS:
    //   return {
    //     loading: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case DELETE_USERS_FAILURE:
    //   return {
    //     loading: false,
    //     data: [],
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default userReducer;
