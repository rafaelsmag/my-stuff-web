import React, { Component } from 'react'
import Routes from './Routes'
import './shared/styles/App.css'
import Header from './shared/components/layout/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}

export default App
