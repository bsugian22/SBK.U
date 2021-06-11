import * as types from "./registerTypes";

const initialState = {
  loading: false,
  register: {
    username: "",
    nickname: "",
    username_confirmation : false,
    password: "",
    password_confirmation: "",
    realname: "",
    born_at : "",
    email : "",
    country_code: "",
    language: "",
    tel_number: "",
    tel_verification_sent : true,
    tel_verification_number : "",
    account_bank: "",
    account_number: "",
    account_holder: "",
    withdrawal_password: "",
    withdrawal_password_confirm: "",
    referrer_username: "",
    branch_code: "",
    terms_policy : false,
    terms_promotion : false,
  },
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_REGISTER_FORM:
      return initialState
    case types.SET_REGISTER_FORM:
      let target = action.payload.target
      state.register[target] = action.payload.value;

      switch(target) {
        case "username":
          state.register['username_confirmation'] = false;
        break;
      }
      
      return {
        ...state
      };
    case types.CREATE_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
        register : {
          ...state.register
        }
      };
    case types.CREATE_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        register : {
          ...state.register
        }
      };
    case types.VERIFY_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.VERIFY_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        register: {
          ...state.register,
          username_confirmation: true
        },
        error: null,
      };
    case types.VERIFY_USERNAME_FAILURE:
      return {
        ...state,
        loading: false,
        register: {
          ...state.register,
          username_confirmation: false
        },
        error: action.payload,
      };
    case types.SEND_TEL_VERIFICATION_REQUEST:
      return state
    case types.SEND_TEL_VERIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        register: {
          ...state.register,
          tel_verification_sent: true
        }
      };
    case types.SEND_TEL_VERIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        register: {
          ...state.register,
          tel_verification_sent: false,
        }
      };
    case types.VERIFY_TEL_NUMBER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.VERIFY_TEL_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.VERIFY_TEL_NUMBER_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
    return state;
  }
};

export default registerReducer;