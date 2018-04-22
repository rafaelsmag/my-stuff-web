import React, { Component } from 'react'
import { Div } from 'glamorous'

import Routes from './Routes'
import './shared/styles/App.css'
import Header from './shared/components/layout/Header'

import styles from './shared/styles/App'

class App extends Component {
  render () {
    return (
      <Div css={styles.app}>
        <Header />
        <Routes />
      </Div>
    )
  }
}

export default App
