import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import MenuContext from '../../contexts/Menu.context'
function SidebarNavi() {
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
      <Fragment>
         <div class="inter-left-menu inter-slidemenu" class={context.state.menu ? 'inter-left-menu inter-slidemenu on inter-slidemenu-open' : 'inter-left-menu inter-slidemenu'}>
            <div class="inter-left-menu-blank" onClick={toggleMenu}></div>
            <div class="inter-slidemenu-content flex flex-column">
               <div class="inter-slidemenu-tab widthp-100 flex flex-inherit align-items-center align-items-center-inherit justify-content-center-inherit">
                  <div class="border-right widthp-20 heightp-100 btn-sports">
                     <button type="button" id="slide-tab-1" class={context.state.subMenu === 'sports' ? 'sports active' : 'sports'} onClick={() => context.actions.setSubMenu('sports')}></button>
                  </div>
                  <div class="border-right widthp-20 heightp-100 btn-inplay">
                     <button type="button" id="slide-tab-2" class={context.state.subMenu === 'inplay' ? 'inplay active' : 'inplay'} onClick={() => context.actions.setSubMenu('inplay')}></button>
                  </div>
                  <div class="border-right widthp-20 heightp-100 btn-casino">
                     <button type="button" id="slide-tab-2" class={context.state.subMenu === 'casino' ? 'casino active' : 'casino'} onClick={() => context.actions.setSubMenu('casino')}></button>
                  </div>
                  <div class="border-right widthp-20 heightp-100 btn-esports">
                     <button type="button" id="slide-tab-2" class={context.state.subMenu === 'esports' ? 'esports active' : 'esports'} onClick={() => context.actions.setSubMenu('esports')}></button>
                  </div>
                  <div class="border-right widthp-20 heightp-100 btn-promotion">
                     <button
                        type="button"
                        id="slide-tab-2"
                        class={context.state.subMenu === 'promotion' ? 'promotion active' : 'promotion'}
                        onClick={() => context.actions.setSubMenu('promotion')}
                     ></button>
                  </div>
               </div>
               <div class="inter-slidemenu-inner widthp-100 flex flex-inherit flex-column scrollable-auto">
                  <div class={context.state.subMenu === 'sports' ? 'interload-slide-tab flex flex-column flex-inherit on' : 'interload-slide-tab flex flex-column flex-inherit'}>
                     <div class="height-40 align-items-center-inherit border-bottom">
                        <div class="flex pi-title red">
                           <span class="color-white padding-left-15">Sports</span>
                        </div>
                     </div>
                     <div class="height-40 align-items-center-inherit border-bottom">
                        <div class="flex pi-title">
                           <span class="color-white padding-left-15">즐겨찾는 경기</span>
                        </div>
                     </div>

                     {SidebarData.map((item, index) => {
                        return (
                           <div key={index} class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                              <div class="flex grow-2 flex-inherit">
                                 <Link to={item.path} className="color-white" onClick={toggleMenu}>
                                    <span>{item.title}</span>
                                 </Link>
                              </div>
                              <div class="flex">
                                 <Link to="#" className="color-white">
                                    <i class="far fa-star"></i>
                                 </Link>
                              </div>
                           </div>
                        )
                     })}
                  </div>
                  <div class={context.state.subMenu === 'inplay' ? 'interload-slide-tab flex flex-column flex-inherit on' : 'interload-slide-tab flex flex-column flex-inherit'}>
                     <div class="height-40 align-items-center-inherit border-bottom">
                        <div class="flex pi-title red">
                           <span class="color-white padding-left-15">Inplay</span>
                        </div>
                     </div>
                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-soccer"></i>
                                 <span>Soccer</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white soccer-count">127</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-icehockey"></i>
                                 <span>Ice Hockey</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white ice-hockey-count">12</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-badminton"></i>
                                 <span>Badminton</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white badminton-count">2</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-baseball"></i>
                                 <span>Baseball</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white baseball-count">43</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-cricket"></i>
                                 <span>Cricket</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white cricket-count">1</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-basketball"></i>
                                 <span>Basketball</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white basketball-count">1</span>
                        </div>
                     </div>

                     <div class="inter-slide-list border-bottom padding-horizontal-15 padding-vertical-10">
                        <div class="flex grow-2 flex-inherit">
                           <span>
                              <Link to="#" className="color-white list-icon-text" onClick={toggleMenu}>
                                 <i class="pi-color-icon-tennis"></i>
                                 <span>Tennis</span>
                              </Link>
                           </span>
                        </div>
                        <div class="flex">
                           <span class="color-white tennis-count">1</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default SidebarNavi
