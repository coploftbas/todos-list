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

class Header extends React.Component {

    state = {
        showTodoModalForm: false
    }

    addNewTodo() {
        console.log('add new todo function')
        // console.log(this.state.showForm)
        this.setState({ showTodoModalForm: true })
    }

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
                {this.state.showTodoModalForm && <TodoModalForm closeModal={() => this.closeTodoModalForm()} />}
                </nav>
        )
    }
}

export default Header