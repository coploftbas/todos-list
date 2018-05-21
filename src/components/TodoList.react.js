import React from 'react'

import TodoItem from './TodoItem.react'

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
// - onClick = Func. for toggle 'completed' that get via props
//              and set each id as a params
// ===================================================================

class TodoList extends React.Component {
    render() {
        // Get 'todos' from Dashboard via props
        const { todos, toggleTodoCompleted } = this.props
        console.log('[TodoList] todos - ', todos)

        const todoItems = todos.map( (todoItem) => {
            return (<TodoItem 
                        todoItemObj={todoItem}
                        key={todoItem.id} 
                        onClick={() => toggleTodoCompleted(todoItem.id)}/>)
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

export default TodoList