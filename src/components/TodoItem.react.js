import React from 'react'

class TodoItem extends React.Component {
    render() {
        return (
            <label className="panel-block">
                <input type="checkbox" />
                TODOs item
            </label>
        )
    }
}

export default TodoItem