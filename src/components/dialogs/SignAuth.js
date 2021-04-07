import React, { Fragment } from 'react'
import Logo from '../layouts/Logo'
import userModel from '../../models/userModel'
import sweetalert from '../../plugins/sweetalert'
import Signinfo from '../dialogs/Signinfo'
import { connect, useDispatch, useSelector, Provider } from "react-redux";
import { Link, NavLink } from 'react-router-dom'
import store from "../../redux/store";
export default function SignAuth() {
   const swal = new sweetalert()
   const model = new userModel()
   const dispatch = useDispatch();

   const SigninfoDialog = () => {
      swal.fire({
         html: (
            <Provider store={store}>
              <Signinfo
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
      })
   }
   return (
      <Fragment>
         <div class="sign-wrap flex flex-inherit ">
            <div class="sign-left-bar border-right width-400 height-700 shadow flex-inherit flex-column">
               <div class="flex-column heightp-100 padding-top-70">
                  <a href="/">
                     <div class="logo">
                        <Logo width="120" height="30" />
                     </div>
                  </a>
               </div>
               <div class="flex-column padding-vertical-20">
                  <p>회원 가입 중 문제가 발생했나요?</p>
                  <p>아래 링크를 클릭하셔서 도움을 받으세요.</p>
               </div>
            </div>
            <div class="widthp-100 sign-content border-left flex flex-inherit flex-column">
               <div class="sign-right-title padding-horizontal-20 padding-top-30 flex-column text-align-left">
                  <h1 class="color-green">Create Your Free Account</h1>
                  <p class="color-grey">본인인증 kelvin</p>
               </div>
               <div class="widthp-100 heightp-100 flex-inherit align-items-center justify-content-center padding-top-50 padding-horizontal-20">
                  <div class="widthp-50 flex-inherit sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">휴대폰번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="memid" class="padding-horizontal-10 background-transparent-b-30" placeholder="휴대폰번호를 입력해주세요"
                           onChange={(e) => {
                              let data = {
                                 target: "tel_number",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                        <button type="button" class="background-green padding-horizontal-10 btn-submit">
                           인증요청
                        </button>
                     </div>
                     <div class="padding-top-10">
                        <span class="color-grey">인증번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="인증번호를 입력해주세요"
                           onChange={(e) => {
                              let data = {
                                 target: "cert_number",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>
                  </div>
               </div>
               <div class="widthp-100 sign-content-bottom  height-150 align-items-center justify-content-end padding-right-25">
                  <button type="button" class="next-sign-info background-green color-white padding-vertical-15 padding-horizontal-45" onClick={SigninfoDialog}>
                     다음
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
