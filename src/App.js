import React, { Component } from 'react'

import Dashboard from './pages/Dashboard.react'
import Header from './components/Header.react'

const myStyles = {
  myDivContainer : {
    // backgroundColor: 'lightblue',
  },
}

// ======================= Description ================================
// This component is to render 2 main components
//  - <Header />
//  - <Dashboard />
// This component has been called from ./index.js
// under <Provider store={store} /> to enable the redux features
// ====================================================================
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
