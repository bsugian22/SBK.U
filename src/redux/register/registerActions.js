import * as types from "./registerTypes";
import axios from "../../plugins/axios";
import { showModal } from "../modal/modalActions";
import { camelize } from "../../helpers/object";

export const setRegisterForm = (data) => {
  return {
    type : types.SET_REGISTER_FORM,
    payload : data,
  }
}

export const verifyUsernameRequest = () => {
  return {
    type: types.VERIFY_USERNAME_REQUEST,
  };
};

export const verifyUsernameSuccess = (verification) => {
  return {
    type: types.VERIFY_USERNAME_SUCCESS,
    payload: verification,
  };
};

export const verifyUsernameFailure = (error) => {
  return {
    type: types.VERIFY_USERNAME_FAILURE,
    payload: error,
  };
};

export const resetRegisterForm = () => {
  return {
    type: types.RESET_REGISTER_FORM,
  };
}

export const sendTelVerificationRequest = () => {
  return {
    type: types.SEND_TEL_VERIFICATION_REQUEST,
  }
}

export const sendTelVerificationSuccess = () => {
  return {
    type: types.SEND_TEL_VERIFICATION_SUCCESS,
  }
}

export const sendTelVerificationFailure = () => {
    return {
      type: types.SEND_TEL_VERIFICATION_FAILURE,
    }
}

export const verifyTelNumberRequest = () => {
  return {
    type: types.VERIFY_TEL_NUMBER_REQUEST
  }
}

export const verifyTelNumberSuccess = (verification) => {
  return {
    type: types.VERIFY_TEL_NUMBER_SUCCESS,
    payload : verification
  }
}

export const verifyTelNumberFailure = (error) => {
  return {
    type: types.VERIFY_TEL_NUMBER_FAILURE,
    payload : error
  }
}

export const createRegisterRequest = () => {
  return {
    type: types.CREATE_REGISTER_REQUEST,
  };
};

export const createRegisterSuccess = (register) => {
  return {
    type: types.CREATE_REGISTER_SUCCESS,
    payload: register,
  };
};

export const createRegisterFailure = (error) => {
  return {
    type: types.CREATE_REGISTER_FAILURE,
    payload: error,
  };
};

export const verifyUsername = (params) => {
  return (dispatch) => {
    dispatch(verifyUsernameRequest);
    axios
      .get(`/api/users/exists`, {
        params: params
      })
      .then(response => {
        const verification = camelize(response.data);
        dispatch(verifyUsernameSuccess(verification))

        dispatch(showModal({
          text: "해당 아이디를 사용하실 수 있습니다.",
        }));

      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let verifyErrorMessage = {
          html: textifyError(errorMsg),
          icon: "error",
          confirmButtonText: "확인",
        };

        dispatch(showModal({
          text: verifyErrorMessage.html,
        }));

        dispatch(verifyUsernameFailure(verifyErrorMessage))
      });
  }
};

export const sendTelVerification = (telNumber) => {
  return (dispatch) => {
    dispatch(sendTelVerificationRequest);
    axios.post(`/api/verify`, {
        tel_number: telNumber,
        namespace: "registration"
      })
      .then(response => {
        const verification = camelize(response.data);
        dispatch(sendTelVerificationSuccess(verification));
        dispatch(showModal({
          text: verification.message
        }));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let verifyErrorMessage = {
          html: textifyError(errorMsg),
          icon: "error",
          confirmButtonText: "확인",
        };

        dispatch(showModal({
          text: verifyErrorMessage.html,
        }));

        dispatch(sendTelVerificationFailure(verifyErrorMessage))
      });
  };
};

export const verifyTelNumber = (payload) => {
  return (dispatch) => {
    dispatch(verifyTelNumberRequest);
    axios.patch(`/api/verify`, {
        tel_number: payload.tel_number,
        token : payload.token,
        namespace: "registration"
      })
      .then(response => {
        const verification = camelize(response.data);
        dispatch(verifyTelNumberSuccess(verification))
        dispatch(showModal({
          text: verification.message,
          confirm : ()=>{
            if(payload.onSuccess) payload.onSuccess();
          }
        }));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let verifyErrorMessage = {
          html: textifyError(errorMsg),
          icon: "error",
          confirmButtonText: "확인",
        };

        dispatch(showModal({
          text: verifyErrorMessage.html,
        }));

        dispatch(verifyTelNumberFailure(verifyErrorMessage))
      });
  };
}

export const createRegister = (register, callback) => {
  return (dispatch) => {
    dispatch(createRegisterRequest);
    axios.post(`/api/users`, {
        username : register.username,
        nickname : register.nickname,
        username_confirmation : register.username_confirmation,
        password : register.password,
        password_confirmation : register.password_confirmation,
        realname : register.username,
        born_at : register.bornAt,
        email : register.email,
        country_code : register.country_code,
        language : register.language,
        tel_number : register.tel_number,
        tel_verification_sent : register.tel_verification_sent,
        tel_verification_number : register.tel_verification_number,
        account_bank : register.account_bank,
        account_number : register.account_number,
        account_holder : register.account_holder,
        withdrawal_password : register.withdrawal_password,
        withdrawal_password_confirmation : register.withdrawal_password_confirm,
        referrer_username : register.referrer_username,
        branch_code : register.branch_code,
        terms_policy : register.terms_policy,
        terms_promotion : register.terms_promotion,
      })
      .then(response => {
        const registration = camelize(response.data);
        dispatch(createRegisterSuccess(registration));
        dispatch(showModal({
          text: registration.message,
          confirm : ()=>{
            if(callback) callback();
          }
        }));
      })
      .catch((error) => {
        console.log(error);

        const errorMsg = error.response.data;
        let registerErrorMessage = {
          html: textifyError(errorMsg),
          icon: "error",
          confirmButtonText: "확인",
        };

        dispatch(showModal({
          text: registerErrorMessage.html,
        }));

        dispatch(createRegisterFailure(registerErrorMessage))
      });
  };
};

const textifyError = (errorMsg) =>{
  return ` ${errorMsg.message} <br />  ${errorMsg?.errors?.username
    ? errorMsg?.errors?.username[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.nickname
    ? errorMsg?.errors?.nickname[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.password
    ? errorMsg?.errors?.password[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.account_bank
    ? errorMsg?.errors?.account_bank[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.account_number
    ? errorMsg?.errors?.account_number[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.account_holder
    ? errorMsg?.errors?.account_holder[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.country_code
    ? errorMsg?.errors?.country_code[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.language
    ? errorMsg?.errors?.language[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.tel_number
    ? errorMsg?.errors?.tel_number[0] + " <br /> "
    : ""
  }
  ${errorMsg?.errors?.withdrawal_password
    ? errorMsg?.errors?.withdrawal_password[0]
    : ""
  }`
}
