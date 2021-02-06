import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchProps } from '../../redux/store'
import { addBodyClass, removeBodyClass } from '../../helpers/class'
import Logo from './Logo'
import Outlogin from './Outlogin'
import SidebarNavi from '../navigations/SidebarNavi'
import SidebarBtn from '../navigations/SidebarBtn'
import UserNaviBtn from '../navigations/UserNaviBtn'
import UserNavi from '../navigations/UserNavi'
import MenuContext from '../../contexts/Menu.context'
const Header = (props) => {
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

   const context = useContext(MenuContext)

   return (
      <Fragment>
         <div class="mobile-header-quick border-bottom padding-10" id="swiper_category_menu">
            <ul class="swiper-wrapper">
               <li>
                  <NavLink activeClassName="active" to="/sports">
                     SPORTS
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" to="/inplay">
                     INPLAY
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" to="/esports">
                     ESPORTS
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" to="/games">
                     GAMES
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" to="/casino">
                     CASINO
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" to="/promo">
                     PROMO
                  </NavLink>
               </li>
            </ul>
         </div>
         <div class="header-utility border-bottom height-60 flex color-grey justify-content-center-inherit padding-15 align-items-center-inherit">
            <SidebarBtn />
            <div class="header-logo-rendering flex">
               <Link to="/">
                  <Logo width="120" height="30" />
               </Link>
            </div>
            <button
               type="button"
               class={context.state.searchBar ? 'mobile-utility-search margin-right-15 green' : 'mobile-utility-search margin-right-15'}
               onClick={() => {
                  context.actions.setSearchBar(true)
               }}
            >
               <i class="fal fa-search"></i>
            </button>

            <UserNaviBtn />

            <div class="header-utility-naviguide flex flex-inherit padding-10-inherit grow-2">
               <div>
                  <NavLink activeClassName="active" to="/sports">
                     SPORTS
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="/inplay">
                     INPLAY
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="/esports">
                     ESPORTS
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="/games">
                     GAMES
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="/casino">
                     CASINO
                  </NavLink>
               </div>
               <div>
                  <NavLink activeClassName="active" to="/promo">
                     PROMO
                  </NavLink>
               </div>
            </div>

            <div class="header-utility-helpdesk flex">
               <button class="background-transparent color-grey padding-5 margin-right-5" onClick={toggleDarkmode}>
                  {preferences.darkmode ? <i class="fas fa-moon margin-0 color-yellow"></i> : <i class="fas fa-moon margin-0"></i>}
               </button>
               <button class="background-transparent color-grey padding-5 margin-right-5">
                  <i class="fas fa-question-circle margin-0"></i>
               </button>
               <button class="background-transparent color-grey padding-5 ">
                  <i class="fal fa-globe margin-0"></i>
               </button>
            </div>
         </div>
         <SidebarNavi />
         <UserNavi />
         <div
            class={
               context.state.searchBar
                  ? 'header-utility-search align-items-center-inherit border-bottom widthp-100 background-transparent-b-15 active'
                  : 'header-utility-search align-items-center-inherit border-bottom widthp-100 background-transparent-b-15'
            }
         >
            <div class="flex grow-2 padding-horizontal-15 height-40">
               <input type="text" name="q" placeholder="찾으시는 팀 또는 리그명을 입력해주세요." />
               <button
                  type="button"
                  class="color-red"
                  onClick={() => {
                     context.actions.setSearchBar(false)
                  }}
               >
                  <i class="fas fa-times"></i>
               </button>
            </div>
         </div>
         <Outlogin />
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(Header)
