// @flow
import React from "react"
import { Text } from "native-base"
import { StyleSheet } from "react-native"

type Props = {
  label: string
}

const styles = StyleSheet.create({
  balloon: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    borderRadius: 5,
    width: "75%"
  }
})

export default ({ label }: Props) => <Text style={styles.balloon}>{label}</Text>
