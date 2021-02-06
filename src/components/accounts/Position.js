import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Position() {
   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="history-wrap account history-content-desktop flex-inherit padding-10">
               <div class="history-left-content account-height widthp-50 flex-inherit flex-column margin-right-10 scrollable-auto">
                  <div class="history-comfile flex-column flex-inherit">
                     <div class="flex-column flex-inherit widthp-100">
                        <div class="red-shadow height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white grow-2">배팅내역</span>
                        </div>
                        <div class="history-tab height-45 border-bottom flex-inherit align-items-center-inherit background-transparent-b-5">
                           <div class="widthp-25 border-right">
                              <button type="button" class="widthp-100 heightp-100 color-white active">
                                 <i class="fal fa-check"></i>
                                 <span>전체</span>
                              </button>
                           </div>
                           <div class="widthp-25 border-right">
                              <button type="button" class="widthp-100 heightp-100 color-grey">
                                 <span>진행중</span>
                              </button>
                           </div>
                           <div class="widthp-25 border-right">
                              <button type="button" class="widthp-100 heightp-100 color-grey">
                                 <span>적중</span>
                              </button>
                           </div>
                           <div class="widthp-25">
                              <button type="button" class="widthp-100 heightp-100 color-grey">
                                 <span>미적중</span>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div class="history-content flex-column">
                        <table>
                           <thead>
                              <tr>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">전체선택</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">배팅시간</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">타입</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">배당</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">배팅금액</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">예상 당첨금</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">진행</span>
                                 </th>
                                 <th class="height-45 background-transparent-b-5 border-bottom">
                                    <span class="color-grey">결과</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td class="height-45 border-bottom">
                                    <input type="checkbox" name="" value="1" />
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">2020-11-12 22:11:34</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">싱글</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">2.10</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">1,000,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">21,000,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">1/1</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-red">미적중</span>
                                 </td>
                              </tr>

                              <tr>
                                 <td class="height-45 border-bottom">
                                    <input type="checkbox" name="" value="1" />
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">2020-11-12 22:11:34</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">콤보</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4.25</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">100,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4,250,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">1/2</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-blue">진행중</span>
                                 </td>
                              </tr>

                              <tr>
                                 <td class="height-45 border-bottom">
                                    <input type="checkbox" name="" value="1" />
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">2020-11-12 22:11:34</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">콤보</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4.25</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">100,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4,250,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">1/2</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-green">적중</span>
                                 </td>
                              </tr>

                              <tr>
                                 <td class="height-45 border-bottom">
                                    <input type="checkbox" name="" value="1" />
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">2020-11-12 22:11:34</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">콤보</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4.25</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">100,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">4,250,000원</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-grey">1/2</span>
                                 </td>
                                 <td class="height-45 border-bottom">
                                    <span class="color-green">적중</span>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div class="history-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-10">
                        <div class="grow-2 padding-left-10">
                           <button type="button" class="color-grey padding-10 background-transparent-b-10">
                              <i class="fal fa-trash-alt"></i>선택 삭제
                           </button>
                        </div>
                     </div>
                     <div class="padding-vertical-10 flex-inherit  height-60 color-grey">
                        <div class="pagination flex-inherit widthp-100 heightp-100">
                           <div class="select">
                              <select name="slct" id="slct">
                                 <option value="">1</option>
                                 <option value="">2</option>
                                 <option value="">3</option>
                                 <option value="">4</option>
                                 <option value="">5</option>
                                 <option value="">6</option>
                                 <option value="">7</option>
                              </select>
                           </div>
                           <div class="flex margin-left-5 page grow-2 justify-content-end">
                              <Link to="#">
                                 <button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5">
                                    <i class="fas fa-chevron-left margin-0 color-grey"></i>
                                 </button>
                              </Link>
                              <Link to="#">
                                 <button class="page-right width-40 heightp-100 background-transparent-b-20">
                                    <i class="fas fa-chevron-right margin-0 color-grey"></i>
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="history-right-content account-height widthp-50 flex-inherit flex-column margin-right-10 scrollable-auto">
                  <div class="history-comfile flex-column flex-inherit">
                     <div class="flex-column flex-inherit widthp-100">
                        <div class="red-shadow height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white">배팅 상세 내역</span>
                        </div>
                     </div>
                     <div class="history-content flex-column">
                        <table>
                           <thead>
                              <tr>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">경기시간</span>
                                 </th>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">VS</span>
                                 </th>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">스코어</span>
                                 </th>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">배팅</span>
                                 </th>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">배당</span>
                                 </th>
                                 <th class="height-45 border-bottom background-transparent-b-5">
                                    <span class="color-grey">상태</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">20-11-12</span>
                                          <span class="color-grey">22:00</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">FK 츠르배나즈배</span>
                                          <span class="color-grey">리버풀</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-red">2</span>
                                          <span class="color-red">1</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-white">아시아오버언더</span>
                                          <span class="color-grey">오버2.5</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">1.78</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-green">적중</span>
                                       </div>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">20-11-12</span>
                                          <span class="color-grey">22:00</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">FK 츠르배나즈배</span>
                                          <span class="color-grey">리버풀</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-red">2</span>
                                          <span class="color-red">1</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-white">아시아오버언더</span>
                                          <span class="color-grey">오버2.5</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">1.78</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-green">적중</span>
                                       </div>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">20-11-12</span>
                                          <span class="color-grey">22:00</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">FK 츠르배나즈배</span>
                                          <span class="color-grey">리버풀</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-red">2</span>
                                          <span class="color-red">1</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-white">아시아오버언더</span>
                                          <span class="color-grey">오버2.5</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-grey">1.78</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="height-60 border-bottom">
                                    <div class="list-td flex flex-column flex-inherit padding-10">
                                       <div class="flex-column">
                                          <span class="color-green">적중</span>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div class="history-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-5">
                        <div class="grow-2 padding-left-10">
                           <span class="color-grey padding-right-10">
                              누적 배당 <strong class="color-red">3.10</strong>
                           </span>
                           <span class="color-grey padding-right-10">
                              배팅금액 <strong class="color-red">50,000원</strong>
                           </span>
                           <span class="color-grey padding-right-10">
                              적중상금 <strong class="color-red">155,000</strong>
                           </span>
                        </div>
                        <div class="padding-right-25">
                           <strong class="color-red">적중</strong>
                        </div>
                     </div>
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
