// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Text } from "native-base"

type Props = {
  text: string,
  match: string
}

const styles = StyleSheet.create({
  match: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black"
  },
  text: {
    fontSize: 12,
    color: "#ccc"
  }
})

function replaceMatch(str: string, replace: string): React$Element {
  const regex = new RegExp(`${replace}(.*?)`, "g")

  return str.split(regex).map((line, i) => {
    if (line === "" && i > 0) {
      return (
        <Text key={line} style={styles.match}>
          {replace}
        </Text>
      )
    }
    return line
  })
}

function getMatchString(
  str: string,
  replace: string,
  maxNumber: number
): string {
  if (str.length <= maxNumber) {
    return replaceMatch(str, replace)
  }

  const index = str.indexOf(replace)
  const len = str.length

  const start = index < 11 ? 0 : index - 10
  const end = len < index + maxNumber ? len : index + maxNumber

  return replaceMatch(`${str.substring(start, end)}...`, replace)
}

export default ({ text, match }: Props) =>
  <Text style={styles.text}>
    {getMatchString(text, match, 30)}
  </Text>
