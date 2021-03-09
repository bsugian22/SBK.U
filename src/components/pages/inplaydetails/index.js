import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";

import { Link, NavLink } from 'react-router-dom'
export default function InplayDetail() {

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
         <div class="odds-detail-wrap flex-inherit flex-column widthp-100">
            <div class="odds-detail-league-title widthp-100 height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title green grow-2 border-right">
                  <span class="color-white padding-left-15">
                     SOCCER - <strong>European U21 Championship</strong>
                  </span>
               </div>
               <div class="flex">
                  <Link to="/inplay" className="color-white padding-horizontal-15 flex align-items-center heightp-100">
                     <i class="fal fa-angle-double-left"></i>
                  </Link>
               </div>
            </div>
            <div class="odds-detail-datetime widthp-100 height-40 align-items-center-inherit border-bottom padding-horizontal-15">
               <div class="flex grow-2">
                  <span class="color-yellow grow-2">전반 24:12</span>
               </div>
               <div class="flex">
                  <span class="color-grey">2020.11.01 22:00</span>
               </div>
            </div>
            <div class="odds-detail-team-score widthp-100 height-40 align-items-center-inherit border-bottom padding-horizontal-15">
               <div class="flex widthp-50 flex-inherit align-items-center-inherit">
                  <span class="color-white heightp-100 grow-2">AI Naser SC</span>
                  <span class="color-green heightp-100 padding-horizontal-10 score">0</span>
               </div>
               <div class="flex widthp-50 flex-inherit align-items-center-inherit">
                  <span class="color-green heightp-100 grow-2 padding-horizontal-10 score">0</span>
                  <span class="color-white heightp-100 justify-content-end widthp-100 team-name">AI Arabi SC</span>
               </div>
            </div>
            <div class="odds-detail-tab" id="swiper_odds_tab">
               <div class="flex odds-arrow swiper-button-prev border-right justify-content-center align-items-center background-transparent-b-20">
                  <button type="button" class="odds-tab-left">
                     <i class="fal fa-angle-left"></i>
                  </button>
               </div>
               <ul class="swiper-wrapper flex align-items-center widthp-100">
                  <li>
                     <NavLink activeClassName="active" to="/#">
                        모두보기
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        승무패
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        핸디캡
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        오버/언더
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        test2
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        test3
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        test4
                     </NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName="active" to="#">
                        test5
                     </NavLink>
                  </li>
               </ul>
               <div class="flex odds-arrow swiper-button-next justify-content-center align-items-center background-transparent-b-20">
                  <button type="button" class="odds-tab-right">
                     <i class="fal fa-angle-right"></i>
                  </button>
               </div>
            </div>
            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">승무패</span>
               </div>
            </div>
            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white">AI Naser SC</span>
               </div>
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white">무승부</span>
               </div>
               <div class="widthp-33 padding-vertical-10">
                  <span class="color-white">AI Arbi SC</span>
               </div>
            </div>
            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-green">2.14</span>
               </div>
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-green">3.30</span>
               </div>
               <div class="widthp-33 padding-vertical-10">
                  <span class="color-green">3.45</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">승무패 핸디캡</span>
               </div>
            </div>

            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white">AI Naser SC</span>
               </div>
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white">무승부</span>
               </div>
               <div class="widthp-33 padding-vertical-10">
                  <span class="color-white">AI Arbi SC</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white grow-2">0:1</span>
                  <span class="color-green">1.11</span>
               </div>
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white grow-2">0:1</span>
                  <span class="color-green">4.50</span>
               </div>
               <div class="widthp-33 padding-vertical-10">
                  <span class="color-white grow-2">0:1</span>
                  <span class="color-green">9.50</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-33 border-right padding-vertical-10">
                  <span class="color-white grow-2">0:2</span>
                  <span class="color-green">8.13</span>
               </div>
               <div class="widthp-33 border-right padding-vertical-10 active">
                  <span class="color-white grow-2">0:2</span>
                  <span class="color-green">9.50</span>
               </div>
               <div class="widthp-33 padding-vertical-10">
                  <span class="color-white grow-2">0:2</span>
                  <span class="color-green">30.00</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">아시안 오버 / 언더</span>
               </div>
            </div>

            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">오버</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">언더</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">2.5</span>
                  <span class="color-green">1.11</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">2.5</span>
                  <span class="color-green">9.50</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">3.5</span>
                  <span class="color-green">8.13</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">3.5</span>
                  <span class="color-green">30.00</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">전반 스코어 홀/짝</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">홀</span>
                  <span class="color-green">1.11</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">짝</span>
                  <span class="color-green">9.50</span>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
