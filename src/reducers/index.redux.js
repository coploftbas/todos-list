import { combineReducers } from 'redux'

import todoReducer from './todoReducer.redux'

// ========================= Description ==============================
// This index Reducer is to combine every single Reducer
// in 1 file for ease to use the proper reducer to each key.
// This applicaition contains only 1 reducer because the data that
// in the Store have only 1 key which is 'todos'
// ====================================================================
const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer