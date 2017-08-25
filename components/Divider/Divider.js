// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { View } from "native-base"

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    margin: 10
  }
})

export default () => <View style={styles.line} />
