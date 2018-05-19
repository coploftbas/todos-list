import React from 'react'

class TodoModalForm extends React.Component {

    state = {
        todoTitle: '',
        todoDesc: '',
        todoDate: '',
        completed: false
    }

    addNewTodo() {
        console.log(this.state)
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
                            <label className="label">TODO title</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="TODO title" 
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
                        <button className="button is-success" onClick={() => this.addNewTodo()}>Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default TodoModalForm