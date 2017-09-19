// @flow
import React from "react"
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Text,
  Icon
} from "native-base"
import { Actions } from "react-native-router-flux"
import type { ItemDetail } from "./../type"
import { Segment } from "../Show"
import { Movie } from "./"

type Props = {
  item: ItemDetail
}

export default ({ item }: Props) => (
  <Container>
    <Header>
      <Left>
        <Button transparent iconLeft onPress={() => Actions.pop()}>
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title> Youtube</Title>
      </Body>
      <Right />
    </Header>

    <Segment id={item.id} selected="youtube" />
    <Movie videoID={item.movie.movie_id} />
  </Container>
)
