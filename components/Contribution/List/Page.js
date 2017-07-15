// @flow
import React from "react"
import { View } from "react-native"
import { PageA } from "./"

type Props = {
  list: Array<*>,
  onGet: Function
}

export default class RatingCard extends React.Component {
  props: Props

  componentWillMount() {
    console.log("start")
    this.props.onGet(["aaa", "bbb"])
  }

  render() {
    return (
      <View>
        <PageA list={this.props.list} />
      </View>
    )
  }
}
