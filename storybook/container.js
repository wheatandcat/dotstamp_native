// @flow
import React from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  children?: Children,
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ({ children }: Props) =>
  <View  style={styles.center}>
    { children }
  </View>
