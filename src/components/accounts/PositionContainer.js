import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Position() {
   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="history-header-desktop content-header shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-list-ul color-grey"></i>HISTORY
               </span>
            </div>
            <div class="history history-content-desktop border-top flex-column flex-inherit padding-10 account-height scrollable-auto">
               <div class="division flex-inherit padding-10 height-50 background-transparent-b-25 border-bottom">
                  <div class="widthp-50">
                     <button class="btn-0 width-80 color-green background-transparent-w-5 margin-right-2 active">전체</button>
                     <button class="btn-0 width-80 color-white background-transparent-w-5 margin-right-2">대기</button>
                     <button class="btn-0 width-80 color-white background-transparent-w-5 margin-right-2">적중</button>
                     <button class="btn-0 width-80 color-white background-transparent-w-5">미적중</button>
                  </div>
                  <div class="widthp-50 justify-content-end">
                     <button class="btn-0 width-120 color-white background-transparent-w-5">종료베팅 일괄삭제</button>
                  </div>
               </div>
               <div class="list-wrap flex-inherit flex-column border-top">
                  <div class="list">
                     <table>
                        <thead>
                           <tr class="height-30-inherit padding-10-inherit background-transparent-b-25">
                              <th class="color-grey width-50">
                                 <input type="checkbox" />
                              </th>
                              <th class="color-grey width-100">베팅일자</th>
                              <th class="color-grey">베팅타입</th>
                              <th class="color-grey">경기 수</th>
                              <th class="color-grey">배당</th>
                              <th class="color-grey">베팅금액</th>
                              <th class="color-grey">예상당첨금</th>
                              <th class="color-grey width-100">적중 / 미적중</th>
                              <th class="color-grey">결과</th>
                           </tr>
                        </thead>
                        <tbody class="info">
                           <tr class="height-30-inherit padding-10-inherit background-transparent-b-20">
                              <td class="color-grey">
                                 <input type="checkbox" />
                              </td>
                              <td class="color-grey">0</td>
                              <td class="color-white">
                                 <div class="flex widthp-100 heightp-100 background-transparent-b-15 justify-content-center align-items-center">싱글</div>
                              </td>
                              <td class="color-grey">0</td>
                              <td class="color-grey">0</td>
                              <td class="color-grey">0</td>
                              <td class="color-green">0</td>
                              <td class="color-grey">
                                 <div class="state flex flex-inherit justify-content-center align-items-center-inherit justify-content-center-inherit">
                                    <div class="win width-30 height-30 background-transparent-b-15 margin-right-5">0</div>
                                    <div class="lose width-30 height-30 background-transparent-b-15">0</div>
                                 </div>
                              </td>
                              <td class="color-white">
                                 <div class="flex widthp-100 heightp-100 background-transparent-b-15 justify-content-center align-items-center">대기</div>
                                 <div class="flex widthp-100 heightp-100 background-blue justify-content-center align-items-center">적중</div>
                                 <div class="flex widthp-100 heightp-100 background-orange justify-content-center align-items-center">적특</div>
                                 <div class="flex widthp-100 heightp-100 background-red justify-content-center align-items-center">취소</div>
                                 <div class="flex widthp-100 heightp-100 background-red justify-content-center align-items-center">미적중</div>
                              </td>
                           </tr>
                        </tbody>
                        <tbody class="detail">
                           <tr>
                              <td colspan="9" class="padding-10">
                                 <div class="flex flex-column flex-inherit padding-5-inherit">
                                    <div class="header flex-inherit height-40 align-items-center-inherit justify-content-center-inherit background-transparent-b-30 padding-horizontal-10">
                                       <div class="color-grey widthp-15">경기시간</div>
                                       <div class="color-grey widthp-35">팀명</div>
                                       <div class="color-grey widthp-25">베팅</div>
                                       <div class="color-grey widthp-15">배당</div>
                                       <div class="color-grey widthp-10">결과</div>
                                    </div>

                                    <div class="title flex-inherit height-40 align-items-center-inherit background-transparent-b-20 padding-horizontal-10">
                                       <div class="event color-grey margin-right-15">
                                          <i class="fas fa-futbol margin-right-5"></i>NaN
                                       </div>
                                       <div class="league color-grey">
                                          <i class="far fa-flag margin-right-5 color-yellow"></i>0
                                       </div>
                                    </div>
                                    <div class="list border-top flex-inherit height-40 align-items-center-inherit background-transparent-b-10 justify-content-center-inherit padding-horizontal-10">
                                       <div class="time color-grey widthp-15">0</div>
                                       <div class="team grow-1 widthp-35">
                                          <div class="home color-grey">0</div>
                                          <div class="vs color-grey margin-horizontal-10">vs</div>
                                          <div class="away color-grey">0</div>
                                       </div>
                                       <div class="bet grow-1 widthp-25">
                                          <div class="flex padding-horizontal-10 color-grey heightp-100 background-transparent-b-15 justify-content-center align-items-center margin-right-5">0</div>
                                          <div class="flex heightp-100 color-green justify-content-center align-items-center">0</div>
                                       </div>
                                       <div class="odds color-grey widthp-15">0</div>
                                       <div class="result grow-1 widthp-10 color-white">
                                          <div class="flex widthp-100 heightp-100 background-transparent-b-15 justify-content-center align-items-center">대기</div>
                                          <div class="flex widthp-100 heightp-100 background-blue justify-content-center align-items-center">적중</div>
                                          <div class="flex widthp-100 heightp-100 background-orange justify-content-center align-items-center">적특</div>
                                          <div class="flex widthp-100 heightp-100 background-red justify-content-center align-items-center">취소</div>
                                          <div class="flex widthp-100 heightp-100 background-red justify-content-center align-items-center">미적중</div>
                                       </div>
                                    </div>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">HISTORY</span>
               </div>
               <div class="flex padding-right-15">
                  <Link to="/account">
                     마이페이지
                     <i class="fal fa-angle-double-right"></i>
                  </Link>
               </div>
            </div>

            <div class="member-information height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title green grow-2">
                  <span class="color-white padding-left-15">안녕하세요. - 회원님</span>
               </div>
               <div class="flex">
                  <span class="color-yellow padding-right-15">Lv.-</span>
               </div>
            </div>

            <div class="money-information border-bottom flex-inherit">
               <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">예치금</span>
                     <span class="color-green">-</span>
                  </div>
               </div>
               <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">게임머니</span>
                     <span class="color-green">100,000,000</span>
                  </div>
               </div>
               <div class="widthp-33 padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">보너스</span>
                     <span class="color-green">100,000,000</span>
                  </div>
               </div>
            </div>

            <div class="interload-tab height-50 border-bottom">
               <div class="flex widthp-50">
                  <button type="button" class="active">
                     <Link to="/betting/list">배팅목록</Link>
                  </button>
               </div>
               <div class="flex widthp-50">
                  <button type="button">
                     <Link to="/betting/listdetail">배팅상세</Link>
                  </button>
               </div>
            </div>

            <div class="widthp-100 flex-column flex border-bottom padding-vertical-10 padding-right-15 align-items-right">
               <div class="select height-40">
                  <select name="">
                     <option value="">전체</option>
                     <option value="">확인중</option>
                  </select>
               </div>
            </div>

            <div class="flex-column flex-inherit">
               <div class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10">
                  <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
                     <div class="widthp-25 text-align-center">
                        <span class="color-yellow">2021-01-04</span>
                     </div>
                     <div class="widthp-30 text-align-center">
                        <span class="color-grey text-align-center">3 / 0</span>
                     </div>
                     <div class="widthp-25 text-align-center">
                        <span class="color-green">대기</span>
                     </div>
                     <div class="widthp-20 text-align-center">
                        <Link to="/betting/listdetail">
                           <i class="fal fa-angle-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
