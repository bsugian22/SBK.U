import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchProps } from '../../helpers/store'

const UserNaviBtn = (props) => {
   const { user } = props

   const context = useContext(MenuContext)

   const toggleRightMenu = () => {
      context.actions.setRightMenu(!context.state.rightMenu)
      if (context.state.rightMenu) {
         document.body.classList.remove('inter-slidemenu-open')
      } else {
         document.body.classList.add('inter-slidemenu-open')
      }
   }

   if (user.isAuth) {
      return (
         <button type="button" class="mobile-utility-login">
            <NavLink activeClassName="active" to="#" onClick={toggleRightMenu}>
               <i class={context.state.rightMenu ? 'fas fa-times' : 'fal fa-users'}></i>
            </NavLink>
         </button>
      )
   } else {
      return (
         <button type="button" class="mobile-utility-login">
            <NavLink activeClassName="active" to="/login">
               <i class="fal fa-users"></i>
            </NavLink>
         </button>
      )
   }
}

export default connect(mapStateToProps, mapDispatchProps)(UserNaviBtn)
