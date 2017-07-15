// @flow
import React from "react"
import { Text } from "react-native"

type Props = {
  selected: boolean,
  title: string
}

export default ({ selected, title }: Props) =>
  <Text style={{ color: selected ? "red" : "black" }}>
    TAB
    {title}
  </Text>
