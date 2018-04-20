import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME
} from '../config/constants/appRoutes'

import HomeScreen from '../modules/home/containers/HomeScreen'
import NotFound from '../modules/shared/containers/NotFound'

const Routes = props => (
  <Switch>
    <Route exact path={HOME} component={HomeScreen} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
