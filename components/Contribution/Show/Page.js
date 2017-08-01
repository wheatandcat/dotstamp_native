// @flow
import React from "react"
import { View, Text } from "react-native"
import type { ItemDetail } from "../../Contribution/type"

type Props = {
  item: ItemDetail,
  onGet: (order: number) => void
}

export default class Show extends React.Component {
  componentWillMount() {
    this.props.onGet(2)
  }
  props: Props

  render() {
    return (
      <View>
        <Text>
          {this.props.item.title}
        </Text>
      </View>
    )
  }
}
