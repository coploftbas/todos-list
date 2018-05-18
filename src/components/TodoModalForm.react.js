import React from 'react'

class TodoModalForm extends React.Component {

    state = {
        todoTitle: '',
        todoDesc: '',
        
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
                                <input className="input" type="text" placeholder="TODO title" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="TODO's description"></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Date</label>
                            <div className="control">
                                <input
                                    id="datepicker"
                                    className="input"
                                    type="date"
                                    onClick={() => console.log("Date input clicked")} />
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default TodoModalForm