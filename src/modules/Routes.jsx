import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME
} from '../config/constants/appRoutes'

import Home from '../modules/home/containers/Home'
import NotFound from '../modules/shared/containers/NotFound'

const Routes = props => (
  <Switch>
    <Route exact path={HOME} component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
