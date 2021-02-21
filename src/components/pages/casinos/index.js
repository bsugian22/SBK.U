import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Casino() {
   return (
      <Fragment>
         <div class="content casiono-continer flex flex-inherit grow-2 flex-column">
            <div class="casino-wrap casino-content-desktop flex flex-inherit">
               <div class="left flex-inherit flex-column width-350 content-height background-transparent-b-15 padding-10 scrollable-auto border-right border-right-shadow">
                  <div class="flex-inherit flex-column align-items-center padding-10">
                     <div class="flex-inherit flex-column widthp-100 align-items-center">
                        <div>
                           <span class="casino-icon width-50 height-50"></span>
                        </div>
                        <div>
                           <span class="color-yellow font-weight-bold margin-bottom-5">CASINO GAME</span>
                        </div>
                        <div>
                           <span class="color-white">바카라, 블랙잭, 드래곤타이거, 룰렛 등 인기있는</span>
                        </div>
                        <div>
                           <span class="color-white">카지노 게임이 준비되어 있습니다.</span>
                        </div>
                     </div>
                     <div class="flex-inherit flex-column widthp-100 align-items-center-inherit margin-top-10">
                        <div class="flex-inherit widthp-100 height-40 background-transparent-b-20">
                           <div class="widthp-40 align-items-center padding-horizontal-10">
                              <span class="color-grey">보유카지노머니</span>
                           </div>
                           <div class="widthp-60 justify-content-end padding-horizontal-10">
                              <span class="color-green">30,000원</span>
                           </div>
                        </div>
                        <div class="flex-inherit widthp-100 height-40 margin-top-5">
                           <button class="btn-0 widthp-100 heightp-100 align-items-center justify-content-center background-green color-white">
                              <i class="far fa-exchange-alt margin-top-2"></i>머니전환
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="flex-inherit grow-2 align-items-center justify-content-center">
                     <span class="color-grey">카지노리스트</span>
                  </div>
               </div>
               <div class="center flex-inherit flex-column grow-2 scrollable-auto">
                  <div class="content-header casino-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-15">
                     <span class="color-grey">
                        <i class="far fa-club"></i>CASINO
                     </span>
                  </div>
                  <div class="flex-inherit casino-tab border-top justify-content-end height-60 widthp-100 padding-10">
                     <div class="casino-name margin-right-5">
                        <button class="btn-0 heightp-100 background-green color-white padding-horizontal-10">CASINO-NAME-1</button>
                     </div>
                     <div class="casino-name">
                        <button class="btn-0 heightp-100 background-green color-white padding-horizontal-10">CASINO-NAME-2</button>
                     </div>
                  </div>
                  <div class="grow-2 flex-inherit flex-column casino-play justify-content-center align-items-center">
                     <div class="justify-content-center align-items-center widthp-40 height-200 background-transparent-b-40 margin-bottom-10">
                        <span class="color-grey">카지노영상 또는 이미지영역</span>
                     </div>
                     <div class="play">
                        <button class="btn-0 heightp-100 height-40 background-orange color-white padding-horizontal-20">PLAY NOW</button>
                     </div>
                  </div>
               </div>
               <div class="right flex-inherit flex-column width-350 content-height background-transparent-b-15 padding-10 scrollable-auto border-left border-left-shadow">
                  <div class="flex-inherit flex-column align-items-center padding-10">
                     <div class="flex-inherit flex-column widthp-100 align-items-center">
                        <div>
                           <span class="slot-icon width-50 height-50"></span>
                        </div>
                        <div>
                           <span class="color-yellow font-weight-bold margin-bottom-5">SLOT GAME</span>
                        </div>
                        <div>
                           <span class="color-white">200가지 이상의 다양한 슬롯머신 게임을</span>
                        </div>
                        <div>
                           <span class="color-white">온라인으로 즐길 수 있습니다.</span>
                        </div>
                     </div>
                  </div>
                  <div class="flex-inherit grow-2 align-items-center justify-content-center">
                     <span class="color-grey">슬롯리스트</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="casino-content-mobile flex flex-inherit flex-column widthp-100">
            <div class="widthp-100 height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title green">
                  <span class="color-white padding-left-15">CASINO PROVIDER</span>
               </div>
            </div>
            <div class="pi-header-mobile flex-inherit flex-row shrink-0 border-bottom align-items-center">
               <div class="border-right">
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
               <div class="border-right">
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
               <div class="border-right">
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
               <div class="border-right">
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
               <div class="border-right">
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="#">
                     -
                  </NavLink>
               </div>
            </div>
            <div class="widthp-100 height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">BACCARAT</span>
               </div>
            </div>
            <div class="casino-list border-bottom widthp-100 flex-inherit align-items-center-inherit justify-content-center-inherit padding-30 flex-column">
               <div role="title-name">
                  <h1 class="color-white">BACCARAT</h1>
               </div>

               <div role="title-comment">
                  <span class="color-grey">라이브 딜러와 함께하는 온라인 바카라</span>
               </div>

               <div class="height-150 color-white casino-video">동영상 송출공간</div>

               <div role="casino-start">
                  <Link to="#" className="background-green color-white padding-10 margin-top-30 casino-start">
                     시작하기
                  </Link>
               </div>
               <div class="flex-column flex-inherit">
                  <p class="padding-vertical-30 color-white">그리고</p>
                  <div class="flex-column align-items-center text-align-center">
                     <h1 class="color-white">SLOT GAMES</h1>
                     <span class="color-grey width-200">200가지 이상의 다양한 슬롯머신 게임을 온라인으로 즐길 수 있습니다.</span>

                     <Link to="#" className="background-orange width-50 color-white padding-10 margin-top-30 casino-start">
                        모두보기
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
