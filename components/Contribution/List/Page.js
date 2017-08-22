// @flow
import React from "react"
import { Frame } from "./"
import type { Item } from "./../type"

type Props = {
  list: Array<Item>,
  page: number,
  onGet: (order: number) => void
}

export default class RatingCard extends React.Component {
  componentWillMount() {
    this.props.onGet(this.props.page)
  }

  props: Props

  render() {
    return (
      <Frame
        list={this.props.list}
        page={this.props.page}
        paging={this.props.onGet}
        maxPage={2}
      />
    )
  }
}
