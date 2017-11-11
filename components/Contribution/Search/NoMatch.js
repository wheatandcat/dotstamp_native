// @flow
import React from "react"
import { StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 240
  }
})
export default () => (
  <View style={styles.center}>
    <Text>一致する記事はありませんでした。</Text>
  </View>
)
