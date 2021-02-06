import React, { Fragment, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AccountNavi from '../navigations/AccountNavi'
import BookNavi from '../navigations/BookNavi'
import GameNavi from '../navigations/GameNavi'
import BetslipNavi from '../navigations/BetslipNavi'
import AccountStatusNavi from '../navigations/AccountStatusNavi'
import sweetalert from '../../plugins/sweetalert'
import { mapStateToProps, mapDispatchProps } from '../../helpers/store'

const AuthorizedRoute = (props) => {
   const { component: Component, auth, useAccountNavi, useBookNavi, useBetslipNavi, useGameNavi, useAccountStatusNavi, user, preferences, ...rest } = props
   const swal = new sweetalert()

   return (
      <Fragment>
         {useBookNavi ? (
            <Route
               {...rest}
               render={(props) => {
                  return <BookNavi {...props} />
               }}
            />
         ) : (
            ''
         )}
         {useAccountNavi ? (
            <Route
               {...rest}
               render={(props) => {
                  if (user.isAuth || (!auth && !user.isAuth)) return <AccountNavi {...props} />
               }}
            />
         ) : (
            ''
         )}

         {useGameNavi ? (
            <Route
               {...rest}
               render={(props) => {
                  return <GameNavi {...props} />
               }}
            />
         ) : (
            ''
         )}
         <Route
            {...rest}
            render={(props) => {
               if (user.isAuth || (!auth && !user.isAuth)) return Component ? <Component {...props} /> : render(props)
               else {
                  swal.error('로그인 후 이용가능 합니다.')

                  return <Redirect to="/" />
               }
            }}
         />
         {useBetslipNavi ? (
            <Route
               {...rest}
               render={(props) => {
                  return <BetslipNavi {...props} />
               }}
            />
         ) : (
            ''
         )}

         {useAccountStatusNavi ? (
            <Route
               {...rest}
               render={(props) => {
                  //return <AccountStatusNavi {...props} />
                  if (user.isAuth || (!auth && !user.isAuth)) return <AccountStatusNavi {...props} />
               }}
            />
         ) : (
            ''
         )}
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(AuthorizedRoute)
