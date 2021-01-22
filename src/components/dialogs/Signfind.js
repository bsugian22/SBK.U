import React, { Fragment } from 'react'
import Logo from '../layouts/Logo'
import { Link, NavLink } from 'react-router-dom'

export default function Signfind() {
   return (
      <Fragment>
         <div class="sign-wrap flex flex-inherit ">
            <div class="sign-left-bar border-right width-400 height-700 shadow flex-inherit flex-column">
               <div class="flex-column heightp-100 padding-top-70">
                  <a href="#">
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
                  <p>아이디가 기억나지 않거나 , 핸드폰 인증이 불가능하신가요?</p>
                  <p>아래 링크를 클릭하셔서 도움을 받으세요.</p>
               </div>
            </div>
            <div class="widthp-100 sign-content border-left flex flex-inherit flex-column">
               <div class="sign-right-title padding-horizontal-20 padding-top-30 flex-column text-align-left">
                  <h1 class="color-green">Forgot Password</h1>
                  <p class="color-grey">비밀번호 찾기</p>
               </div>
               <div class="widthp-100 heightp-100 flex-inherit align-items-center justify-content-center padding-top-50 padding-horizontal-20">
                  <div class="widthp-50 flex-inherit sign-item-inner flex-column">
                     <div class="flex-column flex-inherit">
                        <div class="flex text-align-left">
                           <div class="widthp-50 padding-top-10">
                              <span class="color-grey">아이디</span>
                              <strong class="color-red padding-left-5">*</strong>
                           </div>
                           <div class="widthp-50 padding-top-10">
                              <span class="color-grey">접속국가</span>
                              <strong class="color-red padding-left-5">*</strong>
                           </div>
                        </div>
                     </div>

                     <div class="flex-column flex-inherit margin-vertical-10">
                        <div class="flex text-align-left">
                           <div class="widthp-50 ">
                              <input type="text" name="" class="padding-horizontal-10 background-transparent-b-30" placeholder="아이디를 입력하세요." />
                           </div>
                           <div class="widthp-50 margin-top-6">
                              <div class="select-item-box padding-left-10 select height-40">
                                 <select name="country">
                                    <option value="0">한국</option>
                                    <option value="1">미국</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div>
                        <span class="color-grey">휴대폰번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="" class="padding-horizontal-10 background-transparent-b-30" placeholder="휴대폰번호를 입력해주세요" />
                        <button type="button" class="background-green padding-horizontal-10 btn-submit">
                           인증요청
                        </button>
                     </div>
                     <div class="padding-top-10">
                        <span class="color-grey">인증번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input type="text" name="passwrd" class="padding-horizontal-10 background-transparent-b-30" placeholder="인증번호를 입력해주세요" />
                     </div>
                  </div>
               </div>
               <div class="widthp-100 sign-content-bottom  height-150 align-items-center justify-content-end padding-right-25">
                  <button type="button" class="next-sign-info background-green color-white padding-vertical-15 padding-horizontal-45">
                     확인
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
