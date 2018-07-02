import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import { Home } from './scenes'

export const Routes = () => (
  <Router>
    <Stack key="root">
        <Scene key="initial" component={Home} title="Scenes Home" initial /> 
    </Stack>
  </Router>
)