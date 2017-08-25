// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { View, Icon } from "native-base"

type Props = {
  iconName: string,
  focused: boolean
}

const styles = StyleSheet.create({
  text: {
    color: "#555",
    fontSize: 10
  },
  textActive: {
    color: "#1E90FF",
    fontSize: 10
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  backgroundActive: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  }
})

export default ({ iconName, focused }: Props) =>
  <View style={focused ? styles.backgroundActive : styles.background}>
    <Icon active={focused} name={iconName} style={{ fontSize: 25 }} />
  </View>
