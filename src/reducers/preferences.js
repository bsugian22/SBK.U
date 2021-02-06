// import * as types from '../actions/preferences'

// const initialState = {
//     preferences: {
//         darkmode: false,
//         data: []
//     }
// }

// function preferencesStore(state = initialState, action) 
// {
//     const { preferences } = state

//     switch(action.type) 
//     {
//         case types.SET_PREFERENCES:
//             return {
//                 preferences: {
//                     ...preferences,
//                     data: action.payload    
//                 }
//             }
//         case types.SET_DARKMODE:
//             return {
//                 preferences: {
//                     ...preferences,
//                     darkmode: action.toggle
//                 }
//             }
//         default:
//             return state
//     }
// }

// export default preferencesStore