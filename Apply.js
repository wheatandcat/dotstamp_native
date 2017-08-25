// @flow

import React from "react"
import { Provider } from "react-redux"
import { StyleSheet } from "react-native"
import { Scene, Router } from "react-native-router-flux"
import { TabIcon } from "././components/Contribution/Footer/"
import ContributionList from "./redux/containers/Contribution/List"
import ContributionShow from "./redux/containers/Contribution/Show"
import ContributionSearch from "./redux/containers/Contribution/Search"
import ContributionYoutube from "./redux/containers/Contribution/Youtube"
import createStore from "./redux/createStore"

const store = createStore()

const styles = StyleSheet.create({
  tabBar: {}
})

export default () =>
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="tabbar" tabs tabBarStyle={styles.tabBar}>
          <Scene
            key="投稿"
            title="最新の投稿"
            component={ContributionList}
            initial
            icon={TabIcon}
            iconName="list"
          />
          <Scene
            key="検索"
            title="検索"
            component={ContributionSearch}
            icon={TabIcon}
            iconName="search"
          />
          <Scene
            key="ユーザ"
            title="ユーザ"
            component={ContributionSearch}
            icon={TabIcon}
            iconName="person"
          />
        </Scene>
        <Scene key="ContributionShow" title="記事" component={ContributionShow} />
        <Scene
          key="ContributionYoutube"
          title="Youtube"
          component={ContributionYoutube}
        />
      </Scene>
    </Router>
  </Provider>
