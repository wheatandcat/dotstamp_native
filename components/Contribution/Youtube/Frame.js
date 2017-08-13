// @flow
import React from "react"
import { Container, Content } from "native-base"
import type { ItemDetail } from "./../type"
import { Segment } from "../Show"
import { Movie } from "./"

type Props = {
  item: ItemDetail
}

export default ({ item }: Props) =>
  <Container>
    <Segment id={item.id} selected="youtube" />
    <Content padder>
      <Movie videoID={item.movie.movie_id} />
    </Content>
  </Container>
