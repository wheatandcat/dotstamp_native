// @flow

import React from "react"
import { Provider } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import List from "./redux/containers/Contribution/List"
import createStore from "./redux/createStore"

const store = createStore()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const App = () =>
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <List />
    </View>
  </Provider>

export default App
