import React from 'react'

import TodoList from '../components/TodoList.react'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="section">
                <h1>Dashboard</h1>
                <TodoList />
            </div>
        )
    }
}

export default Dashboard