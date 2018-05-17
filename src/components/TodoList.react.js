import React from 'react'

import TodoItem from './TodoItem.react'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        )
    }
}

export default TodoList