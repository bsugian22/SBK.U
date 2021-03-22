import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";
import Swiper from 'react-id-swiper'
import { Link, NavLink } from 'react-router-dom'
const SwiperMain = () => {
   const params = {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   }
   let isSubscribed = true;
const dispatch = useDispatch();

  useEffect(() => {
    isSubscribed = true;
    return () => {
      isSubscribed = false;
    };
  }, []);

   return (
      <Fragment>
         <Swiper {...params}>
            <div class="swiper-slide">
               <div class="bonus-offer flex flex-column flex-inherit justify-content-center align-items-center">
                  <div>
                     <h1 class="big-title color-yellow">100%</h1>
                  </div>
                  <div>
                     <span class="sm-title color-yellow">WELCOME BONUS OFFER</span>
                  </div>
                  <div>
                     <span class="sm-title color-white">Take Advantage Of Our 10% Welcome Bouns</span>
                  </div>
                  <div class="padding-top-30">
                     <Link to="#" className="link-box">
                        JOIN US
                     </Link>
                  </div>
               </div>
            </div>
            <div class="swiper-slide">
               <div class="casino-offer flex flex-column flex-inherit justify-content-center align-items-center">
                  <div>
                     <h1 class="big-title color-yellow">100%</h1>
                  </div>
                  <div>
                     <span class="sm-title color-yellow">WELCOME BONUS OFFER</span>
                  </div>
                  <div>
                     <span class="sm-title color-white">Take Advantage Of Our 10% Welcome Bouns</span>
                  </div>
                  <div class="padding-top-30">
                     <Link to="#" className="link-box">
                        JOIN US
                     </Link>
                  </div>
               </div>
            </div>
         </Swiper>
      </Fragment>
   )
}
export default SwiperMain
