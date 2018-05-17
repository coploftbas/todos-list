import React from 'react'

class Header extends React.Component {
    render(){
        return (
            <div className="section">
                <h1>
                    <a className="title is-1" href="#">Reminders</a>
                </h1>
                <h2 className="subtitle is-3">
                    Playing with ReactJS
                </h2>
            </div>
        )
    }
}

export default Header