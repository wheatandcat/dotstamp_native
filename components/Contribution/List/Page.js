// @flow
import React from "react"
import { Frame } from "./"
import { Item } from "./../type"

type Props = {
  list: Array<Item>,
  onGet: (order: number) => void
}

export default class RatingCard extends React.Component {
  componentWillMount() {
    this.props.onGet(1)
  }

  props: Props

  render() {
    return <Frame list={this.props.list} />
  }
}
