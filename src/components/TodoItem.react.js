import React from 'react'

class TodoItem extends React.Component {
    render() {

        const textStrikethrough = (checkCompleted) => {
            return checkCompleted ? { textDecoration: 'line-through' } : {}
        } 

        return (
            <a className="panel-block" style={textStrikethrough(this.props.todoItemObj.completed)}>
                <input type="checkbox" />
                {this.props.todoItemObj.title}
            </a>
        )
    }
}

export default TodoItem