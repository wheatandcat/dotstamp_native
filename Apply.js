// @flow

import React from "react"
import { Provider } from "react-redux"
import { Scene, Router } from "react-native-router-flux"
import ContributionList from "./redux/containers/Contribution/List"
import { PageB } from "./components/Contribution/List"
import createStore from "./redux/createStore"

const store = createStore()

export default () =>
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="pageA" title="PageA" component={ContributionList} />
        <Scene key="pageB" title="PageB" component={PageB} />
      </Scene>
    </Router>
  </Provider>
