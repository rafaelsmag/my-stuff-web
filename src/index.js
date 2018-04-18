import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import history from './config/historyRouter'

import App from './modules/App'
import registerServiceWorker from './registerServiceWorker'

import './modules/shared/styles/index.css'

ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
),
document.getElementById('root'))
registerServiceWorker()
