import { createStore } from 'redux'

import rootReducer from './reducers/index.redux'

// This initial state should get value from serviceWorker.
const initialState = {
    todos: [
        {
            id: 0,
            title: 'Scale 360 Interview',
            desc: 'Frontend Developer (Mobile) interview',
            date: '2018-05-16',
            completed: true
        },
        {
            id: 1,
            title: 'FWD Interview',
            desc: 'Interview for BMW Alpine drive',
            date: '2018-05-22',
            completed: false
        },
        {
            id: 2,
            title: 'KBank CC Regis',
            desc: 'Register Credit card for TG lounge',
            date: '2018-05-23',
            completed: false
        },
        {
            id: 3,
            title: 'Deadline Homework for Scale360 ',
            desc: 'Mail to tell the GitHub path',
            date: '2018-05-25',
            completed: false
        }
    ]
}

const store = createStore(rootReducer, initialState)

export default store