import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Login() {
   return (
      <Fragment>
         <div class="widthp-100 login-panel-mobile flex-column flex-inherit flex padding-20 border-bottom">
            <div class="flex-column flex-inherit">
               <div class="find-password justify-content-end padding-bottom-20">
                  <Link to="/find">
                     비밀번호 찾기
                     <i class="fal fa-angle-double-right"></i>
                  </Link>
               </div>
               <div class="login-items background-transparent-b-15">
                  <input type="text" name="account" placeholder="아이디를 입력하세요." />
               </div>
               <div class="login-items background-transparent-b-15">
                  <input type="password" name="account" placeholder="비밀번호를 입력하세요." />
               </div>
               <div class="login-items background-transparent-b-25">
                  <button type="button">로그인</button>
               </div>
               <div class="login-items height-40 justify-content-center align-items-center">
                  <span class="color-white">또는</span>
               </div>
               <div class="login-items background-green height-40">
                  <Link to="/register" className="color-white">
                     회원가입
                  </Link>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
