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
      languate: "ko",
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
  registration: {
    username: "",
    password: "",
    nickname: "",
    password_confirmation: "",
    country_code: "ko",
    language: "ko",
    tel_number: "",
    account_bank: "",
    account_number: "",
    account_holder: "",
    withdrawal_password: "",
    withdrawal_password_confirmation: "",
    referrer_username: "",
    branch_code: ""
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
    case types.REGISTRATION_FORM:
      let target = action.payload.target
      console.log(action.payload.target)
      console.log(action.payload.value)
      state.registration[target] = action.payload.value;
      return {
        ...state
      };
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
        registration: {
          username: "test6",
          password: "0000",
          nickname: "test6",
          password_confirmation: "0000",
          country_code: "PHL",
          language: "ko",
          tel_number: "1111",
          account_bank: "111",
          account_number: "22222222222",
          account_holder: "lucas",
          withdrawal_password: "0000",
          withdrawal_password_confirmation: "0000",
          referrer_username: "",
          branch_code: ""
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
        registration: {
          username: "test6",
          password: "0000",
          nickname: "test6",
          password_confirmation: "0000",
          country_code: "PHL",
          language: "ko",
          tel_number: "1111",
          account_bank: "111",
          account_number: "22222222222",
          account_holder: "lucas",
          withdrawal_password: "0000",
          withdrawal_password_confirmation: "0000",
          referrer_username: "",
          branch_code: ""
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

    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
      };

    case types.REGISTER_USER_SUCCESS:
      swal.success(action.payload);
      return { ...state };

    case types.REGISTER_USER_FAILURE:
      swal.error(action.payload);
      return {
        ...state
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
