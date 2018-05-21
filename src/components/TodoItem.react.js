import React from 'react'

// ===================== Description =============================
// TodoItem Component is for rendering 1 todo by showing
// the given information from TodoList via props.
// ===================== Behavior 1 ==============================
// This component check 'completed' to render proper styling
// - text Strikethrough
// - checked in check box
// ===================== Behavior 2 ==============================
// This component handle onClick event by calling function
// named 'onClick' that received from <TodoList /> via props
// ===============================================================

class TodoItem extends React.Component {
    render() {
        const textStrikethrough = (checkCompleted) => {
            return checkCompleted ? { textDecoration: 'line-through' } : {}
        } 
        
        const {todoItemObj, onClick} = this.props

        return (
            <a className="panel-block" 
                style={textStrikethrough(todoItemObj.completed)}
                onClick={onClick}>
                <input
                    type="checkbox"
                    defaultChecked={todoItemObj.completed} />
                {todoItemObj.title}
            </a>
        )
    }
}

export default TodoItem