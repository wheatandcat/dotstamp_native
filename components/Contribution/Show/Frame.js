// @flow
import React from "react"
import { Container, Content } from "native-base"
import { iconURL } from "../../../libs/image"
import { dateFormat } from "../../../libs/date"
import type { ItemDetail } from "./../type"
import { Header as ShowHeader, List, Segment } from "./"
import Footer from "../Footer"

type Props = {
  item: ItemDetail
}

export default ({ item }: Props) =>
  <Container>
    <Segment id={item.id} selected="list" />
    <Content padder>
      <ShowHeader
        name={item.user.name}
        avatarURL={iconURL(item.user.profileImageID)}
        title={item.title}
        createdAt={dateFormat(item.createdAt)}
        followCount={item.followCount}
        following={item.following}
      />
      <List body={item.body} />
    </Content>
    <Footer selected="list" />
  </Container>
