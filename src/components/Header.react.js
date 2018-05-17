import React from 'react'

const myStyles = {
    myDiv: {
        // backgroundColor: 'lightgreen',
    },
    myDivButton: {
        // backgroundColor: 'lightyellow',
    },
}

class Header extends React.Component {
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
                            <a className="button is-success is-outlined">
                                <span className="icon">
                                    <i className="fas fa-plus"></i>
                                </span>
                            </a>
                        </p>
                    </div>
                </nav>
        )
    }
}

export default Header