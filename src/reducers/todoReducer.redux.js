import { ADD_TODO, TOGGLE_TODO_COMPLETED, UPDATE_TODO } from '../actions/types'

const initialState = [
    {
        id: 0,
        title: '',
        desc: '',
        date: '',
        completed: false,
    }
]

// ===================== Description =========================
// This function is to classify incoming type using switch-case.
// Then continue updating the store from the received payload.
// P.S. This func. conenct directly to the Redux Store
// ======================= Variable ==========================
// state = previous state / initial state
// action = [type, payload]
//          type - to classify func
//          payload - store data object inside (in this case)
// ======================== Cases ============================
// ADD_TODO - Add new object in array in store
// TOGGLE_TODO_COMPLETED - Toggle 'completed' value specified by id
// UPDATE_TODO - Update information from selected id
// ===========================================================

export default function(state = initialState, action) {
    console.log('[todo reducer] action.type - ', action.type)
    console.log('[todo reducer] state (previousState) - ', state)
    switch(action.type) {
        case ADD_TODO: {
            console.log('[todo reducer] case ADD_TODO')
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    title: action.payload.todoTitle,
                    desc: action.payload.todoDesc,
                    date: action.payload.todoDate,
                    completed: action.payload.completed
                }
            ]
        }
        case TOGGLE_TODO_COMPLETED: {
            console.log('[todo reducer] case TOGGLE_TODO_COMPLETED')
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }
        case UPDATE_TODO: {
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return { 
                        ...todo,
                        title: action.payload.todoTitle,
                        desc: action.payload.todoDesc,
                        date: action.payload.todoDate
                    } 
                }
                return todo
            })
        }
        default:
            return state
    }
}