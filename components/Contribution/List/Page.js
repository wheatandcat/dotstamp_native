// @flow
import React from "react"
import { View } from "react-native"
import { PageA } from "./"

type Props = {
  list: any,
  onGet: Function
}

export default class RatingCard extends React.Component {
  componentWillMount() {
    this.props.onGet(["aaa", "bbb"])
  }

  props: Props

  render() {
    return (
      <View>
        <PageA list={this.props.list} />
      </View>
    )
  }
}
