import React, { Fragment } from 'react'
import Logo from '../layouts/Logo'
import { Link, NavLink } from 'react-router-dom'
import { connect, useDispatch, useSelector, Provider } from "react-redux";
import { registerUser, registerUserRequest } from '../../redux/user/userActions';

export default function Signinfo() {
   let registration_form = useSelector((state) => state.user.registration);
   const dispatch = useDispatch();

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
                  <p class="color-grey">입출금 정보 입력</p>
               </div>
               <div class="widthp-100 flex-inherit padding-top-50 padding-horizontal-20">
                  <div class="widthp-50 flex-inherit sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">은행명</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="" class="padding-horizontal-10 background-transparent-b-30" placeholder="은행명을 입력하세요."
                           onChange={(e) => {
                              let data = {
                                 target: "account_bank",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>
                     <div class="padding-top-10">
                        <span class="color-grey">계좌번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="계좌번호를 입력해주세요"
                           onChange={(e) => {
                              let data = {
                                 target: "account_number",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>

                     <div class="padding-top-10">
                        <span class="color-grey">예금주</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="예금주명을 입력해주세요."
                           onChange={(e) => {
                              let data = {
                                 target: "account_holder",
                                 value: e.target.value
                              }

                              dispatch(registrationForm(data))
                           }
                           } />
                     </div>
                     <div class="padding-top-10">
                        <p class="color-grey">은행 계좌 예금주와 다른 경우 입금처리가 불가합니다.</p>
                     </div>
                  </div>
                  <div class="widthp-50 flex-inherit padding-left-30 sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">환전 비밀번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="" class="padding-horizontal-10 background-transparent-b-30" placeholder="비밀번호를 입력하세요" 
                        onChange={(e) => {
                           let data = {
                              target: "withdrawal_password",
                              value: e.target.value
                           }

                           dispatch(registrationForm(data))
                        }
                        }/>
                     </div>
                     <div class="padding-top-5">
                        <input type="text" name="" class="padding-horizontal-10 background-transparent-b-30" placeholder="비밀번호를 다시한번 입력하세요" 
                        onChange={(e) => {
                           let data = {
                              target: "withdrawal_password_confirmation",
                              value: e.target.value
                           }

                           dispatch(registrationForm(data))
                        }
                        }/>
                     </div>
                     <div class="padding-top-45">
                        <span class="color-grey">파트너 코드 또는 추천인</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="code" class="padding-horizontal-10 background-transparent-b-30" placeholder="파트너 코드 또는 추천인을 입력하세요." 
                        onChange={(e) => {
                           let data = {
                              target: "referrer_username",
                              value: e.target.value
                           }
                           dispatch(registrationForm(data))
                        }
                        }/>
                     </div>
                  </div>
               </div>

               <div class="widthp-100 flex sign-item-inner flex-inherit padding-horizontal-20">
                  <div class="flex flex-column padding-vertical-20">
                     <div class="flex text-align-left">
                        <label>
                           <input type="checkbox" name="event" id="event" value="1" />
                           <span class="padding-left-5 color-grey">테라에서 진행되는 프로모션 및 이벤트 정보를 받겠습니다.</span>
                        </label>
                     </div>
                     <div class="flex padding-top-10 text-align-left">
                        <label>
                           <input type="checkbox" name="age" id="age" value="1" />
                           <span class="padding-left-5 color-grey">
                              본인은 18세이상이며 법적으로 서비스를 이용하는데 문제 가 없는 국가에서 서비스를 이용중입니다. 또한 나이 확인 및 이용규정과 관련하여 이용약관 , 규칙 , 개인정보 취급방침 ,
                              쿠키정책을 읽고 동의합니다.
                           </span>
                        </label>
                     </div>
                  </div>
               </div>
               <div class="widthp-100 sign-content-bottom  height-150 align-items-center justify-content-end padding-right-25">
                  <button type="button" class="next-sign-auth background-green color-white padding-vertical-15 padding-horizontal-45" 
                  onClick={(e) => {
                     dispatch(registerUser(registration_form))
                  }
                  }>
                     회원가입
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
