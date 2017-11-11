// @flow
import React from "react"
import { Button, Text } from "native-base"
import type { Tag } from "./../type"

export default ({ name }: Tag) => (
  <Button transparent dark>
    <Text numberOfLines={1} ellipsizeMode={"tail"}>
      {name}
    </Text>
  </Button>
)
