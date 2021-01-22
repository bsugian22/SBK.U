import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Register() {
   return (
      <Fragment>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex border-bottom">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">회원가입</span>
               </div>
            </div>
            <div class="widthp-100 flex-column flex-inherit padding-horizontal-15">
               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>아이디 및 비밀번호</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">아이디</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="사용하실 아이디를 입력하세요." />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="password" placeholder="영문,숫자 16자리 이내" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">비밀번호 확인</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="password" placeholder="다시한번 비밀번호를 입력하세요" />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>회원정보</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">이름</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="이름을 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">생년월일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="생년월일을 입력해주세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">이메일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="이메일을 입력해주세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">접속지역</div>
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

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">사용언어</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <div class="select">
                           <select name="country">
                              <option value="kr">한국어</option>
                              <option value="ph">타갈로그어</option>
                              <option value="en">영어</option>
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
                     <h1>계좌 정보</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">은행명</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <div class="select">
                           <select name="bank">
                              <option value="">국민은행</option>
                              <option value="">하나은행</option>
                              <option value="">카카오뱅크</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">계좌번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="숫자만 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">예금주</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="account" placeholder="예금주를 입력해주세요" />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>환전 비밀번호</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="password" placeholder="환전 비밀번호를 입력해주세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">비밀번호 확인</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="password" placeholder="환전 비밀번호를 다시 입력하세요" />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>(선택) 파트너코드 또는 추천인</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">파트너 코드</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="partner" placeholder="파트너코드를 입력하세요" />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">추천인</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="text" name="partner" placeholder="추천인 아이디를 입력하세요" />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list flex flex-column padding-vertical-20">
                     <div class="flex">
                        <label>
                           <input type="checkbox" name="" id="event" />
                           <span class="color-white padding-left-5">테라에서 진행되는 프로모션 및 이벤트 정보를 받겠습니다.</span>
                        </label>
                     </div>
                     <div class="flex padding-top-10">
                        <label>
                           <input type="checkbox" name="" id="age" />
                           <span class="color-white padding-left-5">
                              본인은 18세이상이며 법적으로 서비스를 이용하는데 문제 가 없는 국가에서 서비스를 이용중입니다. 또한 나이 확인 및 이용규정과 관련하여 이용약관 , 규칙 , 개인정보 취급방침 ,
                              쿠키정책을 읽고 동의합니다.
                           </span>
                        </label>
                     </div>
                  </div>

                  <div class="interload-list margin-bottom-30">
                     <button type="button" class="widthp-100 background-green color-white height-40 justify-content-center">
                        회원가입
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
