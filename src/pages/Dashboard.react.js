import { connect } from 'react-redux'

import TodoList from '../components/TodoList.react'
import { toggleTodoCompleted } from '../actions/todoAction'

// ======================= Description ================================
// Retrieved data from Store where value's key is 'todos: []'
// Put the retreived data into 'todos'
// ====================================================================
const mapStateToProps = state => ({
    todos: state.todos
})

// ======================= Description ================================
// This Func. is for toggling the value of 'completed'
// in 'todos:[{...,completed: boolean},...]' where specified by 'id'
// ========================= Actions ==================================
// - received 'id' => then used as argument in action
//   named 'toggleTodoCompleted(id)' where to setup the data before dispatch
// - use the setup info that returned from action as a param in
//   dispatch() to call Reducer to update the 'completed' value
// ====================================================================
const mapDispatchToProps = dispatch => ({
    toggleTodoCompleted: id => dispatch(toggleTodoCompleted(id))
})

// ======================= Description ================================
//  This component will called <TodoList /> and sending 2 props
//      - mapStateToProps
//      - mapDispatchToProps
// These 2 names cannot be change (*****NOT SURE*****)
// ====================================================================
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)