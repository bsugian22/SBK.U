import * as types from "./userTypes";
import sweetalert from "../../plugins/sweetalert";
const swal = new sweetalert();
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
  loading: false,
  error: "",
  users: [],
  status: "",
  changePassword: {
    password: "",
    password_confirmation: "",
    old_password: "",
  },
};

function userReducer(state = initialState, action) {
  const { user } = state;

  switch (action.type) {
    case types.SET_USER:
      return {
        user: {
          ...user,
          member: action.payload,
        },
        changePassword: {
          password: "",
          password_confirmation: "",
          old_password: "",
        },
      };
    case types.SET_ACCESS_TOKEN:
      return {
        user: {
          ...user,
          access_token: action.payload.access_token,
          expires_in: action.payload.expires_in,
          refresh_token: action.payload.refresh_token,
          token_type: action.payload.token_type,
          isAuth: action.payload.isAuth,
        },
        changePassword: {
          password: "",
          password_confirmation: "",
          old_password: "",
        },
      };
    case types.SET_LOGOUT:
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
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
      };
    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" };
    case types.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case types.SET_USER_STATUS:
      let stat = "";
      if (action.payload == "all") {
        stat = null;
      } else {
        stat = action.payload;
      }
      return { ...state, loading: false, error: "", status: stat };
    case types.CHANGE_USER_NEWPASSWORD:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          password: action.payload,
        },
      };
    case types.CHANGE_USER_PASSCONFIRMATION:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          password_confirmation: action.payload,
        },
      };
    case types.HANDLE_USER_OLDPASSWORD:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          old_password: action.payload,
        },
      };

    case types.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        changePassword: {
          password: "",
          password_confirmation: "",
          old_password: "",
        },
      };

    case types.CHANGE_PASSWORD_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
