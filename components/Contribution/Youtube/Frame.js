// @flow
import React from "react"
import { Container } from "native-base"
import type { ItemDetail } from "./../type"
import { Segment } from "../Show"
import { Movie } from "./"

type Props = {
  item: ItemDetail
}

export default ({ item }: Props) =>
  <Container>
    <Segment id={item.id} selected="youtube" />
    <Movie videoID={item.movie.movie_id} />
  </Container>