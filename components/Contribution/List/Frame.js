// @flow
import React from "react"
import { Container, Content, List } from "native-base"
import type { Item } from "./../type"
import Page from "../Thumbnail"
import Footer from "../Footer"

type Props = {
  list: Array<Item>
}

export default ({ list }: Props) =>
  <Container>
    <Content>
      <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        {list.map(item => <Page key={item.title} {...item} />)}
      </List>
    </Content>
    <Footer selected="list" />
  </Container>
