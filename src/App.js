import React, { Component } from 'react'

import Dashboard from './pages/Dashboard.react'
import Header from './components/Header.react'

const myStyles = {
  myDivContainer : {
    // backgroundColor: 'lightblue',
  },
}

class App extends Component {
  render() {
    return (
        <div className="container" style={myStyles.myDivContainer}>
          <div className="section">
            <Header />
            <Dashboard />
          </div>
        </div>
    )
  }
}

export default App
