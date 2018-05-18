import React from 'react'

import TodoItem from './TodoItem.react'

class TodoList extends React.Component {
    render() {
        return (
            <nav className="panel">
                {/* FOR COMPLETION PART
                <p className="panel-heading">
                    <strong>1</strong> Completed
                </p> 
                */}
                <TodoItem />
                <TodoItem />
            </nav>
        )
    }
}

export default TodoList