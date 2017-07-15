// @flow
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"

type Props = {
  list: Array<*>
}

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

export default ({ list }: Props) =>
  <View style={styles.container}>
    <TouchableOpacity onPress={Actions.pageB}>
      <Text style={styles.linkText}>LinkB</Text>
      {list.map(item =>
        <Text>
          {item}
        </Text>
      )}
    </TouchableOpacity>
  </View>
