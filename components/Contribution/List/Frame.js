// @flow
import React from "react"
import { Container, Content, List, Spinner, View } from "native-base"
import type { Item } from "./../type"
import Page from "../Thumbnail"

/* eslint-disable class-methods-use-this,react/jsx-no-bind,no-underscore-dangle */
let list = []

type Props = {
  list: Array<Item>,
  page: number,
  paging: (page: number) => void,
  maxPage: number
}

type State = {
  refreshing: boolean,
  height: number,
  scrollHitHeight: number,
  next: boolean
}

export default class Frame extends React.Component<void, Props, State> {
  state = {
    refreshing: false,
    height: 0,
    scrollHitHeight: 0,
    next: false
  }

  componentWillMount() {
    list = []
    this.setState({
      refreshing: false,
      height: 0,
      scrollHitHeight: 0,
      next: this.props.page < this.props.maxPage
    })
  }
  componentWillReceiveProps() {
    if (!this.state.refreshing) {
      return
    }

    if (list.length > 0) {
      if (this.props.list.length <= list.length) {
        return
      }
    }

    list = this.props.list

    this.setState({
      refreshing: false,
      next: this.props.page + 1 < this.props.maxPage
    })
  }
  props: Props
  scrollView: {
    _root: {
      position: {
        y: number
      }
    }
  }

  scroll() {
    if (!this.state.next) {
      return
    }
    if (this.state.refreshing) {
      return
    }
    if (this.state.scrollHitHeight <= 0) {
      return
    }
    if (this.scrollView._root.position.y < this.state.scrollHitHeight) {
      return
    }

    this.setState({
      refreshing: true
    })
    this.props.paging(this.props.page + 1)
  }
  sizeChange(ctwidth, ctheight) {
    const height = this.state.height
    this.setState({ scrollHitHeight: ctheight - height })
  }

  render() {
    return (
      <Container>
        <Content
          ref={c => {
            this.scrollView = c
          }}
          onScroll={this.scroll.bind(this)}
          onContentSizeChange={this.sizeChange.bind(this)}
          onLayout={event => {
            const { height } = event.nativeEvent.layout
            this.setState({ height })
          }}
        >
          <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            {this.props.list.map(item => (
              <Page key={item.id} {...item} match="" />
            ))}
          </List>
          {(() => {
            if (this.state.next) {
              return <Spinner />
            }
            return <View />
          })()}
        </Content>
      </Container>
    )
  }
}
