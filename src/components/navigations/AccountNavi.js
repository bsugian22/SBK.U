import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AccountNavi(props) {
   return (
      <div class="left-account-sidebar content-height width-300 flex-inherit flex-column scrollable-auto border-right border-right-shadow">
         <NavLink activeClassName="background-transparent-b-5 active" to="/account/deposit" className="padding-10 flex-inherit justify-content-center-inherit  align-items-center border-bottom">
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-hand-holding-usd color-grey fa-2x"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">DEPOSIT</span>
               <span class="color-grey">충전 신청과 내역을 확인하실 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/withdraw"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-hands-usd fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">WITHDRAW</span>
               <span class="color-grey">출금신청과 내역을 확인할 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/exchange"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-sync-alt fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">EXCHANGE</span>
               <span class="color-grey">카지노머니전환과 내역을 확인할 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/position"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-list-ul fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">HISTORY</span>
               <span class="color-grey">배팅내역을 확인할 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/notice"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-megaphone fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">NOTICE</span>
               <span class="color-grey">이벤트와 공지사항을 확인하실 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/inquiry"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-comments-alt fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">INQUIRY</span>
               <span class="color-grey">1:1문의신청과 내역을 확인할 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/message"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-envelope fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">MESSAGE</span>
               <span class="color-grey">메세지 수신내역을 확인할 수 있습니다</span>
            </div>
         </NavLink>
         <NavLink
            activeClassName="background-transparent-b-5 active"
            to="/account/settings"
            className="padding-10 flex-inherit  justify-content-center-inherit  align-items-center border-top border-bottom"
         >
            <div class="icon-box width-45 height-45 background-transparent-w-5 align-items-center">
               <i class="fad fa-user-cog fa-2x color-grey"></i>
            </div>
            <div class="title-name widthp-100 flex-column padding-left-15">
               <span class="color-white">SETTINGS</span>
               <span class="color-grey">프로필 및 개인 정보를 수정하실 수 있습니다</span>
            </div>
         </NavLink>
      </div>
   )
}
