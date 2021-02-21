import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'
export default function Settings() {
   const context = useContext(MenuContext)
   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="settings-header-desktop content-header shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-user-cog color-grey"></i>SETTINGS
               </span>
            </div>
            <div class="deposit-wrap settings-content-desktop account border-top flex-inherit flex-row">
               <div class="deposit-left border-right flex-inherit flex-column account-height widthp-50 padding-10 scrollable-auto">
                  <form action="/mypage/update" method="post" id="fmyinfo">
                     <div class="notice flex-column flex-inherit widthp-100">
                        <div class="notice-header height-40 padding-10 align-items-center background-transparent-b-30">
                           <span class="color-grey">
                              <i class="far fa-shield-check"></i>비밀번호변경
                           </span>
                        </div>
                        <div class="flex-column notice-contents padding-10 background-transparent-b-15 color-grey">
                           <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                              <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                 <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                    <span class="color-white">아이디</span>
                                 </div>
                                 <div class="flex widthp-60 heightp-100">
                                    <span class="color-grey">0</span>
                                 </div>
                              </div>
                              <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                 <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                    <span class="color-white">레벨</span>
                                 </div>
                                 <div class="flex widthp-60 heightp-100">
                                    <span class="color-grey">0</span>
                                 </div>
                              </div>
                           </div>
                           <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                              <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                 <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                    <span class="color-white">새 비밀번호</span>
                                 </div>
                                 <div class="flex widthp-60 heightp-100">
                                    <input type="password" class="input-form-2 widthp-200" name="mem_password_new" placeholder="새 비밀번호" required />
                                 </div>
                              </div>
                              <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                 <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                    <span class="color-white">재입력</span>
                                 </div>
                                 <div class="flex widthp-60 heightp-100">
                                    <input type="password" class="input-form-2 widthp-200" name="mem_password_re" placeholder="새 비밀번호 재입력" required />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="form-bottom height-40 padding-horizontal-10 align-items-center background-transparent-b-30">
                           <div class="flex grow-2 heightp-100 padding-vertical-5 justify-content-end">
                              <input
                                 type="password"
                                 class="width-170 margin-right-5 heightp-100 background-transparent-b-10 padding-horizontal-10 color-grey"
                                 name="mem_password_cur"
                                 placeholder="현재비밀번호를 입력하세요"
                                 required
                              />
                              <button class="btn-0 heightp-100 width-120 background-green">
                                 <span class="color-white">
                                    <i class="fas fa-check"></i>변경확인
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
                  <div class="flex-column flex-inherit form margin-top-10">
                     <div class="form-header height-40 padding-10 align-items-center background-transparent-b-30">
                        <span class="color-grey">
                           <i class="far fa-user"></i>기본회원정보
                        </span>
                     </div>
                     <div class="form-data flex-inherit background-transparent-b-15 padding-10 flex-column">
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">닉네임</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">0</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">생년월일</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">TODO</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">휴대폰</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">0</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">이메일</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">TODO</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-20 heightp-100 background-transparent-b-10">
                                 <span class="color-white">접속정보</span>
                              </div>
                              <div class="flex widthp-80 heightp-100">
                                 <span class="color-grey">TODO</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">은행명</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">0</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">예금주</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">0</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-20 heightp-100 background-transparent-b-10">
                                 <span class="color-white">계좌번호</span>
                              </div>
                              <div class="flex widthp-80 heightp-100">
                                 <span class="color-grey">0</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">비트코인주소</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">TODO</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">텔레그램</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-grey">TODO</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="form-bottom height-40 padding-horizontal-10 align-items-center background-transparent-b-30">
                        <div class="flex grow-2 heightp-100 padding-vertical-5 justify-content-end">
                           <button type="button" class="btn-0 heightp-100 width-120 background-green btn-change1">
                              <span class="color-white">
                                 <i class="fal fa-pencil"></i>변경문의
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="deposit-right border-left flex-inherit flex-column account-height widthp-50 padding-10 scrollable-auto">
                  <div class="notice flex-column flex-inherit">
                     <div class="notice-header height-40 padding-10 align-items-center background-transparent-b-30">
                        <span class="color-grey">
                           <i class="far fa-calculator"></i>이용한도 및 포인트
                        </span>
                     </div>
                     <div class="flex-column notice-contents padding-10 background-transparent-b-15 color-grey">
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex justify-content-center widthp-100 heightp-100">
                                 <span class="color-grey">싱글베팅</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최소 베팅</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>5,000
                                 </span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최대 베팅</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>0
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최대 당첨금</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>0
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex justify-content-center widthp-100 heightp-100">
                                 <span class="color-grey">멀티베팅</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최소 베팅</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>5,000
                                 </span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최대 베팅</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>0
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최대 당첨금</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">
                                    <i class="fas fa-won-sign mr-2"></i>0
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex justify-content-center widthp-100 heightp-100">
                                 <span class="color-grey">보너스포인트</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">본인낙첨</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">0%</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">추천인낙첨</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">0%</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">첫 충전</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">TODO%</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">매 충전</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">TODO%</span>
                              </div>
                           </div>
                        </div>
                        <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">최대추천인</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">TODO</span>
                              </div>
                           </div>
                           <div class="flex widthp-50 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                              <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                 <span class="color-white">현재추천인</span>
                              </div>
                              <div class="flex widthp-60 heightp-100">
                                 <span class="color-green">TODO</span>
                              </div>
                           </div>
                        </div>
                        <div class="form-bottom height-40 padding-horizontal-10 align-items-center background-transparent">
                           <div class="flex grow-2 heightp-100 margin-top-5 padding-vertical-5 justify-content-end">
                              <button type="button" class="btn-0 heightp-100 width-120 background-green btn-change2">
                                 <span class="color-white">
                                    <i class="fal fa-pencil"></i>한도상향문의
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">ACCOUNT</span>
               </div>
               <div class="flex padding-right-15">
                  <Link to="/account/settings">
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
                  <button type="button" id="tab-1" class={context.state.interMenu === 'inter-tab-1' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-1')}>
                     기본정보
                  </button>
               </div>
               <div class="flex widthp-50">
                  <button type="button" id="tab-2" class={context.state.interMenu === 'inter-tab-2' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-2')}>
                     한도 및 포인트
                  </button>
               </div>
            </div>
            <div
               class={
                  context.state.interMenu === 'inter-tab-1'
                     ? 'interload-content flex flex-inherit flex-column padding-horizontal-15 active'
                     : 'interload-content flex flex-column flex-inherit padding-horizontal-15'
               }
            >
               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>기본정보</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">아이디</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">아이디가 출력됩니다.</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">이름</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">이름이 출력됩니다.</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">생년월일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">1919/09/09</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">연락처</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">010-1234-1234</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">이메일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">xxx000xxx@naver.com</span>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>비밀번호 변경</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">현재 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="password" name="" placeholder="비밀번호를 입력하세요." />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">새 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="password" name="" placeholder="새로운 비밀번호를 입력하세요." />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">새 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <input type="password" name="" placeholder="새로운 비밀번호를 다시 입력하세요." />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>계좌정보</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">은행명</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">국민은행</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">예금주</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">홍길동</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">계좌번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="color-white padding-left-10">1234-1234-**-123456</span>
                     </div>
                  </div>

                  <div class="interload-list margin-bottom-30">
                     <button type="button" class="widthp-100 background-green color-white height-40 justify-content-center">
                        변경내용 저장하기
                     </button>
                  </div>
               </div>
            </div>
            <div
               class={
                  context.state.interMenu === 'inter-tab-2'
                     ? 'interload-content flex flex-inherit flex-column padding-horizontal-15 active'
                     : 'interload-content flex flex-inherit flex-column padding-horizontal-15'
               }
            >
               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>싱글베팅</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최소배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">5,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최대배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">1,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최대당첨금</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">10,000,000</span>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>멀티 배팅</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최소배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">5,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최대배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">3,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최대당첨금</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">20,000,000</span>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>보너스,포인트</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">낙첨</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">1</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">첫충전</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">10</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">추천인 낙첨</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">20,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">최대 추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">1,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">현재 추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">2</span>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>이용내역</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">충전</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">10,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">보너스</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">2</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">0</span>
                     </div>
                  </div>

                  <div class="interload-list margin-bottom-30">
                     <button type="button" class="widthp-100 background-green color-white height-40 justify-content-center">
                        <Link to="#" className="color-white">
                           한도상향 신청
                        </Link>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
