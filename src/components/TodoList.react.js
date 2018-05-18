import React from 'react'

import TodoItem from './TodoItem.react'

class TodoList extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'Scale 360 Interview',
                desc: 'Frontend Developer (Mobile) interview',
                date: '2018-05-16',
                completed: true
            },
            {
                id: 2,
                title: 'FWD Interview',
                desc: 'Interview for BMW Alpine drive',
                date: '2018-05-22',
                completed: false
            },
            {
                id: 3,
                title: 'KBank CC Regis',
                desc: 'Register Credit card for TG lounge',
                date: '2018-05-23',
                completed: false
            }
        ]
    }

    render() {
        // console.log(this.state.todos)
        const todoItems = this.state.todos.map( (todoItem) => {
            return <TodoItem todoItemObj={todoItem} key={todoItem.id} />
        })

        return (
            <nav className="panel">
                {/* FOR COMPLETION PART
                <p className="panel-heading">
                    <strong>1</strong> Completed
                </p> 
                */}
                {/* <TodoItem />
                <TodoItem /> */}
                { todoItems }
            </nav>
        )
    }
}

export default TodoList