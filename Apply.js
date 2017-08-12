// @flow

import React from "react"
import { Provider } from "react-redux"
import { Scene, Router } from "react-native-router-flux"
import ContributionList from "./redux/containers/Contribution/List"
import ContributionShow from "./redux/containers/Contribution/Show"
import createStore from "./redux/createStore"

const store = createStore()

export default () =>
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="pageA" title="最新の投稿" component={ContributionList} />
        <Scene key="pageB" title="PageB" component={ContributionShow} />
      </Scene>
    </Router>
  </Provider>
