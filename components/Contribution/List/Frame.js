// @flow
import React from "react"
import { Container, Header, Content, List } from "native-base"
import type { Item } from "./Page"
import { Page } from "../Thumbnail"

type Props = {
  list: Array<Item>
}

export default ({ list }: Props) =>
  <Container>
    <Header />
    <Content>
      <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        {list.map(item => <Page key={item.title} {...item} />)}
      </List>
    </Content>
  </Container>
