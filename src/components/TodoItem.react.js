import React from 'react'

class TodoItem extends React.Component {
    render() {
        return (
            <a className="panel-block">
                <input type="checkbox" />
                TODOs item
            </a>
        )
    }
}

export default TodoItem