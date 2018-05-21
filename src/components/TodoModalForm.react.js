import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoAction'

// ======================= Description ================================
// This component is to render the Form of TODO which consist 3 input
//  - Title
//  - Description
//  - Date
// This component submit the input value to add a new TODO via dispatch()
// ====================== Received props ==============================
// This component has been called from <Header /> with props
// - closeModal() - function to hide the Modal form (this component)
//                - called after clikcked 'Save' or 'x' button
// ======================== Behavior ==================================
// This component use state to track user's input and store them.
// Then, it will submit 3 input value to add a new TODO via dispatch()
// which is called in addNewTodo() after click 'Add' button
// ====================================================================

class TodoModalForm extends React.Component {

    state = {
        todoTitle: '',
        todoDesc: '',
        todoDate: '',
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
        this.setState({
            todoTitle: '',
            todoDesc: '',
            todoDate: '',
            completed: false
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
                                    value={this.state.todoTitle} 
                                    onChange={(event) => this.setState({ todoTitle: event.target.value })} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea
                                    className="textarea" 
                                    placeholder="TODO's description" 
                                    value={this.state.todoDesc} 
                                    onChange={(event) => this.setState({ todoDesc: event.target.value })} />
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
                                    onChange={(event) => this.setState({ todoDate: event.target.value })} />
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