// @flow
import React from "react"
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content
} from "native-base"
import Footer from "../Footer"

export default () =>
  <Container>
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input placeholder="検索ワード" fixedLabel={false} />
      </Item>
      <Button transparent>
        <Text>検索</Text>
      </Button>
    </Header>
    <Content padder />
    <Footer selected="list" />
  </Container>
