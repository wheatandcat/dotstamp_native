import React, { Component } from "react"
import { RefreshControl } from "react-native"
import { Container, Content, View, Text } from "native-base"

/* eslint-disable class-methods-use-this,react/jsx-no-bind,no-underscore-dangle */

export default class MyComponent extends Component {
  scrollView: Object

  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      scrollHitHeight: 0,
      refreshing: false,
      rawArray: [
        "row 1",
        "row 2",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3",
        "row 3"
      ]
    }
  }

  _onRefresh() {
    this.setState({ refreshing: true })

    const newArray = this.state.rawArray.slice() // ここ注目。シャローコピーしている
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push("row 4")
    newArray.push(`ローディング`)
    this.setState({
      rawArray: newArray
    })

    this.setState({ refreshing: false })
  }
  _onScrollAnimationEnd() {
    console.log("onScrollAnimationEnd")
  }
  _onScroll(event: Object) {
    console.log("_onScroll")
    console.log(event.nativeEvent.contentOffset.y)
    if (this.state.refreshing) {
      return
    }

    if (this.state.scrollHitHeight <= 0) {
      return
    }

    if (event.nativeEvent.contentOffset.y >= this.state.scrollHitHeight) {
      console.log("fetch")
      this.setState({ refreshing: true })
      const newArray = this.state.rawArray.slice()

      const self = this
      console.log(self.scrollView._root)
      self.setState({
        rawArray: newArray
      })
      self.scrollView._root.scrollToPosition(
        0,
        self.state.scrollHitHeight + 100,
        true
      )
      setTimeout(() => {
        const newArray = this.state.rawArray.slice(
          0,
          this.state.rawArray.length - 2
        )
        newArray.push(`row ${newArray.length}`)
        newArray.push(`row ${newArray.length}`)
        newArray.push(`row ${newArray.length}`)
        newArray.push(`row ${newArray.length}`)
        newArray.push(`ローディング`)
        self.setState({
          rawArray: newArray
        })

        self.setState({ refreshing: false })
      }, 1000)
    }
  }
  _onContentSizeChange(ctwidth, ctheight) {
    console.log("_onContentSizeChange")
    const height = this.state.height
    console.log(height)
    console.log(ctheight)
    console.log(ctheight - height)

    this.setState({ scrollHitHeight: ctheight - height })
  }
  render() {
    return (
      <Container>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              title="Loading..."
            />
          }
          ref={c => {
            this.scrollView = c
          }}
          onScroll={this._onScroll.bind(this)}
          onScrollAnimationEnd={this._onScrollAnimationEnd.bind(this)}
          onContentSizeChange={this._onContentSizeChange.bind(this)}
          onLayout={event => {
            const { height } = event.nativeEvent.layout
            this.setState({ height })
          }}
          padder
        >
          <View>
            {this.state.rawArray.map((item, i) =>
              <Text key={i}>
                {item}
              </Text>
            )}
          </View>
        </Content>
      </Container>
    )
  }
}
