import React from "react";
import Logo from "../layouts/Logo";
import userModel from "../../models/userModel";
import sweetalert from "../../plugins/sweetalert";
import Signup from "../dialogs/Signup";
import Signfind from "../dialogs/SignfindContainer";
import store from "../../redux/store";
import { Provider, ReactReduxContext } from "react-redux";
export default function Signin(props) {
  const { onLogin, forgotPassword, onChangeUsername, dispatch } = props;
  let pass = forgotPassword;
  const swal = new sweetalert();
  const model = new userModel();
  const SignupDialog = () => {
    swal.fire({
      html: <Signup />,
      width: 1100,
      padding: 0,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };
  const SignfindDialog = () => {
    swal.fire({
      html: (
        <Provider store={store}>
          <Signfind
          //  pass={pass}
          //  changeUsername={onChangeUsername}
          //  dispatch={dispatch}
          />
        </Provider>
      ),
      width: 1100,
      padding: 0,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };
  return (
    <div class="sign-in-form">
      <div class="sign-in flex-inherit flex-column justify-content-center justify-content-center-inherit">
        <div class="logo margin-bottom-50 margin-top-20">
          <Logo width="120" height="30" />
        </div>
        <div class="input margin-bottom-50">
          <form class="frm-sign-in widthp-80" onSubmit={onLogin}>
            <input
              class="widthp-100 height-40 color-white margin-bottom-5 background-transparent-b-15 padding-horizontal-10"
              placeholder="아이디를 입력하세요"
              type="text"
              name="username"
            />
            <input
              class="widthp-100 height-40 color-white margin-bottom-5 background-transparent-b-15 padding-horizontal-10"
              placeholder="비밀번호를 입력하세요"
              type="password"
              name="password"
            />
            <button
              type="submit"
              class="widthp-100 height-40 btn-0 background-green color-white"
            >
              로그인
            </button>
          </form>
        </div>
        <div class="join flex-column margin-bottom-70">
          <div class="color-grey font-size-11">
            <span>아직 회원이 아니라면 아래링크를 통해</span>
          </div>
          <div class="color-grey font-size-11">
            <span>회원가입을 하실 수 있습니다</span>
          </div>
          <div class="margin-top-10">
            <button
              type="button"
              class="background-transparent color-white font-size-12"
              onClick={SignupDialog}
            >
              회원가입
            </button>
          </div>
        </div>
        <div class="lost flex-column margin-bottom-20">
          <div class="color-grey font-size-11">
            비밀번호가 기억나지 않나요?
            <button
              class="background-transparent find-password margin-left-5 color-white font-size-11"
              onClick={SignfindDialog}
            >
              비밀번호찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
