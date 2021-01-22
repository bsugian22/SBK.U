import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'
import { connect } from 'react-redux'
import { UserNaviData } from './UserNaviData'
import { mapStateToProps, mapDispatchProps } from '../../helpers/store'
import { addBodyClass, removeBodyClass } from '../../helpers/class'
const UserNavi = (props) => {
   const { user } = props

   const context = useContext(MenuContext)

   const { preferences, setDarkmode } = props

   useEffect(() => {
      if (preferences.darkmode) {
         removeBodyClass('normalMode')
         addBodyClass('darkMode')
      } else {
         removeBodyClass('darkMode')
         addBodyClass('normalMode')
      }
   }, [preferences.darkmode])

   const toggleDarkmode = () => {
      setDarkmode(!preferences.darkmode)
   }

   const toggleRightMenu = () => {
      context.actions.setRightMenu(!context.state.rightMenu)
      if (context.state.rightMenu) {
         document.body.classList.remove('inter-slidemenu-open')
      } else {
         document.body.classList.add('inter-slidemenu-open')
      }
   }

   return (
      <Fragment>
         <div class="inter-right-menu right inter-slidemenu" class={context.state.rightMenu ? 'inter-right-menu right inter-slidemenu active on' : 'inter-right-menu right inter-slidemenu'}>
            <div class="inter-right-menu-blank" onClick={toggleRightMenu}></div>
            <div class="inter-slidemenu-content right flex flex-column flex-inherit">
               <div class="widthp-100 inter-slidemenu-user-box flex flex-inherit border-bottom">
                  <div class="inter-slidemenu-user grow-2 flex flex-column justify-content-center padding-left-15">
                     <div>
                        <span class="color-white">안녕하세요. {user.member.nickname} 회원님</span>
                     </div>
                     <div>
                        <span class="color-yellow">Lv.{user.member.level}</span>
                     </div>
                  </div>
                  <div class="align-items-center padding-right-15">
                     <button class="background-transparent color-grey padding-5" onClick={toggleDarkmode}>
                        {preferences.darkmode ? <i class="fas fa-moon margin-0 color-yellow"></i> : <i class="fas fa-moon margin-0"></i>}
                     </button>
                  </div>
               </div>
               <div class="inter-slidemenu-money flex align-items-center  justify-content-inherit border-bottom">
                  <div class="widthp-50 flex flex-column padding-15 border-right">
                     <div>
                        <span class="color-grey">예치금 잔고</span>
                     </div>
                     <div>
                        <span class="color-green">{Number(user.member.cash).toLocaleString()}원</span>
                     </div>

                     <div>
                        <Link to="/account/deposit" className="color-white" onClick={toggleRightMenu}>
                           충전신청
                        </Link>
                     </div>
                  </div>

                  <div class="widthp-50 flex flex-column padding-15">
                     <div>
                        <span class="color-grey">출금가능 예치금</span>
                     </div>
                     <div>
                        <span class="color-green">50,000,000원</span>
                     </div>

                     <div>
                        <Link to="/account/withdraw" className="color-white" onClick={toggleRightMenu}>
                           전환신청
                        </Link>
                     </div>
                  </div>
               </div>

               <div class="inter-slidemenu-money flex align-items-center  justify-content-inherit border-bottom">
                  <div class="widthp-50 flex flex-column padding-15 border-right">
                     <div>
                        <span class="color-grey">카지노머니 잔고</span>
                     </div>
                     <div>
                        <span class="color-green">300,000원</span>
                     </div>

                     <div>
                        <Link to="/account/exchange" className="color-white" onClick={toggleRightMenu}>
                           전환신청
                        </Link>
                     </div>
                  </div>

                  <div class="widthp-50 flex flex-column padding-15">
                     <div>
                        <span class="color-grey">보너스 크레딧</span>
                     </div>
                     <div>
                        <span class="color-green">500,000원</span>
                     </div>

                     <div>
                        <Link to="/account/exchange" className="color-white" onClick={toggleRightMenu}>
                           전환신청
                        </Link>
                     </div>
                  </div>
               </div>
               <div class="inter-slidemenu-mypage-inner widthp-100 flex flex-inherit flex-column scrollable-auto">
                  {UserNaviData.map((item, index) => {
                     return (
                        <div key={index} class="inter-slidemenu-list flex flex-column padding-15 justify-content-inherit border-bottom">
                           <Link to={item.path} className="color-white" onClick={toggleRightMenu}>
                              <div>
                                 <span class="color-white">{item.title}</span>
                              </div>
                              <div>{item.comment}</div>
                           </Link>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(UserNavi)
