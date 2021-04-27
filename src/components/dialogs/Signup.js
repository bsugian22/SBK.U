import React, { Fragment } from 'react'
import Logo from '../layouts/Logo'
import { Link, NavLink } from 'react-router-dom'
import { connect, useDispatch, useSelector,Provider } from "react-redux";
import store from "../../redux/store";

import SignAuth from '../dialogs/SignAuth'
import userModel from '../../models/userModel'
import sweetalert from '../../plugins/sweetalert'
import { registrationForm } from '../../redux/user/userActions'
export default function Signup() {
   const swal = new sweetalert()
   const model = new userModel()
   const dispatch = useDispatch();

   const SignAuthDialog = () => {
      swal.fire({
         html: (
            <Provider store={store}>
              <SignAuth
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
                  <a href="<?php echo site_url(); ?>">
                     <svg width="120" height="30" viewBox="0 0 270 108">
                        <polygon fill="#38B853" points="54,0 0,0 18,36 36,36 0,108 36,108 72,36"></polygon>
                        <polygon fill="#FFFFFF" points="234,36 198,108 225,108 234,90 243,108 270,108"></polygon>
                        <polygon
                           fill="#FFFFFF"
                           points="189,36 180,54 144,54 117,108 144,108 153,90 162,108 189,108 180,90 189,90 225,18 180.5,18 81,18 90,36 54,108 99,108 108,90 90,90 99,72 117,72 126,54 108,54 117,36"
                        ></polygon>
                     </svg>
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
                  <p class="color-grey">회원가입</p>
               </div>
               <div class="widthp-100 heightp-100 flex-inherit padding-top-50 padding-horizontal-20">
                  <div class="widthp-50 flex-inherit sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">아이디</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="memid" class="padding-horizontal-10 background-transparent-b-30" placeholder="아이디를 입력하세요."
                           onChange={(e) => {
                              let data = {
                                 target: "username",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           }
                        />
                        <button type="button" class="background-green padding-horizontal-10 btn-submit">
                           중복확인
                        </button>
                     </div>
                     <div class="padding-top-10">
                        <span class="color-grey">비밀번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="password" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="비밀번호를 입력해주세요" onChange={(e) => {
                           let data = {
                              target: "password",
                              value: e.target.value
                           }

                           dispatch(registrationForm(data))
                        }
                        } />
                     </div>
                     <div class="padding-top-5">
                        <input type="password" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="비밀번호를 다시한번 입력하세요."
                           onChange={(e) => {
                              let data = {
                                 target: "password_confirmation",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>
                  </div>
                  <div class="widthp-50 flex-inherit padding-left-30 sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">이름</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="username" class="padding-horizontal-10 background-transparent-b-30" placeholder="이름을 입력하세요"
                           onChange={(e) => {
                              let data = {
                                 target: "nickname",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>

                     <div class="padding-top-10">
                        <span class="color-grey">생년월일</span>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="yyyy" class="padding-horizontal-10 background-transparent-b-30" placeholder="YYYY-MM-DD" 
                        onChange={(e) => {
                           let data = {
                              target: "birth_date",
                              value: e.target.value
                           }

                           dispatch(registrationForm(data))
                        }
                        }/>
                        
                     </div>

                     <div class="padding-top-10">
                        <span class="color-grey">이메일</span>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="email" class="padding-horizontal-10 background-transparent-b-30" placeholder="aaa@bbb.ccc"
                           onChange={(e) => {
                              let data = {
                                 target: "email",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>

                     <div class="flex-column flex-inherit">
                        <div class="flex text-align-left">
                           <div class="widthp-50 padding-top-10">
                              <span class="color-grey">접속국가</span>
                              <strong class="color-red padding-left-5">*</strong>
                           </div>
                           <div class="widthp-50 padding-top-10">
                              <span class="color-grey">선호언어</span>
                              <strong class="color-red padding-left-5">*</strong>
                           </div>
                        </div>
                     </div>

                     <div class="flex-column flex-inherit">
                        <div class="flex text-align-left">
                           <div class="widthp-50 margin-top-6">
                              <div class="select-item-box select height-40 margin-top-10">
                                 <select name="country" onChange={(e) => {
                                    let data = {
                                       target: "country_code",
                                       value: e.target.value
                                    }

                                    dispatch(registrationForm(data))
                                 }
                                 }>
                                    <option value="ko">한국</option>
                                    <option value="us">미국</option>
                                 </select>
                              </div>
                           </div>
                           <div class="widthp-50 margin-top-6">
                              <div class="select-item-box padding-left-10 select height-40 margin-top-10">
                                 <select name="country" onChange={(e) => {
                                    let data = {
                                       target: "language",
                                       value: e.target.value
                                    }

                                    dispatch(registrationForm(data))
                                 }
                                 }>
                                    <option value="ko">한국어</option>
                                    <option value="english">미국어</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="justify-content-end padding-top-50">
                        <strong class="color-red padding-right-5">*</strong>
                        <span class="color-grey">는 반드시 입력해주세요.</span>
                     </div>
                  </div>
               </div>
               <div class="widthp-100 sign-content-bottom  height-150 align-items-center justify-content-end padding-right-25">
                  <button type="button" class="next-sign-auth background-green color-white padding-vertical-15 padding-horizontal-45" onClick={SignAuthDialog}>
                     다음
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
