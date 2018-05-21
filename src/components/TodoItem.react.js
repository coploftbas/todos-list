import React from 'react'

// ===================== Description =============================
// TodoItem Component is for rendering 1 todo by showing
// the given information from TodoList via props.
// =================== Received props ============================
// This component called and received props from <TodoList />
// - todoItemObj = Single TODO object
// - onToggle = Func. to handle the 'completed' toggling
// - onDelete = Func. to handle TODO deleting
// ======================= Behavior ==============================
// This component check 'completed' to render proper styling
// - text Strikethrough
// - checked in check box
// ===============================================================

class TodoItem extends React.Component {
    render() {
        const textStrikethrough = (checkCompleted) => {
            return checkCompleted ? { textDecoration: 'line-through' } : {}
        } 
        
        const {todoItemObj, onToggle, onDelete} = this.props

        return (
            <a className="panel-block">
                <input
                    type="checkbox"
                    onChange={onToggle}
                    checked={todoItemObj.completed}
                    />
                <div className="media-content" 
                    onClick={onToggle} 
                    style={textStrikethrough(todoItemObj.completed)}>
                    {todoItemObj.title}
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <span className="icon has-text-danger" onClick={onDelete}>
                            <i className="fas fa-trash-alt"></i>
                        </span>
                    </div>
                </div>
            </a>
        )
    }
}

export default TodoItem