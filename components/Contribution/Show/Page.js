// @flow
import React from "react"
import type { ItemDetail } from "../type"
import { Frame } from "./"

type Props = {
  id: number,
  item: ItemDetail,
  onGet: (order: number) => void
}

export default class Show extends React.Component {
  componentWillMount() {
    this.props.onGet(this.props.id)
  }
  props: Props

  render() {
    return <Frame item={this.props.item} />
  }
}
