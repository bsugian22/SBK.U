// import { createStore } from 'redux'

// import { composeWithDevTools } from 'redux-devtools-extension'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import rootReducers from '../reducers/rootReducers'

// import * as userActions from '../actions/user'
// import * as preferencesAction from '../actions/preferences'

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const enhancedReducer = persistReducer(persistConfig, rootReducers)

// export const mapStateToProps = (state) => {
//     return {
//         preferences: state.preferencesStore.preferences,
//         user: state.userStore.user
//     }
// }

// export const mapDispatchProps = (dispatch) => {
//     return {
//         setUser: (payload) => { 
//             dispatch(userActions.setUser(payload))
//         },
//         setAccessToken: (payload) => { 
//             localStorage.setItem('ACCESS_TOKEN', payload.access_token)
//             dispatch(userActions.setAccessToken(payload))
//         },
//         setLogout: () => {
//             localStorage.removeItem('ACCESS_TOKEN')
//             dispatch(userActions.setLogout())
//         },
//         setPreferences: (payload) => { 
//             dispatch(preferencesAction.setPreferences(payload))
//         },
//         setDarkmode: (toggle) => {
//             dispatch(preferencesAction.setDarkmode(toggle))
//         }
//     }
// }

// export default createStore(enhancedReducer, composeWithDevTools())
