import React from 'react'

// bulmaCalendar CSS still not working
// import bulmaCalendar from 'bulma-calendar/dist/bulma-calendar.min.js'

// document.addEventListener('DOMContentLoaded', function () {
//     var datePickers = bulmaCalendar.attach('[type="date"]', {
//         overlay: true,
//         minDate: '2018-01-01',
//         maxDate: '2018-12-31',
//         dateFormat: 'yyyy-mm-dd'
//     });
//     // datePickers now contains an Array of all datePicker instances
// });

class TodoForm extends React.Component {

    

    render() {
        return (
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
        )
    }
}

export default TodoForm