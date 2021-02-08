import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'
export default function Settings() {
   const context = useContext(MenuContext)
   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="settings-wrap account settings-content-desktop flex-inherit padding-10">
               <div class="settings-left-content account-height widthp-50 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
                  <div class="flex-inherit flex-column">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                        <span class="color-white">계정</span>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">아이디</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-white">okok012984</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">레벨</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-white">12</span>
                        </div>
                     </div>
                  </div>

                  <div class="flex-inherit flex-column">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top">
                        <span class="color-white">비밀번호 변경</span>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">새 비밀번호</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <input type="password" name="" placeholder="비밀번호를 입력해주세요" class="input-form color-white" />
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">새 비밀번호 재입력</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <input type="password" name="" placeholder="비밀번호를 재입력해주세요" class="input-form color-white" />
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">현재 비밀번호</span>
                        </div>
                        <div class="widthp-50 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-left-rw border-top">
                           <input type="password" name="" placeholder="현재 비밀번호를 입력해주세요" class="input-form color-white" />
                        </div>
                        <div class="widthp-25 height-45 border-left-rw border-top">
                           <button type="button" class="widthp-100 heightp-100 background-green color-white">
                              비밀번호 저장
                           </button>
                        </div>
                     </div>
                  </div>

                  <div class="flex-inherit flex-column">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                        <span class="color-white grow-2">기본정보</span>
                        <Link to="#" class="color-grey padding-right-15">
                           수정
                        </Link>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">이름</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-top border-left-rw">
                           <span class="color-white">홍길동</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">생년월일</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 background-transparent-b-5 border-top border-left-rw">
                           <span class="color-white">1988-08-08</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">휴대폰</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-top border-left-rw">
                           <span class="color-white">010-1234-1234</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">이메일</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 background-transparent-b-5 border-top border-left-rw">
                           <span class="color-white">test@test.com</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">접속정보</span>
                        </div>
                        <div class="widthp-75 border-bottom-rb  padding-left-15 height-45 background-transparent-b-5 border-top border-left-rw">
                           <span class="color-white">South Korea KO-KR 123.123.123.123</span>
                        </div>
                     </div>
                  </div>

                  <div class="flex-inherit flex-column margin-bottom-20">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                        <span class="color-white grow-2">계좌정보</span>
                        <Link to="#" class="color-green padding-right-15">
                           저장
                        </Link>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">은행명</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 border-top border-left-rw background-transparent-b-5">
                           <span class="color-white">국민은행</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">예금주</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                           <span class="color-white">홍길동</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">계좌번호</span>
                        </div>
                        <div class="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                           <span class="color-white">123452-12-1234567</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">페이팔 계정</span>
                        </div>
                        <div class="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                           <span class="color-white">test@test.com</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">비트코인 지갑</span>
                        </div>
                        <div class="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                           <span class="color-white">bc1qjxhcg4sy0nz96kxlpngdfhuz5ppe0trzsnmds5</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="settings-right-content account-height widthp-50 flex-inherit flex-column border-left padding-left-5 scrollable-auto">
                  <div class="flex-inherit flex-column">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 flex-inherit">
                        <span class="color-white grow-2">이용한도</span>
                        <Link to="#" className="color-grey padding-right-15">
                           이용한도 상향신청
                        </Link>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-30 padding-vertical-15 border-right-rb border-bottom-rb border-top background-transparent-b-10">
                           <span class="color-grey">싱글</span>
                        </div>
                        <div class="widthp-70 flex-inherit flex-column">
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                                 <span class="color-grey">최소배팅</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb background-transparent-b-5 padding-left-15 border-top border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    5,000
                                 </span>
                              </div>
                           </div>
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                                 <span class="color-grey">최대배팅</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb padding-left-15 background-transparent-b-5 border-top border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    1,000,000
                                 </span>
                              </div>
                           </div>
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                                 <span class="color-grey">최대 당첨금</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb padding-left-15 background-transparent-b-5 border-top border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    3,000,000
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-30 padding-vertical-15 border-right-rb border-top border-bottom-rb background-transparent-b-10">
                           <span class="color-grey">콤보</span>
                        </div>
                        <div class="widthp-70 flex-inherit flex-column">
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                                 <span class="color-grey">최소배팅</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    5,000
                                 </span>
                              </div>
                           </div>
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                                 <span class="color-grey">최대배팅</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    2,000,000
                                 </span>
                              </div>
                           </div>
                           <div class="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                              <div class="sub-title widthp-30 height-50 background-transparent-b-10 border-bottom-rb border-right-rb justify-content-center border-top border-left-rw">
                                 <span class="color-grey">최대 당첨금</span>
                              </div>
                              <div class="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                                 <span class="color-green">
                                    <i class="far fa-won-sign"></i>
                                    5,000,000
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="flex-inherit flex-column">
                     <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top">
                        <span class="color-white">보너스 포인트</span>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">회원낙첨 포인트</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-green">1%</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">추천인 낙첨 포인트</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-green">1%</span>
                        </div>
                     </div>

                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">최대 추천인 수</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-green">100</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                           <span class="color-grey">현재 추천인 수</span>
                        </div>
                        <div class="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-green">0</span>
                        </div>
                     </div>
                     <div class="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                        <div class="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                           <span class="color-grey">첫 충전 포인트</span>
                        </div>
                        <div class="widthp-75 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                           <span class="color-green">10%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom-rb">
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

            <div class="member-information height-40 align-items-center-inherit border-bottom-rb">
               <div class="flex pi-title green grow-2">
                  <span class="color-white padding-left-15">안녕하세요. - 회원님</span>
               </div>
               <div class="flex">
                  <span class="color-yellow padding-right-15">Lv.-</span>
               </div>
            </div>

            <div class="money-information border-bottom-rb flex-inherit">
               <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">예치금</span>
                     <span class="color-green">-</span>
                  </div>
               </div>
               <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
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

            <div class="interload-tab height-50 border-bottom-rb">
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
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">아이디</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">아이디가 출력됩니다.</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">이름</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">이름이 출력됩니다.</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">생년월일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">1919/09/09</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">연락처</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">010-1234-1234</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">이메일</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">xxx000xxx@naver.com</span>
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>비밀번호 변경</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">현재 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <input type="password" name="" placeholder="비밀번호를 입력하세요." />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">새 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <input type="password" name="" placeholder="새로운 비밀번호를 입력하세요." />
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">새 비밀번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <input type="password" name="" placeholder="새로운 비밀번호를 다시 입력하세요." />
                     </div>
                  </div>
               </div>

               <div class="flex-column flex-inherit">
                  <div class="interload-list padding-vertical-10">
                     <h1>계좌정보</h1>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">은행명</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">국민은행</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">예금주</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="color-white padding-left-10">홍길동</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">계좌번호</div>
                     <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
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
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최소배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">5,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최대배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">1,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최대당첨금</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
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
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최소배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">5,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최대배팅</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">3,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최대당첨금</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
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
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">낙첨</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">1</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">첫충전</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">10</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">추천인 낙첨</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-percent"></i>
                        </span>
                        <span class="color-green padding-right-10">20,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">최대 추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">1,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">현재 추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
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
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">충전</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="far fa-won-sign"></i>
                        </span>
                        <span class="color-green padding-right-10">10,000,000</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">보너스</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                        <span class="grow-2 padding-left-10">
                           <i class="fal fa-users"></i>
                        </span>
                        <span class="color-green padding-right-10">2</span>
                     </div>
                  </div>

                  <div class="interload-list align-items-center-inherit">
                     <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">추천인</div>
                     <div class="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
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
