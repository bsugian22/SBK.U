import React, { Fragment, useEffect } from 'react'
import AuthorizedRoute from './AuthorizedRoute'
import { routes } from '../../routes'
import preferencesModel from '../../models/preferencesModel'
import { mapStateToProps, mapDispatchProps } from '../../redux/store'
import echo from '../../plugins/echo'
// import { connect } from "react-redux";
import { fetchSummary } from "../../redux/navigations/accountSummary/accountSummaryActions";

import { connect, useSelector, useDispatch } from "react-redux";

const Container = (props) => {
   let isSubscribed = true
   const { preferences, setPreferences, setUser, setSports } = props
   const model = new preferencesModel()
   let user = useSelector((state) => state.user.user);
   const dispatch = useDispatch();

   useEffect(() => {
      preferencesFetch()
      pusher();
      setSports();
      return () => {
         isSubscribed = false
      }
   }, [])

   const preferencesFetch = async () => {
      const preferences_data = await model.index()

      if (isSubscribed) {
         setPreferences(preferences_data.data.data)
      }
   }

   const pusher = () => {
      if (user.isAuth) {
         echo.private(`users.${user.member.id}`).listen('PreferencesUpdated', (e) => {
            setPreferences()
         })
      }

      if (user.isAuth) {
         echo.private(`users.${user.member.id}`).listen('UserUpdated', (e) => {
            setUser(e)
            dispatch(fetchSummary());
         })
      }
   }

   return (
      <Fragment>
         <div class="continer border-top flex flex-inherit flex-row">
            {routes.map((route, index) => (
               <AuthorizedRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  auth={route.auth}
                  useAccountNavi={route.useAccountNavi}
                  useBookNavi={route.useBookNavi}
                  useBetslipNavi={route.useBetslipNavi}
                  useGameNavi={route.useGameNavi}
                  useAccountStatusNavi={route.useAccountStatusNavi}
                  component={route.component}
               />
            ))}
         </div>
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(Container)
