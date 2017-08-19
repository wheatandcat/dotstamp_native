// @flow

import React from "react"
import { Provider } from "react-redux"
import { Scene, Router } from "react-native-router-flux"
import ContributionList from "./redux/containers/Contribution/List"
import ContributionShow from "./redux/containers/Contribution/Show"
import ContributionSearch from "./redux/containers/Contribution/Search"
import ContributionYoutube from "./redux/containers/Contribution/Youtube"
import createStore from "./redux/createStore"

const store = createStore()

export default () =>
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene
          key="ContributionList"
          title="最新の投稿"
          component={ContributionList}
        />
        <Scene key="ContributionShow" title="記事" component={ContributionShow} />
        <Scene
          key="ContributionYoutube"
          title="Youtube"
          component={ContributionYoutube}
        />
        <Scene
          key="ContributionSearch"
          title="検索"
          component={ContributionSearch}
        />
      </Scene>
    </Router>
  </Provider>
