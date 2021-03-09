import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";

import { Link, NavLink } from 'react-router-dom'


export default function Find() {

   let isSubscribed = true;
const dispatch = useDispatch();

  useEffect(() => {
    isSubscribed = true;
    dispatch(refreshToken())
    return () => {
      isSubscribed = false;
    };
  }, []);
  
   return (
      <Fragment>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex border-bottom">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">회원정보찾기</span>
               </div>
            </div>
            <div class="flex-column flex-inherit padding-horizontal-15">
               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>회원정보 확인</h1>
                  </div>
                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">아이디</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="등록된 아이디를 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">접속 국가</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <div class="select">
                           <select name="country">
                              <option value="kr">한국</option>
                              <option value="ph">필리핀</option>
                              <option value="en">영국</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>본인인증</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">휴대폰번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="phone" placeholder="등록된 휴대폰번호를 입력하세요" />
                     </div>
                  </div>
                  <div class="interload-list">
                     <button type="button" class="widthp-100 background-transparent-b-20 border-bottom color-white height-40 justify-content-center">
                        인증번호요청
                     </button>
                  </div>
                  <div class="interload-list">
                     <div class="widthp-80 flex background-transparent-b-20 color-grey height-40 justify-content-center  border-bottom">
                        <input type="number" name="phone_code" placeholder="인증번호를 입력하세요." />
                     </div>

                     <div class="widthp-20 flex background-transparent-b-10 height-40 border-bottom align-items-center justify-content-center">
                        <span class="count color-yellow">00:59</span>
                     </div>
                  </div>
                  <div class="interload-list">
                     <button type="button" class="widthp-100 background-green color-white height-40 justify-content-center">
                        본인 인증하기
                     </button>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>비밀번호 변경</h1>
                  </div>

                  <div class="interload-list">
                     <div class="widthp-100 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="new_password" placeholder="새 비밀번호를 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list">
                     <div class="widthp-100 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="re_new_password" placeholder="새 비밀번호를 다시 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list">
                     <button type="button" class="widthp-100 background-green color-white height-40 justify-content-center">
                        비밀번호 저장 후 로그인
                     </button>
                  </div>

                  <div class="interload-list">
                     <p class="color-white">
                        아이디가 기억나지 않거나 휴대폰 인증이 불가능한 경우 고객센터로 문의해주세요.
                        <u>
                           <Link to="#" className="color-green">
                              고객센터 바로가기
                           </Link>
                        </u>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
