import React, { Component } from "react"
import { RefreshControl } from "react-native"
import { Container, Content, View, Text } from "native-base"

/* eslint-disable class-methods-use-this,react/jsx-no-bind,no-underscore-dangle */

export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollAreaHeight: 0,
      refreshing: false,
      rawArray: ["row 1", "row 2", "row 3"]
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
    this.setState({
      rawArray: newArray
    })

    this.setState({ refreshing: false })
  }
  _onScroll(event: Object) {
    console.log("_onScroll")
    console.log(event.nativeEvent.contentOffset.y)
  }
  _onContentSizeChange(ctwidth, ctheight) {
    console.log("_onContentSizeChange")
    const height = this.state.scrollAreaHeight
    console.log(height)
    console.log(ctheight)
    console.log(ctheight - height)
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
          onScroll={this._onScroll.bind(this)}
          onContentSizeChange={this._onContentSizeChange.bind(this)}
          onLayout={event => {
            const { height } = event.nativeEvent.layout
            this.setState({ scrollAreaHeight: height })
          }}
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
