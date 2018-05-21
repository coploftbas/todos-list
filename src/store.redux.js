import { createStore } from 'redux'

import rootReducer from './reducers/index.redux'

// This function is to check the availability of the localStorage named 'myTODOs'
//  - Existed -> use that value as initialState
//  - Not Existed -> use empty Array as initialState
const checkLocalStorage = () => {
    if (localStorage.myTODOs) {
        console.log('[Check LS] - ', JSON.parse(localStorage.myTODOs))
        return JSON.parse(localStorage.myTODOs)
    } else {
        console.log('[Check LS] - No localStorage.myTODOs')
        return []
    }

}

// This initial state get value from localStorage and put them into the 'todos' key
const initialState = { todos: checkLocalStorage() }

// =============================== EXAMPLE OF DATA ===============================
//     todos: [
//         {
//             id: 0,
//             title: 'Scale 360 Interview',
//             desc: 'Frontend Developer (Mobile) interview',
//             date: '2018-05-16',
//             completed: true
//         },
//         {
//             id: 1,
//             title: 'FWD Interview',
//             desc: 'Interview for BMW Alpine drive',
//             date: '2018-05-22',
//             completed: false
//         }
// ===============================================================================

const store = createStore(rootReducer, initialState)

export default store