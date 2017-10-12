// @flow
import React from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  children?: Node,
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    top: 50
  },
})

export default ({ children }: Props) =>
  <View  style={styles.center}>
    { children }
  </View>

export const Top = ({ children }: Props) =>
  <View  style={styles.top}>
    { children }
  </View>
