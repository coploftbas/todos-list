import { 
    ADD_TODO, 
    TOGGLE_TODO_COMPLETED, 
    DELETE_TODO,
    UPDATE_TODO,
} from './types'

// ====================== Description ===================================
// This todoAction is for setting up the data which will be
// send into dispatch() as param for changing the state in Store.
// Each component that would like to prepare the data before
// calling dispatch() can import the function in this file to use.
// ======================== Behavior ====================================
// addTodo - Preparing data for adding the new TODO to Store
//         - Set 'type' as 'ADD_TODO'
//         - received the Object and put in payload
// toggleTodoComplete - Preparing data for toggle 'completed' of TODO to Store
//                    - Set 'type' as 'TOGGLE_TODO_COMPLETED'
//                    - received only 'id' of the specify object and put in payload
// deleteTodo - Remove TODO form Store
//            - Set 'type' as 'DELETE_TODO'
//            - received only 'id' of the specify object and put in payload
// =======================================================================

export const addTodo = todo => ({
        type: ADD_TODO,
        payload: todo,
    })

export const toggleTodoCompleted = id => ({
    type: TOGGLE_TODO_COMPLETED,
    id: id,
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id: id,
})

export const updateTodo = (id, todo) => ({
        type: UPDATE_TODO,
        id: id,
        payload: todo,
    })