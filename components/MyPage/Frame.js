// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content, List, Title } from "native-base"
import type { Item } from "../Contribution/type"
import Page from "../Contribution/Thumbnail"
import { User } from "./"

type Props = {
  name: string,
  avatarURL: string,
  list: Array<Item>
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#F9EDBE",
    borderColor: "#F5D69B",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
})

export default ({ name, avatarURL, list }: Props) =>
  <Container>
    <Content padder>
      <User name={name} avatarURL={avatarURL} />
      <Title style={styles.title}>
        投稿一覧 （投稿数：{list.length}）
      </Title>
      <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        {list.map(item => <Page key={item.id} {...item} match="" />)}
      </List>
    </Content>
  </Container>
