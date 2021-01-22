import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import AuthorizedRoute from './AuthorizedRoute'
import { routes } from '../../routes'
import preferencesModel from '../../models/preferencesModel'
import { mapStateToProps, mapDispatchProps } from '../../helpers/store'

const Container = (props) =>
{
    let isSubscribed = true
    const { preferences, setPreferences } = props
    const model = new preferencesModel()

    useEffect(() => {
        preferencesFetch()

        return() => {
            isSubscribed = false
        }
    }, [])

    const preferencesFetch = async () => {
        const preferences_data = await model.index()

        if(isSubscribed) {
            setPreferences(preferences_data.data.data)
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
                    component={route.component}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Container)