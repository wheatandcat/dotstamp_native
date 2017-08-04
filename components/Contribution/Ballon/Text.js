// @flow
import React from "react"
import { Text } from "native-base"

type Props = {
  text: string
}

export default ({ text }: Props) =>
  <Text>
    {text}
  </Text>
