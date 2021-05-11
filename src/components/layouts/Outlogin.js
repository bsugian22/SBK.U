import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect, useSelector,Provider } from "react-redux";
import store from "../../redux/store";
import userModel from "../../models/userModel";
import Signin from "../dialogs/Signin";
import Signup from "../dialogs/Signup";
import sweetalert from "../../plugins/sweetalert";
import { mapStateToProps, mapDispatchProps } from "../../redux/store";
import echo from "../../plugins/echo";

const Outlogin = (props) => {
  const {
    user,
    setUser,
    setAccessToken,
    setLogout,
    resetRegisterForm,
    forgotPassword,
    handleUsernameOnChange,
    handlePassword,
    handleUserPhoneNumber,
    dispatch,
  } = props;

  const swal = new sweetalert();
  const model = new userModel();
  const [now, setNow] = useState("");

  useEffect(() => {
    const intvalID = setInterval(() => {
      const dt = new Date();

      setNow(dt.toLocaleDateString() + " " + dt.toLocaleTimeString());
    }, 100);

    if (user.isAuth) {
      me();
    }

    return () => {
      clearInterval(intvalID);
    };
  }, [user.isAuth]);

  const me = async () => {
    try {
      const {
        data: { data: result },
      } = await model.me();
      const accessToken = localStorage.getItem("ACCESS_TOKEN");

      setUser(result);

      echo.connector.pusher.config.auth.headers[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      echo.private(`users.${result.id}`).listen("UserUpdated", (e) => {
        setUser(e);
      });
    } catch (error) {
      setLogout();
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);

    try {
      const {
        data: { access_token, expires_in, refresh_token, token_type },
      } = await model.index(f.get("username"), f.get("password"));

      setAccessToken({
        isAuth: true,
        access_token: access_token,
        expires_in: expires_in,
        refresh_token: refresh_token,
        token_type: token_type,
      });

      swal.close();
    } catch (error) {
      const data = error.response.data;
      swal.error(data.message);
    }
  };

  const onLogout = () => {
    setLogout();
  };

  const SignInDialog = () => {
    swal.fire({
      html: (
        <Signin
          onLogin={onLogin}
          forgotPassword={forgotPassword}
          onChangeUsername={handleUsernameOnChange}
          dispatch={dispatch}
        />
      ),
      width: 400,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  const SignUpDialog = () => {
    resetRegisterForm();

    swal.fire({
      html: (
        <Provider store={store}>
          <Signup dispatch={dispatch} />
        </Provider>
      ),
      width: 1100,
      padding: 0,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  if (user.isAuth) {
    return (
      <div class="header-account flex border-top border-bottom flex-row flex-inherit height-50">
        <div class="align-items-center padding-10">
          <span class="color-grey">
            <i class="fad fa-clock"></i>
            {now}
          </span>
        </div>
        <div class="flex-inherit grow-2 justify-content-end align-items-center padding-5 header-account-wrap">
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <span class="color-grey">
              Lv. {user.member.level}
              <span class="margin-left-5">{user.member.nickname}</span>
            </span>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <span class="color-grey">
              <Link to="/account/settings">
                <i class="far fa-cog mr-0 margin-0"></i>
              </Link>
            </span>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <span class="color-grey">
              <Link to="/account/message">
                <i class="fad fa-envelope"></i>
                {user.member.unread_messages}
              </Link>
            </span>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <span class="color-grey">
              보유금액
              <b class="color-green margin-left-10">
                <i class="fas fa-won-sign mr-2"></i>
                {Number(user.member.cash).toLocaleString()}
              </b>
            </span>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <span class="color-grey">
              보유포인트
              <b class="color-green margin-left-10">
                <i class="fab fa-product-hunt mr-2"></i>
                {Number(user.member.point).toLocaleString()}
              </b>
            </span>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <Link to="/account/deposit">
              <span class="color-white">입금 및 출금</span>
            </Link>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <Link to="/account/position">
              <span class="color-white">MY BET</span>
            </Link>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <Link to="/account/inquiry">
              <span class="color-white">고객센터</span>
            </Link>
          </div>
          <div class="heightp-100 align-items-center background-transparent-b-10 padding-horizontal-15 margin-right-5">
            <Link className="logout" onClick={onLogout} to="/">
              <span class="color-red">LOGOUT</span>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="header-account flex border-top border-bottom flex-row flex-inherit height-50">
        <div class="align-items-center padding-10">
          <span class="color-grey">
            <i class="fad fa-clock"></i>
            {now}
          </span>
        </div>
        <div class="login-wrap flex-row grow-2 justify-content-end align-items-center padding-10">
          <button
            type="button"
            class="background-transparent color-green sign-in"
            onClick={SignInDialog}
          >
            로그인
          </button>
          <span class="color-grey mx-5">OR</span>
          <button
            type="button"
            class="background-transparent color-white sign-up"
            onClick={SignUpDialog}
          >
            신규회원가입
          </button>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchProps)(Outlogin);
