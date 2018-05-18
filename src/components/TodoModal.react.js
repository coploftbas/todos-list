import React from 'react'

import TodoForm from './TodoForm.react'

class TodoModal extends React.Component {
    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add new TODO</p>
                        <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
                    </header>
                    <TodoForm />
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default TodoModal