// @flow
import React from "react"
import type { ItemDetail } from "../type"
import { Frame } from "./"

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
    return <Frame item={this.props.item} />
  }
}
