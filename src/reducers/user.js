// import * as types from '../actions/user';

// const initialState = {
//     user : {
//         isAuth: false,
//         access_token: '',
//         expires_in: '',
//         refresh_token: '',
//         token_type: '',
//         member: {
//             id: 0,
//             username: '',
//             level: 0,
//             cash: 0,
//             point: 0,
//             casino_cash: 0,
//             nickname: '',
//             country_code: '',
//             languate: '',
//             tel_number: '',
//             account_bank: '',
//             account_number: '',
//             account_holder: '',
//             deposit_bonus: 0,
//             allows_deposit_bonus: 0,
//             logged_by_ip: '',
//             created_by_ip: '',
//             logged_at: '',
//             created_at: '',
//             updated_at: '',
//             unread_messages: 0
//         },
//     }
// }

// function userStore(state = initialState, action) 
// {
//     const { user } = state

//     switch(action.type) 
//     {
//         case types.SET_USER:
//             return {
//                 user : {
//                     ...user,
//                     member: action.payload
//                 }
//             }
//         case types.SET_ACCESS_TOKEN:
//             return {
//                 user : {
//                     ...user,
//                     access_token: action.payload.access_token,
//                     expires_in: action.payload.expires_in,
//                     refresh_token: action.payload.refresh_token,
//                     token_type: action.payload.token_type,
//                     isAuth: action.payload.isAuth
//                 }
//             }
//         case types.SET_LOGOUT:
//             return {
//                 user : {
//                     isAuth: false,
//                     access_token: '',
//                     expires_in: '',
//                     refresh_token: '',
//                     token_type: '',
//                     member: {
//                         id: 0,
//                         username: '',
//                         level: 0,
//                         cash: 0,
//                         point: 0,
//                         casino_cash: 0,
//                         nickname: '',
//                         country_code: '',
//                         languate: '',
//                         tel_number: '',
//                         account_bank: '',
//                         account_number: '',
//                         account_holder: '',
//                         deposit_bonus: 0,
//                         allows_deposit_bonus: 0,
//                         logged_by_ip: '',
//                         created_by_ip: '',
//                         logged_at: '',
//                         created_at: '',
//                         updated_at: '',
//                         unread_messages: 0
//                     }
//                 }
//             }
//         default:
//             return state
//     }
// }

// export default userStore