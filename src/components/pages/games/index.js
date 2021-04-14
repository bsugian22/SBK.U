import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";

import { Link, NavLink } from 'react-router-dom'

export default function Games() {

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
         <div class="content games-book-continer flex flex-inherit grow-2 flex-column">
            <div class="games-content-wrap-desktop heightp-100 flex flex-inherit flex-column">
               <div class="games-header border-bottom height-50 align-items-center padding-horizontal-10 padding-vertical-15 background-transparent-b-25 border-left">
                  <span class="color-grey">
                     <i class="fal fa-gamepad"></i>GAMES
                  </span>
               </div>
               <div class="games-continer widthp-100 heightp-100 flex flex-inherit">
                  <div class="games-left-box flex-inherit widthp-50 flex-column border-right">
                     <div class="games-frame-box heightp-100 align-items-center justify-content-center">
                        <span class="color-white">프레임 영상이 출력됩니다</span>
                     </div>
                  </div>
                  <div class="games-right-box flex-inherit widthp-50 flex-column border-left">
                     <div class="games-event-view flex-column padding-vertical-15 border-bottom padding-horizontal-15">
                        <span class="color-white strong-text">EVENT VIEW</span>
                        <span class="color-grey">동행복권 파워볼</span>
                     </div>
                     <div class="games-event-content border-top scrollable-auto flex-column flex-inherit padding-vertical-15 padding-horizontal-15">
                        <div class="games-rows flex-column">
                           <div class="games-rows-title widthp-100 flex flex-inherit height-40 align-items-center padding-horizontal-15 background-transparent-b-30 border-bottom-white-strong">
                              <div class="datetime grow-2">
                                 <span class="color-white">3월28일 21회차</span>
                              </div>
                              <div class="btn-arrow">
                                 <button type="button">
                                    <i class="fal fa-angle-down"></i>
                                 </button>
                              </div>
                           </div>
                           <div class="games-rows-linetext flex flex-inherit height-40 padding-horizontal-15 background-transparent-b-30 align-items-center-inherit border-bottom-white-strong">
                              <div class="line-name grow-2">
                                 <i class="fas fa-plus-square color-white padding-right-5"></i>
                                 <span class="color-white">홀/짝</span>
                              </div>
                           </div>
                           <div class="games-rows-odds flex flex-inherit background-transparent-b-30 border-bottom-white-strong height-40 align-items-center-inherit ">
                              <div class="widthp-50 flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">홀</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">40%</span>
                                 </div>
                              </div>
                              <div class="widthp-50 border-left flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">짝</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">1.95</span>
                                 </div>
                              </div>
                           </div>
                           <div class="games-rows-linetext flex flex-inherit height-40 padding-horizontal-15 background-transparent-b-30 align-items-center-inherit border-bottom-white-strong">
                              <div class="line-name grow-2">
                                 <i class="fas fa-plus-square color-white padding-right-5"></i>
                                 <span class="color-white">좌출발 / 우출발</span>
                              </div>
                           </div>
                           <div class="games-rows-odds flex flex-inherit background-transparent-b-30 border-bottom-white-strong height-40 align-items-center-inherit ">
                              <div class="widthp-50 flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">좌</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">1.95</span>
                                 </div>
                              </div>
                              <div class="widthp-50 border-left flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">우</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">1.95</span>
                                 </div>
                              </div>
                           </div>
                           <div class="games-rows-linetext flex flex-inherit height-40 padding-horizontal-15 background-transparent-b-30 align-items-center-inherit border-bottom-white-strong">
                              <div class="line-name grow-2">
                                 <i class="fas fa-plus-square color-white padding-right-5"></i>
                                 <span class="color-white">3줄 / 4줄</span>
                              </div>
                           </div>
                           <div class="games-rows-odds flex flex-inherit background-transparent-b-30 border-bottom-white-strong height-40 align-items-center-inherit ">
                              <div class="widthp-50 flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">3줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">1.95</span>
                                 </div>
                              </div>
                              <div class="widthp-50 border-left flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">4줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">1.95</span>
                                 </div>
                              </div>
                           </div>
                           <div class="games-rows-linetext flex flex-inherit height-40 padding-horizontal-15 background-transparent-b-30 align-items-center-inherit border-bottom-white-strong">
                              <div class="line-name grow-2">
                                 <i class="fas fa-plus-square color-white padding-right-5"></i>
                                 <span class="color-white">좌출발 3줄 / 좌출발 4줄</span>
                              </div>
                           </div>
                           <div class="games-rows-odds flex flex-inherit background-transparent-b-30 border-bottom-white-strong height-40 align-items-center-inherit ">
                              <div class="widthp-50 flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">좌출발 3줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">3.50</span>
                                 </div>
                              </div>
                              <div class="widthp-50 flex-inherit border-left background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">좌출발 4줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">3.95</span>
                                 </div>
                              </div>
                           </div>
                           <div class="games-rows-linetext flex flex-inherit height-40 padding-horizontal-15 background-transparent-b-30 align-items-center-inherit border-bottom-white-strong">
                              <div class="line-name grow-2">
                                 <i class="fas fa-plus-square color-white padding-right-5"></i>
                                 <span class="color-white">우출발 3줄 / 우출발 4줄</span>
                              </div>
                           </div>
                           <div class="games-rows-odds flex flex-inherit background-transparent-b-30 border-bottom-white-strong height-40 align-items-center-inherit ">
                              <div class="widthp-50 flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">우출발 3줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">3.50</span>
                                 </div>
                              </div>
                              <div class="widthp-50 border-left flex-inherit background-transparent-w-5">
                                 <div class="grow-2 padding-left-15">
                                    <span class="color-grey">우출발 4줄</span>
                                 </div>
                                 <div class="padding-right-15">
                                    <span class="color-grey">3.95</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="games-header-tab games-header-mobile flex-inherit flex-column shrink-0 border-bottom align-items-center">
            <div class="widthp-100 flex flex-inherit gamestab-top border-bottom">
               <div class="widthp-33 main-category border-right flex-inherit">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-dhlottery"></i>
                     <span class="color-grey">MINIGAME</span>
                     <span class="color-grey">동행복권</span>
                  </NavLink>
               </div>
               <div class="widthp-33 main-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-ntry"></i>
                     <span class="color-grey">MINIGAME</span>
                     <span class="color-grey">엔트리</span>
                  </NavLink>
               </div>
               <div class="widthp-33 main-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-lotus"></i>
                     <span class="color-grey">MINIGAME</span>
                     <span class="color-grey">로투스</span>
                  </NavLink>
               </div>
            </div>
            <div class="widthp-100 flex flex-inherit gamestab-row">
               <div class="widthp-20 subclass-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-dalpangi"></i>
                  </NavLink>
               </div>
               <div class="widthp-20 subclass-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-ladder"></i>
                  </NavLink>
               </div>
               <div class="widthp-20 subclass-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-p-ladder"></i>
                  </NavLink>
               </div>
               <div class="widthp-20 subclass-category border-right">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-lottery"></i>
                  </NavLink>
               </div>
               <div class="widthp-20 subclass-category">
                  <NavLink activeClassName="active" to="#">
                     <i class="pi-color-icon-powerball"></i>
                  </NavLink>
               </div>
            </div>
         </div>
         <div class="games-wrap games-content-mobile flex-inherit flex-column">
            <div class="games-list grow-2 flex-column">
               <div class="flex widthp-100 height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title green">
                     <span class="color-white padding-left-15">엔트리 파워볼</span>
                  </div>
               </div>
               <div class="flex list border-bottom align-items-center-inherit border-bottom">
                  <div class="widthp-100 height-200 flex align-items-center justify-content-center color-white">파워볼 화면</div>
               </div>
               <div class="flex list height-40 align-items-center-inherit border-bottom background-transparent-b-20">
                  <div class="flex pi-title border-right grow-2">
                     <span class="color-white padding-left-15 grow-2">2020년 1월 24일 129회차</span>
                  </div>
                  <div class="flex border-left">
                     <button type="button" class="color-white heightp-100 align-items-center padding-horizontal-15">
                        <i class="fal fa-angle-up"></i>
                     </button>
                  </div>
               </div>
               <div class="flex height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title orange">
                     <span class="color-white padding-left-15">홀/짝</span>
                  </div>
               </div>
               <div class="flex games-odds border-bottom flex-inherit justify-content-center-inherit">
                  <div class="widthp-50 border-right padding-vertical-10">
                     <span class="color-white grow-2">좌</span>
                     <span class="color-green">1.20</span>
                  </div>
                  <div class="widthp-50 padding-vertical-10">
                     <span class="color-white grow-2">우</span>
                     <span class="color-green">1.50</span>
                  </div>
               </div>

               <div class="flex height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title orange">
                     <span class="color-white padding-left-15">좌출발/우출발</span>
                  </div>
               </div>
               <div class="flex games-odds border-bottom flex-inherit justify-content-center-inherit">
                  <div class="widthp-50 border-right padding-vertical-10">
                     <span class="color-white grow-2">좌</span>
                     <span class="color-green">1.20</span>
                  </div>
                  <div class="widthp-50 padding-vertical-10">
                     <span class="color-white grow-2">우</span>
                     <span class="color-green">1.50</span>
                  </div>
               </div>

               <div class="flex height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title orange">
                     <span class="color-white padding-left-15">3줄/4줄</span>
                  </div>
               </div>
               <div class="flex games-odds border-bottom flex-inherit justify-content-center-inherit">
                  <div class="widthp-50 border-right padding-vertical-10">
                     <span class="color-white grow-2">3줄</span>
                     <span class="color-green">1.34</span>
                  </div>
                  <div class="widthp-50 padding-vertical-10">
                     <span class="color-white grow-2">4줄</span>
                     <span class="color-green">1.44</span>
                  </div>
               </div>

               <div class="flex height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title orange">
                     <span class="color-white padding-left-15">좌출발 3줄 / 좌출발 4줄</span>
                  </div>
               </div>
               <div class="flex games-odds border-bottom flex-inherit justify-content-center-inherit">
                  <div class="widthp-50 border-right padding-vertical-10">
                     <span class="color-white grow-2">좌출발 3줄</span>
                     <span class="color-green">1.11</span>
                  </div>
                  <div class="widthp-50 padding-vertical-10">
                     <span class="color-white grow-2">좌출발 4줄</span>
                     <span class="color-green">1.35</span>
                  </div>
               </div>

               <div class="flex height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title orange">
                     <span class="color-white padding-left-15">우출발 3줄 / 우출발 4줄</span>
                  </div>
               </div>
               <div class="flex games-odds border-bottom flex-inherit justify-content-center-inherit">
                  <div class="widthp-50 border-right padding-vertical-10">
                     <span class="color-white grow-2">우출발 3줄</span>
                     <span class="color-green">1.11</span>
                  </div>
                  <div class="widthp-50 padding-vertical-10">
                     <span class="color-white grow-2">우출발 4줄</span>
                     <span class="color-green">1.35</span>
                  </div>
               </div>
               <div class="flex list height-40 align-items-center-inherit border-bottom background-transparent-b-20">
                  <div class="flex pi-title border-right grow-2">
                     <span class="color-white padding-left-15 grow-2">2020년 1월 24일 130회차</span>
                  </div>
                  <div class="flex border-left">
                     <button type="button" class="color-white heightp-100 align-items-center padding-horizontal-15">
                        <i class="fal fa-angle-down"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
