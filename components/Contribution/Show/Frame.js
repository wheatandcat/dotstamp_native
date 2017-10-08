// @flow
import React from "react"
import {
  Container,
  Content,
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
import { iconURL } from "../../../libs/image"
import { dateFormat } from "../../../libs/date"
import type { ItemDetail } from "./../type"
import { Header as ShowHeader, List, Segment } from "./"
import Footer from "../Footer"

type Props = {
  item: ItemDetail,
  login: ?boolean,
  onFollow: (id: number) => void,
  onRemoveFollow: (id: number) => void
}

export default ({ item, login, onFollow, onRemoveFollow }: Props) => (
  <Container>
    <Header>
      <Left>
        <Button transparent iconLeft onPress={() => Actions.pop()}>
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>記事</Title>
      </Body>
      <Right />
    </Header>
    <Segment id={item.id} selected="list" />

    <Content padder>
      <ShowHeader
        id={item.id}
        name={item.user.name}
        avatarURL={iconURL(item.user.profileImageID)}
        title={item.title}
        createdAt={dateFormat(item.createdAt)}
        followCount={item.followCount}
        following={item.following}
        login={login}
        onFollow={onFollow}
        onRemoveFollow={onRemoveFollow}
      />
      <List body={item.body} />
    </Content>
    <Footer selected="list" />
  </Container>
)
