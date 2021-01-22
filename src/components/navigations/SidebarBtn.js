import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'

function SidebarBtn() {
   const context = useContext(MenuContext)
   const toggleMenu = () => {
      context.actions.setMenu(!context.state.menu)
      if (context.state.menu) {
         document.body.classList.remove('inter-slidemenu-open')
      } else {
         document.body.classList.add('inter-slidemenu-open')
      }
   }
   return (
      <button type="button" class="mobile-utility-left-menu login-out" onClick={toggleMenu}>
         <i class={context.state.menu ? 'fas fa-times' : 'fal fa-stream'}></i>
      </button>
   )
}

export default SidebarBtn
