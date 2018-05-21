import React from 'react'

import TodoModalForm from './TodoModalForm.react'

const myStyles = {
    myDiv: {
        // backgroundColor: 'lightgreen',
    },
    myDivButton: {
        // backgroundColor: 'lightyellow',
    },
}

// ======================= Description ================================
// This component is to render 3 main things
//  - Reminders text
//  - Add button
//  - <TodoModalForm /> (hidden as default)
// This component has been called from <App />
// ====================================================================
class Header extends React.Component {

    // Close the Modal form as default
    state = {
        showTodoModalForm: false
    }

    // For showing the form in Modal for adding a new TODO
    // Called after click the Add Button
    addNewTodo() {
        console.log('add new todo function')
        this.setState({ showTodoModalForm: true })
    }

    // For hiding the Modal form
    // Send into <TodoModalForm /> as props
    closeTodoModalForm() {
        console.log('close todo modal')
        this.setState({ showTodoModalForm: false })
    }

    render(){
        return (
                <nav className="level is-right" style={myStyles.myDiv}>
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="title">
                                <strong>Reminders</strong>
                            </h2>
                        </div>
                    </div>
                    <div className="level-right is-right" style={myStyles.myDivButton}>
                        <p className="level-item">
                            <a className="button is-success is-outlined" onClick={() => this.addNewTodo()}>
                                <span className="icon">
                                    <i className="fas fa-plus"></i>
                                </span>
                            </a>
                        </p>
                    </div>
                {this.state.showTodoModalForm && 
                    <TodoModalForm 
                        closeModal={() => this.closeTodoModalForm()}/>} 
                </nav>
        )
    }
}

export default Header