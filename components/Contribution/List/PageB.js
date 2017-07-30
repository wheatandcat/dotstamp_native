// @flow

import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linkText: {
    fontSize: 32,
    color: "rgb(95, 177, 237)"
  }
})

export default props => {
  console.log(props)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Actions.pageA}>
        <Text style={styles.linkText}>LinkA</Text>
      </TouchableOpacity>
    </View>
  )
}
