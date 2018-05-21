import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem.react'
import { toggleTodoCompleted, deleteTodo } from '../actions/todoAction'

// ===================== Description =================================
// TodoList Component is for rendering many <TodoItem /> using
// .map() from received Array of Object from <Dashboard />
// =================== Received props ================================
// This component has been called by <Dashboard /> with some information
// - todos = Array of Object that get from Store
// - toggleTodoCompleted = Func. to toggle value 'completed' in Store
// =================== Sending props =================================
// This component will call <TodoItems /> with the list of data
// - todoItem = Array of Object that received via props from <Dashboard />
// - onToggle = Func. for toggle 'completed' that get via props
//              and set each id as a params
// - onDelete = Func. for removing TODO by calling handleDelete(id)
// ===================================================================

class TodoList extends React.Component {

    // This func. is to delete TODO form localStorage
    deleteTodoLocalStorage(id) {
        // Get all data from localStorage
        let allTodoJson = JSON.parse(localStorage.myTODOs)

        // remove the one which has id the same with arg
        let newAllTodoJson = allTodoJson.filter(todo => todo.id !== id)

        // Transform back to string then store it
        localStorage.myTODOs = JSON.stringify(newAllTodoJson)
        console.log('[localStorage] Remove TODO completed');
    }

    // This func. is to handle the event after click 'trash' icon
    // for removing specific TODO from 2 place
    //  - Rudux Store - using dispatch()
    //  - local Storage - calling deleteTodoLocalStorage(id)
    handleDelete(id) {
        const {dispatch} = this.props
        dispatch(deleteTodo(id))
        this.deleteTodoLocalStorage(id)
    }

    render() {
        // Get 'todos' from Dashboard via props
        // const { todos, toggleTodoCompleted } = this.props
        const { todos, dispatch } = this.props
        console.log('[TodoList] todos - ', todos)

        const todoItems = todos.map( (todoItem) => {
            return (<TodoItem 
                        todoItemObj={todoItem}
                        key={todoItem.id} 
                        onToggle={() => dispatch(toggleTodoCompleted(todoItem.id))}
                        onDelete={() => this.handleDelete(todoItem.id)}/>)
        })

        return (
            <nav className="panel">
                {/* FOR COMPLETION PART
                <p className="panel-heading">
                    <strong>1</strong> Completed
                </p> 
                */}
                { todoItems }
            </nav>
        )
    }
}

export default connect()(TodoList)