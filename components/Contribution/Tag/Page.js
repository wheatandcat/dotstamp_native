// @flow
import React from "react"
import { View } from "react-native"
import { Icon, Text } from "native-base"
import type { Tag } from "./../type"

type Props = {
  tags: Array<Tag>
}

function lable(tags: Array<Tag>): string {
  return tags.map(item => item.name).join(", ")
}

export default ({ tags }: Props) => (
  <View style={{ flexDirection: "row" }}>
    <Icon
      name="ios-pricetag"
      style={{ fontSize: 15, color: "#777", top: 10 }}
    />

    <Text
      numberOfLines={1}
      ellipsizeMode={"tail"}
      style={{ fontSize: 10, color: "#777", top: 12, width: "80%" }}
    >
      {lable(tags)}
    </Text>
  </View>
)
