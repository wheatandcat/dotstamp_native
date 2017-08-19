// @flow
import React from "react"
import { Frame } from "./"
import type { Item } from "./../type"

type Props = {
  list: Array<Item>,
  search: string,
  changeSearch: (text: string) => void,
  onSearch: (text: string) => void
}

export default class Search extends React.Component {
  componentWillMount() {}
  props: Props

  render() {
    return (
      <Frame
        list={this.props.list}
        changeSearch={this.props.changeSearch}
        onSearch={this.props.onSearch}
        search={this.props.search}
      />
    )
  }
}
