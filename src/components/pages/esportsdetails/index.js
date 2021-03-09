import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";
import { Link, NavLink } from 'react-router-dom'

export default function EsportsDetail() {

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
                     LOL - <strong>WORLD CHAMPS</strong>
                  </span>
               </div>
               <div class="flex">
                  <Link to="/esports" className="color-white padding-horizontal-15 flex align-items-center heightp-100">
                     <i class="fal fa-angle-double-left"></i>
                  </Link>
               </div>
            </div>
            <div class="odds-detail-team border-bottom padding-15 flex-column">
               <div class="flex">
                  <span class="datetime color-yellow">
                     <strong>2020.11.11 19:00</strong>
                  </span>
               </div>
               <div class="flex">
                  <span class="color-white">DAMWON Gaming</span>
                  <span class="color-grey padding-horizontal-5">VS</span>
                  <span class="color-white">Suning</span>
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
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">DAMWON Gaming</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">Suning</span>
               </div>
            </div>
            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-green">2.14</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-green">3.45</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">핸디캡</span>
               </div>
            </div>

            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">DAMWON Gaming</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">Suning</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">-1.5</span>
                  <span class="color-green">2.14</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white grow-2">+1.5</span>
                  <span class="color-green">3.45</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">TOTAL MAPS</span>
               </div>
            </div>

            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">DAMWON Gaming</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">Suning</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white widthp-33">오버</span>
                  <span class="color-white widthp-33">4.5</span>
                  <span class="color-green widthp-33">2.14</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white widthp-33">언더</span>
                  <span class="color-white widthp-33">4.5</span>
                  <span class="color-green widthp-33">3.45</span>
               </div>
            </div>

            <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20">
               <div class="flex pi-title">
                  <span class="color-white padding-left-15">MAP - 1 승무패</span>
               </div>
            </div>

            <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">DAMWON Gaming</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-white">Suning</span>
               </div>
            </div>

            <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-green">1.57</span>
               </div>
               <div class="widthp-50 border-right padding-vertical-10">
                  <span class="color-green">2.25</span>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
