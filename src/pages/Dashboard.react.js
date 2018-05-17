import React from 'react'

import TodoList from '../components/TodoList.react'

const myStyles = {
    myDiv: {
        // backgroundColor: 'lightblue',
    },
}

class Dashboard extends React.Component {
    render() {
        return (
            <div className="" style={myStyles.myDiv}>
                <TodoList />
            </div>
        )
    }
}

export default Dashboard