import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoAction'

// ======================= Description ================================
// This component is to render the Form of TODO which consist 3 input
//  - Title
//  - Description
//  - Date
// This component submit the input value to add a new TODO via dispatch()
// Also store the new TODO in the localStorage
// ====================== Received props ==============================
// This component has been called from <Header /> with props
// - closeModal() - function to hide the Modal form (this component)
//                - called after clikcked 'Save' or 'x' button
// ======================== Behavior ==================================
// This component use state to track user's input and store them.
// Then, it will submit 3 input value to add a new TODO via dispatch()
// which is called in addNewTodo() after click 'Add' button.
// Also store the new TODO in the localStorage
// ====================================================================

class TodoModalForm extends React.Component {

    state = {
        title: '',
        desc: '',
        date: '',
    }

    addNewTodo() {
        var { dispatch } = this.props
        console.log('[TODO Modal form] this.state - ',this.state)

        // 'addToto' is for setup data before call dispatch
        // set default value of 'completed' as false
        // use {this.state(title, desc, date) + completed} -> to put into payload
        const preparedAddTodo = addTodo({...this.state, completed: false})
        console.log('[TODO Modal form] preparedAddTodo - ', preparedAddTodo)

        // dispatch - for sending request -> reducers/index -> reducers/todoReducer
        dispatch(preparedAddTodo)
        console.log('[TODO Modal form] add TODO to redux via dispatch completed')

        // Also add new TODO to localStorage
        // Check availability of localStorage named 'myTODOs'
        //   - existed -> pull that data and transform to JSON
        //             -> continue the next ID
        //   - notExisted -> make a new array to store
        //                -> start new ID using 0
        const allTodoJson = localStorage.myTODOs ? JSON.parse(localStorage.myTODOs) : []
        const newID = localStorage.myTODOs ? 
                        allTodoJson.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 
                        : 0

        // push new object to localStorage
        allTodoJson.push({ ...this.state, completed: false, id: newID })

        // Transform back to string then store it
        localStorage.myTODOs = JSON.stringify(allTodoJson)
        console.log('[localStorage] add new TODO completed');

        this.setState({
            title: '',
            desc: '',
            date: ''
        })
        this.props.closeModal()
    }

    render() {

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add new TODO</p>
                        <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="TODO's title" 
                                    value={this.state.title} 
                                    onChange={(event) => this.setState({ title: event.target.value })} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea
                                    className="textarea" 
                                    placeholder="TODO's description" 
                                    value={this.state.desc} 
                                    onChange={(event) => this.setState({ desc: event.target.value })} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Date</label>
                            <div className="control">
                                <input
                                    id="datepicker"
                                    className="input"
                                    type="date"
                                    onClick={() => console.log("Date input clicked")}
                                    onChange={(event) => this.setState({ date: event.target.value })} />
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => this.addNewTodo()}>Add</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default connect()(TodoModalForm)