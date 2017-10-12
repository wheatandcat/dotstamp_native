// @flow
import React from "react"
import { Provider } from "react-redux"
import { StyleSheet } from "react-native"
import { Scene, Router } from "react-native-router-flux"
import { TabIcon } from "./components/Contribution/Footer/"
import ContributionList from "./redux/containers/Contribution/List"
import ContributionShow from "./redux/containers/Contribution/Show"
import ContributionSearch from "./redux/containers/Contribution/Search"
import ContributionYoutube from "./redux/containers/Contribution/Youtube"
import Facebook from "./redux/containers/Facebook/Login"
import Login from "./redux/containers/Login/Page"
import NewPage from "./redux/containers/New/Page"
import createStore from "./redux/createStore"

const store = createStore()

const styles = StyleSheet.create({
  tabBar: {}
})

export default () => (
  <Provider store={store}>
    <Router>
      <Scene key="root" hideNavBar>
        <Scene
          key="tabbar"
          tabs
          tabBarStyle={styles.tabBar}
          gestureEnabled={false}
          activeBackgroundColor="#ddd"
        >
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
            component={Login}
            icon={TabIcon}
            iconName="person"
          />
        </Scene>
        <Scene
          key="tabbar2"
          tabs
          tabBarStyle={styles.tabBar}
          gestureEnabled={false}
          activeBackgroundColor="#ddd"
        >
          <Scene
            key="ContributionShow"
            tabBarLabel="投稿"
            title="記事"
            component={ContributionShow}
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
            component={Login}
            icon={TabIcon}
            iconName="person"
          />
        </Scene>

        <Scene
          key="ContributionYoutube"
          title="Youtube"
          component={ContributionYoutube}
        />

        <Scene
          key="tabbar3"
          tabs
          tabBarStyle={styles.tabBar}
          gestureEnabled={false}
          activeBackgroundColor="#ddd"
        >
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
            key="Facebook"
            title="ログイン"
            tabBarLabel="ユーザ"
            component={Facebook}
            icon={TabIcon}
            iconName="person"
          />
        </Scene>
        <Scene
          key="tabbar4"
          tabs
          tabBarStyle={styles.tabBar}
          gestureEnabled={false}
          activeBackgroundColor="#ddd"
        >
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
            key="NewPage"
            title="新規登録 / ログイン"
            tabBarLabel="ユーザ"
            component={NewPage}
            icon={TabIcon}
            iconName="person"
          />
        </Scene>
      </Scene>
    </Router>
  </Provider>
)
