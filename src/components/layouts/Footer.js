import React, { Fragment } from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
   const handleScroll = () => {
      document.querySelector('body').scrollTo(0, 0)
   }
   return (
      <Fragment>
         <div id="swal-container-custom"></div>
         <div class="flex flex-column align-items-center-inherit flex-inherit justify-content-center-inherit padding-vertical-30 footer">
            <div>
               <button type="button" class="toproll background-green padding-15" onClick={handleScroll}>
                  <i class="fal fa-angle-double-up"></i>
               </button>
            </div>
            <div>
               <p class="color-white">Back to top</p>
            </div>
            <div>
               <p class="color-white width-300 text-align-center">
                  Gambling can be addictive , please play responsibly. For information on support measures, pleass visit our Responsible Gambling Help Pagge
               </p>
            </div>
            <div class="flex-row padding-top-20 padding-15">
               <div class="footer-qucik-menu">
                  <Link to="#" className="color-white">
                     Preferences
                  </Link>
               </div>
               <div class="footer-qucik-menu">
                  <Link to="#" className="color-white">
                     Rules
                  </Link>
               </div>
               <div class="footer-qucik-menu">
                  <Link to="#" className="color-white">
                     Contact Us
                  </Link>
               </div>
               <div class="footer-qucik-menu">
                  <Link to="#" className="color-white">
                     FAQ
                  </Link>
               </div>
               <div class="footer-qucik-menu">
                  <Link to="#" className="color-white">
                     Privacy Policy
                  </Link>
               </div>
            </div>
            <div class="padding-vertical-15">
               <Link to="/">
                  <Logo width="80" height="20" />
               </Link>
            </div>
            <div class="footer-most-bottom">
               <p class="color-grey">WORLDCLASS SPORTS-BOOK MAKER</p>
            </div>
            <div class="footer-most-bottom">
               <p class="color-grey">© 2009-2020 TERA. All Rights Reserved.</p>
            </div>
         </div>
      </Fragment>
   )
}
