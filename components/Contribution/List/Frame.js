// @flow
import React from "react"
import { ListView, RefreshControl } from "react-native"
import { Container, Content, List } from "native-base"
import type { Item } from "./../type"
import Page from "../Thumbnail"
import Footer from "../Footer"

type Props = {
  list: Array<Item>
}

function refresh() {
  console.log("onRefresh")
}

export default class Frame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }
  props: Props

  render() {
    return (
      <Container>
        <Content>
          <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            {this.props.list.map(item =>
              <Page key={item.title} {...item} match="" />
            )}
          </List>
        </Content>
        <Footer selected="list" />
      </Container>
    )
  }
}
